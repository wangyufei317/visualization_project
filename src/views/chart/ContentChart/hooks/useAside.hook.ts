import { icon } from '@/plugins'
import { renderIcon, renderLang } from '@/utils'
import { ConfigType } from '@/packages/index.d'
import { usePackagesStore } from '@/store/modules/packagesStore/packagesStore'

// 图标
const { AirPlaneOutlineIcon, ImageIcon, BarChartIcon } = icon.ionicons5
const { TableSplitIcon, RoadmapIcon, SpellCheckIcon, GraphicalDataFlowIcon } = icon.carbon
// 图标
export type MenuOptionsType = {
    key: string
    icon: ReturnType<typeof renderIcon>
    label: ReturnType<typeof renderLang>
    list: ConfigType[]
}


export const useAsideHook = () => {
    const packagesStore = usePackagesStore()
    const menuOptions: MenuOptionsType[] = []
}