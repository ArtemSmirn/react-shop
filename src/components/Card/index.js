import styles from './Card.module.scss'
import React from 'react'

function Card({onClickFavorite, title, imageUrl, price, onClickPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)

    const handlePlus = () => {
        onClickPlus({title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    return (
    <div className={styles.card}>
        <div className={styles.favorite}>
            <img src="img/unliked.svg" alt="unliked" onClick={onClickFavorite}/>
        </div>
        <img width ={133} height={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flax flex-column">
            <span>Цена:</span>
            <b> {price} руб.</b>
            </div>
            <img className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" onClick={handlePlus} />
        </div>
    </div>
    );
}

export default Card
