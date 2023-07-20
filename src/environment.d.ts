declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FORM_ENDPOINT: string;
    }
  }
}

export {};
