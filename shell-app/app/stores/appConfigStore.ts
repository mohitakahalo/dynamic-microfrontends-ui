import {atom, computed} from 'nanostores'
import {AppConfigType, MicrofrontendConfigType} from '@/types'
import {EMPTY_APP_CONFIG} from '@/dashboard/constants'
import {getConfig} from '@/dashboard/actions'

export const appConfig = atom<AppConfigType>(EMPTY_APP_CONFIG)
export const headerConfig = atom<MicrofrontendConfigType[]>([])
export const leftNavConfig = atom<MicrofrontendConfigType[]>([])
export const secondaryConfig = atom<MicrofrontendConfigType[]>([])
export const allConfigs = computed(
  [headerConfig, leftNavConfig, secondaryConfig],
  () => {
    return [
      ...headerConfig.get(),
      ...leftNavConfig.get(),
      ...secondaryConfig.get()
    ]
  }
)
export const showUploadConfig = atom<boolean>(false)
export const uploadedConfig = atom<string>('')

export const fetchAppConfig = async () => {
  const lsConfig = window.localStorage.getItem('appConfig')
  let appConfigData: AppConfigType = EMPTY_APP_CONFIG

  // fetch config from server if no config in local storage
  if (!lsConfig) {
    appConfigData = await getConfig()
    window.localStorage.setItem('appConfig', JSON.stringify(appConfigData))
  } else {
    appConfigData = JSON.parse(lsConfig)
  }

  appConfig.set(appConfigData)
  headerConfig.set(appConfigData?.headerConfig ?? [])
  leftNavConfig.set(appConfigData?.leftNavConfig ?? [])
  secondaryConfig.set(appConfigData?.secondaryConfig ?? [])
  uploadedConfig.set(JSON.stringify(appConfigData))
}

export const uploadConfig = async () => {
  if (uploadedConfig.get() === '') {
    alert('uploadedConfig is empty')
    return
  }
  const appConfigData: AppConfigType = JSON.parse(uploadedConfig.get())
  window.localStorage.setItem('appConfig', JSON.stringify(appConfigData))

  appConfig.set(appConfigData)
  headerConfig.set(appConfigData?.headerConfig ?? [])
  leftNavConfig.set(appConfigData?.leftNavConfig ?? [])
  secondaryConfig.set(appConfigData?.secondaryConfig ?? [])
  showUploadConfig.set(false)
}
