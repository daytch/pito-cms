import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import Create from 'components/forms/create'

const EditDashboard = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 px-5 w-full">
                    <h6 className="text-red-600 font-bold text-lg">Edit Livestreams</h6>
                    <div className="mt-4">
                        <Create />
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditDashboard;
