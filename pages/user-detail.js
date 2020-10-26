import React from 'react'
import Sidebar from 'components/SideNavbar'

import userAvatarDummy from 'assets/images/user-avatar.jpg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon-blue.svg'
import { ReactComponent as EmailIcon } from 'assets/images/email-icon.svg'
import { ReactComponent as GoogleIcon } from 'assets/images/google-icon-colorful.svg'
import { ReactComponent as AvatarDummy } from 'assets/images/avatar-dummy.svg'

import Dropdown from 'components/forms/dropdown'
import UserLivestreamVideos from 'components/view-video/user-livestream'
const UserDetail = ({ match }) => {
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
    const MostList = [
        {
            id: 2,
            value: 'Most Views'
        }, {
            id: 3,
            value: 'Most Favourites'
        }
    ]
    const MostRecent2 = [

        {
            id: 2,
            value: 'Most Popular'
        }, {
            id: 3,
            value: 'Most Livestreams'
        }
    ]
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <Sidebar />

                <div className="py-10 md:py-20 flex flex-col xl:flex-row w-full xxl:px-6">
                    <div className="w-full xl:w-3/5 xxl:w-3/5 px-4">
                        <div className="flex flex-col xl:flex-row xl:items-center">
                            <img src={userAvatarDummy} draggable={false} className="rounded-full w-4/5 xl:w-1/3 border-8 mb-4 xl:mb-0 xl:mr-4 border-red-600 mx-auto" alt="" />
                            {
                                tableBodyUser.filter(x => x.id === match.params.id).map(x => {
                                    return (
                                        <div key={x.id} className="md:px-8">
                                            <h4 className="text-red-600 md:text-2xl font-bold">{x.username}</h4>
                                            <p className="md:text-lg mt-4">{x.email}</p>
                                            <div className="md:flex flex-wrap hidden ">
                                                <button className="flex items-center text-sm md:text-base shadow-md mr-1 px-6 mt-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                                    <FbIcon className="mr-3" /> Connected
                                                </button>
                                                <button className="flex items-center text-sm md:text-base shadow-md px-6 mt-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                                    <GoogleIcon className="mr-3" /> Connected
                                                </button>
                                                <button className="flex items-center text-sm md:text-base shadow-md mr-4 px-6 mt-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                                    <EmailIcon className="mr-3" /> Connected
                                                </button>
                                            </div>
                                            <div className="flex">
                                                <button className="font-semibold mr-2 md:mr-4 text-sm md:text-base px-8 mt-4 md:py-2 rounded-md bg-red-600 text-white">
                                                    Merchant
                                                </button>
                                                <button className="font-semibold px-6 mr-2 md:mr-4 text-sm md:text-base mt-4 py-2 whitespace-no-wrap md:py-2 rounded-md bg-gray-400 text-white">
                                                    Non Merchant
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="user-detail flex flex-wrap xl:flex-no-wrap md:hidden ">
                            <button className="flex items-center text-sm md:text-base shadow-md mr-4 px-6 mt-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                <FbIcon className="mr-3" /> Connect
                                                </button>
                            <button className="flex items-center text-sm md:text-base shadow-md px-6 mt-4 mr-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                <GoogleIcon className="mr-3" /> Connect
                                                </button>
                            <button className="flex items-center text-sm md:text-base shadow-md mr-4 px-6 mt-4 py-2 border border-gray-50 rounded-3xl bg white text-gray-700">
                                <EmailIcon className="mr-3" /> Email
                                                </button>
                        </div>
                        <div className="flex flex-col-reverse">
                            <div className="flex flex-col pt-16">
                                <div className="flex md:justify-between items-center">
                                    <p className="px-6 text-red-600 font-bold text-base">Favorite Livestreams</p>
                                    <Dropdown title="Most Recent" items={MostList} />
                                </div>
                                <div className="px-2">
                                    <UserLivestreamVideos />
                                    <UserLivestreamVideos />
                                </div>
                            </div>
                            <div className="pt-6 px-4 block md:hidden">
                                <h5 className="text-gray-700 font-light text-lg">Change Display Name</h5>
                                <input type="text" placeholder="Display Name" className="rounded-lg border w-full border-gray-50 px-2 py-2 my-2 focus:outline-none" />
                                <div className="w-full mt-2">
                                    <button className="rounded-xl float-right px-10 py-3 bg-red-600 text-white text-sm md:text-lg font-medium">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 px-4 flex flex-col">
                        <div className="pt-20 px-4 hidden md:block">
                            <h5 className="text-gray-700 font-light text-lg">Change Display Name</h5>
                            <input type="text" placeholder="Display Name" className="rounded-lg border w-full border-gray-50 px-2 py-2 my-2 focus:outline-none" />
                            <div className="w-auto mt-2">
                                <button className="rounded-3xl float-right px-10 py-3 bg-red-600 text-white text-lg font-medium">Save</button>
                            </div>
                        </div>
                        <div className="pt-10 md:pt-8 flex flex-col px-4">
                            <div className="flex justify-between items-center">
                                <p className="text-red-600 font-bold text-base">Favorite Merchants</p>
                                <Dropdown title="Most Recent" items={MostRecent2} />
                            </div>
                            <div className="pt-6">
                                <div className="favmerchant-at-user flex w-full mt-4">
                                    <AvatarDummy />
                                    <div className="px-4">
                                        <h5 className="font-semibold text-base text-gray-700">Merchant Name</h5>
                                        <div className="flex flex-wrap mt-2 items-center">
                                            <p className="text-xs md:text-sm text-gray-900 font-light">3,9 subscribers</p> <div className="rounded-full w-1 h-1 bg-gray-700 mx-2"></div>
                                            <p className="text-xs md:text-sm text-gray-900 font-light">23 Livestreams</p>
                                        </div>
                                        <div className="flex flex-wrap text-sm font-medium text-gray-400 items-center mt-2">
                                            <h6>Category 1</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 2</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 3</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="favmerchant-at-user flex w-full mt-4">
                                    <AvatarDummy />
                                    <div className="px-4">
                                        <h5 className="font-semibold text-base text-gray-700">Merchant Name</h5>
                                        <div className="flex flex-wrap mt-2 items-center">
                                            <p className="text-xs md:text-sm text-gray-900 font-light">3,9 subscribers</p> <div className="rounded-full w-1 h-1 bg-gray-700 mx-2"></div>
                                            <p className="text-xs md:text-sm text-gray-900 font-light">23 Livestreams</p>
                                        </div>
                                        <div className="flex flex-wrap text-sm font-medium text-gray-400 items-center mt-2">
                                            <h6>Category 1</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 2</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 3</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="favmerchant-at-user flex w-full mt-4">
                                    <AvatarDummy />
                                    <div className="px-4">
                                        <h5 className="font-semibold text-base text-gray-700">Merchant Name</h5>
                                        <div className="flex flex-wrap mt-2 items-center">
                                            <p className="text-xs md:text-sm text-gray-900 font-light">3,9 subscribers</p> <div className="rounded-full w-1 h-1 bg-gray-700 mx-2"></div>
                                            <p className="text-xs md:text-sm text-gray-900 font-light">23 Livestreams</p>
                                        </div>
                                        <div className="flex flex-wrap text-xs md:text-sm font-medium text-gray-400 items-center mt-2">
                                            <h6>Category 1</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 2</h6><div className="rounded-full w-1 h-1 bg-gray-200 mx-2"></div>
                                            <h6>Category 3</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserDetail;
