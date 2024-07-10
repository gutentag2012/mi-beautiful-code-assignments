import { HTTPError, StatusCodes } from "./utils/http.js";
import { sendJSONResponse } from "./utils/utils.js";

/**
 * @param {Request} req
 * @param {Response} res 
 * @param {Function} fn 
 */
export async function errorHandlingMiddleware(req, res, fn) {
    console.log(`Request to [${req.method}] ${req.url}`);
    try {
        await fn(req, res);
    } catch (error) {
        const statusCode = error instanceof HTTPError ? error.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
        sendJSONResponse(res, statusCode, { 
            code: statusCode,
            message: error.message 
        });
    }
}