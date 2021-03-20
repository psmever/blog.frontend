import { useState, useEffect } from 'react';
import { Card, Description, Title, WeatherWapper, CoronaWapper } from '@Style/LeftSidebar';
import { TagsCloud } from '@Element/TagCoud';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { TagGroupItem } from 'CommonTypes';
import { WeatherBox, CoronaBox } from '@Elements';

export default function LeftSidebarComponent() {
    const { tagsGroupState, tagsGroupTags, specialtyWeathersState, specialtyCovidesState } = useSelector(
        (store: RootState) => ({
            tagsGroupState: store.common.tagsGroup.state,
            tagsGroupTags: store.common.tagsGroup.tags,
            specialtyWeathersState: store.specialty.weathers.state,
            specialtyCovidesState: store.specialty.covides.state,
        })
    );

    const [tagsGroupList, setTagsGroupList] = useState<TagGroupItem[]>([]);

    useEffect(() => {
        const fetchesTags = (element: TagGroupItem[]) => {
            setTagsGroupList(element);
        };

        if (tagsGroupState === 'success') {
            fetchesTags(tagsGroupTags);
        }
    }, [tagsGroupState]);

    return (
        <>
            {tagsGroupList.length > 0 && (
                <Card>
                    <Description>
                        <Title>태그들</Title>
                        <TagsCloud
                            tagData={tagsGroupList}
                            minSize={10}
                            maxSize={40}
                            handleTagItemClick={(tagText: string) => console.log(tagText)}
                        />
                        {/* </Contents> */}
                    </Description>
                </Card>
            )}

            {specialtyCovidesState === 'success' && (
                <CoronaWapper>
                    <CoronaBox />
                </CoronaWapper>
            )}

            {specialtyWeathersState === 'success' && (
                <WeatherWapper>
                    <WeatherBox />
                </WeatherWapper>
            )}
        </>
    );
}
