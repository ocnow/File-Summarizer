import mainLogo from '../images/upload.jpg'
import uploadLogo from '../images/upload.png'
import searchLogo from '../images/cv-search.png'
import docSearchLogo from '../images/doc-search.webp'
import { useNavigate } from "react-router";

export default function EntryComp(){

    const navigate = useNavigate();
    
    const uploadResume = function(){
        console.log("navigate to upload.....");
        navigate('/uploadResume');
    }

    return <div className="flex justify-center items-center h-screen bg-gray-800 gap-20">
            <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white" onClick={uploadResume}>
    <a className="flex justify-center" href="#">
        <img className="rounded-t-lg h-64 w-62 object-cover" src={uploadLogo} alt="" />
    </a>
    <hr/>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Upload Resumes</h5>
        </a>
        <p className="mb-3 font-normal text-black">Upload your resumes to be stored on cloud and retrieve whenver needed</p>
        
    </div>
</div>

<div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white">
    <a className="flex justify-center" href="#">
        <img className="rounded-t-lg h-64 w-60 object-cover" src={docSearchLogo} alt="" />
    </a>
    <hr/>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Searh Resumes</h5>
        </a>
        <p className="mb-3 font-normal text-black">Search resumes according to job role using our AI infused search technology</p>
        
    </div>
</div>
    </div>
}