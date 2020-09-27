import React, { useState } from "react";
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


export default function DefaultSelectBox() {

    const [selectedOption, setSelectedOption] = useState();

    const _handleChange = () => {
        console.debug('_handleChange');
    }
    return (
        <div style={{width: '100%'}}>
            <Select
                defaultValue={selectedOption}
                onChange={_handleChange}
                options={options}
            />
        </div>
    );
}