import { PublicConfigType } from '../index.d'
import { getUUID } from '@/utils'
import { chartInitConfig } from '@/settings'
import cloneDeep from 'lodash/cloneDeep'
import { BaseEvent, EventLife } from '@/enums/eventEnum'
import { RequestConfigType } from '@/store/modules/index'
import { RequestDataTypeEnum, RequestHttpEnum, RequestHttpIntervalEnum, RequestContentTypeEnum, RequestBodyEnum } from '@/enums/httpEnum'

// 请求基础属性
export const requestConfig: RequestConfigType = {
    requestDataType: RequestDataTypeEnum.STATIC,
    requestHttpType: RequestHttpEnum.GET,
    requestUrl: '',
    requestInterval: undefined,
    requestIntervalUnit: RequestHttpIntervalEnum.SECOND,
    requestContentType: RequestContentTypeEnum.DEFAULT,
    requestParamsBodyType: RequestBodyEnum.NONE,
    requestSQLContent: {
        sql: 'select * from  where'
    },
    requestParams: {
        Body: {
          'form-data': {},
          'x-www-form-urlencoded': {},
          json: '',
          xml: ''
        },
        Header: {},
        Params: {}
    }
}

// 单实例类
export class PublicConfigClass implements PublicConfigType {
    public id = getUUID()
    public isGroup = false
    // 基本信息
    public attr = { ...chartInitConfig, zIndex: -1 }
    // 基本样式
    public styles = {
        filterShow: false, // 使用滤镜
        hueRotate: 0, // 色相
        saturate: 1, // 饱和度
        contrast: 1, // 对比度
        brightness: 1, // 亮度
        opacity: 1, // 透明
        // 旋转
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        // 倾斜
        skewX: 0,
        skewY: 0,
        blendMode: 'normal', // 混合模式
        animations: [] // 动画
    }
    // 预览
    public preview = {
        overFlowHidden: false
    }
    // 状态
    public status = {
        lock: false,
        hide: false
    }
    // 请求
    public request = cloneDeep(requestConfig)
    // 数据过滤
    public filter = undefined
    // 事件
    public events = {
        baseEvent: {
        [BaseEvent.ON_CLICK]: undefined,
        [BaseEvent.ON_DBL_CLICK]: undefined,
        [BaseEvent.ON_MOUSE_ENTER]: undefined,
        [BaseEvent.ON_MOUSE_LEAVE]: undefined
        },
        advancedEvents: {
        [EventLife.VNODE_MOUNTED]: undefined,
        [EventLife.VNODE_BEFORE_MOUNT]: undefined
        },
        interactEvents: []
    }
}