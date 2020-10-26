import React from 'react'
import { Link } from 'react-router-dom'

//import Component SVG and image
import { ReactComponent as PlayIcon } from 'assets/images/icon-play.svg'
import { ReactComponent as EyeIcon } from 'assets/images/eye-icon.svg'
import { ReactComponent as LikeIcon } from 'assets/images/thumbs-like-icon.svg'
import { ReactComponent as CalendarIcon } from 'assets/images/calendar-icon.svg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon.svg'
import { ReactComponent as IgIcon } from 'assets/images/ig-icon.svg'
import { ReactComponent as TtIcon } from 'assets/images/tiktok-icon.svg'
import thumbnail from 'assets/images/thumbnail-one.jpg'

const UserLivestreamVideos = () => {
    return (
        <div className="mt-8 flex flex-wrap xl:flex-no-wrap">
            <div className="">
                <div className="item relative">
                    <figure className="item-image-user">
                        <div className="flex icon-socmed-user py-2 px-2">
                            <FbIcon className="mr-3" />
                            <IgIcon className="mr-3" />
                            <TtIcon className="mr-3" />
                        </div>
                        <div className="minute-user py-2 px-2">
                            <p className="font-medium text-sm text-white float-right">30:32</p>
                        </div>
                        <PlayIcon className="icon" />
                        <img src={thumbnail} alt="" />
                    </figure>
                </div>
                <Link to="/" className="link-wrapped hidden"></Link>
            </div>
            <div className="item-meta xl:px-4 w-full xl:w-2/3">
                <h4 className="font-semibold text-lg md:text-xl text-gray-700 break-all">Tsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaitle</h4>
                <p className="font-light mt-2 text-xs md:text-sm text-justify text-gray-700">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                <div className="icon-controller-user flex flex-wrap items-center py-2">
                    <div className="flex mr-4 items-center">
                        <EyeIcon className="icon-at-user" />
                        <h4 className="ml-2 text-gray-900 text-xs md:text-sm font-medium">52K Views</h4>
                    </div>
                    <div className="flex mr-4 items-center">
                        <LikeIcon className="icon-at-user" />
                        <h4 className="ml-2 text-gray-900 text-xs md:text-sm  font-medium">283 Likes</h4>
                    </div>
                    <div className="flex mr-4 items-center">
                        <CalendarIcon className="icon-at-user" />
                        <h4 className="ml-2 text-gray-900 text-xs md:text-sm  font-medium">283 Likes</h4>
                    </div>
                </div>
                <div className="flex flex-wrap text-xs text-gray-400 items-center">
                    <h6>Category 1</h6><div className="rounded-full w-2 h-2 bg-gray-400 mx-2"></div>
                    <h6>Category 2</h6><div className="rounded-full w-2 h-2 bg-gray-400 mx-2"></div>
                    <h6>Category 3</h6>
                </div>
            </div>
        </div>
    )
}

export default UserLivestreamVideos;