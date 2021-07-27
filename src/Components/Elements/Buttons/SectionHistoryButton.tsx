import { ButtonDefaultWarp, DefaultButtonBox } from '@Style/ButtonStyles';
import { useHistory } from 'react-router-dom';
import { SectionGubunItem } from 'CommonTypes';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SectionHistoryButton({ SectionName }: { SectionName: SectionGubunItem }) {
    const history = useHistory();
    return (
        <ButtonDefaultWarp
            onClick={() => {
                history.push({
                    pathname: `${process.env.PUBLIC_URL}${SectionName}/history-list`,
                });
            }}
        >
            <DefaultButtonBox>
                <FontAwesomeIcon icon={faList} /> 히스토리
            </DefaultButtonBox>
        </ButtonDefaultWarp>
    );
}
