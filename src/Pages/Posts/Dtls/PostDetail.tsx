import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { useParams, useHistory } from 'react-router-dom';
import { isEmpty } from '@Helper';
import { incrementViewCount } from '@API';
import { getPostDetail, clearPostContents, clearPostDetail } from '@Store/Posts';
import { PostDetailItem, TagItem } from 'CommonTypes';
import { PageSpinner } from '@Element/Spinners';
import {
    PostDetailBox,
    Header,
    HeaderTitle,
    HeaderMeta,
    HeaderDate,
    ModifyButton,
    PostTag,
    PostTagMeta,
    PostTags,
    PostTagsItems,
    PostTagsItem,
} from '@Style/PostDetailStyles';
import { PostEditButton } from '@Element/Buttons';
import MarkdownRender from '@Element/Markdown/MarkdownRender';

interface RouteParams {
    slug_title: string;
}

const initPostInfo = {
    post_title: '',
    detail_created: '',
    tags: [],
    contents_text: '',
};

export default function PostDetail() {
    const history = useHistory();
    const { appLoginState, detailInfo, detailState } = useSelector((store: RootState) => ({
        appLoginState: store.app.loginState,
        detailInfo: store.posts.detail.info,
        detailState: store.posts.detail.state,
    }));

    const dispatch = useDispatch();
    const parmas = useParams<RouteParams>();

    const [postInfo, setPostInfo] = useState<{
        post_title: string;
        detail_created: string;
        tags: TagItem[];
        contents_text: string;
    }>(initPostInfo);

    const [editButtonLink, SetEditButtonLink] = useState<string>(``);

    useEffect(() => {
        const getPostDeailtInfo = (slug_title: string) => {
            dispatch(getPostDetail({ slug_title: slug_title }));
        };

        if (!isEmpty(parmas.slug_title)) {
            getPostDeailtInfo(parmas.slug_title);
        }
    }, [parmas]);

    useEffect(() => {
        const dataSetPostInfo = async (info: PostDetailItem) => {
            setPostInfo({
                post_title: info.post_title,
                detail_created: info.detail_created,
                tags: info.tags,
                contents_text: info.contents_text,
            });

            if (appLoginState !== true && !isEmpty(info.post_uuid)) {
                await incrementViewCount(info.post_uuid);
            }

            SetEditButtonLink(`/posts/${detailInfo.post_uuid}/edit`);
        };

        if (!isEmpty(detailInfo)) {
            dataSetPostInfo(detailInfo);
        }
    }, [detailInfo]);

    useEffect(() => {
        return () => {
            // 나갈때 초기화.
            dispatch(clearPostContents());
            dispatch(clearPostDetail());
        };
    }, []);

    return (
        <PostDetailBox>
            {(function () {
                if (detailState === 'loading') {
                    return <PageSpinner />;
                } else {
                    return (
                        <>
                            <Header>
                                <HeaderTitle>{postInfo.post_title}</HeaderTitle>
                                <HeaderMeta>
                                    <HeaderDate>{postInfo.detail_created}</HeaderDate>
                                    {appLoginState === true && (
                                        <ModifyButton>
                                            <PostEditButton EditLink={editButtonLink} />
                                        </ModifyButton>
                                    )}
                                </HeaderMeta>
                            </Header>
                            <PostTag>
                                <PostTagMeta>
                                    <PostTags>
                                        {postInfo.tags.map((element, n) => {
                                            return (
                                                <PostTagsItems key={n}>
                                                    <PostTagsItem
                                                        onClick={() => {
                                                            history.push({
                                                                pathname:
                                                                    process.env.PUBLIC_URL +
                                                                    `/search/tags/${element.tag_text}`,
                                                            });
                                                        }}
                                                    >
                                                        {element.tag_text}
                                                    </PostTagsItem>
                                                </PostTagsItems>
                                            );
                                        })}
                                    </PostTags>
                                </PostTagMeta>
                            </PostTag>

                            <MarkdownRender markdownText={postInfo.contents_text} />
                        </>
                    );
                }
            })()}
        </PostDetailBox>
    );
}
