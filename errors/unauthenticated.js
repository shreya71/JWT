const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIED
    }
}

module.exports = UnauthenticatedError