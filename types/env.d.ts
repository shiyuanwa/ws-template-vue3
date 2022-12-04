interface ENV_VITE {
  VITE_AXIOS_URL: string
  VITE_TITLE: string
}

interface ImportMetaEnv extends ENV_VITE {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
