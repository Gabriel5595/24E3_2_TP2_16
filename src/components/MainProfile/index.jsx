import styles from "./mainProfile.module.css"
import profile_image from "../../resources/images/profile_image_small.jpeg"

export default function MainProfile() {
    return (
        <div className={styles.mainProfileContainer}>
            <div className={styles.mainProfileTextContainer}>
                <h1>Gabriel Carvalho</h1>
                <h2>My portfolio</h2>
            </div>
            <img src={profile_image} alt="Profile image - Gabriel Carvalho" className={styles.mainProfileImg}/>
        </div>
    )
}