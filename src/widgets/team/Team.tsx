import styles from './Team.module.css';
import team_mate_1 from '../../shared/assets/images/team_1.png';
import team_mate_2 from '../../shared/assets/images/team_2.png';
import team_mate_3 from '../../shared/assets/images/team_3.png';
import team_mate_4 from '../../shared/assets/images/team_4.png';
import team_mate_5 from '../../shared/assets/images/team_5.png';
import team_mate_6 from '../../shared/assets/images/team_6.png';


import TeamCard from '../../entities/team-card/TeamCard';
const Team = () => {

    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our team</h2>

                <div className={styles.team__list}>
                    <div className={styles.team__column}>
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_1} />
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_2} />
                    </div>

                    <div className={styles.team__column_up}>
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_3} />
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_4} />
                    </div>

                    <div className={styles.team__column}>
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_5} />
                        <TeamCard name="Maxim" title="Administrator" image={team_mate_6} />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Team;