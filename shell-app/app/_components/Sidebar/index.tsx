'use client'

import {MicrofrontendConfigType} from '@/types'
import {renderMicrofrontendApp} from '@/stores/microfrontendStore'
import {useStore} from '@nanostores/react'
import {
  headerConfig,
  leftNavConfig,
  secondaryConfig
} from '@/stores/appConfigStore'

const Sidebar = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  const headerConfigValue = useStore(headerConfig)
  const leftNavConfigValue = useStore(leftNavConfig)
  const secondaryConfigValue = useStore(secondaryConfig)

  return (
    <aside className="sidebar flex ml-8 font-sans">
      <ul className="w-full flex flex-col gap-4 justify-start items-start">
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
            className="p-4 border rounded-lg border-gray-200 cursor-pointer w-full"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
