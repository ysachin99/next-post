
import Link from "next/link"

import { FaEdit } from "react-icons/fa";
import DeleteBtn from "./DeleteBtn";

const getPosts = async () => {
    try{
      const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-store"
      });

      if(!res.ok) {
        throw new Error("failed to fetch post");
      }

     return res.json();

    } catch (err) {
   console.log('Error loading posts: ', err);
    }
}


export default async function PostList() {
    const { posts } = await getPosts();

    return <div className="mt-[100px]">
        {
            posts.map((p) => (
        <div className="flex gap-8  mt-[20px] shadow-lg px-5 py-3 bg-gray-100 rounded" key={p._id}>
            <div className="w-1/3"><img src={p.imageUrl}  alt="" className="rounded-2xl object-cover"/></div>
            <div className="flex flex-col gap-4 w-2/3">
                <span className="text-4xl font-semibold">{p.title}</span>
                <sup className="text-gray-400 ">{new Date(p.createdAt).toDateString()}</sup>
                <p className="italic text-sm text-ellipsis overflow-hidden">{p.description}</p>
            </div>
            <div className="flex justify-center items-center">
                <DeleteBtn className="bg-red-400" id={p._id}/>
                <Link href={`/editPost/${p._id}`}><FaEdit className="mx-3 size-[25px]" /></Link>

            </div>
        </div>
         ))
        }
    </div>
}