import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ActionMenuItems from '~/components/Popper/Menu/ActionMenuItems';

import Tippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const data = items;

    const renderMenuItems = () => {
        return data.map((item, index) => {
            return <ActionMenuItems key={index} item={item} />;
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 500]}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('action-menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('action-menu-list-wrapper')}>{renderMenuItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
