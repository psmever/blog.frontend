import React, { useRef, useEffect } from 'react';
import { RootState } from 'StoreTypes';
import { useDimensions } from '@Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { clearPostContents, changePostGubun } from '@Store/Posts';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';
import EditorButton from './EditorButton';

export default function Write() {
    const { pathName } = useSelector((store: RootState) => ({
        pathName: store.router.location.pathname,
    }));

    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [editBoxSizeState] = useDimensions(inputRef);

    useEffect(() => {
        const setPagePathName = (pathname: string) => {
            if (pathname === 'posts' || pathname === 'scribble' || pathname === 'blog' || pathname === 'mingun') {
                dispatch(changePostGubun({ gubun: pathname }));
            }
        };

        if (pathName) {
            const pathArray = pathName.split('/').filter(e => e);
            setPagePathName(pathArray[0]);
        }
    }, [pathName]);

    useEffect(() => {
        return () => {
            dispatch(clearPostContents());
        };
    }, []);

    return (
        <WriteBox ref={inputRef}>
            <WriteContainer>
                <LeftEditorBox>
                    <EditorBox editBoxSizeState={editBoxSizeState} />
                    <EditorButton />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
