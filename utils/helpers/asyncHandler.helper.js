// Async handler to avoid try-catch blocks in controllers
export const asyncHandler = (fn) => {
   return (req, res, next) => {
      fn(req, res, next).catch(next)
   }
}
