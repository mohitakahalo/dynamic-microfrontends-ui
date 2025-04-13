'use client'

import {useEffect} from 'react'
import MicrofrontendApp from '@/_components/MicrofrontendApp'
import Header from '@/_components/Header'
import Sidebar from '@/_components/Sidebar'
import {useStore} from '@nanostores/react'
import {
  headerConfig,
  leftNavConfig,
  secondaryConfig,
  fetchAppConfig
} from '@/stores/appConfigStore'

export default function Dashboard() {
  const headerConfigValue = useStore(headerConfig)
  const leftNavConfigValue = useStore(leftNavConfig)
  const secondaryConfigValue = useStore(secondaryConfig)

  useEffect(() => {
    fetchAppConfig()
  }, [])

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-8">
      <Header
        config={headerConfigValue}
        secondaryConfig={secondaryConfigValue}
      />
      <div className="flex flex-1 justify-start items-stretch gap-8 w-full h-full">
        <Sidebar
          config={leftNavConfigValue}
          secondaryConfig={secondaryConfigValue}
        />
        <MicrofrontendApp />
      </div>
      <footer className="flex items-center justify-center w-full bg-gray-100 p-5">
        Page Footer
      </footer>
    </div>
  )
}
