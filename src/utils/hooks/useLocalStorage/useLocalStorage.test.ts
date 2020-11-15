import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage hook", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the initial value if the token was not found in localStorage", () => {
    const [value] = renderHook(() =>
      useLocalStorage("token", "token")
    ).result.current;
    expect(value).toBe("token");
  });

  it("returns the localStorage value", () => {
    jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockImplementation(() => {
        return JSON.stringify("localStorageToken");
      });
    const [value] = renderHook(() =>
      useLocalStorage("token", "token")
    ).result.current;
    expect(value).toBe("localStorageToken");
  });

  it("logs and error and retuns the initial value if it cannot parse the json", () => {
    jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockImplementation(() => {
        return "localStorageToken";
      });
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();
    const [value] = renderHook(() =>
      useLocalStorage("token", "token")
    ).result.current;
    expect(value).toBe("token");
    expect(consoleErrorMock).toHaveBeenCalledWith(
      new SyntaxError("Unexpected token l in JSON at position 0")
    );
  });

  it("saves the value to the localStorage", () => {
    const setItemMock = jest
      .spyOn(window.localStorage.__proto__, "setItem")
      .mockImplementation();
    const [, setValue] = renderHook(() =>
      useLocalStorage("token", "token")
    ).result.current;
    act(() => {
      setValue("newToken");
    });
    expect(setItemMock).toHaveBeenCalledWith(
      "token",
      JSON.stringify("newToken")
    );
  });

  it("logs an error if can't save to localStorage", () => {
    jest
      .spyOn(window.localStorage.__proto__, "setItem")
      .mockImplementation(() => {
        throw new Error("error");
      });
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();
    const [, setValue] = renderHook(() =>
      useLocalStorage("token", "token")
    ).result.current;
    act(() => {
      setValue("newToken");
    });
    expect(consoleErrorMock).toHaveBeenCalledWith(new Error("error"));
  });
});
