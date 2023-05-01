import UserIcon from "./mini-comps/header/usericon";
import AppLogo from "../images/logo2.png"

export default function AppHeader({className}){
    return <div className={className + " flex justify-between items-center"}>
              <div className="h-12 w-12 m-3"> <img src={AppLogo} className="object-fill"/>  </div>
              <div className="text-white">Application NAme</div>
              <div> <UserIcon className="mr-3" /> </div>
    </div>
}
