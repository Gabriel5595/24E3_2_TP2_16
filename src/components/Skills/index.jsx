import styles from "./skills.module.css"
import SkillCard from "../SkillCard"
import SKILL_LIST from "./skillList.js"

export default function Skills() {

    return (
        <div className={styles.skillsContainer}>
            <h3>Skills</h3>
            <div className={styles.skillsCardContainer}>
                {
                    SKILL_LIST.map((skill) => (
                        <SkillCard 
                            key={skill.id}
                            skillName={skill.name}
                            img={skill.img}/>
                    ))
                }
            </div>
        </div>
    )
}