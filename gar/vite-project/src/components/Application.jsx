import { useState } from "react";
import AppHeader from "./AppHeader";
import SummaryComp from "./SummaryComp";
import UploadComp from "./UploadComp";
import { fetchData } from "../api/summary-api";
import { useQuery } from "@tanstack/react-query";


export default function Application({client}) {
    
    const [data,setData] = useState(null);
    const {isLoading, error, refetch,fetchStatus} = useQuery(['summary-data'],fetchData,{
            enabled: false,
            onSuccess: (data) => {
                setData(data);
            }
    });

    return <div className="flex flex-col w-screen h-screen bg-blue-100">
        <AppHeader className="flex justify-center items-center h-20 w-full bg-blue-500" />

        <div className="flex items-center justify-center w-full h-full bg-gray-400 gap-3">

            <UploadComp className="flex flex-col w-2/6 h-4/6 bg-gray-100 rounded-xl" summaryQueryfunc = {refetch} />
            
            <SummaryComp className="w-3/6 h-4/6  rounded-xl flex flex-col px-8 py-10 bg-gray-100 " isLoading = {isLoading} data={data} fetchStatus={fetchStatus} queryClient={client}/>
            
        </div>
    </div>
}
