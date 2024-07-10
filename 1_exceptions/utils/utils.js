/**
 * Send a JSON response to the client.
 * 
 * @param {Response} res
 * @param {number} statusCode
 * @param {any} data
 */
export function sendJSONResponse(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}