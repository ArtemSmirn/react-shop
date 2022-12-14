function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} length={40} src="/img/logo.svg" />
                <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                <img width={18} length={18} src="/img/card.svg"/>
                <span> 1205 руб.</span>
                </li>
                <li>
                <img width={18} length={18} src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header