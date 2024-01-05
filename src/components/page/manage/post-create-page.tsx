import { ManagePostPageStyle } from '@/Style/common-styles';
import PostPreview from './post-preview';
import PostEditor from './post-editor';
import { useEffect, useState } from 'react';
import { ServicePostCreate } from '@/ServerInterface';
import { useLayout } from '@/hook';
import { useRouter } from 'next/navigation';
import { DefaultStateType } from '@/Types';
import { LoadingIcon } from '@/Icon';

const { MainContainer, MainWapper, EditorSection, PreViewSection, LoadingWapper } = ManagePostPageStyle;

interface PageStateInterface {
    loading: boolean;
    istyping: string | DefaultStateType;
    title: string;
    contents: string;
    tags: Array<string>;
}

export default function ManagePostCreatePage() {
    const initialPageState = {
        loading: false,
        istyping: `yet`,
        title: ``,
        contents: ``,
        tags: []
    };

    const [pageState, setPageState] = useState<PageStateInterface>(initialPageState);
    const { OpenLayoutModal } = useLayout();
    const router = useRouter();

    useEffect(() => {
        const funcTempCreate = async () => {
            setPageState((prevState) => ({
                ...prevState,
                loading: true,
                istyping: `yet`
            }));

            const { title, tags, contents } = pageState;
            const { status, payload, message } = await ServicePostCreate({ title: title, tags: tags, contents: contents });

            if (status) {
                router.push(`/manage/post/${payload.uuid}`);
            } else {
                OpenLayoutModal({ message: message });
            }
        };

        const { title, tags, contents, istyping } = pageState;
        if (istyping === `end` && title.length > 1 && tags.length > 1 && contents.length > 1) {
            funcTempCreate().then();
        }
    }, [OpenLayoutModal, pageState, router]);

    return (
        <MainContainer>
            <MainWapper Opacity={pageState.loading}>
                <EditorSection>
                    <PostEditor
                        Title={pageState.title}
                        ChangeTitle={(title) =>
                            setPageState((prevState) => ({
                                ...prevState,
                                title: title
                            }))
                        }
                        Tags={pageState.tags}
                        ChangeTags={(tags) =>
                            setPageState((prevState) => ({
                                ...prevState,
                                tags: tags
                            }))
                        }
                        Contents={pageState.contents}
                        ChangeContents={(contents) =>
                            setPageState((prevState) => ({
                                ...prevState,
                                contents: contents
                            }))
                        }
                        IsTyping={(state) =>
                            setPageState((prevState) => ({
                                ...prevState,
                                istyping: state
                            }))
                        }
                    />
                </EditorSection>
                <PreViewSection>
                    <PostPreview Title={pageState.title} Contents={pageState.contents} />
                </PreViewSection>
            </MainWapper>

            {pageState.loading && (
                <LoadingWapper>
                    <LoadingIcon />
                </LoadingWapper>
            )}
        </MainContainer>
    );
}
