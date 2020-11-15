export class CSVService {
  public parseCSV(dataSource: string): string[][] {
    let parsedContent: string[][] = [];

    let newLinebrk = dataSource.split("\n");
    for (let i = 1; i < newLinebrk.length; i++) {
      parsedContent.push(newLinebrk[i].split(","));
    }
    return this.CSVToArray(dataSource).slice(1);
  }

  private CSVToArray(dataSource: string, delimiter: string = ",") {
    var objPattern = new RegExp(
      // Delimiters.
      "(\\" +
        delimiter +
        "|\\r?\\n|\\r|^)" +
        // Quoted fields.
        '(?:"([^"]*(?:""[^"]*)*)"|' +
        // Standard fields.
        '([^"\\' +
        delimiter +
        "\\r\\n]*))",
      "gi"
    );

    var arrData: string[][] = [[]];
    var arrMatches = objPattern.exec(dataSource);

    while (arrMatches) {
      var strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== delimiter) {
        arrData.push([]);
      }

      var strMatchedValue: string;

      if (arrMatches[2]) {
        strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        strMatchedValue = arrMatches[3];
      }

      arrData[arrData.length - 1].push(strMatchedValue);
      arrMatches = objPattern.exec(dataSource);
    }

    return arrData;
  }
}
