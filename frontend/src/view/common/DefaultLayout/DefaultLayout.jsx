import {SideBar} from "../SideBar/SideBar";
import {MainContent} from "../MainContent/MainContent";

const DefaultLayout = () => {
    return (
        <div className="flex flex-wrap">
            <SideBar/>
            <MainContent/>
        </div>
    )
}

export default DefaultLayout;
