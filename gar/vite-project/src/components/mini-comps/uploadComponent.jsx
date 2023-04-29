import { useEffect, useRef, useState } from "react"

function FileChooseComp({className}){
  return <div className="h-8"> <label>
  <span className="sr-only">Choose File</span>
  <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        
                        file:bg-sky-600 file:text-white
                        hover:file:bg-sky-700" />
</label></div>
}

export default function UploadComponent({ className }) {
  const fileRadio = useRef(null);

  const [fileInput,setFileInput] = useState(true);
  const handleRadioChange = function(){
    console.log("changed radio...");
    setFileInput(!fileInput);
  }

  useEffect(()=>{
    fileRadio.current.checked = true;
  },[]);
  return <div className={className}>


    <div className="flex justify-evenly mb-10">
      <div className="flex justify-around items-stretch gap-20">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2 text-black">Upload File</span>
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500 border" onChange={handleRadioChange} ref={fileRadio}/>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2 text-black">File Link</span>
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={handleRadioChange}/>
          </label>
        </div>
      </div>
    </div>

        <div className="ml-9 min-h-full">
        {fileInput? <FileChooseComp />: <input type="text" placeholder="https://confluence.com/sample.pdf..." className="w-full h-8  rounded-md px-1.5 border"/>}
        </div>  
</div>

}
