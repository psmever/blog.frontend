import React from "react";
import Select from 'react-select';
import { defaultSelectBoxInterface, defaultSelectBoxItems } from 'commonTypes';

interface DefaultSelectBoxProps {
    options: defaultSelectBoxInterface,
    selectOption : ( selectitem: defaultSelectBoxItems) => void;
    selectValue : defaultSelectBoxItems;
}

export default function DefaultSelectBox({
    options,
    selectOption,
    selectValue,
}: DefaultSelectBoxProps) {

    const _handleChange = (e:any) => {
        selectOption(e)
    }

    // TODO 2020-09-29 00:19  선택 에러 남.
    return (
        <div style={{width: '100%'}}>
            <Select
                defaultValue={selectValue}
                value={selectValue}
                onChange={_handleChange}
                options={options}
            />
        </div>
    );
}