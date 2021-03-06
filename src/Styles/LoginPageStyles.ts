import styled from 'styled-components';
// import {Link} from 'react-router-dom'

export const LoginWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
        -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
        -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
`;

export const LoginMain = styled.div`
    @media (max-width: 670.98px) {
        width: 100%;

        font-family: 'Open Sans', sans-serif;
        position: absolute;
        top: 30%;
        left: 0%;
        margin: 0 0 0 0;
        padding: 0.375rem 3.75rem;
    }
    font-family: 'Open Sans', sans-serif;
    /* box-sizing: border-box; */
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
    padding: 0.375rem 0.75rem;
`;

export const LoginTitle = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 1rem;
`;

export const LoginUserName = styled.input`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.5s ease;
`;

export const LoginPassword = styled.input`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.5s ease;
`;
