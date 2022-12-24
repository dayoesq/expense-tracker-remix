import { FaExclamationCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import type { FC } from 'react';

type ErrorProps = {
    title?: string;
    children: React.ReactNode;
};

const Error: FC<ErrorProps> = ({ title, children }) => {
    return (
        <div className='error'>
            <div className='icon'>
                <FaExclamationCircle />
            </div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

Error.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default Error;
