export class FileService {
  private reader: FileReader;

  constructor() {
    this.reader = new FileReader();
  }

  public getFileContent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      this.reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
        const fileContent: string = loadEvent.target?.result as string;
        resolve(fileContent);
      };
      try {
        this.reader.readAsBinaryString(file);
      } catch (e) {
        reject(e);
      }
    });
  }
}
