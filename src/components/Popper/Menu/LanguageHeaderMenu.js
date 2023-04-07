import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css'; // optional
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LanguageHeaderMenu({ title, onBack }) {
    return (
        <header className={cx('language-menu-header')}>
            <button onClick={onBack} className={cx('back-icon')}>
                <FontAwesomeIcon  icon={faChevronLeft} />
            </button>
            <span>{title}</span>
        </header>
    );
}

export default LanguageHeaderMenu;
