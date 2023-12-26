import React from 'react';
import ReactDOM from 'react-dom';
import { LayoutModalStyle } from '@/Style/common-styles';
const { Container, FixedOpacity, ModalWapper, ModalCover, ModalBox, MessageArea, MessageBox, MessageCover, MessageWapper, ModalMessage: ModalMessageStyle, ButtonArea, ModalButton } = LayoutModalStyle;

export default function LayoutModal({ ModalMessage, AcceptButtonClick }: { ModalMessage: string; AcceptButtonClick: () => void }) {
    const modalTag = (
        <Container>
            <FixedOpacity />

            <ModalWapper onClick={() => AcceptButtonClick()}>
                <ModalCover>
                    <ModalBox>
                        <MessageArea>
                            <MessageBox>
                                <MessageCover>
                                    <MessageWapper>
                                        <ModalMessageStyle>{ModalMessage}</ModalMessageStyle>
                                    </MessageWapper>
                                </MessageCover>
                            </MessageBox>
                        </MessageArea>
                        <ButtonArea>
                            <ModalButton type="button" onClick={() => AcceptButtonClick()}>
                                확인
                            </ModalButton>
                        </ButtonArea>
                    </ModalBox>
                </ModalCover>
            </ModalWapper>
        </Container>
    );
    return ReactDOM.createPortal(modalTag, document.getElementById('modal-root') as HTMLElement);
}
