'use client'

import {MicrofrontendConfigType} from '@/types'
import {renderMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'
import {
  headerConfig,
  leftNavConfig,
  secondaryConfig
} from '@/stores/appConfigStore'

const Header = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  const headerConfigValue = useStore(headerConfig)
  const leftNavConfigValue = useStore(leftNavConfig)
  const secondaryConfigValue = useStore(secondaryConfig)

  return (
    <header className="w-full gap-8 p-5 bg-gray-200 font-sans">
      <ul className="flex flex-row justify-center items-center gap-8">
        {config?.map((item: MicrofrontendConfigType) => (
          <li
            key={item?.id}
            onClick={() =>
              renderMicrofrontendApp(
                item?.id,
                headerConfigValue,
                leftNavConfigValue,
                secondaryConfigValue
              )
            }
            className="p-2 border rounded-lg border-gray-800 cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
