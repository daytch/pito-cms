import React from 'react'
import Sidebar from 'components/SideNavbar'
import Searchbar from 'components/forms/search'
import Table from 'components/table/index'
import { ReactComponent as Hamburger } from 'assets/images/hamburger.svg'

const Tickets = () => {
    const tableHeadTickets = [
        {
            title: "Ticket Number"
        },
        {
            title: "User Name"
        },
        {
            title: "Tittle"
        },
        {
            title: "Status"
        },
        {
            title: "Last Session"
        },
    ];

    const tableBodyTickets = [
        {
            ticketNumber: '#10111456101',
            username: 'Tommy A.S',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            status: 'Open/Closed',
            lastSession: "01/09/2020 (00:18)",
        },
        {
            ticketNumber: '#10111456102',
            username: 'Trumps A.S',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            status: 'Open/Closed',
            lastSession: "01/09/2020 (00:18)",
        },
        {
            ticketNumber: '#10111456103',
            username: 'Dadang A.S',
            tittle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            status: 'Open/Closed',
            lastSession: "01/09/2020 (00:18)",
        },

    ]
    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full">
                    <div className="tickets flex justify-start">
                        <Hamburger className="mr-4" />
                        <Searchbar />
                    </div>
                    <div className="flex pt-10 overflow-x-auto">
                        <Table itemHead={tableHeadTickets} itemBodyTickets={tableBodyTickets} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Tickets;
