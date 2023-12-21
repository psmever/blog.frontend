import { useRecoilState } from 'recoil';
import { AppRootState } from '@/State';
import { SystemNoticeBoxStyle } from '@/Style';
import { CloseIcon } from '@/Icon';

const { BoxWapper, ContentsWapper, ContentsBox, TitleSpan, ContentsSpan, ContentsCover, ButtonWapper, ButtonCover } = SystemNoticeBoxStyle;

export default function SystemNoticeBox() {
    const [appRootState, setAppRootState] = useRecoilState(AppRootState);

    return (
        <BoxWapper>
            <ContentsWapper>
                <ContentsBox>
                    <TitleSpan>Notice</TitleSpan>
                    <ContentsSpan>
                        <ContentsCover dangerouslySetInnerHTML={{ __html: appRootState.systemNotice }}></ContentsCover>
                    </ContentsSpan>
                </ContentsBox>
            </ContentsWapper>
            <ButtonWapper>
                <ButtonCover
                    onClick={() =>
                        setAppRootState((prevState) => ({
                            ...prevState,
                            systemNotice: ``
                        }))
                    }
                >
                    <CloseIcon />
                </ButtonCover>
            </ButtonWapper>
        </BoxWapper>
    );
}
