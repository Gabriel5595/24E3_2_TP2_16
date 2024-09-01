import styles from "./contactCard.module.css"
import 'primeicons/primeicons.css';

        

export default function ContactCard(props) {
    return (
        <div className={styles.contactCardContainer}>
            <i className={props.contactIcon}></i>
            <p><a href={props.contactLink}>{props.contactText}</a></p>
        </div>
    )
}