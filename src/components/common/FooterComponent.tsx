import React from 'react';
import { Link } from "react-router-dom";
import {
    MainWarpper,
    Footer,
    Copyright,
} from "styles/Footer";
import {HeartIcon} from 'styles/StyledIcons';

export default function FooterComponent() {

    return (
        <>
            <MainWarpper>
                <Footer>
                    {/* <!-- */}
                        {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                    {/* --> */}
                    <Copyright>
                        <HeartIcon/> Made in <Link to="/">@psmever</Link> &nbsp; Blog Version: {process.env.REACT_APP_VERSION} Beta
                    </Copyright>
                </Footer>
            </MainWarpper>
        </>
    );
}