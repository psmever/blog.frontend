import React from 'react';
import { Link } from "react-router-dom";
import * as FooterStyleComponent from "styles/Footer";
import * as StyledIcons from 'styles/StyledIcons';

export default function FooterComponent() {

    const handleClickFrontSouce = () => {
        window.open('https://github.com/psmever/blog.front', '_blank', 'noopener,noreferrer');
    }


    const handleClickBackendSource = () => {
        window.open('https://github.com/psmever/blog.backend', '_blank', 'noopener,noreferrer');
    }



    return (
        <>
        <FooterStyleComponent.MainWarpper>
            <FooterStyleComponent.Footer>
                {/* <!-- */}
                    {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                {/* --> */}
                <FooterStyleComponent.Copyright>
                    <StyledIcons.HeartIcon/> Made in <Link to="/">@psmever</Link> &nbsp; Blog Version: {process.env.REACT_APP_VERSION} &nbsp; <Link to='' onClick={handleClickFrontSouce}>Front-Source</Link> &nbsp; <Link to='' onClick={handleClickBackendSource}>Backend-Source</Link>
                </FooterStyleComponent.Copyright>
            </FooterStyleComponent.Footer>
        </FooterStyleComponent.MainWarpper>
        </>
    );
}