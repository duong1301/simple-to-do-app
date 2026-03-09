import classNames from "classnames/bind";
import style from "./Button.module.css"

const cx = classNames.bind(style)

function Button({children,className,onClick=()=>{}}) {
    return ( <button onClick={onClick} className={cx("btn",className)}>{children}</button> );
}

export default Button;