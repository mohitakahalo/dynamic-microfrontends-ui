'use client'

import {createElement} from 'react'
import {useStore} from '@nanostores/react'
import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'
import useMicrofrontendApp from '@/hooks/useMicrofrontendApp'
import {allConfigs, secondaryConfig} from '@/stores/appConfigStore'

const MicrofrontendApp = () => {
  const selectedApp = useStore(selectedMicrofrontendApp)
  const {isLoaded} = useMicrofrontendApp()
  const secondaryModulesConfigs = useStore(secondaryConfig)
  const allModulesConfigs = useStore(allConfigs)

  return (
    <main className="flex-1 flex flex-col gap-4 items-center mr-8 bg-gray-100 rounded-2xl">
      <div className="text-lg p-4 font-mono uppercase">
        Click on a microfrontend app to render
      </div>
      {!isLoaded && selectedApp && <span>Loading microfrontend app...</span>}
      {isLoaded &&
        allModulesConfigs?.map((config) => {
          if (config.id === selectedApp?.id) {
            return (
              <div key={config.id} className="microfrontend-app w-full h-full">
                {config.webComponent ? (
                  createElement(config.webComponent, {
                    configs: JSON.stringify({
                      currentConfig: config,
                      secondaryConfigs: secondaryModulesConfigs
                    })
                  })
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
