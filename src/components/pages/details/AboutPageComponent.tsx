import React from 'react';
import { Link } from "react-router-dom";
import {
    MainWrapper,
    AboutSection,
    Container,
    Title,
    AboutFigure,
    AboutImage,
    AboutContentsTitle,
    AboutPTag,
    AboutContentsLink,
} from "styles/About";

export default function AboutPage() {

    const handleClickFrontSouce = () => {
        window.open('https://github.com/psmever/blog.front', '_blank', 'noopener,noreferrer');
    }

    const handleClickBackendSource = () => {
        window.open('https://github.com/psmever/blog.backend', '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <MainWrapper>
                <AboutSection>
                    <Container>
                        <Title>민군은</Title>

                        <AboutFigure><AboutImage src={process.env.REACT_APP_MEDIA_URL+"/assets/blog/images/about/about-me.jpg"} alt="" /></AboutFigure>
                        <AboutContentsTitle>블러그</AboutContentsTitle>
                        <AboutPTag><Link to='' onClick={handleClickFrontSouce}>Front Github</Link> &nbsp; <Link to='' onClick={handleClickBackendSource}>Backend Github</Link></AboutPTag>
                        <AboutContentsTitle>좋아하는것</AboutContentsTitle>
                        <AboutPTag>맥을 좋아하고, 맥을 사는것을 좋아하고(돈은 없음;;) 맥에 관해 대화(?) 하는것.. 해킨 커뮤니티가 없어지니 같이 대화할 사람이 없네...</AboutPTag>
                        <AboutPTag>php 를 좋아하고 php로 뭘 만들어 보는것</AboutPTag>
                        <AboutPTag>술과 담배는...</AboutPTag>
                        <AboutContentsTitle>취미는 </AboutContentsTitle>
                        <AboutPTag>퇴근하고 동네 한바퀴는 꼭 뛰자. </AboutPTag>
                        <AboutPTag>1주일에 한번은 동네 커피숍에 가서 코딩을 하자. </AboutPTag>
                        <AboutPTag>하루에 자기전 한시간은 코딩을 하자. </AboutPTag>
                        <AboutContentsTitle>Side Projects</AboutContentsTitle>
                        <AboutPTag>MyBlog</AboutPTag>
                        <AboutPTag>인스타 짝퉁</AboutPTag>
                        <AboutPTag>앱</AboutPTag>

                        <AboutFigure><AboutContentsLink to="/"><AboutImage src={process.env.REACT_APP_MEDIA_URL+"/assets/blog/images/promo-banner.jpg"} alt="" /></AboutContentsLink></AboutFigure>
                    </Container>
                </AboutSection>
            </MainWrapper>
        </>
    );
}