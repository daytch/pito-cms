import React, { useEffect } from 'react'
import Sidebar from 'components/SideNavbar'

const Analytic = () => {
    useEffect(() => {
        document.getElementById("embeded-dashboard").src = "https://embed.agency.octoboard.com/embed?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjlUaGV6a3FyRHVpUUc3MlRXLWNrZ2h6OTNvdzBrbzcwN253NzVpajA5Z2RAb2N0b2JvYXJkLmNvbSIsInBhc3N3b3JkIjoiZjE3MzFlNmU4NDZmNzkxY2RmNGI5ODc0ZmQ0ZmM0ZjVkNDExNmRmZTQ3MDFiNjY2ZWJiMDMxZTYxZjE1YzQ3YyIsImlhdCI6MTYwMzE5ODkzNX0.MMWoExfZQitSdV4bd88oa0Z2jNakX87JCQwmABLwv8Q"
    })
    return (
        <>
            <section className="flex flex-col xl:flex-row ">
                <Sidebar />
                <div className="py-20 px-5 w-full flex">
                    <iframe title="Dashboard Analytic" id="embeded-dashboard" allowtransparency="true" scrolling="no" frameBorder="0" style={{ border: "none", overflow: "hidden", minHeight: "600px", width: "100%" }}></iframe>
                </div>
            </section>
        </>
    )
}


export default Analytic;