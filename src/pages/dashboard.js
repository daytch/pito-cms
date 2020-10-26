import React from 'react'

import Sidebar from 'components/SideNavbar'
import Graph from 'components/Graph'

const Dashboard = () => {
    return (
        <section className="flex flex-col xl:flex-row">
            <Sidebar />
            <Graph />
        </section>
    )
}

export default Dashboard;
