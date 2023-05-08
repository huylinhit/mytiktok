import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css'; // optional
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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

LanguageHeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}


export default LanguageHeaderMenu;
