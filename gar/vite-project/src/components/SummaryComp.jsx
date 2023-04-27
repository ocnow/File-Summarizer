export default function({className,data,isLoading,fetchStatus}){
  console.log("this is getting redered.....");

  console.log(`${data} ==> ${isLoading} ==> ${fetchStatus}`)
  console.log(`is it loading - ${isLoading}`);
    return <div className={className + " flex "}>
      <label className="font-bold self-center underline">Text Summary</label>
    <div className={" flex justify-center  w-full h-full p-8"}>
        {(fetchStatus == 'fetching') && <div className="flex justify-center items-center"><button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-sky-600 hover:bg-sky-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </button> </div>}
        {fetchStatus == 'idle' && data !== null && <p>{data}</p>}
        {fetchStatus == 'idle' && data === null && <p className="italic">Please select file & click Summarize</p>}
</div>
</div>
}
