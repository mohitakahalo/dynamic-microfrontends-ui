export type MicrofrontendConfigType = {
  id: string
  title: string
  path: string
  active: boolean
  baseUrl?: string
  webComponent?: string
}

export type AppConfigType = {
  headerConfig: MicrofrontendConfigType[]
  leftNavConfig: MicrofrontendConfigType[]
  secondaryConfig: MicrofrontendConfigType[]
}
