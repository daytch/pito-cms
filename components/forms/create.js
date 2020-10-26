import React from 'react'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon.svg'
import { ReactComponent as IgIcon } from 'assets/images/ig-icon.svg'
import { ReactComponent as TtIcon } from 'assets/images/tiktok-icon.svg'
import { ReactComponent as UploadIcon } from 'assets/images/upload-icon.svg'

const Create = () => {
    return (
        <>
            <div className="w-full xl:w-4/5">
                <form>
                    <div className="flex flex-wrap w-full items-start">
                        <label htmlFor="title" className="w-full md:w-1/5 text-lg text-gray-700">Title <span className="text-red-700">*</span></label>
                        <input type="text" placeholder="Tittle" className="w-full md:w-2/5 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="flex flex-wrap w-full items-start mt-4">
                        <label htmlFor="desc" className="w-full md:w-1/5 text-lg text-gray-700">Description</label>
                        <textarea placeholder="Description" className="w-full md:w-2/5 h-32 px-4 py-2 md:ml-4 my-2 md:my-0 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="flex flex-wrap w-full items-center mt-4">
                        <div className="md:pr-4">
                            <label htmlFor="date" className="text-lg text-gray-700">Date <span className="text-red-700">*</span></label>
                            <input type="date" name="date" className="px-4 py-2 mx-4 md:ml-4 my-2 md:my-0 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="md:pr-4">
                            <label htmlFor="start" className="text-lg text-gray-700">Start Time <span className="text-red-700">*</span></label>
                            <input type="time" name="start" className="px-4 py-2 mx-4 md:ml-4 my-2 md:my-0 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="md:pr-4">
                            <label htmlFor="end" className="text-lg text-gray-700">End Time <span className="text-red-700">*</span></label>
                            <input type="time" name="start" className="px-4 py-2 mx-4 md:ml-4 my-2 md:my-0 border border-gray-300 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full items-center mt-4">
                        <label htmlFor="category" className="w-full md:w-auto text-lg text-gray-700">Categories</label>
                        <div className="flex">
                            <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2 md:ml-4" role="button">
                                <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 1" /><span>Category 1</span>
                            </div>
                            <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2 md:ml-4" role="button">
                                <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 2" /><span>Category 2</span>
                            </div>
                            <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2 md:ml-4" role="button">
                                <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 3" /><span>Category 3</span>
                            </div>
                        </div>

                    </div>
                    <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                        <label htmlFor="fbLink" className="w-full md:w-1/3 text-lg text-gray-700">Facebook Livestreams Link <span className="text-red-700">*</span></label>
                        <input type="text" placeholder="https://facebook.com/live/url" className="w-4/5 md:w-2/5 px-4 py-2 mr-2 md:mx-4 border border-gray-300 rounded-lg" />
                        <FbIcon />
                    </div>
                    <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                        <label htmlFor="igLink" className="w-full md:w-1/3 text-lg text-gray-700">Instagram Livestreams Link <span className="text-red-700">*</span></label>
                        <input type="text" placeholder="https://instagram.com/live/url" className="w-4/5 md:w-2/5 px-4 py-2 mr-2 md:mx-4 border border-gray-300 rounded-lg" />
                        <IgIcon />
                    </div>
                    <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                        <label htmlFor="ttLink" className="w-full md:w-1/3 text-lg text-gray-700">Tiktok Livestreams Link <span className="text-red-700">*</span></label>
                        <input type="text" placeholder="https://tiktok.com/live/url" className="w-4/5 md:w-2/5 px-4 py-2 mr-2 md:mx-4 border border-gray-300 rounded-lg" />
                        <TtIcon />
                    </div>
                    <div className="form-dashboard flex flex-wrap w-full items-center mt-4">
                        <UploadIcon />
                        <input type="file" className="w-4/5 xl:w-2/5 px-4 py-2 mx-2 md:mx-4 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="flex mt-6">
                        <button className="border border-gray-300 text-red-600 rounded-lg text-lg px-6 py-2 mr-4">Cancel</button>
                        <button className="border  text-white font-medium bg-red-600 rounded-lg text-lg px-10 py-2">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create;