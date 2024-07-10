import { HTTPError, StatusCodes } from "./utils/http.js";
import { sendJSONResponse } from "./utils/utils.js";

/**
 * @param {Request} req
 * @param {Response} res 
 * @param {Function} fn 
 */
export async function errorHandlingMiddleware(req, res, fn) {
    console.log(`Request to [${req.method}] ${req.url}`);
    await fn(req, res);
    // Step 1: Add Error Handling logic
}