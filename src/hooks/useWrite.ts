import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editorContentsInterface, editorTagInterface } from 'commonTypes';
import { postCreateInterface } from 'reduxTypes';
import { postCreateAction } from 'modules/redux/post';
import { RootState } from 'modules';

export default function useWrite() {

    const dispatch = useDispatch();
    const post_create_state = useSelector((state: RootState) => state.post.create);

    const [ editorTitle, setEditorTitle] = useState<string>('');

    const [ editorContents, setEditorContents ] = useState<editorContentsInterface>({
        html: '',
        text: ''
    });

    // 글 쓰기 테그.
    const [ editorTagContents, setEditorTagContents] = useState<editorTagInterface>([]);

    // 글 쓰기 추천 테그.
    const [ editorTagSuggestions, setEditorTagSuggestions] = useState<editorTagInterface>([
        { id: 'Develop', text: 'Develop' },
        { id: 'Linux', text: 'Linux' },
        { id: 'Javascript', text: 'Javascript' },
        { id: 'PHP', text: 'PHP' },
    ]);

    const _handleClickSaveButton = () => {
        const dataObject : postCreateInterface = {
            title: editorTitle,
            tags: editorTagContents.map(({ id, text }) => ({ tag_id: id, tag_text: text })),
            contents: editorContents
        };
        dispatch(postCreateAction(dataObject));
    }

    const _handleClickPublishButton = () => {
        console.debug('_handleClickPublishButton');
    }

    useEffect(() => {
        setEditorTitle('');
        setEditorContents({
            html: '',
            text: ''
        });
        setEditorTagContents([])
    }, [])

    return {
        editorTitle,
        setEditorTitle,
        setEditorContents,
        editorContents,
        editorTagContents,
        setEditorTagContents,
        editorTagSuggestions,
        setEditorTagSuggestions,

        _handleClickSaveButton,
        _handleClickPublishButton,

        post_create_state,
    };
}