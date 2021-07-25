import { ButtonDefaultWarp, DefaultButtonBox } from '@Style/ButtonStyles';
import { useHistory } from 'react-router-dom';
import { SectionGubunCode } from 'CommonTypes';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SectionHistoryButton({ SectionCode }: { SectionCode: SectionGubunCode }) {
    const history = useHistory();
    return (
        <ButtonDefaultWarp
            onClick={() => {
                history.push({
                    pathname: `${process.env.PUBLIC_URL}${SectionCode}/history-list`,
                });
            }}
        >
            <DefaultButtonBox>
                <FontAwesomeIcon icon={faList} /> 히스토리
            </DefaultButtonBox>
        </ButtonDefaultWarp>
    );
}
