import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ActionMenuItems from '~/components/Popper/Menu/ActionMenuItems';

import Tippy from '@tippyjs/react/headless';
import LanguageHeaderMenu from './LanguageHeaderMenu';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const data = current.data;

    const handlePageLanguage = (childrenObject) => {
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
                    className={item.separate && cx('separate')}
                    onClick={() => {
                        isParent && handlePageLanguage(item.children);
                    }}
                    key={index}
                    item={item}
                />
            );
        });
    };

    return (
        <Tippy
            hideOnClick={false}
            interactive={true}
            delay={[0, 500]}
            onHide={() =>{
                setHistory([{data: items}]);
            }}
            placement="bottom"
            arrow={true}
            render={(attrs) => (
                <div className={cx('action-menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('action-menu-list-wrapper')}>
                        {history.length > 1 && <LanguageHeaderMenu onBack={onBack} title={current.title} />}

                        <div className={cx('menu-scroll')}>{renderMenuItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    item : PropTypes.array.isRequired
}

export default Menu;
