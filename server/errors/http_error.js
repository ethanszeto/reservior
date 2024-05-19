/**
 * Abstract HttpError class.
 */
class HttpError {
  static throwHttp(req, res, msg) {
    throw new Error("Method 'throwHttp(req, res)' not implemented.");
  }
}

export class ErrorUserNotFound extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(404).json({ error: "User not found." });
  }
}

export class ErrorValidation extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(400).json({ error: "Malformed API Model.", message: msg });
  }
}
