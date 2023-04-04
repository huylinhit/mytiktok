import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

console.log(images.logo);

function Header() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                <div className={cx('search')}>
                    <input
                        className={cx('search-content')}
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <button>Upload</button>
                    <button>Login</button>
                    <button>Settings</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
