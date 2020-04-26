export class GeneralError<T> extends Error {
  public data: T;

  constructor(data: T) {
    super();
    this.data = data;
  }
}
