import React from 'react'
import {AppConfigType} from '@/types'

const MicrofrontendApp = ({appConfig}: {appConfig: AppConfigType}) => {
  return (
    <main className="flex-1 flex flex-col gap-4 items-center">
      <div className="text-2xl font-bold">
        Click on a microfrontend app to render it here
      </div>

      {JSON.stringify(appConfig)}

      {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm h-10 px-4"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
        >
          Deploy now
        </a>
      </div> */}
    </main>
  )
}

export default MicrofrontendApp
