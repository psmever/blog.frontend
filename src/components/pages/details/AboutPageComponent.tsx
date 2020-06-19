import React from 'react';
import * as AboutStyleComponent from "styles/About";

export default function AboutPage() {
    return (
        <>
            <AboutStyleComponent.MainWrapper>

                <AboutStyleComponent.AboutSection>
                    <AboutStyleComponent.Container>
                        <AboutStyleComponent.Title>About Me</AboutStyleComponent.Title>

                        <AboutStyleComponent.AboutPTag>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutFigure><AboutStyleComponent.AboutImage src="/assets/images/about-me.jpg" alt="" /></AboutStyleComponent.AboutFigure>
                        <AboutStyleComponent.AboutContentsTitle>About The Blog</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutContentsTitle>My Skills and Experiences</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</AboutStyleComponent.AboutPTag>
                        <AboutStyleComponent.AboutContentsTitle>Side Projects</AboutStyleComponent.AboutContentsTitle>
                        <AboutStyleComponent.AboutPTag>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</AboutStyleComponent.AboutPTag>

                        <AboutStyleComponent.AboutFigure><AboutStyleComponent.AboutContentsLink to="/"><AboutStyleComponent.AboutImage src="/assets/images/promo-banner.jpg" alt="" /></AboutStyleComponent.AboutContentsLink></AboutStyleComponent.AboutFigure>
                    </AboutStyleComponent.Container>
                </AboutStyleComponent.AboutSection>
                {/* <!--//about-section--> */}

                <AboutStyleComponent.CtaSection>
                    <AboutStyleComponent.CtaContainer>
                        <AboutStyleComponent.CtaHeader>Newsletter</AboutStyleComponent.CtaHeader>
                        <AboutStyleComponent.CtaIntro>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</AboutStyleComponent.CtaIntro>
                        <AboutStyleComponent.CtaForm>
                            <AboutStyleComponent.CtaFormGroup>
                                <AboutStyleComponent.CtaFormLabel htmlFor="semail">Your email</AboutStyleComponent.CtaFormLabel>
                                <AboutStyleComponent.CtaInput type="email" placeholder="Enter email" />
                            </AboutStyleComponent.CtaFormGroup>
                            <AboutStyleComponent.CtaButton type="button">Subscribe</AboutStyleComponent.CtaButton>
                        </AboutStyleComponent.CtaForm>
                    </AboutStyleComponent.CtaContainer>
                    {/* <!--//container--> */}
                </AboutStyleComponent.CtaSection>

            </AboutStyleComponent.MainWrapper>
            {/* <!--//main-wrapper--> */}
        </>
    );
}