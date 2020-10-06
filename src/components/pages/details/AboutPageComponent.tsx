import React from 'react';
import { Link } from "react-router-dom";
import * as AboutStyleComponent from "styles/About";

export default function AboutPage() {

    const handleClickFrontSouce = () => {
        window.open('https://github.com/psmever/blog.front', '_blank', 'noopener,noreferrer');
    }

    const handleClickBackendSource = () => {
        window.open('https://github.com/psmever/blog.backend', '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <AboutStyleComponent.MainWrapper>

                <AboutStyleComponent.AboutSection>
                    <AboutStyleComponent.Container>
                        <AboutStyleComponent.Title>민군은</AboutStyleComponent.Title>

                        <AboutStyleComponent.AboutFigure><AboutStyleComponent.AboutImage src="/assets/images/about/about-me-20201005.jpg" alt="" /></AboutStyleComponent.AboutFigure>
                        <AboutStyleComponent.AboutContentsTitle>블러그</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag><Link to='' onClick={handleClickFrontSouce}>Front-Source</Link> &nbsp; <Link to='' onClick={handleClickBackendSource}>Backend-Source</Link></AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutContentsTitle>좋아하는것</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>맥을 좋아하고, 맥을 사는것을 좋아하고(돈은 없음;;) 맥에 관해 대화(?) 하는것.. 해킨 커뮤니티가 없어지니 같이 대화할 사람이 없네...</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>php 를 좋아하고 php로 뭘 만들어 보는것</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>술과 담배는...</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutContentsTitle>취미는 </AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>퇴근하고 동네 한바퀴는 꼭 뛰자. </AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>1주일에 한번은 동네 커피숍에 가서 코딩을 하자. </AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>하루에 자기전 한시간은 코딩을 하자. </AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutContentsTitle>Side Projects</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>MyBlog</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>인스타 짝퉁</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutPTag>앱</AboutStyleComponent.AboutPTag>

                        <AboutStyleComponent.AboutFigure><AboutStyleComponent.AboutContentsLink to="/"><AboutStyleComponent.AboutImage src="/assets/images/promo-banner.jpg" alt="" /></AboutStyleComponent.AboutContentsLink></AboutStyleComponent.AboutFigure>
                    </AboutStyleComponent.Container>
                </AboutStyleComponent.AboutSection>
                {/* <!--//about-section--> */}

            </AboutStyleComponent.MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}