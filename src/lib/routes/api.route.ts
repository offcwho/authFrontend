import { BACKEND_URL } from "@/lib/constants";

export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,

    auth: {
        register: () => API_ROUTE.root('/auth/register'),
        login: () => API_ROUTE.root('/auth/login'),
    },

    posts: {
        findAll: () => API_ROUTE.root(`/posts`),
        findOne: (id: string) => API_ROUTE.root(`/posts/${id}`),
        create: () => API_ROUTE.root(`/posts`),
        update: (id: string) => API_ROUTE.root(`/posts/${id}`),
        delete: (id: string) => API_ROUTE.root(`/posts/${id}`)
    }
};