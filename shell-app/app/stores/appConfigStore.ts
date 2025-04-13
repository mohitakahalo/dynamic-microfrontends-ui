import {atom} from 'nanostores'
import {AppConfigType, MicrofrontendConfigType} from '@/types'
import {EMPTY_APP_CONFIG} from '@/dashboard/constants'
import {getConfig} from '@/dashboard/actions'

export const appConfig = atom<AppConfigType>(EMPTY_APP_CONFIG)
export const headerConfig = atom<MicrofrontendConfigType[]>([])
export const leftNavConfig = atom<MicrofrontendConfigType[]>([])
export const secondaryConfig = atom<MicrofrontendConfigType[]>([])

export const fetchAppConfig = async () => {
  const appConfigData: AppConfigType = await getConfig()
  appConfig.set(appConfigData)
  headerConfig.set(appConfigData?.headerConfig ?? [])
  leftNavConfig.set(appConfigData?.leftNavConfig ?? [])
  secondaryConfig.set(appConfigData?.secondaryConfig ?? [])
}
