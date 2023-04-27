export default function UploadComponent({className}){
        return <div className={className}>
                            <label>
                                <span className="sr-only">Choose File</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            
                            file:bg-violet-200 file:text-violet-700
                            hover:file:bg-violet-300" />
                            </label>

                        </div>

}
