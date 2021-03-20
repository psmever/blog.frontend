import { SearchBoxStyle, CreditsContainer, CreditsText, TagsLink } from '@Style/SearchPageStyles';

export default function SearchTagBox({ searchStr }: { searchStr: string }) {
    return (
        <SearchBoxStyle>
            <CreditsContainer>
                <CreditsText>
                    태그 검색 <TagsLink>{searchStr}</TagsLink>
                </CreditsText>
            </CreditsContainer>
        </SearchBoxStyle>
    );
}
