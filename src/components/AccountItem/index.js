import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const account = data;
    return (
        <Link to={`@${account.nickname}`} className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={account.avatar} alt="Avatar" />
            </div>

            <div className={cx('info')}>
                <h4 className={cx('info-title')}>
                    <span>{account.full_name}</span>
                    {account.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
                </h4>
                <h4 className={cx('info-note')}>{account.nickname}</h4>
            </div>
        </Link>
    );
}

export default AccountItem;
