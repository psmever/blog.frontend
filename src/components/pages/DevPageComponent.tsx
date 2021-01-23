import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1rem;
`;

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
`;

const MainAside = styled.aside`
    width: 25%;
`;

const MainArticle = styled.article`
    flex-grow: 1;
`;

const ArticleNav = styled.nav`
    width: 20%;
`;

const MainNav = styled.nav`
    background: #0082e6;
    height: 80px;
    width: 100%;
`;

const MainNavLabelLogo = styled.div`
    color: white;
    font-size: 35px;
    line-height: 80px;
    /* padding: 0 100px; */
    width: 20%;
    font-weight: bold;
    flex-shrink: 0;

    @media (max-width: 952px) {
        font-size: 30px;
        padding-left: 50px;
    }
`;

const MainLogo = styled.img`
    /* flex-shrink: 0; */
    width: 1rem;
`;

const MainNavUl = styled.ul`
    float: right;
    margin-right: 20px;

    @media (max-width: 858px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #2c3e50;
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all 0.5s;
    }

    /* 메뉴 활성화. left:0 */
`;

const MainNavli = styled.li`
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;

    @media (max-width: 858px) {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
`;

const MainNavliLink = styled.a`
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;

    &:hover {
        background: #1b9bff;
        transition: 0.5s;
    }

    @media (max-width: 952px) {
        font-size: 16px;
    }

    @media (max-width: 858px) {
        font-size: 20px;

        &:hover {
            background: none;
            color: #0082e6;
        }

        /* active {
            background: none;
            color: #0082e6;
        } */
    }
`;

const MainNavliCheckBtn = styled.label`
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;

    @media (max-width: 858px) {
        display: block;
    }
`;

export default function DevPageComponent() {
    return (
        <>
            <MainContainer>
                <MainNav>
                    {/* <MainNavCheck type="checkbox" id="check" /> */}
                    <MainNavliCheckBtn>MENU</MainNavliCheckBtn>
                    {/* <MainNavLabelLogo>NicePage.Blog</MainNavLabelLogo> */}
                    <MainNavLabelLogo>
                        <MainLogo src={process.env.PUBLIC_URL + `logo512.png`} />
                    </MainNavLabelLogo>
                    <MainNavUl>
                        <MainNavli>
                            <MainNavliLink className="active" href="#">
                                홈
                            </MainNavliLink>
                        </MainNavli>
                        <MainNavli>
                            <MainNavliLink href="#">민군은</MainNavliLink>
                        </MainNavli>
                        <MainNavli>
                            <MainNavliLink href="#">Tag</MainNavliLink>
                        </MainNavli>
                        <MainNavli>
                            <MainNavliLink href="#">나에게</MainNavliLink>
                        </MainNavli>
                        <MainNavli>
                            <MainNavliLink href="#">의견</MainNavliLink>
                        </MainNavli>
                    </MainNavUl>
                </MainNav>
                <Main>
                    <MainAside>MainAside</MainAside>

                    <MainArticle>MainArticle</MainArticle>

                    <ArticleNav>ArticleNav</ArticleNav>
                </Main>
                <footer>footer</footer>
            </MainContainer>
        </>
    );
}
