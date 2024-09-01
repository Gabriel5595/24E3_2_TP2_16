import styles from "./profBG.module.css"
import ProfBGCard from "../ProfessionalBackgroundCard"
import JOB_LIST from "./jobsList.js"

export default function ProfBG() {
    return (
        <div className={styles.backgroundContainer}>
            <h3>Professional Background</h3>

            <div className={styles.backgroundCardsContainer}>
                {
                JOB_LIST.map((job) => (
                    <ProfBGCard 
                        key={job.id}
                        jobTitle={job.jobTitle}
                        company={job.company}
                        contractType={job.contractType}
                        from={job.from}
                        to={job.to}
                        place={job.place}
                        description={job.description}
                        companyLogo={job.companyLogo}/>
                ))
                }
            </div>
        </div>
    )
}