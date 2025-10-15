import { BACKEND_URL } from "@/lib/constants";

export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,

    auth: {
        register: () => API_ROUTE.root('/auth/register'),
        login: () => API_ROUTE.root('/auth/login'),
    },
};