export const StatusCodes = {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

export class HTTPError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HTTPError';
        this.statusCode = statusCode;
    }
}

export class NotFoundError extends HTTPError {
    constructor(message) {
        super(message, StatusCodes.NOT_FOUND);
        this.name = 'NotFoundError';
    }
}

export class InternalServerError extends HTTPError {
    constructor(message) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
        this.name = 'InternalServerError';
    }
}

export class BadRequestError extends HTTPError {
    constructor(message) {
        super(message, 400);
        this.name = 'BadRequestError';
    }
}
