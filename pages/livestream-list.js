import React from 'react'
import Sidebar from 'components/SideNavbar'
import Searchbar from 'components/forms/search'
import Dropdown from 'components/forms/dropdown'
import FullWidth from 'components/view-video/FullWidth'
import thumbnail from 'assets/images/thumbnail-one.jpg'

const itemsDate = [
    {
        id: 1,
        value: 'Views'
    },
    {
        id: 2,
        value: 'Favourites'
    }, {
        id: 3,
        value: 'Shares'
    }
]
const items = [
    {
        id: 1,
        value: 'Ongoing'
    },
    {
        id: 2,
        value: 'Upcoming'
    }, {
        id: 3,
        value: 'Previous'
    }
]

const videos = [
    {
        id: 1,
        thumbnail: thumbnail,
        live: true,
        views: 260.000,
        shared: 989,
        status: "Live Now",
        title: "Tomy W"
    },
    {
        id: 2,
        thumbnail: thumbnail,
        live: false,
        views: 260.000,
        shared: 989,
        date: "12",
        title: "Tomy W"
    },
]


const LivestreamList = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full">
                    <div className="flex flex-col md:flex-row md:justify-between items-center">
                        <Searchbar />
                        <div className="flex w-full md:w-auto md:flex-row mt-4 md:mt-0 items-center">
                            <h2 className="font-semibold text-sm md:text-lg text-gray-700">Filter</h2>
                            <div className="flex ml-5 w-1/3">
                                <Dropdown title="Select..." items={items} />
                            </div>
                            <div className="flex ml-5 w-1/3">
                                <Dropdown title="Date..." items={itemsDate} />
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <FullWidth dataVideos={videos} socmedVertical={true} liveRecord={true} name={true} subtitle={true} caption={true} category={true}
                            buttons={true} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LivestreamList;