import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//import image 
import PHONE from 'assets/images/handphone.png'
import { ReactComponent as PitoLogo } from 'assets/images/pito.svg'
import { ReactComponent as LoginIcon } from 'assets/images/login-icon.svg'
import { ReactComponent as PasswordIcon } from 'assets/images/password-icon.svg'


//import API function
import users from 'api/users'

//import setAuthorizationHeader
import { setAuthorizationHeader } from 'configs/axios'

//Import toastify notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //state error handler
    const [errors, seterrors] = useState(null)

    //email on Change text
    function emailChange(e) {
        setEmail(e.target.value)
    }
    //password on Change text
    function passwordChange(e) {
        setPassword(e.target.value)
    }

    //Check tokens if ready
    const token = localStorage.getItem('PITO:token')
    useEffect(() => {
        if (token) {
            history.push('/')
        }
    },[])

    //on submit Login
    const submit = (e) => {
        e.preventDefault();

        //use function login from users
        users.login({
            email,
            password
        }).then((res) => {
            setAuthorizationHeader(res.token);
            localStorage.setItem('PITO:token', JSON.stringify(res.token))
            localStorage.setItem('PITO:img', res.image) 
            localStorage.setItem('PITO:name', res.name) 
            toast.success("you have successfully logged in !")
            history.push("/")
            // setTimeout(() => {
            //     history.push("/")
            // }, 2000);
        }).catch(err => {
            seterrors(err?.response?.data?.message)
        })
    }

    return (
        <section className="min-h-screen login-clipping w-full">
            <ToastContainer position="top-right" />
            <div className="clipper hidden xl:block"></div>
            <div className="img-phone xl:w-1/2 hidden xl:absolute py-20 xl:flex justify-end">
                <img draggable="false" src={PHONE} alt="pito logo" />
            </div>
            <div className="container mx-auto flex justify-end py-20">
                <div className="w-full xl:w-1/2 xl:px-24">
                    <PitoLogo className="mx-auto" />
                    <div className="pt-24 px-10">
                        <form onSubmit={submit}>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <LoginIcon />
                                <input type="email" name="email" value={email} onChange={emailChange} className="ml-3 focus:outline-none relative w-full" placeholder="Email" />
                            </div>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <PasswordIcon />
                                <input type="password" name="password" value={password} onChange={passwordChange} className="ml-3 focus:outline-none relative w-full" placeholder="Password" />
                            </div>
                            <button type="submit" className="bg-red-600 py-2 px-10 w-full mt-6 text-xl rounded-3xl text-white font-medium hover:bg-red-700 transition-all duration-200 focus:outline-none">Login</button>
                            <div className="text-center mt-4">
                                <Link to="/forgot-password" className="text-red-600 border-b border-red-600 font-light hover:font-medium">Forgot Password?</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default withRouter(Login);
