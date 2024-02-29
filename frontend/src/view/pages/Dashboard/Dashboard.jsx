import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons";
import money from '../../../images/pic.jpg'

export const Dashboard = () => {
    return (
        <>
            <div className="flex flex-row  w-full gap-32 p-20">
                <div className="basis-1/2  w-full h-auto">
                    <div className="h-36 p-4 bg-white border rounded-lg">
                        <div className="flex">
                            <div className="bg-gray-200 w-24 h-24 justify-center items-center"
                                 style={{borderRadius: '100%'}}>
                                <img className="h-8 mx-auto my-auto  mt-8" src={money}
                                     alt=""/>
                            </div>
                            <div className="flex flex-wrap">
                                <h1 className="text-[20px] text-center  font-bold w-full">$4385</h1>
                                <h1 className="text-[20px] text-center w-full font-bold font-serif">Total Inventory
                                    value</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2  w-full h-auto">
                    <div className="h-36 p-4 bg-white border rounded-lg">
                        <div className="flex">
                            <div className="bg-gray-200 w-24 h-24 justify-center items-center"
                                 style={{borderRadius: '100%'}}>
                                <img className="h-8 mx-auto my-auto  mt-8" src={money}
                                     alt=""/>
                            </div>
                            <div className="flex flex-wrap">
                                <h1 className="text-[20px] text-center  font-bold w-full">$385656.5</h1>
                                <h1 className="text-[20px] text-center w-full font-bold font-serif">Number of Units Available</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
