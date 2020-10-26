import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from 'assets/images/icon-play.svg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon.svg'
import { ReactComponent as IgIcon } from 'assets/images/ig-icon.svg'
import { ReactComponent as TtIcon } from 'assets/images/tiktok-icon.svg'
import thumbnail from 'assets/images/thumbnail-one.jpg'

const livestreamDetail = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 px-5 w-full">
                    <div className="flex flex-col-reverse md:flex-row w-full justify-between">
                        <h6 className="text-red-600 font-semibold text-lg text-center pt-8 md:pt-0">Livestreams Detail</h6>
                        <div className="flex items-center md:mb-0 justify-end">
                            <Link to="/merchant/dashboard"><h6 className="text-red-600 font-semibold text-lg">Back</h6></Link>
                            <button className="text-white bg-red-600 font-semibold text-sm xl:text-lg px-4 mx-4 py-1 rounded-2xl">Copy For New Livestreams</button>
                        </div>
                    </div>
                    <div className="mt-0 md:mt-10">
                        <div className="item relative w-full md:w-1/2 mx-auto">
                            <figure className="item-image-live-detail">
                                <PlayIcon className="icon" />
                                <img src={thumbnail} alt="" className="thumbnail-live-detail" width={580} />
                            </figure>

                        </div>
                        <div className="flex flex-wrap mt-4 md:mt-2 mx-auto justify-center w-full md:w-1/2">
                            <div className="flex flex-col mr-8 text-center">
                                <h4 className="font-bold text-2xl text-red-600">53.240</h4>
                                <p className="font-light text-sm text-gray-300">Views</p>
                            </div>
                            <div className="flex flex-col mr-8 text-center">
                                <h4 className="font-bold text-2xl text-red-600">2.300</h4>
                                <p className="font-light text-sm text-gray-300">Subscriber</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="font-bold text-2xl text-red-600">489</h4>
                                <p className="font-light text-sm text-gray-300">Shared</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row pt-10">
                        <div className="w-full xl:w-1/2">
                            <div className="flex flex-wrap w-full items-start">
                                <label htmlFor="title" className="w-full xl:w-1/5 text-lg text-gray-700">Title</label>
                                <input type="text" placeholder="Tittle" className="w-full xl:w-3/4 px-4 bg-gray-700 text-white focus:outline-none py-2 my-2 xl:my-0 xl:ml-4 rounded-lg" readOnly />
                            </div>
                            <div className="flex flex-wrap w-full items-start mt-4">
                                <label htmlFor="desc" className="w-full xl:w-1/5 text-lg text-gray-700">Description</label>
                                <textarea placeholder="Description" className="w-full xl:w-3/4 h-32 px-4 bg-gray-700 text-white focus:outline-none py-2 xl:ml-4 my-2 xl:my-0 rounded-lg" readOnly />
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <div className="flex flex-wrap w-full items-center">
                                <div className="xl:pr-4 flex flex-wrap xl:flex-no-wrap w-full xl:w-1/2">
                                    <label htmlFor="date" className="w-full xl:w-1/5 text-lg text-gray-700">Date</label>
                                    <input type="text" name="date" className="w-full xl:w-3/4 px-4 py-2 xl:ml-4  bg-gray-700 text-white focus:outline-none my-2 xl:my-0 border border-gray-300 rounded-lg" readOnly />
                                </div>
                                <div className="xl:pr-4 flex flex-wrap xl:flex-no-wrap w-full xl:w-1/2">
                                    <label htmlFor="start" className="w-full xl:w-1/5 text-lg text-gray-700">Start Time</label>
                                    <input type="text" name="start" className="w-full xl:w-3/4 px-4 py-2 xl:ml-4  bg-gray-700 text-white focus:outline-none my-2 xl:my-0 border border-gray-300 rounded-lg" readOnly />
                                </div>
                                <div className="xl:pr-4 flex flex-wrap xl:flex-no-wrap w-full xl:mt-4 xl:w-1/2">
                                    <label htmlFor="end" className="w-full xl:w-1/5 text-lg text-gray-700">End Time</label>
                                    <input type="text" name="start" className="w-full xl:w-3/4 px-4 py-2 xl:ml-4  bg-gray-700 text-white focus:outline-none my-2 xl:my-0 border border-gray-300 rounded-lg" readOnly />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full items-center mt-4">
                                <label htmlFor="category" className="w-full xl:w-auto text-lg text-gray-700">Categories</label>
                                <div className="flex flex-wrap">
                                    <input type="text" name="category" className="w-1/3 xl:w-auto px-4 py-2 mr-4 text-sm bg-gray-700 text-white focus:outline-none my-2  border border-gray-300 rounded-lg" readOnly />
                                    <input type="text" name="category" className="w-1/3 xl:w-auto px-4 py-2 mr-4 text-sm bg-gray-700 text-white focus:outline-none my-2  border border-gray-300 rounded-lg" readOnly />
                                    <input type="text" name="category" className="w-1/3 xl:w-auto px-4 py-2 mr-4 text-sm bg-gray-700 text-white focus:outline-none my-2  border border-gray-300 rounded-lg" readOnly />
                                </div>

                            </div>
                            <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                                <label htmlFor="fbLink" className="w-full text-lg text-gray-700">Facebook Livestreams Link <span className="text-red-700">*</span></label>
                                <input type="text" placeholder="https://facebook.com/live/url" className="w-4/5 px-4 py-2 mr-2 bg-gray-700 text-white focus:outline-none my-2 border border-gray-300 rounded-lg" readOnly />
                                <FbIcon />
                            </div>
                            <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                                <label htmlFor="igLink" className="w-full text-lg text-gray-700">Instagram Livestreams Link <span className="text-red-700">*</span></label>
                                <input type="text" placeholder="https://instagram.com/live/url" className="w-4/5 px-4 py-2 mr-2 bg-gray-700 text-white focus:outline-none my-2 border border-gray-300 rounded-lg" readOnly />
                                <IgIcon />
                            </div>
                            <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                                <label htmlFor="ttLink" className="w-full text-lg text-gray-700">Tiktok Livestreams Link <span className="text-red-700">*</span></label>
                                <input type="text" placeholder="https://tiktok.com/live/url" className="w-4/5 px-4 py-2 mr-2 bg-gray-700 text-white focus:outline-none my-2 border border-gray-300 rounded-lg" readOnly />
                                <TtIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default livestreamDetail