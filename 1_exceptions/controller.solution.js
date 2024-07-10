import { getDBData, addToDB } from './utils/db.js'
import { sendJSONResponse } from './utils/utils.js';
import { NotFoundError, StatusCodes } from './utils/http.js';

/**
 * @param {Request} req 
 * @param {Response} res 
 */
export function handleGetAll(req, res) {
    // Step 1: Get data from the database
    const data = getDBData()

    // Step 2: Send a json response with the data
    sendJSONResponse(res, StatusCodes.OK, data);
}

/**
 * @param {Request} req
 * @param {Response} res
 */
export function handleGetById(req, res) {
    const id = req.url.split('/')[1]

    // Step 1: Get data from the database
    const data = getDBData()

    // Step 2: Get the element with the given id
    const element = data.find(item => item.id === id)

    // Step 3: Throw an error if the element is not found
    if (!element) {
        throw new NotFoundError(`Element with id ${id} not found`)
    }

    // Step 4: Send a json response with the element
    sendJSONResponse(res, StatusCodes.OK, element);
}

/**
 * BONUS CHALLENGE
 * @param {Request} req 
 * @param {Response} res 
 */
export async function handleCreate(req, res) {
    let rawBody = ''
    for await (const chunk of req) {
        rawBody += chunk
    }
    const body = JSON.parse(rawBody)

    // Step 1: Get data from the database
    addToDB(body);

    // Step 2: Get the updated data
    const data = getDBData()

    // Step 3: Send a json response with the updated data
    sendJSONResponse(res, StatusCodes.CREATED, data);
}
