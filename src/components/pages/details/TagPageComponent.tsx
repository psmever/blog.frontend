import React from 'react';
import {
    MainWarpper, ListSection, Container, CtaSection, CtaSectionContainer, Heading, Intro
} from "styles/Tags";
import {
    TagsCloud,
    PostSearchList
} from 'components/elements';

import useTag from 'hooks/useTag';

export default function TagPage() {

    const {
        tagGroupList,
        handleTegItemClick,
        searchItemResult
    } = useTag();

    return (
        <MainWarpper>
            <CtaSection>
                <CtaSectionContainer>
                    <Heading> Tags </Heading>
                    <Intro> 테그를 클릭해 주세요. </Intro>
                </CtaSectionContainer>
            </CtaSection>
            <ListSection>
                {searchItemResult.length > 0
                ?
                    <PostSearchList
                        listData={searchItemResult}
                    />
                :
                    <Container>
                        <TagsCloud
                            tagData={tagGroupList}
                            handleTagItemClick={handleTegItemClick}
                        />
                    </Container>
                }
            </ListSection>
        </MainWarpper>
    );
}