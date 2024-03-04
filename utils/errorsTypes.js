export class ResourceNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ResourceNotFoundError';
    }
}

export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError';
    }
}