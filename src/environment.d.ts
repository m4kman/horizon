declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FORM_ENDPOINT: string;
    }
  }
}

export {};
