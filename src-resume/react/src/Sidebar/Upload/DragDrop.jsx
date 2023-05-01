import { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  return (
    <>
        <div id="dropzone"
            className="h-2/4 w-3/4 flex flex-col justify-center items-center border-2 border-dashed border-gray-800"
            onDragOver={handleDragOver}
            onDrop={handleDrop} 
        >
          
          <div className="flex justify-center items-center">
            <h1 className="mr-2 text-gray-400">Drag and Drop Files to Upload </h1>
            <h1 className="mr-2">Or</h1>  
            <input 
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept="image/png, image/jpeg"
                ref={inputRef}
            />
            <button className="text-gray-400" onClick={() => inputRef.current.click()}>Select Files</button>
          </div>
          {files && <div>{Array.from(files).map((file, idx) => <li key={idx} className="list-none">File Selected : {file.name}</li> )}</div>}
        </div>

        <button className="w-3/4 p-3 mt-10 bg-sky-500 rounded-md border">Submit</button>
    </>

  );
};

export default DragDropFiles;
