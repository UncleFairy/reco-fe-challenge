export type AppRow = {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
};

export type GetUsersSuccessResponse = {
  appRows: AppRow[];
  totalCount: number;
};

export type GetUsersErrorResponse = {
  code: number;
  message: string;
  details: {
    "@type": string;
    additionalProp1?: Record<string, unknown>;
    additionalProp2?: Record<string, unknown>;
    additionalProp3?: Record<string, unknown>;
  }[];
};