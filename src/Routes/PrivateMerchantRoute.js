import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateMerchantRoute = ({ component: Component, ...rest }) => {
    const tokenMerchant = localStorage.getItem('PITO:merchant-token')
    return (
        <Route
            {...rest}
            render={props => tokenMerchant ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/merchant/login" />
                )}

        />
    )
}

export default PrivateMerchantRoute;
