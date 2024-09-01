import ContactCard from "../ContactCard"
import styles from "./contacts.module.css"
import CONTACT_LIST from "./contactList"

export default function Contacts() {
    return (
        <div className={styles.contactsContainer}>
            <h3>Contacts</h3>
            <div className={styles.contactsCards}>
                {
                    CONTACT_LIST.map((contact) => (
                        <ContactCard 
                            key={contact.id}
                            contactText={contact.contactText}
                            contactIcon={contact.contactIcon}
                            contactLink={contact.contactLink}/>
                    ))
                }
            </div>
        </div>
    )
}