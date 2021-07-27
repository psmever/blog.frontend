import { useState } from 'react';
import { ButtonDefaultWarp, DefaultButtonBox } from '@Style/ButtonStyles';
import { defaultYesNo } from 'CommonTypes';
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { putSectionHistoryDisplay, putSectionHistoryHidden } from '@API';
import { ButtonSpinner } from '@Element/Spinners';

export default function SectionManageButton({
    option,
    post_uuid,
    handleReload,
}: {
    option: defaultYesNo;
    post_uuid: string;
    handleReload: () => void;
}) {
    let optionIcon;
    let optionsName;

    if (option === 'Y') {
        optionIcon = faLock;
        optionsName = '안보이기';
    } else if (option === 'N') {
        optionIcon = faLockOpen;
        optionsName = '보이기';
    } else {
        optionIcon = faLockOpen;
        optionsName = '보이기';
    }

    const [buttonState, setButtonState] = useState<boolean>(false);

    const handleClickButton = async () => {
        setButtonState(true);
        if (option === 'Y') {
            await putSectionHistoryHidden({ post_uuid: post_uuid });
        } else {
            await putSectionHistoryDisplay({ post_uuid: post_uuid });
        }
        setButtonState(false);
        handleReload();
    };

    return (
        <ButtonDefaultWarp>
            {(function () {
                if (buttonState === true) {
                    return (
                        <>
                            <ButtonSpinner />;
                        </>
                    );
                } else {
                    return (
                        <DefaultButtonBox onClick={() => handleClickButton()}>
                            <FontAwesomeIcon icon={optionIcon} /> {optionsName}
                        </DefaultButtonBox>
                    );
                }
            })()}
        </ButtonDefaultWarp>
    );
}
