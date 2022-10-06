import styles from './Card.module.scss'

function Card(props) {

    return (
    <div className={styles.card}>
        <div className={styles.favorite}>
            <img src="img/unliked.svg" alt="unliked"/>
        </div>
        <img width ={133} height={112} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flax flex-column">
            <span>Цена:</span>
            <b> {props.price} руб.</b>
            </div>
            <button className="button" onClick={props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
        </div>
    </div>
    );
}

export default Card