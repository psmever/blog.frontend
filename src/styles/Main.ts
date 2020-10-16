import styled from 'styled-components';

export const MainWarpper = styled.div`

    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    margin-left: 280px;
    background: #fff;
    height: 200px;
    overflow: visible;

    height: 100%;
    /* display: flex; */
    /* flex-direction: row; */
    border: 1px solid silver;
    overflow: hidden;



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

export const Band = styled.div`

    @media (min-width: 40em) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 60em) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 90em) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 120em) {
        grid-template-columns: repeat(4, 1fr);
    }

    /* @media (min-width: 140em) {
        grid-template-columns: repeat(5, 1fr);
    } */

    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
`

export const BandItems = styled.div`
    /* @media (min-width: 60em) {
        grid-column: 1 / span 2;
    } */
    /* grid-template-columns: repeat(auto-fill, minmax(20%, auto)); */
`

export const BandItemsCard = styled.div`
    cursor: pointer;
    background: white;
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-height: 100%;
    max-height: 600px;
    position: relative;
    top: 0;
    -webkit-transition: all .1s ease-in;
    transition: all .1s ease-in;
`

export const BandItemCardThumbBox = styled.div`
    /* padding-bottom: 60%; */
    background-size: cover;
    background-position: center center;
`

export const BandItemCardThumbimg = styled.img`

    @media (min-width: 768px){
        display: flex !important;
    }

    width: 100%;
    line-height: 1.5;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    height: auto;
    max-height: 200px;
    margin-right: 1rem !important;
    max-width: 500px;
    min-width: 300px;
    border-radius: 2px;
    display: none !important;
`

export const BandItemArticle = styled.article`
    padding: 20px;
    -webkit-box-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

export const BandItemArticleTitle = styled.h1`
    font-size: 20px;
    margin: 0;
    color: #333;
`

export const BandItemArticleTitleSpan = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
`
export const BandItemArticleDateBox = styled.div`

`
export const BandItemArticleMetaDate = styled.span`

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
export const BandItemArticleMetaTime = styled.span`

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