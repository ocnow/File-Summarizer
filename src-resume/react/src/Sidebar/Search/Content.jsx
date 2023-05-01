import CardResult from "./CardResult";

export default function Content() {


    const searchParams = [
        {
            name: "Business Center",
            options: ["Option1", "Option2", "Option3"]
        },
        {
            name: "Business Center",
            options: ["Option1", "Option2", "Option3"]
        },
        {
            name: "Business Center",
            options: ["Option1", "Option2", "Option3"]
        }
    ]

    return <div className="flex flex-col w-full h-full">
        <div className="border border-gray-900 shadow-md flex flex-col">
            {/* <div className="flex justify-around w-full   p-3">
                {
                    searchParams.map((item, index) => {
                    return  <div className="flexp-3">
                                <label for="countries" className="text-sm  text-gray-900 dark:text-white mr-2">{item.name}</label>
                                <select defaultValue="choose" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block ">
                                    <option key="choose" value="choose">Choose a {item.name}</option>
                                    {item.options.map((it,ind) => {
                                        return <option key={it} value={it}>{it}</option>
                                    })}
                                </select>
                        </div>
                    })
                }
                {/* <div className="flex p-3">
                    <label for="countries" class="text-sm  text-gray-900 dark:text-white mr-2">Business Center</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block ">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div> 

            </div> */}

            <div className="flex p-3 ml-12">
                <h1 className="mr-3 text-base">Context Search</h1>
                <input type="text" placeholder="Context Search ...."  className="border-2 rounded-md w-4/5 px-3"/>
            </div>
        </div>
        <div className="flex flex-col w-full h-full p-5">
            <CardResult />
            <CardResult />
            <CardResult />
            <CardResult />
            <CardResult />
        </div>
    </div>
}