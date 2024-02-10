import styles from './Team.module.css';
import team_mate_1 from '../../shared/assets/images/team_1.png';
import team_mate_2 from '../../shared/assets/images/team_2.png';
import team_mate_3 from '../../shared/assets/images/team_3.png';
import team_mate_4 from '../../shared/assets/images/team_4.png';
import team_mate_5 from '../../shared/assets/images/team_5.png';
import team_mate_6 from '../../shared/assets/images/team_6.png';

const Team = () => {

    return (
        <section className={styles.team}>
            <div className={styles.container}>
            <h2 className={styles.heading}>Our team</h2>

          

<div className={styles.image_wrap}>
            <img className={styles.image} src={team_mate_1} alt="#" />
<p className={styles.image_description}>Hi <br /> Hello</p>
            </div>
            </div>
        </section>
    )
}

export default Team;