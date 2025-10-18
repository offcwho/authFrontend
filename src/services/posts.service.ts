import api from "@/api/config.api"
import { postSchema } from "@/entities/posts/schemas/post.schema";
import { API_ROUTE } from "@/lib/routes/api.route"
import z from "zod";

export const findAll = () => {
    return api.get(API_ROUTE.posts.findAll());
}

export const findOne = (id: string) => {
    return api.get(API_ROUTE.posts.findOne(id));
}

export const create = async (data: z.infer<typeof postSchema>) => {
    return api.post(API_ROUTE.posts.create(), data);
}

export const update = async (id: string, data: z.infer<typeof postSchema>) => {
    return api.post(API_ROUTE.posts.update(id), data);
}

export const remove = (id: string) => {
    return api.delete(API_ROUTE.posts.delete(id));
}