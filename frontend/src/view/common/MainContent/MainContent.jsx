import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../../pages/Dashboard/Dashboard";
import {ManageItems} from "../../pages/ManageItems/ManageItems";

export const MainContent = () => {
    return (
        <div className="basis-4/5 bg-gray-100 w-full h-full mt-14">
            <Routes>
                <Route path="/" Component={Dashboard}></Route>
                <Route path="/items" Component={ManageItems}></Route>
            </Routes>
        </div>
    )
}
