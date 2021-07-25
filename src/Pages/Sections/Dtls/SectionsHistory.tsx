import React from 'react';

import {
    SectionHistoryWrapper,
    TitleWrapper,
    TableWrapper,
    FlTable,
    FlTableHead,
    FlTableTr,
    FlTableTbody,
    FlTableTbodyTr,
} from '@Style/SectionsHistorysStyles';

export default function SectionsHistory() {
    return (
        <SectionHistoryWrapper>
            <TitleWrapper>
                <h2>LunaTalk Publish List</h2>
            </TitleWrapper>
            <TableWrapper>
                <FlTable>
                    <FlTableHead>
                        <FlTableTr>
                            <th>이름</th>
                            <th>컴포넌트</th>
                            <th>링크</th>
                        </FlTableTr>
                    </FlTableHead>
                    <FlTableTbody>
                        <FlTableTbodyTr>
                            <td>이름</td>
                            <td>컴포넌트</td>
                            <td>링크</td>
                        </FlTableTbodyTr>
                    </FlTableTbody>
                </FlTable>
            </TableWrapper>
        </SectionHistoryWrapper>
    );
}
