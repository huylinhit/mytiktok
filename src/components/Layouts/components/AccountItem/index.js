import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={images.avatar} alt="Avatar" />
            </div>

            <div className={cx('info')}>
                <h4 className={cx('info-title')}>
                    <span>Ngo Ngoc Hoa</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck}/>
                    </h4>
                <h4 className={cx('info-note')}>Ngo Ngoc Hoa</h4>
            </div>
        </div>
    );
}

export default AccountItem;
