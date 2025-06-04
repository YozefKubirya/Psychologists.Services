import Modal from 'react-modal';
Modal.setAppElement('#root');
import css from './ModalWraper.module.css'

export default function ModalWraper ({isOpen,handleClose,children}) {

   return (
   <>
    <Modal
      
      isOpen={isOpen}
      onRequestClose={handleClose}       
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}      
      overlayClassName={css.modalBackdrop}
      className={css.modalContent} 
    >
      {children}     
     
    </Modal>

   </>)
}