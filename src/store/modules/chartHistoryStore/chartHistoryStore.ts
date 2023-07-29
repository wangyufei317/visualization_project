import { defineStore } from 'pinia'
import { ChartHistoryStoreType, HistoryItemType } from './chartHistoryStore.d'
import { EditCanvasType } from '@/store/modules/chartEditStore/chartEditStore.d'
import { editHistoryMax } from '@/settings/designSetting'
import { CreateComponentType, CreateComponentGroupType } from '@/packages/index.d'
import { HistoryActionTypeEnum, HistoryTargetTypeEnum, HistoryStackItemEnum } from './chartHistoryStore.d'
import { loadingStart, loadingError, loadingFinish } from '@/utils'

// 操作历史store
export const useChartHistoryStore = defineStore({
    id: 'useChartHistoryStore',
    state: (): ChartHistoryStoreType => ({
        backStack: [],
        forwardStack: []
    }),
    getters: {
        getBackStack(): Array<HistoryItemType> {
            return this.backStack
        },
        getForwardStack(): Array<HistoryItemType> {
            return this.forwardStack
        }
    },
    actions: {
        /**
         * 新增记录并插入栈
         * @param item 记录实例：图表/图表组/画布操作动作
         * @param actionType 动作类型
         * @param targetType 对象类型（默认图表）
         */
        createStackItem(
            item: CreateComponentType[] | CreateComponentGroupType[] | EditCanvasType[],
            actionType: HistoryActionTypeEnum,
            targetType: HistoryTargetTypeEnum = HistoryTargetTypeEnum.CHART
        ) {
            this.pushBackStackItem(
                Object.freeze({
                    [HistoryStackItemEnum.ID]: new Date().getTime().toString(),
                    [HistoryStackItemEnum.HISTORY_DATA]: item,
                    [HistoryStackItemEnum.ACTION_TYPE]: actionType,
                    [HistoryStackItemEnum.TARGET_TYPE]: targetType
                })
            )
        },
        /**
         * 画布初始化
         */
        canvasInit(canvas: EditCanvasType){
            this.createStackItem([canvas], HistoryActionTypeEnum.ADD, HistoryTargetTypeEnum.CANVAS)
        },
        /**
         * 推入后退栈
         * @param item 历史记录
         * @param notClear 是否需要清空前进栈
         */
        pushBackStackItem(item: HistoryItemType | Array<HistoryItemType>, notClear = false): void {
            if (item instanceof Array) {
                this.backStack = [...this.backStack, ...item]
            } else {
                this.backStack.push(item)
            }
            this.backStack.splice(0, this.backStack.length - editHistoryMax)
            // 新动作需要清空前进栈
            if (!notClear) {
                this.clearForwardStack()
            }
        },
        /**
         * 移出后退栈
         */
        popBackStackItem(): HistoryItemType | undefined {
            if (this.backStack.length > 0) {
              return this.backStack.pop()
            }
        },
        /**
         * 清空后退栈，但是会保留初始化
         */
        clearBackStack() {
            const initCanvasHistory = this.backStack[0]
            this.backStack = [initCanvasHistory]
        },
        /**
         * 推入前进栈
         */
        pushForwardStack(item: HistoryItemType | Array<HistoryItemType>): void {
            if (item instanceof Array) {
                this.forwardStack = [...this.forwardStack, ...item]
            } else {
                this.forwardStack.push(item)
            }
        },
        /**
         * 移出前进栈
         */
        popForwardStack(): HistoryItemType | undefined {
            if (this.forwardStack.length > 0) {
              return this.forwardStack.pop()
            }
        },
         /**
         * 清空前进栈
         */
         clearForwardStack(): void{
            this.forwardStack = []
        },
        /**
         * 撤回
         */
        backAction(): HistoryItemType | undefined {
            try {
                loadingStart()
                // 排除画布初始化
                if (this.getBackStack.length > 1) {
                    const targetData = this.popBackStackItem()
                    if (targetData) {
                        // 移除记录到前进堆
                        this.pushForwardStack(targetData)
                    }
                    loadingFinish()
                    return targetData
                }
                loadingFinish()
            } catch (error) {
                loadingError()
            }
        },
        /**
         * 前进
         */
        forwardAction(): HistoryItemType | undefined  {
            try {
                loadingStart()
                if (this.getForwardStack.length) {
                    const targetData = this.popForwardStack()
                    if (targetData) {
                        // 不是新动作，只是恢复操作，notClear=true不会清空前进栈
                        this.pushBackStackItem(targetData, true)
                    }
                    loadingFinish()
                    return targetData
                }
                loadingFinish()
            } catch (error) {
                loadingError()
            }
        }
    }
})