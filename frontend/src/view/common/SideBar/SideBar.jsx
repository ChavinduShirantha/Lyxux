import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faBox,
} from '@fortawesome/free-solid-svg-icons'
export const SideBar = () => {
    return (
        <div className="basis-1/5 bg-white  w-full h-full">
            <ul className="list-none flex flex-wrap w-full mt-5 p-5">
                <li className=" text-[16px] mt-5 text-gray-500 hover:text-white hover:bg-black p-3 pl-10 pr-10 rounded-lg w-full">
                    <Link to="/"><FontAwesomeIcon icon={faDashboard}/> Dashboard</Link>
                </li>
                <li className=" text-[16px] mt-4 text-gray-500] hover:text-white hover:bg-black p-3 pl-10 pr-10 rounded-lg w-full">
                    <Link to="/items"><FontAwesomeIcon icon={faBox}/> Products
                        <span className="float-end text-white hover:text-black">></span></Link>
                </li>
            </ul>
        </div>
    )
}
