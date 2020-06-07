import React from 'react';
import { Link } from "react-router-dom";

export default function FooterComponent() {
    return (
        <>
            <footer className="footer text-center py-2 theme-bg-dark">
                {/* <!-- */}
                    {/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */}
                {/* --> */}
                <small className="copyright">Designed with <i className="fas fa-heart" style={{color: "#fb866a"}}></i> by <Link to="/">Xiaoying Riley</Link> for developers</small>
            </footer>
        </>
    );
}