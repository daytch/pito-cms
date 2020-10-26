import React from 'react'
import { ReactComponent as Pito } from 'assets/images/pito.svg'
const ForgotPassword = () => {
    return (
        <div className="fp bg-white md:bg-red-600 md:py-20 md:px-10 xl:px-0">
            <div className="fp-controller bg-white md:rounded-2xl xl:w-2/5 mx-auto px-6 py-20 xxl:py-40">
                <Pito className="mx-auto" />
                <div className="mt-20 xl:mt-16 xxl:mt-32 flex flex-col px-6 md:px-10">
                    <h5 className="text-red-600 font-bold text-xl">Forgot Password?</h5>
                    <p className="font-light text-base text-gray-700 mt-4">Enter Your Email Address Registered with Pito</p>
                    <input type="text" placeholder="Email Address" className="mt-4 border border-red-600 rounded-lg w-full px-3 py-4" />
                    <button className="w-4/5 md:w-1/2 bg-red-600 mt-6 mx-auto text-white font-medium text-lg py-2 rounded-3xl">Submit</button>
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword;
