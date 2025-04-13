import {atom} from 'nanostores'
import {MicrofrontendConfigType} from '@/types'

export const selectedMicrofrontendApp = atom<MicrofrontendConfigType | null>(
  null
)

export const renderMicrofrontendApp = async (
  selectedId: string,
  headerConfig: MicrofrontendConfigType[],
  leftNavConfig: MicrofrontendConfigType[],
  secondaryConfig: MicrofrontendConfigType[]
) => {
  const selectedApp =
    [...headerConfig, ...leftNavConfig, ...secondaryConfig].find(
      (item: MicrofrontendConfigType) => item.id === selectedId
    ) ?? null
  console.log('selectedApp', selectedApp)
  selectedMicrofrontendApp.set(selectedApp)
}
