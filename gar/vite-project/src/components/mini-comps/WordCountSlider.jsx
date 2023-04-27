import { useEffect, useRef, useState } from "react"

export default function WordCountSlider(props){
    const [counter,updateCounter] = useState(50);
    const rangeSelector = useRef(null);

    const handleRangeChange = function(){
        const count = rangeSelector.current.value;
        updateCounter(count);
    }

    return <div className={props.className}>
                            <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Word Count {counter}</label>
                            <div>
                                <div className="relative flex items-center justify-center gap-2">
                                    <div>100</div>
                                    <input id="default-range" onChange={handleRangeChange} ref={rangeSelector} type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min={100} max={200} defaultValue={150}/>
                                    <div>200</div>
                                </div>
                            </div>
    </div>
}
