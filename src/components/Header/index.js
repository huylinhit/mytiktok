import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Settings from '../Settings';

const cx = classNames.bind(style);

console.log(images.logo);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult((prev) => [...prev, 3]);
        }, 3000);

        setAccounts((prev) => ['Hello', 'Xin chao']);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="1" {...attrs}>
                            {/* <Settings/> */}

                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('action')}>
                    {/* <button className={cx('m-btn', 'upload-btn')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span className={cx('upload-text')}>Upload</span>
                    </button>
                    <button className={cx('m-btn', 'login-btn')}>Log in</button>

                    <button className={cx('settings-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button> */}

                    <Button medium uploadBtn leftIcon={<FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>

                    <Button medium loginBtn>
                        <span>Log in</span>
                    </Button>

                    <Button settingBtn>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
