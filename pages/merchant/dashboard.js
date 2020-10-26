import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import FullWidth from 'components/view-video/FullWidth'
import thumbnail from 'assets/images/thumbnail-one.jpg'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const videos = [
        {
            id: 1,
            thumbnail: thumbnail,
            live: false,
            views: 260.000,
            shared: 989,
            date: "12",
            title: "Tomy W"
        }
    ]
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 px-5 w-full">
                    <div className="flex">
                        <Link to="/merchant/dashboard/create" className="w-full"><button className="bg-red-600 focus:outline-none text-white font-medium text-sm xl:text-lg w-1/2 md:w-1/4 px-2 py-2 rounded-3xl">Create Livestreams</button></Link>
                    </div>
                    <div className="flex flex-col pt-10 overflow-x-auto">
                        <div className="overflow-hidden">
                            <h6 className="text-red-600 font-bold text-base md:text-lg">Currently Live (if any)</h6>
                            <div className="flex flex-wrap w-full mt-4">
                                <FullWidth dataVideos={videos} title={true} caption={true} category={true} socmedCustom={true} />
                            </div>
                        </div>
                        <div className="overflow-hidden mb-4">
                            <h6 className="text-red-600 font-bold text-base md:text-lg">Next Livestreams</h6>
                            <div className="flex flex-wrap">
                                <div className="flex flex-wrap w-full xl:w-1/2 mt-4">
                                    <FullWidth actionLinks="/merchant/dashboard/edit" dataVideos={videos} title={true} actions={true} caption={false} category={true} socmedCustom={true} />
                                </div>
                                <div className="flex flex-wrap w-full xl:w-1/2 mt-4">
                                    <FullWidth actionLinks="/merchant/dashboard/edit" dataVideos={videos} title={true} actions={true} caption={false} category={true} socmedCustom={true} />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <h6 className="text-red-600 font-bold text-base md:text-lg">Previous Livestreams</h6>
                            <div className="flex flex-wrap">
                                <div className="flex flex-wrap w-full xl:w-1/2 mt-4">
                                    <FullWidth dataVideos={videos} title={true} viewsElement={true} actions={false} caption={false} category={true} socmedCustom={true} />
                                </div>
                                <div className="flex flex-wrap w-full xl:w-1/2 mt-4">
                                    <FullWidth dataVideos={videos} title={true} viewsElement={true} actions={false} caption={false} category={true} socmedCustom={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dashboard;
