import { useEffect, useState } from 'react';
import { PostListItem, TagItem, PostSearchAction } from 'CommonTypes';
import {
    SearchListContainer,
    SearchListCard,
    SearchLoadingCard,
    SearchListDescription,
    SearchItemTitle,
    SearchItemTag,
    SearchItemContent,
} from '@Style/SearchPageStyles';
import { ElementSpinner } from '@Element/Spinners';

export default function SearchListBox({
    searchActionState,
    searchResult,
    handleClick,
}: {
    searchActionState: PostSearchAction;
    searchResult: PostListItem[] | null;
    handleClick: (slug_title: string) => void;
}) {
    const [postList, setPostList] = useState<PostListItem[]>([]);

    useEffect(() => {
        if (searchResult !== null) {
            setPostList(searchResult);
        }
    }, [searchResult]);
    return (
        <SearchListContainer>
            {(function () {
                if (searchActionState.state === 'loading') {
                    return (
                        <SearchLoadingCard>
                            <ElementSpinner />
                        </SearchLoadingCard>
                    );
                }

                if (postList.length > 0) {
                    return postList.map((element: PostListItem) => {
                        return (
                            <SearchListCard key={element.post_uuid}>
                                <SearchListDescription onClick={() => handleClick(element.slug_title)}>
                                    <SearchItemTitle>{element.post_title}</SearchItemTitle>
                                    <SearchItemTag>
                                        {element.tags
                                            .map((e: TagItem) => {
                                                return e.tag_text;
                                            })
                                            .join(', ')}
                                    </SearchItemTag>
                                    <SearchItemContent>
                                        {element.list_contents.replace(
                                            /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,
                                            ''
                                        )}
                                    </SearchItemContent>
                                </SearchListDescription>
                            </SearchListCard>
                        );
                    });
                } else {
                    return (
                        <SearchListCard>
                            <SearchListDescription>
                                <SearchItemTitle>{`검색 결과가 없습니다.`}</SearchItemTitle>
                                <SearchItemTag></SearchItemTag>
                                <SearchItemContent></SearchItemContent>
                            </SearchListDescription>
                        </SearchListCard>
                    );
                }
            })()}
        </SearchListContainer>
    );
}
