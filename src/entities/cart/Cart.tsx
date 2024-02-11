
import { useState } from 'react';

import styles from './Cart.module.css';
import image from '../../shared/assets/images/cart.svg';

const Cart = ({ }) => {
    const [count, setCount] = useState('1');

    return (

        <div className={styles.content}>
            <img src={image} alt="#" className={styles.cart__image} />
            <p className={styles.count}>{count}</p>
        </div>
    )
}

export default Cart;