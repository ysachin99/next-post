"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl]= useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if(!title || !description || !imageUrl) {
    alert('required image title and description');
    return;
  }
  try {
     const res = await fetch('http://localhost:3000/api/posts', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, description, imageUrl})
      });

      if(res.ok) {
        router.push("/");
      } else {
        throw new Error('failed to fetch posts');
      }

  } catch (err) {
    console.log(err);
  }
  }


    return <div className="w-[90vw] m-auto my-[100px]">
        <form onSubmit={handleSubmit} className="flex my-[50px] flex-col">
            <input 
              type="text" 
              placeholder="Add Topic" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
            />
            <textarea placeholder="Add Description" value={description} onChange={e => setDescription(e.target.value)}  />
            <input type="text" placeholder="add Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <input type='submit' className="bg-blue-400 text-white" />
        </form>
    </div>
}