'use client'

import {renderMicrofrontendApp} from '@/dashboard/actions'
import {MicrofrontendConfigType} from '@/types'

const Sidebar = ({
  config
}: {
  config: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}) => {
  return (
    <aside className="sidebar h-full">
      <ul className="w-full flex flex-col gap-4 justify-start items-start">
        {config?.map((item: MicrofrontendConfigType) => (
          <li
            key={item?.id}
            onClick={() => renderMicrofrontendApp(item?.id)}
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
