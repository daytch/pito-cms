import React from 'react'
import Sidebar from 'components/SideNavbar'
import Searchbar from 'components/forms/search'
import Table from 'components/table/index'

const UserListing = () => {
    const tableHeadUser = [
        {
            title: "ID"
        },
        {
            title: "User Name"
        },
        {
            title: "Email Address"
        },
        {
            title: "Device"
        },
        {
            title: "Last Session"
        },
        {
            title: "Joined Date"
        },
    ];

    const tableBodyUser = [
        {
            id: '10111',
            username: 'Tommy A.S',
            device: 'Android/Ios',
            email: 'example@gmail.com',
            lastSession: "01/09/2020 (00:18)",
            joinedDate: "01/09/2020 (00:18)"
        },
        {
            id: '10112',
            username: 'Gundy A.S',
            device: 'Android/Ios',
            email: 'example@gmail.com',
            lastSession: "01/09/2020 (00:18)",
            joinedDate: "01/09/2020 (00:18)"
        },
        {
            id: '10113',
            username: 'Trump A.S',
            device: 'Android/Ios',
            email: 'example@gmail.com',
            lastSession: "01/09/2020 (00:18)",
            joinedDate: "01/09/2020 (00:18)"
        }
    ]

    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full">
                    <div className="flex justify-between">
                        <Searchbar />
                    </div>
                    <div className="flex pt-10 overflow-x-auto">
                        <Table itemHead={tableHeadUser} itemBodyUser={tableBodyUser} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default UserListing;

