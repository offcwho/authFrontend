import z from "zod";

export const postSchema = z.object({
    title: z.string().min(6, 'Минимальная длина пароля 6 символов'),
    description: z.string().min(15, 'Minimal length 15 symbols'),
    content: z.string(),
    isActive: z.boolean().default(false),
})