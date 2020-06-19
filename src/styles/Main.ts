import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MainWarpper = styled.div`
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

export const CtaSectionContainer = styled.div`
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

export const Heading = styled.h2`
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

export const Intro = styled.div`
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
`

export const Form = styled.form`
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

export const FormGroup = styled.div`
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

export const FormLabel = styled.label`
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

export const FormInput = styled.input`
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

export const FormSubmitButton = styled.button`
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

export const ListSection = styled.section`
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    padding: 3rem !important;
`

export const ListContainer = styled.div`
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

export const ListItem = styled.div`
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-bottom: 3rem !important;
`

export const ListMedia = styled.div`
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
`

export const ListImage = styled.img`
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    height: auto;
    display: flex !important;
    margin-right: 1rem !important;
    max-width: 110px;
    border-radius: 2px;
`

export const MegiaBody = styled.div`
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    flex: 1;
`

export const Title = styled.h3`
    text-align: left;
    -webkit-font-smoothing: antialiased;
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
    -webkit-font-smoothing: antialiased;
    line-height: 1.2;
    font-weight: bold;
    font-size: 1.275rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #292929;
`

export const Meta = styled.div`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-bottom: 0.25rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;
`

export const MetaDate = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`

export const MetaTime = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`

export const MetaComment = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`

export const MetaCommentLink = styled(Link)`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-size: 0.8125rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #8f8f8f;
`

export const ListItemIntro = styled.div`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    font-size: 0.875rem;
`

export const MoreLink = styled(Link)`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #5469C9;
    text-decoration: none;
    background-color: transparent;
    font-size: 0.8125rem;
`

export const BLogNav = styled.nav`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
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
    -webkit-font-smoothing: antialiased;
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
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;
    border-right: 1px solid #2c3d8b;
`

export const BlogArrowPrev = styled.i`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    box-sizing: border-box;
    position: absolute;
    left: 1rem;
    top: 1.25rem;
    color: #fff;
`

export const BlogNavLinkNext = styled(Link)`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
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
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;
`

export const BlogArrowNext = styled.i`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    box-sizing: border-box;
    position: absolute;
    right: 1rem;
    top: 1.25rem;
    color: #fff;
`