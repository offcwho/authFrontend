'use client'

import { Container } from "@/components/ui/container";
import { DetailPost } from "@/entities/posts/ui/detail-post.ui";
import { useParams } from "next/navigation";
import { RdyModalUi } from "rdy-comp";
export default function PostsDetails() {

    const params = useParams();
    const { id } = params

    return (
        <>
            <Container className="h-screen py-50">
                <DetailPost params={id} />
            </Container>
        </>
    )
}