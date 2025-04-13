'use server'

import {fetcher} from '@/api/fetcher'
import MicrofrontendApp from '@/_components/MicrofrontendApp'
import Header from '@/_components/Header'
import Sidebar from '@/_components/Sidebar'
import {AppConfigType} from '@/types'

export default async function Dashboard() {
  const appConfig: AppConfigType = await fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/api/config`
  )

  const {headerConfig, leftNavConfig, secondaryConfig} = appConfig

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-8">
      <Header config={headerConfig} secondaryConfig={secondaryConfig} />
      <div className="flex flex-1 flex-row justify-start items-start gap-8 w-full">
        <Sidebar config={leftNavConfig} secondaryConfig={secondaryConfig} />
        <MicrofrontendApp appConfig={appConfig} />
      </div>
      <footer className="flex items-center justify-center w-full bg-amber-50 p-5">
        Page Footer
      </footer>
    </div>
  )
}
