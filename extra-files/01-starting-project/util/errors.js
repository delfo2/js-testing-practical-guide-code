export class HttpError {
  constructor(statusCode, message, data) {
    if(!statusCode || !message || !data) {
      throw new TypeError('One argument is required to initialize');
    }
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class ValidationError {
  constructor(message) {
    if(!message) {
      throw new TypeError('One argument is required to initialize');
    }
    this.message = message;
  }
}