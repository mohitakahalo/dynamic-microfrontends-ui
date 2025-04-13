'use client'

import MicrofrontendApp from '@/_components/MicrofrontendApp'
import Header from '@/_components/Header'
import Sidebar from '@/_components/Sidebar'
import useAppConfig from '@/hooks/useAppConfig'

export default function Dashboard() {
  const {appConfig, headerConfig, leftNavConfig, secondaryConfig} =
    useAppConfig()
  console.log('appConfig', appConfig)

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-8">
      <Header config={headerConfig} secondaryConfig={secondaryConfig} />
      <div className="flex flex-1 flex-row justify-start items-start gap-8 w-full">
        <Sidebar config={leftNavConfig} secondaryConfig={secondaryConfig} />
        <MicrofrontendApp />
      </div>
      <footer className="flex items-center justify-center w-full bg-amber-50 p-5">
        Page Footer
      </footer>
    </div>
  )
}
