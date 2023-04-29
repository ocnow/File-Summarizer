import { useState } from "react";

export default function SummaryComp({className,data,isLoading,fetchStatus}){
  console.log("this is getting redered.....");

 
  const actionButtonClasses = "text-blue-950 bg-white border-2 border-blue-950 p-2 rounded-md w-20 h-10 mb-3";
  const [paraActive,setParaActive] = useState(true);

    const handleTabClick = function(e){
        console.log("tabclicked");
        let selectedTab = e.target.id;
        if(selectedTab === "paraTab"){
            setParaActive(true);
        }else{
            setParaActive(false);
        }
    }

    const copySummary = function(){
        console.log("copying the symmary");
    }

  console.log(`${data} ==> ${isLoading} ==> ${fetchStatus}`)
  console.log(`is it loading - ${isLoading}`);
    return <div className={className + " flex bg-white"}>

        <div className="tabs p-0 mt-0">
                <a id="paraTab" className={"tab tab-lifted " + (paraActive ?  "tab-active bg-gray-200 text-black":"text-gray-700")} onClick={handleTabClick}>ParaGraph</a> 
            <a id="bulletTab" className={"tab tab-lifted " + (!paraActive ? "tab-active bg-gray-200 text-black":"text-gray-700")} onClick={handleTabClick}>Bullets</a> 
        </div>

    <div className="px-8 bg-white"></div>
      <label className="font-bold self-center underline">Text Summary</label>
    <div className={" flex w-full h-full "}>
        {(fetchStatus == 'fetching') && <div className="w-full h-full flex justify-center items-center p-8"><button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-sky-600 hover:bg-sky-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </button> </div>}
        {fetchStatus == 'idle' && data !== null && paraActive && <div className="p-8"><p>{data.para}</p></div>}
        {fetchStatus == 'idle' && data !== null && !paraActive && <div id="list-div" className="p-7">
                <ol className="list-decimal"><li>{data.bullets[0]}</li><li>{data.bullets[0]}</li><li>{data.bullets[0]}</li></ol>
                </div>
        }
        {fetchStatus == 'idle' && data === null && <p className="italic">Please select file & click Summarize</p>}
    
    <div className="flex justify-end gap-2 mr-2">
        <button className={actionButtonClasses}>Copy</button>
        <button className={actionButtonClasses}>Clear</button>
        <button className={actionButtonClasses}>Email</button>
    </div>
</div>
</div>
}
