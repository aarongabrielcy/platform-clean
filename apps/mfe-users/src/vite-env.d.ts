/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_LOCAL_DATA: string;
  readonly VITE_USERS_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}