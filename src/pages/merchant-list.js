import React from 'react'
import Sidebar from 'components/SideNavbar'
import Searchbar from 'components/forms/search'
import Table from 'components/table/index'

const tableHeadMerchant = [
    {
        title: "ID"
    },
    {
        title: "Merchant Name"
    },
    {
        title: "Email Address"
    },
    {
        title: "Total Livestream"
    },
    {
        title: "Total Upcoming Livestream"
    },
    {
        title: "Total Favourites"
    },
    {
        title: "Total Share"
    },
    {
        title: "Total Views"
    },
    {
        title: "Last Session"
    },
    {
        title: "Joined Date"
    },
];

const tableBodyMerchant = [
    {
        id: '10111',
        merchantName: 'Tommy A.S',
        email: 'example@gmail.com',
        totalLivestream: '3.365',
        totalUpcomingLivestream: 3,
        totalFavourites: 222.323,
        totalShare: 222.322,
        totalViews: 222.235,
        lastSession: "01/09/2020 (00:18)",
        joinedDate: "01/09/2020 (00:18)"
    },
    {
        id: '10112',
        merchantName: 'Gundy A.S',
        email: 'example@gmail.com',
        totalLivestream: '3.365',
        totalUpcomingLivestream: 3,
        totalFavourites: 222.323,
        totalShare: 222.322,
        totalViews: 222.235,
        lastSession: "01/09/2020 (00:18)",
        joinedDate: "01/09/2020 (00:18)"
    },
    {
        id: '10113',
        merchantName: 'Trump A.S',
        email: 'example@gmail.com',
        totalLivestream: '3.365',
        totalUpcomingLivestream: 3,
        totalFavourites: 222.323,
        totalShare: 222.322,
        totalViews: 222.235,
        lastSession: "01/09/2020 (00:18)",
        joinedDate: "01/09/2020 (00:18)"
    }
]

const MerchantListing = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full">
                    <div className="flex justify-between">
                        <Searchbar />
                    </div>
                    <div className="flex pt-10 overflow-x-auto">
                        <Table itemHead={tableHeadMerchant} itemBody={tableBodyMerchant} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default MerchantListing;