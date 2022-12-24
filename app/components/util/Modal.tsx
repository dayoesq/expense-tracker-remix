import type { FC } from 'react';
import PropTypes from 'prop-types';

type ModalProps = {
    children: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLDivElement>;
};

const Modal: FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className='modal-backdrop' onClick={onClose}>
            <dialog
                className='modal'
                open
                onClick={event => event.stopPropagation()}
            >
                {children}
            </dialog>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
};

export default Modal;
