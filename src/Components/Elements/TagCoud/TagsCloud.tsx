import React from 'react';
import { TagCloud } from 'react-tagcloud';

export default function TagsCloud({
    tagData,
    minSize,
    maxSize,
    handleTagItemClick,
}: {
    tagData: any;
    minSize: number;
    maxSize: number;
    handleTagItemClick: (tagText: string) => void;
}) {
    return (
        <TagCloud
            minSize={minSize}
            maxSize={maxSize}
            tags={tagData}
            className="simple-cloud"
            onClick={(tag: any) => handleTagItemClick(tag.value)}
        />
    );
}
