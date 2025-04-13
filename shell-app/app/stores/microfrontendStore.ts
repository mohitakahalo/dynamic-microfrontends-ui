import {atom} from 'nanostores'
import {MicrofrontendConfigType} from '@/types'

export const selectedMicrofrontendApp = atom<MicrofrontendConfigType | null>(
  null
)

export const renderMicrofrontendApp = async (
  selectedId: string,
  allConfigs: MicrofrontendConfigType[]
) => {
  const selectedApp =
    allConfigs.find(
      (item: MicrofrontendConfigType) => item.id === selectedId
    ) ?? null
  console.log('selectedApp', selectedApp)
  selectedMicrofrontendApp.set(selectedApp)
}
