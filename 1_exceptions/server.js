import {createServer} from "node:http"
import { handleGetAll, handleGetById, handleCreate } from './controller.js'
import { errorHandlingMiddleware } from './middleware.js'
import { NotFoundError } from "./utils/http.js"

const server = createServer(async (request, response) => {
    await errorHandlingMiddleware(request, response, async () => {
        if(request.method === "GET" && request.url === "/") return handleGetAll(request, response) 
        
        if(request.method === "GET" && request.url.match(/^\/[^\/]+$/)) return handleGetById(request, response)
        
        if (request.method === "POST" && request.url === "/") return await handleCreate(request, response)
        
        throw new NotFoundError("Route not found")
    })
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})