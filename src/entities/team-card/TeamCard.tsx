
import styles from './TeamCard.module.css';

type TTeamCard = {
    name: string;
    title: string;
    image: string;
}

const TeamCard = ({ name, title, image }: TTeamCard) => {

    return (
        <article className={styles.image_wrap}>
            <img className={styles.image} src={image} alt={`Team member ${name}`} />

            <div className={styles.image_description}>
                <p className={styles.text_name}>{name}</p>
                <p className={styles.text_title}>{title}</p>
            </div>
        </article>
    )
}

export default TeamCard;