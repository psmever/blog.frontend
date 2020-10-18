import React from 'react';
import {
    MainWarpper, ListSection, Container, CtaSection, CtaSectionContainer, Heading, Intro
} from "styles/Tags";
import {
    TagsCloud
} from 'components/elements';

import useTag from 'hooks/useTag';

export default function TagPage() {

    const {
        tagGroupList,
        handleTegItemClick
    } = useTag();

    return (
        <MainWarpper>
            <CtaSection>
                <CtaSectionContainer>
                    <Heading> Tags 모음 </Heading>
                </CtaSectionContainer>
            </CtaSection>
            <ListSection>
                <Container>
                    <TagsCloud
                        tagData={tagGroupList}
                        handleTagItemClick={handleTegItemClick}
                    />
                </Container>
            </ListSection>
        </MainWarpper>
    );
}