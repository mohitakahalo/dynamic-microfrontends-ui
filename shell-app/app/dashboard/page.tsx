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
  fetchAppConfig,
  showUploadConfig,
  uploadedConfig,
  uploadConfig
} from '@/stores/appConfigStore'

export default function Dashboard() {
  const headerConfigValue = useStore(headerConfig)
  const leftNavConfigValue = useStore(leftNavConfig)
  const secondaryConfigValue = useStore(secondaryConfig)
  const showUploadConfigValue = useStore(showUploadConfig)
  const uploadedConfigValue = useStore(uploadedConfig)

  useEffect(() => {
    fetchAppConfig()
  }, [])

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-8 relative">
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
      {showUploadConfigValue && (
        <div className="flex flex-col items-center justify-center gap-y-8 w-full h-full p-8 border rounded-lg absolute top-0 left-0 bg-black/50">
          <textarea
            className="w-full h-9/12 bg-white rounded-lg p-2 border border-gray-200"
            value={uploadedConfigValue}
            onChange={(e) => uploadedConfig.set(e.target.value)}
            placeholder="Paste your config here"
          />
          <div className="flex flex-row justify-center items-center gap-x-4">
            <button
              onClick={uploadConfig}
              className="bg-white rounded-lg p-2 border border-gray-200 cursor-pointer"
            >
              Upload
            </button>
            <button
              onClick={() => showUploadConfig.set(false)}
              className="bg-white rounded-lg p-2 border border-gray-200 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
