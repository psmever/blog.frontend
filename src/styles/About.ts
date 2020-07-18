import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const MainWrapper = styled.div`

    @media (max-width: 991.98px) {
        margin-left: 0;
    }

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-left: 280px;
    background: #fff;

`

export const AboutSection = styled.article`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;

`

export const Container = styled.div`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 820px;

`

export const Title = styled.h2`

    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    color: #292929;
    font-weight: bold;
    margin-bottom: 1rem !important;
    font-size: 2rem;

`

export const AboutPTag = styled.p`

    font-weight: 400;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.6;

`

export const AboutFigure = styled.figure`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    margin: 0 0 1rem;

`

export const AboutImage = styled.img`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;

`

export const AboutContentsTitle = styled.h5`

    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: #292929;
    font-weight: bold;
    margin-top: 3rem !important;
    font-size: 1.25rem;

`

export const AboutContentsLink = styled(Link)`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #5469C9;
    text-decoration: none;
    background-color: transparent;

`

export const CtaSection = styled.section`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    background: #fafafa !important;

`
export const CtaContainer = styled.div`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center !important;
    max-width: 820px;

`
export const CtaHeader = styled.h2`

    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    color: #292929;
    font-size: 2rem;
    font-weight: bold;

`
export const CtaIntro = styled.div`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;

`
export const CtaForm = styled.form`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center !important;
    padding-top: 1rem !important;

`
export const CtaFormGroup = styled.div`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;

`
export const CtaFormLabel = styled.label`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;

`
export const CtaInput = styled.input`

    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #5c5c5c;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #9c9c9c;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-right: 0.25rem !important;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    height: 2.75rem;
    border-color: #c2c2c2;
    display: inline-block;
    vertical-align: middle;
    width: 360px;

`

export const CtaButton = styled.button`

    -webkit-font-smoothing: antialiased;
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
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-color: #5469C9;
    border-color: #5469C9;
    font-weight: bold;
    padding: 0.375rem 1rem;
    height: 2.75rem;
    transition: all 0.4s ease-in-out;
    color: #fff;
    cursor: pointer;

`
