import classNames from "classnames/bind";
import style from './Board.module.css'

const cx = classNames.bind(style)

function Board({children}) {
    return <div className={cx("board")}>
        {children}
    </div>;
}

export default Board;