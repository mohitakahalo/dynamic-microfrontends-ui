'use client'
import {createElement} from 'react'
import {useStore} from '@nanostores/react'
import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'
import useMicrofrontendApp from '@/hooks/useMicrofrontendApp'

const MicrofrontendApp = () => {
  const selectedApp = useStore(selectedMicrofrontendApp)
  const {isLoaded, allConfigs} = useMicrofrontendApp()

  return (
    <main className="flex-1 flex flex-col gap-4 items-center mr-8 bg-gray-100 rounded-2xl">
      <div className="text-lg italic p-4 font-mono">
        Click on a microfrontend app to render it here
      </div>
      {!isLoaded && selectedApp && <span>Loading...</span>}
      {isLoaded &&
        allConfigs?.map((config) => {
          if (config.id === selectedApp?.id) {
            return (
              <div key={config.id} className="microfrontend-app w-full h-full">
                {config.webComponent ? (
                  createElement(config.webComponent)
                ) : (
                  <span key={config.id}>App not found</span>
                )}
              </div>
            )
          }
        })}
    </main>
  )
}

export default MicrofrontendApp
