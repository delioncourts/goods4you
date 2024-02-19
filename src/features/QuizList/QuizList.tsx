import QuizCard from '../../entities/quiz-card/QuizCard';

import styles from './QuizList.module.css';
import { useEffect, useState } from 'react';
import { PRODUCTS_CATEGORIES_URL } from './api/const';

const QuizList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    fetch(PRODUCTS_CATEGORIES_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <article className={styles.list}>

      {products.map((item) => (
        <QuizCard label={item} />
      ))}

    </article>
  )
}

export default QuizList;