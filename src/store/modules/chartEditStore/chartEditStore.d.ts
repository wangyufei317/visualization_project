import {
    RequestDataTypeEnum,
    RequestHttpEnum,
    RequestContentTypeEnum,
    RequestBodyEnum,
    RequestHttpIntervalEnum,
    RequestParams
} from '@/enums/httpEnum'

// 请求公共类型
type RequestPublicConfigType = {
    // 时间单位（时分秒）
    requestIntervalUnit: RequestHttpIntervalEnum
    // 请求内容
    requestParams: RequestParams
}

// 单个图表请求配置
export interface RequestConfigType extends RequestPublicConfigType {
    // 所选全局数据池的对应 id
    requestDataPondId?: string
    // 组件定制轮询时间
    requestInterval?: number
    // 获取数据的方式
    requestDataType: RequestDataTypeEnum
    // 请求方式
    requestHttpType: RequestHttpEnum
    // 请求的 url
    requestUrl?: string
    // 请求内容主体方式 普通/sql
    requestContentType: RequestContentTypeEnum
    // 请求体类型
    requestParamsBodyType: RequestBodyEnum
    // SQL 请求对象
    requestSQLContent: {
      sql: string
    }
}

// 编辑画布属性
export enum EditCanvasTypeEnum {
    EDIT_LAYOUT_DOM = 'editLayoutDom',
    EDIT_CONTENT_DOM = 'editContentDom',
    OFFSET = 'offset',
    SCALE = 'scale',
    USER_SCALE = 'userScale',
    LOCK_SCALE = 'lockScale',
    IS_CREATE = 'isCreate',
    IS_DRAG = 'isDrag',
    IS_SELECT = 'isSelect',
    IS_CODE_EDIT="isCodeEdit"
}

// 编辑区域
export type EditCanvasType = {
    // 编辑区域 DOM
    [EditCanvasTypeEnum.EDIT_LAYOUT_DOM]: HTMLElement | null
    [EditCanvasTypeEnum.EDIT_CONTENT_DOM]: HTMLElement | null
    // 偏移大小
    [EditCanvasTypeEnum.OFFSET]: number
    // 缩放
    [EditCanvasTypeEnum.SCALE]: number
    // 缩放
    [EditCanvasTypeEnum.USER_SCALE]: number
    // 锁定缩放
    [EditCanvasTypeEnum.LOCK_SCALE]: boolean
    // 初始化创建
    [EditCanvasTypeEnum.IS_CREATE]: boolean
    // 拖拽中
    [EditCanvasTypeEnum.IS_DRAG]: boolean
    // 框选中
    [EditCanvasTypeEnum.IS_SELECT]: boolean
    // 代码编辑中
    [EditCanvasTypeEnum.IS_CODE_EDIT]: boolean
}