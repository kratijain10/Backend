// api ke req, response ko handle krne k liye 
class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode= statusCode
        this.data = data
        this.message= message
        this.success = statusCode < 400
    }
}