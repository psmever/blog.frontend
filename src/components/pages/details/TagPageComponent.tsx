import React from 'react';
import {
    MainWarpper, ListSection, Container, CtaSection, CtaSectionContainer, Heading, Intro
} from "styles/Tags";
import {
    TagsCloud
} from 'components/elements';

export default function TagPage() {

    return (
        <MainWarpper>
            <CtaSection>
                <CtaSectionContainer>
                    <Heading> Tags 모음 </Heading>
                    <Intro> Tags 모음 </Intro>

                </CtaSectionContainer>
            </CtaSection>
            <ListSection>
                <Container>
                    <TagsCloud/>
                </Container>

            </ListSection>
        </MainWarpper>
    );
}