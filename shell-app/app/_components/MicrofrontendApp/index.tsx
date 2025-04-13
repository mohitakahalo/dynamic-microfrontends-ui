'use client'

import {useStore} from '@nanostores/react'
import {selectedMicrofrontendApp} from '@/stores/microfrontendStore'

const MicrofrontendApp = () => {
  const selectedApp = useStore(selectedMicrofrontendApp)

  return (
    <main className="flex-1 flex flex-col gap-4 items-center">
      <div className="text-2xl font-bold">
        Click on a microfrontend app to render it here
      </div>

      {selectedApp?.title}
    </main>
  )
}

export default MicrofrontendApp
