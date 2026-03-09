import classNames from "classnames/bind";
import style from './Header.module.css'

const cx = classNames.bind(style)


function Header() {
    return <div className={cx("header")}>
        <h1>To-Do List</h1>
        
    </div>;
}

export default Header;