import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import SearchHeader from '../SearchHeader';
import { faCircleQuestion, faMoon, faUser, faSun } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '../Button';
import Menu from '../Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessagesIcon, InboxIcon } from '../Icons';

import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

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
                }
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

const ACCOUNT_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get Coins',
    },
    {
        icon: <FontAwesomeIcon icon={faSun} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const isUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                
                <SearchHeader />
                
                <div className={cx('action')}>
                    <Button medium uploadBtn leftIcon={<FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>

                    {isUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('user-buttons')}>
                                    <MessagesIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('user-buttons')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>

                            <Menu items={ACCOUNT_MENU_ITEMS}>
                                <button className={cx('user-buttons', 'userAvatar')}>
                                    <img src={images.logo} className={cx('userAvatar')} />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button medium loginBtn>
                                <span>Log in</span>
                            </Button>
                            <Menu items={MENU_ITEMS}>
                                <button className={cx('settingBtn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
