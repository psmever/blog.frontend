import { ButtonDefaultWarp, DefaultButtonBox } from '@Style/ButtonStyles';
import { useHistory } from 'react-router-dom';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PostEditButton({ EditLink }: { EditLink: string }) {
    const history = useHistory();
    return (
        <ButtonDefaultWarp
            onClick={() => {
                history.push({
                    pathname: `${process.env.PUBLIC_URL}${EditLink}`,
                });
            }}
        >
            <DefaultButtonBox>
                <FontAwesomeIcon icon={faPencilAlt} /> 수정
            </DefaultButtonBox>
        </ButtonDefaultWarp>
    );
}
