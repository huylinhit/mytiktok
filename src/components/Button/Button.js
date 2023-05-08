import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disabled = false,
    large = false,
    medium = false,
    small = false,
    uploadBtn = false,
    loginBtn = false,
    settingBtn = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    onClick,
    classNameIcon,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        disabled,
        medium,
        large,
        small,
        uploadBtn,
        loginBtn,
        settingBtn,
        rounded,
        to,
        href
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon',classNameIcon)}>{leftIcon}</span>}
            <span className={cx('button-content')}>{children}</span>
            {rightIcon && <span className={cx('icon',classNameIcon)}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to : PropTypes.string,
    href : PropTypes.string,
    disabled : PropTypes.bool,
    large : PropTypes.bool,
    medium : PropTypes.bool,
    small : PropTypes.bool,
    uploadBtn : PropTypes.bool,
    loginBtn : PropTypes.bool,
    settingBtn : PropTypes.bool,
    rounded : PropTypes.bool,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    children : PropTypes.node.isRequired,
    onClick : PropTypes.func,
    classNameIcon : PropTypes.string,
}

export default Button;
