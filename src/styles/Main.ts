import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MainWarpper = styled.div`

    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    margin-left: 280px;
    background: #fff;

`

export const CtaSection = styled.section`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    background: #fafafa !important;

`

export const CtaSectionContainer = styled.div`

    max-width: 820px;

    @media screen and (max-width:1200px) and (min-width:1200px) {
        /* max-width: 1140px; */
    }

    @media screen and (max-width:1200px) and (min-width:992px) {
        /* max-width: 960px; */
    }

    @media screen and (max-width:992px) and (min-width:768px) {
        /* max-width: 720px; */
    }

    @media screen and (max-width:768px) and (min-width:576px) {
        /* max-width: 540px; */
    }

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center !important;

`

export const Heading = styled.h2`

    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: #292929;
    font-size: 2rem;
    font-weight: bold;

`

export const Intro = styled.div`

    text-align: center !important;
    box-sizing: border-box;

`

export const Form = styled.form`

    line-height: 1.5;
    text-align: center !important;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center !important;
    padding-top: 1rem !important;

`

export const FormGroup = styled.div`

    @media (max-width: 767.98px) {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 576px) {
        display: flex;
        flex: 0 0 auto;
        flex-flow: row wrap;
        align-items: center;
        /* margin-bottom: 0; */
    }

    text-align: center !important;
    box-sizing: border-box;

`

export const FormLabel = styled.label`

    @media (min-width: 576px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }

    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;

`

export const FormInput = styled.input`

    @media (min-width: 576px){
        display: inline-block;
        width: auto;
        vertical-align: middle;
    }

    @media (max-width: 767.98px){
        width: 100%;
    }

    @media (min-width: 768px){
        width: 360px;
    }

    @media (min-width: 768px){
        width: 360px;
    }

    @media (min-width: 768px){
        margin-right: 0.25rem !important;
    }


    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #5c5c5c;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #9c9c9c;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    height: 2.75rem;
    border-color: #c2c2c2;
    width: 360px;

`

export const FormSubmitButton = styled.button`

    @media (max-width: 767.98px){
        width: 100%;
    }

    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: 0.25rem;
    font-weight: bold;
    padding: 0.375rem 1rem;
    height: 2.75rem;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background-color: #384eb2;
    border-color: #354aa8;

`

export const ListSection = styled.section`

    @media (min-width: 768px){
        padding: 3rem !important;
    }

    padding-bottom: 3rem !important;
    padding-top: 3rem !important;

    padding-left: 1rem !important;

    padding-right: 1rem !important;


    display: block;

`

export const ListContainer = styled.div`


    max-width: 820px;

    @media (min-width: 1200px){
        /* max-width: 1140px; */
    }
    @media (min-width: 992px){
        /* max-width: 960px; */
    }
    @media (min-width: 768px){
        /* max-width: 720px; */
    }
    @media (min-width: 576px){
        /* max-width: 540px; */
    }
    @media (min-width: 992px){
        /* max-width: 960px; */
    }

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

`

export const ListItem = styled.div`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 3rem !important;

`

export const ListMedia = styled.div`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;

`

export const ListImage = styled.img`

    @media (min-width: 768px){
        display: flex !important;
    }

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    height: auto;
    margin-right: 1rem !important;
    max-width: 110px;
    border-radius: 2px;
    display: none !important;

`

export const MegiaBody = styled.div`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    flex: 1;

`

export const Title = styled.h3`

    text-align: left;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    color: #292929;
    font-weight: bold;
    margin-bottom: 0.25rem !important;
    font-size: 1.275rem;

`

export const TitleLink = styled(Link)`

    text-align: left;
    line-height: 1.2;
    font-weight: bold;
    font-size: 1.275rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #292929;

`

export const Meta = styled.div`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 0.25rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;

`

export const MetaDate = styled.span`

    line-height: 1.5;
    text-align: left;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;

    &:after {
        content: "";
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #8f8f8f;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        position: relative;
        top: -3px;
    }

`

export const MetaTime = styled.span`

    line-height: 1.5;
    text-align: left;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;

    &:after {
        content: "";
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #8f8f8f;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        position: relative;
        top: -3px;
    }
`

export const MetaComment = styled.span`

    line-height: 1.5;
    text-align: left;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;

`

export const MetaCommentLink = styled(Link)`

    line-height: 1.5;
    text-align: left;
    font-size: 0.8125rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #8f8f8f;

`

export const ListItemIntro = styled.div`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    font-size: 0.875rem;

`

export const MoreLink = styled(Link)`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    color: #5469C9;
    text-decoration: none;
    background-color: transparent;
    font-size: 0.8125rem;

`

export const BLogNav = styled.nav`

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;

`

export const BlogNavLinkPrev = styled(Link)`

    line-height: 1.5;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
    display: none !important;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    background: #5469C9;
    color: #fff;
    padding: 1rem;
    font-weight: bold;
    position: relative;
    border-right: 1px solid #2c3d8b;

`

export const BlogArrowPrev = styled.i`

    line-height: 1.5;
    list-style: none;
    text-align: center;
    font-weight: bold;
    box-sizing: border-box;
    position: absolute;
    left: 1rem;
    top: 1.25rem;
    color: #fff;

`

export const BlogNavLinkNext = styled(Link)`

    line-height: 1.5;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    border-radius: 0.25rem !important;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    background: #5469C9;
    color: #fff;
    padding: 1rem;
    font-weight: bold;
    position: relative;

`

export const BlogArrowNext = styled.i`

    line-height: 1.5;
    list-style: none;
    text-align: center;
    font-weight: bold;
    box-sizing: border-box;
    position: absolute;
    right: 1rem;
    top: 1.25rem;
    color: #fff;

`