import React from 'react'
import { TagCloud } from 'react-tagcloud';
import {apiTagGoupListInterface} from 'commonTypes';

interface tagCloudPros {
    tagData : any,
    handleTagItemClick: (tagText: string) => void;
}

export default function TagsCloud({
    tagData,
    handleTagItemClick
}: tagCloudPros) {

    return (
        <TagCloud
            minSize={22}
            maxSize={50}
            tags={tagData}
            className="simple-cloud"
            onClick={(tag : any) => handleTagItemClick(tag.value)}
        />
    );
}