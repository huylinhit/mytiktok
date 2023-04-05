import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard, faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const listMenu = [
    {
        icon: faLanguage,
        name: 'English',
    },
    {
        icon: faCircleQuestion,
        name: 'Feedback and help',
    },
    {
        icon: faKeyboard,
        name: 'Keyboard shortcuts',
    },
    {
        icon: faMoon,
        name: 'Darkmode',
    },
];

function Settings() {
    return (
        <div className={cx('wrapper')}>
            {listMenu.map((menu, index) => {
                return (
                    <div key={index}>
                        <FontAwesomeIcon icon={menu.icon} />
                        <span>{menu.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Settings;
