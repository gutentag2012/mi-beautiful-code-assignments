export class Result {
    constructor(isSuccess, value) {
        this.isSuccess = isSuccess;
        this.value = value;
    }

    static ok(value) {
        return new Result(true, value);
    }

    static fail(error) {
        return new Result(false, error);
    }

    map(fn) {
        return this.isSuccess ? Result.ok(fn(this.value)) : this;
    }
}