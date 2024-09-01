import styles from "./skillCard.module.css"

export default function SkillCard(props) {
    return (
        <div className={styles.skillCardContainer}>
            <img 
                src={props.img}
                alt="img placeholder" 
                className={styles.skillCardImg}/>
            <p className={styles.skillCardText}>{props.skillName}</p>
        </div>
    )
}