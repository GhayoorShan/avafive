import { commonTransform, customTransform } from "../handleTransformation";

export interface CustomEndPoints {
  [key: string]: CustomEndPoint;
}

export interface CustomEndPoint {
  url: string;
  method: string;
  transformErrorResponse?: (res: any) => any;
  transformResponse: (res: any) => any;
  type?: any;
  tags?: string[];
}

export const mutations: CustomEndPoints = {
  products: {
    url: "/products",
    transformResponse: (res: any) => commonTransform(res),
    method: "POST",
  },
};

export const queries: CustomEndPoints = {
  products: {
    url: "/products",
    transformResponse: (res) => commonTransform(res),
    method: "GET",
  },
};
