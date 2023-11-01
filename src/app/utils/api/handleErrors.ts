import { toast } from "react-hot-toast";

export const transformErrorResponse = (response: any) => {
  if (response?.data?.error?.length === 0) {
    toast.error(response?.data?.message);
  }
  return response;
};
