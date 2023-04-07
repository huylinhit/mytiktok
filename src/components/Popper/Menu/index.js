import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ActionMenuItems from '~/components/Popper/Menu/ActionMenuItems';

import Tippy from '@tippyjs/react/headless';
import LanguageHeaderMenu from './LanguageHeaderMenu';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const data = current.data;

    //sua ten handleClick
    const handleClick = (childrenObject) => {
        const data = childrenObject;

        setHistory((prev) => [...prev, data]);
    };

    const onBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderMenuItems = () => {
        return data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <ActionMenuItems
                    onClick={() => {
                        isParent && handleClick(item.children);
                    }}
                    key={index}
                    item={item}
                />
            );
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 500]}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('action-menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('action-menu-list-wrapper')}>
                        {history.length > 1 && <LanguageHeaderMenu onBack={onBack} title={current.title} />}

                        {renderMenuItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
