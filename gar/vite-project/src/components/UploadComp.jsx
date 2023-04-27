import { useRef, useState } from "react"
import WordCountSlider from "./mini-comps/WordCountSlider";
import UploadComponent from "./mini-comps/uploadComponent"

export default function appComponent({className,summaryQueryfunc}){
    const [isUploadActive,setIsUploadActive] = useState(true);

    const changeSections = event => {
        //console.log("changins section");
        //console.log(event.target.id);
        const id = event.target.id;
        if(id.includes("a-option-2")){
            setIsUploadActive(false);
        }else{
            setIsUploadActive(true);
        }
    }

    return <div className={className}>
                <div className="flex-none min-w-full h-fit px-4 sm:px-6">
                    <ul className="flex justify-around border-b space-x-6  whitespace-nowrap">
                        <li>
                            <h2><a id="a-option-1"
                                className={"flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 " + (isUploadActive? "border-current":"border-transperent")}
                                onClick={changeSections}>Upload & Summarize</a></h2>
                        </li>
                        <li>
                            <h2><a id="a-option-2"
                                className={"flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-sky-500 "+ (isUploadActive? "border-transperent":"border-current")}
                                onClick={changeSections}>Custom Options</a></h2>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div id="d-option-1" className={"w-full h-2/3 " + (isUploadActive? "flex flex-col justify-center items-center ":"hidden")}>
                        <UploadComponent className={"w-4/6"} />
                        <WordCountSlider className="w-4/6 mt-9"/>
                    </div>
                    <div id="d-option-2" className={"w-full h-2/3 " + (isUploadActive? "hidden":"flex flex-col justify-center items-center")}>
                        <input type="text" placeholder="Enter Keywords to summarize on..." className="w-4/6 border-2 rounded-md p-3"/>
                    </div>
                    <div className="">
                            <button className="bg-sky-600 rounded-xl w-40 h-10 mt-9 hover:bg-sky-800 text-white" onClick={summaryQueryfunc}>Summarize</button>
                        </div>
                </div>
            </div>
}
