import styles from "./profBGCard.module.css"

export default function ProfBGCard(props) {
    return (
        <div className={styles.ProfBGCardContainer}>

            <div className={styles.ProfBGCardImgContainer}>
                <img src={props.companyLogo} alt={props.company}  className={styles.ProfBGCardImg}/>
            </div>

            <div className={styles.ProfBGCardTextContiner}>

                <div className={styles.ProfBGCardSubContainer}>
                    <h3 className={styles.ProfBGCardjobTitle}>{props.jobTitle}</h3>
                </div>

                <div className={styles.ProfBGCardMinorInfo}>
                    <div className={styles.ProfBGCardSubContainer}>
                        <p className={styles.ProfBGCardCompany}>{props.company}</p>
                        <p> | </p>
                        <p className={styles.ProfBGCardContractType}>{props.contractType}</p>
                    </div>

                    <div className={styles.ProfBGCardSubContainer}>
                        <p className={styles.ProfBGCardFromDate}>{props.from}</p>
                        <p>-</p>
                        <p className={styles.ProfBGCardToDate}>{props.to}</p>
                    </div>

                    <p className={styles.ProfBGCardPlace}>{props.place}</p>
                </div>
                
                <p className={styles.ProfBGCardDescription}>{props.description}</p>
            </div>
                
            
            
        </div>
    )
}