interface ENV_VITE {
  VITE_AXIOS_URL: string
  VITE_APP_TITLE: string
  VITE_EXPIRE_TIME: number
}

interface ImportMetaEnv extends ENV_VITE {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
