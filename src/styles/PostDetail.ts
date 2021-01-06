import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;
export const BlogPost = styled.article`
    @media (min-width: 768px) {
        padding: 3rem !important;
    }

    padding: 2rem !important;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const Container = styled.div`
    @media (min-width: 768px) {
        max-width: 75%;
    }

    max-width: 100%;

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
`;

export const Header = styled.header`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const HeaderTitle = styled.h2`
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-top: 0;
    line-height: 1.2;
    color: #292929;
    margin-bottom: 0.5rem !important;
    font-weight: bold;
    font-size: 2rem;
`;

export const HeaderMeta = styled.div`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-bottom: 1rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;
`;

export const HeaderDate = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`;
export const HeaderTime = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`;
export const HeaderComment = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`;

export const HeaderCommentLink = styled(Link)`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-size: 0.8125rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #8f8f8f;
`;

export const HeaderModify = styled.span`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #8f8f8f;
    font-size: 0.8125rem;
    box-sizing: border-box;
    display: inline-block;
`;

export const HeaderModifyLink = styled.div`
    cursor: pointer;
    font-weight: bolder;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-size: 0.8125rem;
    box-sizing: border-box;
    text-decoration: none;
    background-color: transparent;
    color: #8f8f8f;
`;

export const PostTag = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
`;

export const PostTagMeta = styled.div`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin-bottom: 1rem !important;
    color: #8f8f8f;
    font-size: 0.8125rem;
`;

export const PostTags = styled.ul`
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
`;
export const PostTagsItems = styled.li`
    float: left;
`;
export const PostTagsItem = styled.div`
    background: #eeeeee;
    border-radius: 3px 0 0 3px;
    color: #5469c9;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
    cursor: pointer;

    &:before {
        background: #fff;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

    &:after {
        background: #fff;
        border-bottom: 13px solid transparent;
        border-left: 10px solid #eee;
        border-top: 13px solid transparent;
        content: '';
        position: absolute;
        right: 0;
        top: 0;
    }

    &:hover {
        background-color: #e0dede;
        /* color: white; */
    }

    &:hover::after {
        border-left-color: #e0dede;
    }
`;

export const PostBody = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
`;

export const Banner = styled.figure`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    margin: 0 0 1rem;
`;
export const BannerLink = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #5469c9;
    text-decoration: none;
    background-color: transparent;
`;
export const BannerImage = styled.img`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #5469c9;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
`;

export const BannerImageCaption = styled.figcaption`
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    display: block;
    margin-top: 0.5rem !important;
    text-align: center !important;
    color: #8f8f8f;
    font-size: 0.875rem;
`;

export const BannerImageCaptionLink = styled(Link)`
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    font-size: 0.875rem;
    box-sizing: border-box;
    background-color: transparent;
    color: #8f8f8f;
    text-decoration: underline;
`;

export const PTag = styled.p`
    font-weight: 400;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.6;
`;

export const ContentTitle1 = styled.h3`
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    line-height: 1.2;
    color: #292929;
    font-weight: bold;
    margin-bottom: 1rem !important;
    margin-top: 3rem !important;
    font-size: 1.75rem;
`;

export const ContentTitle2 = styled.h5`
    text-align: left;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    line-height: 1.2;
    color: #292929;
    font-weight: bold;
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
    font-size: 1.25rem;
`;

export const ContentPoint1 = styled.ul`
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-bottom: 0.5rem !important;
    font-size: 1.125rem;
    line-height: 1.6;
`;

export const ContentPoint2 = styled.ol`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 3rem !important;
`;

export const ContentPointItem = styled.li`
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    margin-bottom: 0.5rem !important;
    font-size: 1.125rem;
    line-height: 1.6;
`;

export const BlockQuote = styled.blockquote`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    margin: 3rem !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-left: 2px solid #292929;
    font-size: 1.5rem;
`;

export const BlockQuotePtag = styled.p`
    font-weight: 400;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0.5rem !important;
    line-height: 1.6;
    font-size: 1.5rem;
`;

export const BlockQuoteFooter = styled.footer`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
    display: block;
    font-size: 80%;
    color: #767676;
`;

export const Nav = styled.nav`
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
`;

export const NavPrevLink = styled(Link)`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    background: #5469c9;
    color: #fff;
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;
    border-right: 1px solid #2c3d8b;
`;
export const NavNextLink = styled(Link)`
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    display: block;
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    background: #5469c9;
    color: #fff;
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;
`;

export const PromoSection = styled.section`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    box-sizing: border-box;
    display: block;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    text-align: center !important;
    background: #fafafa !important;
    margin-bottom: 40px;
`;
export const PromoContainer = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 820px;
`;
export const PromoTitle = styled.h2`
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    font-size: 2rem;
    color: #292929;
    font-weight: bold;
`;

export const PromoPtag = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
`;
export const PromoFigure = styled.figure`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: #4f4f4f;
    text-align: center !important;
    box-sizing: border-box;
    display: block;
    margin: 0 0 1rem;
`;
export const PromoLink = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    box-sizing: border-box;
    color: #5469c9;
    text-decoration: none;
    background-color: transparent;
`;
export const PromoImage = styled.img`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    color: #5469c9;
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
`;
