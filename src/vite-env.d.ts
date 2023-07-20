/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_FORM_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
