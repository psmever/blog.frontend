import React, { useRef, useEffect, useState, useCallback } from 'react';
import { SectionGubunItem } from 'CommonTypes';
import { useHistory, useParams } from 'react-router-dom';
import { WriteBox, WriteContainer, LeftEditorBox, RightEditorPreviewBox } from '@Style/WrtePageStyle';
import { useDimensions } from '@Hooks';
import { isEmpty } from '@Helper';
import _Alert_ from '@_Alert_';
import Swal from 'sweetalert2';
import { postSectionCreate } from '@API';

import EditorBox from './EditorBox';
import PriviewBox from './PriviewBox';
import EditorButton from './EditorButton';

export default function SectionsWrite() {
    const history = useHistory();
    const inputRef = useRef<HTMLInputElement>(null);
    const [editBoxSizeState] = useDimensions(inputRef);

    const params = useParams<{
        section_gubun: SectionGubunItem;
    }>();

    const [sectionContent, setSectionContent] = useState<string>('');

    const handleSectionContent = useCallback((content: string) => {
        setSectionContent(content);
    }, []);

    const handleClickExitButton = useCallback(() => {
        history.push({
            pathname: `/sections/${params.section_gubun}`,
        });
    }, []);

    const handleClickSaveButton = () => {
        console.log('handleClickSaveButton');

        const saveSectionPost = () => {
            Swal.fire({
                title: '저장 하시겠습니까?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '저장',
                cancelButtonText: '취소',
            }).then(async result => {
                if (result.isConfirmed) {
                    const { status, payload } = await postSectionCreate({
                        section: params.section_gubun,
                        payload: {
                            contents: {
                                html: sectionContent,
                                text: sectionContent,
                            },
                        },
                    });
                    if (status) {
                        history.push({
                            pathname: `/sections/${params.section_gubun}`,
                        });
                    } else {
                        console.log({ error: payload });
                        throw new Error(`Error: 등록 처리중 문제가 발생했습니다.`);
                    }
                } else {
                }
            });
        };

        if (isEmpty(sectionContent)) {
            _Alert_.defaultInfo({ text: '내용을 입력해 주세요.' });
        } else {
            saveSectionPost();
        }
    };

    return (
        <WriteBox ref={inputRef}>
            <WriteContainer>
                <LeftEditorBox>
                    <EditorBox
                        editBoxSizeState={editBoxSizeState}
                        SectionGubun={params.section_gubun}
                        handleChangeContent={(e: string) => handleSectionContent(e)}
                    />
                    <EditorButton
                        handleExitButton={() => handleClickExitButton()}
                        handleSaveButton={() => handleClickSaveButton()}
                    />
                </LeftEditorBox>
                <RightEditorPreviewBox>
                    <PriviewBox priviewContent={sectionContent} />
                </RightEditorPreviewBox>
            </WriteContainer>
        </WriteBox>
    );
}
