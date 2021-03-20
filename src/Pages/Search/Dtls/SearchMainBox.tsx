import { useEffect, useState, useCallback } from 'react';
import { PostListItem } from 'CommonTypes';
import { SearchMainBoxStyle, SearchTopBox, SearchListBoxStyle } from '@Style/SearchPageStyles';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from '@Helper';
import { useSearch } from '@Hooks';

import SearchBox from './SearchBox';
import SearchTagBox from './SearchTagBox';
import SearchListBox from './SearchListBox';

export default function SearchMainBox() {
    const history = useHistory();
    const { search_gubun, search_str } = useParams<{
        search_gubun: 'posts' | 'tags';
        search_str: string;
    }>();

    const [postActionState, postSearchAction] = useSearch({ searchGubun: search_gubun });

    const [searchValue, setSearchValue] = useState<string>('');

    const [searchResultList, setSearchResultList] = useState<PostListItem[] | null>(null);

    const handleSearchInputChange = useCallback((searchStr: string) => {
        // if (!isEmpty(searchStr)) {
        setSearchValue(searchStr);
        // }
    }, []);

    const handleClickSearchEnter = () => {
        if (isEmpty(searchValue)) return;
        history.push({
            pathname: process.env.PUBLIC_URL + `/search/posts/${searchValue}`,
        });
    };

    const handleClickPostLink = (slug_title: string) => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/posts/${slug_title}/detail`,
        });
    };

    useEffect(() => {
        if (postActionState.state === 'success') {
            if (!isEmpty(postActionState.payload)) {
                setSearchResultList(postActionState.payload);
            } else {
                // 결과 없을때.
            }
        }
    }, [postActionState]);

    useEffect(() => {
        if (!isEmpty(search_gubun) && !isEmpty(search_str)) {
            postSearchAction({ searchValue: search_str });
        }
    }, [search_gubun, search_str]);

    return (
        <SearchMainBoxStyle>
            <SearchTopBox>
                {(function () {
                    if (search_gubun === 'posts') {
                        return (
                            <SearchBox
                                searchValue={searchValue}
                                handleChange={(e: string) => handleSearchInputChange(e)}
                                handleSearch={() => handleClickSearchEnter()}
                            />
                        );
                    } else if (search_gubun === 'tags') {
                        return <SearchTagBox searchStr={search_str} />;
                    }
                })()}
            </SearchTopBox>
            <SearchListBoxStyle>
                {postActionState.state === 'success' && (
                    <SearchListBox
                        searchResult={searchResultList}
                        handleClick={(slug_title: string) => handleClickPostLink(slug_title)}
                    />
                )}
            </SearchListBoxStyle>
        </SearchMainBoxStyle>
    );
}
