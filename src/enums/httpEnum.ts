// 数据相关
export enum RequestDataTypeEnum {
    // 静态数据
    STATIC = 0,
    // 请求数据
    AJAX = 1,
    // 数据池
    Pond = 2
}

export enum ResultEnum {
    DATA_SUCCESS = 0,
    SUCCESS = 200,
    SERVER_ERROR = 500,
    SERVER_FORBIDDEN = 403,
    NOT_FOUND = 404,
    TIMEOUT = 60000
}

export enum RequestHttpEnum {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete'
}

export enum RequestHttpIntervalEnum {
    SECOND = 'second',
    MINUTE = 'minute',
    HOUR = 'hour',
    DAY = 'day'
}

export enum RequestBodyEnum {
    NONE = 'none',
    FORM_DATA = 'form-data',
    X_WWW_FORM_URLENCODED = 'x-www-form-urlencoded',
    JSON = 'json',
    XML = 'xml'
}

export enum RequestContentTypeEnum {
    // 普通请求
    DEFAULT = 0,
    // SQL请求
    SQL = 1,
    // webSocket
    WEBSOCKET = 2
}