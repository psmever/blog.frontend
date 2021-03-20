import { HashLoader } from 'react-spinners';
import { ElementSpinnerStyle } from '@Style/SpinnersStyles';

export default function ElementSpinner() {
    return (
        <ElementSpinnerStyle>
            <div className="sweet-loading">
                <HashLoader size={50} color={'#123abc'} loading={true} />
            </div>
        </ElementSpinnerStyle>
    );
}
