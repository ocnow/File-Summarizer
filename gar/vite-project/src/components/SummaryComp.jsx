import { useState } from "react";

export default function SummaryComp({className,data,setData,isLoading,fetchStatus}){
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

    const clearSummary = function(){
      setData(null);
    }

    const copySummary = function() {
      const selection = window.getSelection();
      const range = document.createRange();
      const list = document.getElementById('bullet-list');
    
      range.selectNodeContents(list);
      selection.removeAllRanges();
      selection.addRange(range);
    
      try {
        document.execCommand('copy');
        console.log('List copied to clipboard!');
      } catch (err) {
        console.log('Failed to copy list to clipboard!');
      }
    
      selection.removeAllRanges();
    }

    const emailSummary = function(){
        console.log("emailing the summary");
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
        {fetchStatus == 'idle' && data !== null && !paraActive && <div id="list-div" className="flex justify-center items-start p-7">
                <ol id="bullet-list" className="list-decimal">
                    {data.bullets.map((item,index)=>{
                      return <li className="mb-2">{item}</li>
                    })}
                 </ol> 
            </div>
        }
        {fetchStatus == 'idle' && data === null && <div className="w-full h-full flex justify-center items-center"><p className="italic">Please select file & click Summarize</p></div>}
</div>
    <div className="flex justify-end gap-2 mr-2">
        <button className={actionButtonClasses} onClick={copySummary}>Copy</button>
        <button className={actionButtonClasses} onClick={clearSummary}>Clear</button>
        <button className={actionButtonClasses} onClick={emailSummary}>Email</button>
</div>
</div>
}
