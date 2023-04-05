import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    ...passProps
}) {
    let Comp = 'button';

    console.log(leftIcon);


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
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
