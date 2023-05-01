import { BsDownload } from "react-icons/bs";

export default function CardResult(){
    return <div className="w-full h-16 border border-gray-900 mt-3 shadow-md bg-gray-800 flex items-center p-4 transition duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-lg">
        <h1 className="ml-5 text-white">Document Name</h1>

        <button className="ml-auto mr-12 flex bg-sky-500 rounded-md p-3"><BsDownload className="mt-1"/></button>
    </div>
}