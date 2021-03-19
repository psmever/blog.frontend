import { KeyboardEvent } from 'react';
import {
    SearchBoxStyle,
    SearchContainer,
    SearchTitle,
    SearchInput,
    CreditsContainer,
    CreditsText,
    CreditsLink,
} from '@Style/SearchPageStyles';

export default function SearchBox({
    searchValue,
    handleChange,
    handleSearch,
}: {
    searchValue: string;
    handleChange: (searchStr: string) => void;
    handleSearch: () => void;
}) {
    // 엔터 키 이벤트 처리.
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        handleSearch();
    };
    return (
        <SearchBoxStyle>
            <SearchContainer>
                <SearchTitle>검색</SearchTitle>
                <SearchInput
                    type="text"
                    placeholder="검색어"
                    value={searchValue}
                    onChange={e => handleChange(e.target.value)}
                    onKeyPress={e => onEnter(e)}
                />
            </SearchContainer>

            <CreditsContainer>
                <CreditsText>
                    너무 많이 검색하면 차단 당함 <CreditsLink>@psmever</CreditsLink>
                </CreditsText>
            </CreditsContainer>
        </SearchBoxStyle>
    );
}
