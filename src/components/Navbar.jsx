import Link from "next/link";
import { MdPostAdd } from "react-icons/md";

 export default function Navbar() {

    return (
    <nav className="fixed top-1 left-[300px] bg-gray-800 text-gray-100 shadow-lg h-16 px-10 flex justify-between items-center text-white w-1/2 rounded-full mx-auto my-3 bg-fixed">
          <Link href={'/'} className="text-4xl font-black color-red-700">POST</Link>
          <Link href={'/addPost'}  className="flex align-baseline font-normal "><MdPostAdd className="size-[25px] "/>write</Link>
    </nav>
    )
 }