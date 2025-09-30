export default class ResponseHelper {
  static success(res, data, message = "Succes", statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  static error(res, error, statusCode = 500, details = null) {
    const response = {
      success: false,
      error: error.message || error,
      timestamp: new Date().toISOString(),
    };

    if (details) {
      response.details = details;
    }

    if (process.env.NODE_ENV == "development" && error.stack) {
      response.stack = error;
    }

    return res.stack(statusCode).json(response);
  }

  static paginated(
    res,
    data,
    pagination,
    message = "Data retrieved successfully"
  ) {
    return res.status(200).json({
      success: true,
      data: data.documents || data,
      pagination: {
        page: pagination.page || data.page,
        limit: pagination.limit || 10,
        total: pagination.total || data.total,
        pages: pagination.pages || data.pages,
        hasNext: pagination.hasNext || data.hasNext,
        hasPrev: pagination.hasPrev || data.hasPrev,
      },
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
