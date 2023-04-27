import { useEffect, useRef, useState } from "react"

function FileChooseComp({className}){
  return <label>
  <span className="sr-only">Choose File</span>
  <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        
                        file:bg-violet-200 file:text-violet-700
                        hover:file:bg-violet-300" />
</label>
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
            <span className="label-text">Upload File</span>
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" onChange={handleRadioChange} ref={fileRadio}/>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">File Link</span>
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onChange={handleRadioChange}/>
          </label>
        </div>
      </div>
    </div>

        <div>
        {fileInput? <FileChooseComp className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        
                        file:bg-violet-200 file:text-violet-700
                        hover:file:bg-violet-300 ml-9" />: <input type="text" placeholder="https://confluence.com/sample.pdf..." className="w-full rounded-md px-1.5 border"/>}
        </div>  
</div>

}
