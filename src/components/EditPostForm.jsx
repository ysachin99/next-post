 'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

 export default function EditPostForm({id, title, description, imageUrl}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newImageUrl, setNewImageUrl] = useState(imageUrl);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({newTitle,newDescription, newImageUrl}),
            })

            if(!res.ok) {
                throw new Error('failed to update post');
            }

            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex my-[50px] flex-col">
            <input type="text" placeholder="Edit Topic " value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
            <textarea placeholder="Edit Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
            <input type="text" placeholder="add image URL" value={newImageUrl} onChange={e => setNewImageUrl(e.target.value)} />
            <input type="submit" className="bg-blue-400 text-white"/>
        </form>
    )
 }