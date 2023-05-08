import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import PropTypes from 'prop-types';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function ActionMenuItem({ children, item, className, onClick }) {
    
    return (
        <Button
            onClick={onClick}
            leftIcon={item.icon}
            className={cx('action-menu-items', className)}
            classNameIcon={cx('action-menu-icons')}
            to={item.to}
            href={item.href}
        >
            <span className={cx('button-content')}>{item.title}</span>
        </Button>
    );
}

ActionMenuItem.propTypes = {
    children: PropTypes.node,
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default ActionMenuItem;
