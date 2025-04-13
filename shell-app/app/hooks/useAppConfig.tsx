'use client'

import {useEffect, useState} from 'react'
import {AppConfigType, MicrofrontendConfigType} from '@/types'
import {EMPTY_APP_CONFIG} from '@/dashboard/constants'
import {getConfig} from '@/dashboard/actions'

export const useAppConfig = () => {
  const [appConfig, setAppConfig] = useState<AppConfigType>(EMPTY_APP_CONFIG)
  const [headerConfig, setHeaderConfig] = useState<MicrofrontendConfigType[]>(
    []
  )
  const [leftNavConfig, setLeftNavConfig] = useState<MicrofrontendConfigType[]>(
    []
  )
  const [secondaryConfig, setSecondaryConfig] = useState<
    MicrofrontendConfigType[]
  >([])

  useEffect(() => {
    const fetchConfig = async () => {
      const appConfigData: AppConfigType = await getConfig()
      setAppConfig(appConfigData)
      setHeaderConfig(appConfigData.headerConfig)
      setLeftNavConfig(appConfigData.leftNavConfig)
      setSecondaryConfig(appConfigData.secondaryConfig)
    }
    fetchConfig()
  }, [])

  return {
    appConfig,
    setAppConfig,
    headerConfig,
    leftNavConfig,
    secondaryConfig
  }
}

export default useAppConfig
