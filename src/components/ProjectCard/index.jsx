import styles from "./projectCard.module.css"

export default function ProjectCard(props) {
    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardTexts}>
                <p className={styles.projectCardTitle}>{props.projectTitle}</p>
                <p className={styles.projectCardDescription}>Descrição. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reiciendis non nisi rem ex voluptates, dolorem amet repellat ipsum quaerat tenetur earum in culpa hic esse mollitia voluptatibus obcaecati nihil! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, repellendus itaque? Ducimus, minima! Exercitationem delectus, quibusdam autem aliquid nulla dolorem fugiat error tempore provident aperiam in quo eum expedita qui.</p>
                <p className={styles.projectCardLink}><a href="https://github.com/Gabriel5595?page=1&tab=repositories">Project Link</a></p>
            </div>
            
            <img 
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" 
                alt="Placeholder" 
                className={styles.projectCardImg}/>
        </div>
    )
}