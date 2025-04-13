'use client'

import {renderMicrofrontendApp} from '@/dashboard/actions'
import {MicrofrontendConfigType} from '@/types'

const Header = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  return (
    <header className="w-full flex flex-row justify-center items-center gap-8 bg-amber-50 p-5">
      {config?.map((item: MicrofrontendConfigType) => (
        <div
          key={item?.id}
          onClick={() => renderMicrofrontendApp(item?.id)}
          className="p-2 border rounded-lg border-gray-800 cursor-pointer"
        >
          {item.title}
        </div>
      ))}
    </header>
  )
}

export default Header
