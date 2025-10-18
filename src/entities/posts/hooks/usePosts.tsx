import { findAll, findOne } from "@/services/posts.service";
import { useState } from "react";

interface Data {
    title: string;
    description: string;
    content: string;
    isActive: boolean;
    image?: string;
}

export const usePosts = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const findOnePost = async (id: string) => {
        try {
            const response = await findOne(id);
            setData(response.data)
        } catch (error) {
            setError(error.response.data.message)
            console.log(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const findAllPosts = async () => {
        try {
            const response = await findAll();
            setData(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, findAllPosts, findOnePost }
}