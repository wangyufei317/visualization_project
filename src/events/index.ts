import mitt from 'mitt'
import { onUnmounted, onBeforeMount } from 'vue'

const emitter = mitt()

function getModuleEvt (moduleName: string) {
  class ModuleEvt {
    moduleName: string

    constructor (moduleName: string) {
      this.moduleName = moduleName
    }

    emit (name: string, data?: any) {
      emitter.emit(`${moduleName}.${name}`, data)
    }

    on (name: string, callback: (data?: any) => void) {
      emitter.on(`${moduleName}.${name}`, callback)
    }

    off (name: string, callback: (data?: any) => void) {
      emitter.off(`${moduleName}.${name}`, callback)
    }

    once (name: string, callback: (data?: any) => void) {
      const WrapperCallback = (data?: any) => {
        callback(data)
        this.off(name, WrapperCallback)
      }
      this.on(name, callback)
    }

    useOnMount (name: string, callback: (data?: any) => void) {
      onBeforeMount(() => {
        emitter.on(`${moduleName}.${name}`, callback)
      })
      onUnmounted(() => {
        emitter.off(`${moduleName}.${name}`, callback)
      })
    }
  }
  return new ModuleEvt(moduleName)
}

export const Evt = {
  Base: getModuleEvt('Base')
}

export * from './moduleEventEnums/base'
