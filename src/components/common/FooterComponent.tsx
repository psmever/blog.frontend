import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FooterStyleComponent from "styles/Footer";

export default function FooterComponent() {
    return (
        <>
            <FooterStyleComponent.Footer>
                {/* <!-- */}
                    {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                {/* --> */}
                <FooterStyleComponent.Copyright>
                    Designed with <FontAwesomeIcon icon={["fab", "heart"]} size="lg"/> by <Link to="/">Xiaoying Riley</Link> for developers
                </FooterStyleComponent.Copyright>
            </FooterStyleComponent.Footer>
        </>
    );
}