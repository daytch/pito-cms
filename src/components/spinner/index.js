import React from 'react'
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";
import LoadingOverlay from 'react-loading-overlay';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Spinner = ({ isLoading, children }) => {

    return (
        <LoadingOverlay 
            active={isLoading}
            spinner={<CircleLoader
                css={override}
                size={150}
                color={"#C7FFFC"}
                loading={isLoading}
            />}
        >
            {children}
        </LoadingOverlay>
    )
}

export default Spinner;
