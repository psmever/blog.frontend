import { useState, KeyboardEvent } from 'react';
import { CloseSmallIcon } from '@/Icon';
import { UniManageInput } from '@/Element';
import { ManagePostPageStyle } from '@/style/common-styles';
import lodash from 'lodash';

const { TagItem, TagIconWapper } = ManagePostPageStyle;

interface PageStateInterface {
    value: string;
    list: Array<string>;
}

export const UniTagInput = ({ Tags, ChangeTags }: { Tags: Array<string>; ChangeTags: (tags: Array<string>) => void }) => {
    const initialPageState = {
        value: ``,
        list: []
    };

    const [pageState, setPageState] = useState<PageStateInterface>(initialPageState);

    // 포커스 처리
    const HandleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== `Enter`) return;
        if (pageState.value === ``) return;

        ChangeTags([...Tags, pageState.value]);
        setPageState((prevState) => ({
            ...prevState,
            value: ``
        }));
    };

    const handleTagRemove = (index: number) => {
        ChangeTags(Tags.filter((_, i) => i !== index));
    };

    return (
        <>
            {lodash.map(Tags, (t, index) => {
                return (
                    <TagItem key={`uni-tag-input-item-${index}`}>
                        {t}
                        <TagIconWapper onClick={() => handleTagRemove(index)}>
                            <CloseSmallIcon />
                        </TagIconWapper>
                    </TagItem>
                );
            })}

            <UniManageInput
                TextSize={`sm`}
                Placeholder={`tag를 입력해 주세요`}
                OnChange={(e) =>
                    setPageState((prevState) => ({
                        ...prevState,
                        value: e.target.value
                    }))
                }
                InputValue={pageState.value}
                HandleOnKeyDown={(e) => HandleOnKeyDown(e)}
            />
        </>
    );
};
