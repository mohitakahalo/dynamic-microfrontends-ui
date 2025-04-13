import {useCallback, useEffect, useState} from 'react'
import {allConfigs} from '@/stores/appConfigStore'
import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'

const useMicrofrontendApp = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const selectedApp = useStore(selectedMicrofrontendApp)
  const allModulesConfig = useStore(allConfigs)

  useEffect(() => {
    const url = selectedApp?.baseUrl ?? ''
    if (!document.querySelector(`script[src="${url}"]`)) {
      const script = document.createElement('script')
      script.src = url
      script.type = 'module'
      script.onload = () => setIsLoaded(true)
      document.body.appendChild(script)
    } else {
      setIsLoaded(true)
    }
  }, [selectedApp?.baseUrl])

  const handleOpenNestedApp = useCallback(
    (event: CustomEvent) => {
      const idToRender = event.detail.id
      const configToRender = allModulesConfig.find(
        (config) => config.id === idToRender
      )
      if (configToRender) {
        selectedMicrofrontendApp.set(configToRender)
      }
    },
    [allModulesConfig]
  )

  useEffect(() => {
    document.addEventListener(
      'openNestedApp',
      handleOpenNestedApp as EventListener
    )

    return () => {
      document.removeEventListener(
        'openNestedApp',
        handleOpenNestedApp as EventListener
      )
    }
  }, [handleOpenNestedApp])

  return {isLoaded}
}

export default useMicrofrontendApp
