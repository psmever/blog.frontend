import { useState, useEffect } from 'react';
import { getTagGroups, tagItemSearch } from 'modules/API';
import { apiTagGoupListInterface, apiPostListResultItemsInterface } from 'commonTypes';
import { useHistory, useParams } from 'react-router-dom';

interface RouteParams {
    search_tag_item: string;
}

export default function useTag() {
    const history = useHistory();
    const { search_tag_item } = useParams<RouteParams>();
    const [tagGroupList, setTagGoupList] = useState<apiTagGoupListInterface>([
        {
            value: '',
            count: 0,
        },
    ]);
    const [searchItemResult, setSearchItemResult] = useState<apiPostListResultItemsInterface[]>([]);

    const handleTegItemClick = (tagValue: string) => {
        history.push({
            pathname: process.env.PUBLIC_URL + `/pages/tags/${tagValue}/search`,
            state: { list: true },
        });
    };

    useEffect(() => {
        const getTagsGroupList = async () => {
            const response = await getTagGroups();
            if (response.status === true) {
                setTagGoupList(response.payload);
            } else {
                setTagGoupList([]);
            }
        };
        getTagsGroupList();
    }, []);

    useEffect(() => {
        const tagItemSearchCall = async () => {
            const response = await tagItemSearch(search_tag_item);
            if (response.status === true && response.payload != null) {
                setSearchItemResult(response.payload);
            } else {
                setSearchItemResult([]);
            }
        };
        if (search_tag_item) {
            tagItemSearchCall();
        }
    }, [search_tag_item]);

    return {
        tagGroupList,
        handleTegItemClick,
        searchItemResult,
    };
}
