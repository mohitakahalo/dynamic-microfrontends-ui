'use client'

import {MicrofrontendConfigType} from '@/types'
import {renderMicrofrontendApp} from '@/stores/microfrontendStore'
import useAppConfig from '@/hooks/useAppConfig'

const Header = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  const {headerConfig, leftNavConfig, secondaryConfig} = useAppConfig()

  return (
    <header className="w-full gap-8 p-5">
      <ul className="flex flex-row justify-center items-center gap-8">
        {config?.map((item: MicrofrontendConfigType) => (
          <li
            key={item?.id}
            onClick={() =>
              renderMicrofrontendApp(
                item?.id,
                headerConfig,
                leftNavConfig,
                secondaryConfig
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
