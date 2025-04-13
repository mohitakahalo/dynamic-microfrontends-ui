import {
  headerConfig,
  leftNavConfig,
  secondaryConfig
} from '@/stores/appConfigStore'
import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'
import {useEffect, useMemo, useState} from 'react'

const useMicrofrontendApp = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const selectedApp = useStore(selectedMicrofrontendApp)
  const headerConfigValue = useStore(headerConfig)
  const leftNavConfigValue = useStore(leftNavConfig)
  const secondaryConfigValue = useStore(secondaryConfig)

  const allConfigs = useMemo(() => {
    return [
      ...headerConfigValue,
      ...leftNavConfigValue,
      ...secondaryConfigValue
    ]
  }, [headerConfigValue, leftNavConfigValue, secondaryConfigValue])

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

  return {isLoaded, allConfigs}
}

export default useMicrofrontendApp
