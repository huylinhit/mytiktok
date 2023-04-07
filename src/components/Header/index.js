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
    faKeyboard,
    faLanguage,
} from '@fortawesome/free-solid-svg-icons';

import { faCircleQuestion, faMoon } from '@fortawesome/free-regular-svg-icons';

import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import Settings from '../Settings';
import ActionItem from '../Popper/Menu/ActionMenuItems';
import Menu from '../Popper/Menu';
import LanguageMenu from '../Popper/Menu/LanguageHeaderMenu';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        href: 'https://fullstack.edu.vn/',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult((prev) => [...prev, 3]);
        // }, 3000);
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
                    <Button medium uploadBtn leftIcon={<FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>

                    <Button medium loginBtn>
                        <span>Log in</span>
                    </Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('settingBtn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
