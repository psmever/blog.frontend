import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { defaultSelectBoxInterface, defaultSelectBoxItems } from 'commonTypes';

interface DefaultSelectBoxProps {
    options: defaultSelectBoxInterface,
    selectChange : ( category: string ) => void;
    selectItem : string,
}

export default function DefaultSelectBox({
    options,
    selectChange,
    selectItem,
}: DefaultSelectBoxProps) {

    const [selectedOption, setSelectedOption] = useState();

    const _handleChange = (e:any) => {
        selectChange(e.value);
    }

    // TODO 2020-09-29 00:19  선택 에러 남.

    useEffect(() => {
        console.debug(selectItem);
        // setSelectedOption({value: selectItem});
        setSelectedOption({value: 'S05990', label: 'runners' });
        // setSelectedOption({ value: "true", label: "Younger" });
    }, [selectItem]);

    return (
        <div style={{width: '100%'}}>
            <Select
                defaultValue={selectedOption}
                value={selectedOption}
                onChange={_handleChange}
                options={options}
            />
        </div>
    );
}