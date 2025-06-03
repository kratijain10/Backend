const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


//same thing with try catch 


//const asyncHandler = (func) => {aync () => {}} this line can be written as:
// const asyncHandler = (fn) => async (req, res , next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }