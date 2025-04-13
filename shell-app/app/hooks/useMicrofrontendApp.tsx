import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'
import {useEffect, useState} from 'react'

const useMicrofrontendApp = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const selectedApp = useStore(selectedMicrofrontendApp)

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

  return {isLoaded}
}

export default useMicrofrontendApp
