import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ActionMenuItem({ children, item }) {
    return (
        <Button leftIcon={item.icon} className={cx('action-menu-item')} to={item.to} href={item.href}>
            {item.title}
        </Button>
    );
}

export default ActionMenuItem;
