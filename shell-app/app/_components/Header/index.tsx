'use client'

import {MicrofrontendConfigType} from '@/types'
import {renderMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'
import {allConfigs, showUploadConfig} from '@/stores/appConfigStore'

const Header = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  const allModulesConfig = useStore(allConfigs)

  return (
    <header className="w-full gap-8 p-5 bg-gray-200 font-sans flex flex-row justify-between items-center">
      <ul className="flex flex-row justify-center items-center gap-8">
        {config?.map((item: MicrofrontendConfigType) => (
          <li
            key={item?.id}
            onClick={() => renderMicrofrontendApp(item?.id, allModulesConfig)}
            className="p-2 border rounded-lg border-gray-800 cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          showUploadConfig.set(true)
        }}
        className="bg-white rounded-lg p-2 border border-gray-200 cursor-pointer"
      >
        Upload Config
      </button>
    </header>
  )
}

export default Header
