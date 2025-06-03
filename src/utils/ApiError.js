//errors node me trace hote h to unke liye we can handle 
// api error handle krne k liye
class ApiError extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors = [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message= message
        this.success = false;
        this.errors = errors
        if(stack) {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}