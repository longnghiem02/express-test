
export type HTTPResponse = {
  status: number
  message: any
  data?: any
}

export function responseMessage (message: any) {
  return {
    status: 200,
    message: message,
  }
}

export function responseData (message: any, data: any) {
  return {
    status: 200,
    message: message,
    data: data
  }
}

export function responseError (errMessage: any) {
  return {
    status: 500,
    message: errMessage
  }
}

export function responseNotFound (errMessage: any) {
  return {
    status: 404,
    message: errMessage,
  }
}