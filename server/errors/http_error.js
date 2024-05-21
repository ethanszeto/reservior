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

export class ErrorNotLoggedIn extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(403).json({ error: "User not logged in." });
  }
}

export class ErrorInvalidToken extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(403).json({ error: "Invalid login token." });
  }
}

export class ErrorAlreadyLoggedIn extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(400).json({ error: "User already logged in." });
  }
}

export class ErrorInvalidLogin extends HttpError {
  static throwHttp(req, res, msg) {
    res.status(400).json({ error: "Login with given credentials failed." });
  }
}
