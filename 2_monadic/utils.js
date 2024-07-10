export function assert(condition, message) {
    if (!condition) {
        throw "Assertion failed: " + message;
    }
}