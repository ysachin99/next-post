'use client'
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export default function DeleteBtn({id}) {

    const router = useRouter();

    const removePost = async () => {
        const confirmed = confirm("are you sure ?");

        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: "DELETE",
            });

            if(res.ok) {
                router.refresh();
            }
           
        }

    }

    return <button onClick={removePost}>
        <MdDelete className="mx-3 size-[25px] text-red-500" />
    </button>
}