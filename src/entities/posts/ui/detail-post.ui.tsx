'use client'

import { findOne as findOnePost } from "@/services/posts.service";
import { ParamValue } from "next/dist/server/request/params";
import { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import Image from "next/image";

import image from '../../../../public/static/gradient.png'

interface Props {
    params?: ParamValue;
}

export const DetailPost: React.FC<Props> = ({ params }) => {
    const { data, loading, error, findOnePost } = usePosts();

    const id = params as string

    useEffect(() => {
        findOnePost(id)
    }, [id])

    console.log(data)

    if (data) {
        return (
            <div className="flex gap-4 bg-white h-full rounded-[1rem]">
                {data.image ? (
                    <div className="w-[60%]">
                        <Image
                            src={image}
                            alt="image"
                        />
                    </div>
                ) : (
                    <div className="w-[60%] p-5"></div>
                )}
                <div className="p-8 pl-0">
                    <h1 className="text-[48px] mb-2 text-black">{data.title}</h1>
                    <span className="text-[20px] mb-4 text-gray-700">{data.description}</span>
                    <p className="mt-4 text-gray-500">{data.content}</p>
                </div>
            </div>
        )
    }
    if (loading) {
        return <div className="">loading...</div>
    }
    if (error) {
        return <div className="">{error}</div>
    }
}