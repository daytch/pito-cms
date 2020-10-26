import React from 'react'
import Sidebar from 'components/SideNavbar'
import Table from 'components/table/index'

const Categories = () => {
    const tableHeadCategory = [
        {
            title: "No."
        },
        {
            title: "Name"
        },
        {
            title: "Slug"
        },
        {
            title: "Total Livestreams"
        },
        {
            title: "Total Merchants"
        },
        {
            title: "Total Searches"
        },
        {
            title: "Total Views"
        },
        {
            title: "Total Favourites"
        },
        {
            title: "Total Shared"
        },
        {
            title: ""
        },
    ];

    const tableBodyCategory = [
        {
            no: '001',
            name: 'Uncategorized (Default)',
            slug: 'Uncategorized',
            totLivestream: '3000',
            totMerchants: "3000",
            totSearches: "3000",
            totViews: "3000",
            totFavourites: "3000",
            totShared: "3000",
        },
        {
            no: '002',
            name: 'Foods',
            slug: 'Foods',
            totLivestream: '3000',
            totMerchants: "3000",
            totSearches: "3000",
            totViews: "3000",
            totFavourites: "3000",
            totShared: "3000",
        },
        {
            no: '003',
            name: 'Clothing',
            slug: 'Clothing',
            totLivestream: '3000',
            totMerchants: "3000",
            totSearches: "3000",
            totViews: "3000",
            totFavourites: "3000",
            totShared: "3000",
        },


    ]
    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full">
                    <div className="flex justify-end">
                        <button className="bg-red-600 text-white font-medium text-lg px-4 py-2 rounded-3xl">Add New Category</button>
                    </div>
                    <div className="flex pt-10 overflow-x-auto">
                        <Table itemHead={tableHeadCategory} itemBodyCategory={tableBodyCategory} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Categories;