const errors = require("./errorsError");

class Error {
  badRequest(msg) {
    var error = errors.BadRequest;
    if (msg) {
      error.message = msg;
    }
    return error;
  }

  notFound(msg) {
    var error = errors.NotFound;
    if (msg) {
      error.message = msg;
    }
    return error;
  }

  unauthorized(msg) {
    var error = errors.Unauthorized;
    if (msg) {
      error.message = msg;
    }
    return error;
  }

  internal(msg) {
    var error = errors.Internal;
    if (msg) {
      error.message = msg;
    }
    return error;
  }
}

module.exports = new Error();
