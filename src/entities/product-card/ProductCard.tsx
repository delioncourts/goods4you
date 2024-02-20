import { FC } from 'react';
import styles from './ProductCard.module.css';
import star from '../../shared/assets/images/star.svg';
import React from "react";

type Card = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface ProductCard {
    card: Card | any;
}

const ProductCard: React.FC<ProductCard> = ({ card }) => {
    const { brand, id, images, rating, price, discountPercentage, stock, category, description } = card;

    //вычисляем размер скидки в деньгах
    let sumDiscount = (discountPercentage * 100) / price;
    //вычисляем сумму со скидкой, округляем до двух знаков после точки
    let totalPriceWDiscount = (price - sumDiscount).toFixed(2);

    //звездочки для рейтинга - больше 4.5 судя по макету эту 5 звездочек
    const getStars = (rating: any) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating < i) {
                stars.push(<span>☆</span>);
            } else {
                stars.push(<img src={star} alt="" />);
            }
        }
        return stars;
    }

    return (
        <div key={id} >
            <h1 className={styles.heading}>Product 5</h1>

            <div className={styles.content}>

                <div>
                    {images?.map((item: any) => (
                        <img src={item} alt={item.description} />
                    ))}
                </div>

                <div className={styles.description_content}>

                    <div className={styles.title_container}>
                        <h2 className={styles.title}>{brand}</h2>
                        <p className={styles.category_name}>SKU ID: <span className={styles.category_description}>{id}</span></p>
                    </div>

                    <div className={styles.categories_container}>
                        <p className={styles.category_name}>Rating <span className={styles.category_description}>{getStars(rating)}</span></p>
                        <p className={styles.category_name}>Base price <span className={styles.category_description}>{price}</span></p>
                        <p className={styles.category_name}>Discount percentage <span className={styles.category_description}>{discountPercentage}</span></p>
                        <p className={styles.category_name}>Discount price <span className={styles.category_description}>{totalPriceWDiscount}</span></p>
                        <p className={styles.category_name}>Stock <span className={styles.category_description}>{stock}</span></p>
                        <p className={styles.category_name}>Brand <span className={styles.category_description}>{brand}</span></p>
                        <p className={styles.category_name}>Category <span className={styles.category_description}>{category}</span></p>
                        <p className={styles.category_name}>Description <span className={styles.category_description}>{description}</span></p>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default ProductCard;