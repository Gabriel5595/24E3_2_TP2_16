import styles from "./projects.module.css"

import ProjectCard from "../ProjectCard"

export default function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h3>Projects</h3>
            <div className={styles.projectsCardsContainer}>
                <ProjectCard projectTitle="Project 1"/>
                <ProjectCard projectTitle="Project 2"/>
                <ProjectCard projectTitle="Project 3"/>
                <ProjectCard projectTitle="Project 4"/>
                <ProjectCard projectTitle="Project 5"/>
            </div>
        </div>
    )
}