import React from 'react'
import { TagCloud } from 'react-tagcloud';

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
            minSize={30}
            maxSize={90}
            tags={tagData}
            className="simple-cloud"
            onClick={(tag : any) => handleTagItemClick(tag.value)}
        />
    );
}