import React, {useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


export default function WaitingPostModal() {

    const [modalIsOpen,setIsOpen] = useState(false);
    // function openModal() {
    //   setIsOpen(true);
    // }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }

    function closeModal(){
      setIsOpen(false);
    }

    return (

            // <Modal
            //     isOpen={true}
            //     // onAfterOpen={afterOpenModal}
            //     // onRequestClose={closeModal}
            //     // style={customStyles}
            //     // contentLabel="Example Modal"
            //     appElement={document.getElementById('root') as HTMLElement}
            //     // ariaHideApp={process.env.NODE_ENV !== 'test'}


            //     // testId="modal-content"
            //     >

            //     asdasdasd
            // </Modal>

            // <Modal
            //     isOpen={modalIsOpen}
            //     onAfterOpen={afterOpenModal}
            //     onRequestClose={closeModal}
            //     style={customStyles}
            //     contentLabel="Example Modal"
            //     appElement={document.getElementById('root') as HTMLElement}
            //     >

            //     <button onClick={closeModal}>close</button>
            //     <div>I am a modal</div>
            //     <form>
            //         <input />
            //         <button>tab navigation</button>
            //         <button>stays</button>
            //         <button>inside</button>
            //         <button>the modal</button>
            //     </form>
            // </Modal>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                appElement={document.getElementById('root') as HTMLElement}
                >

                <ul className="mylist">
                    <li>목록 아이템 1</li>
                    <li>목록 아이템 2</li>
                    <li>목록 아이템 3</li>
                    <li>목록 아이템 4</li>
                    <li>목록 아이템 5</li>
                </ul>
            </Modal>

    );
}