import styles from "./home.module.css";
import MainProfile from "../../components/MainProfile"
import AboutMe from "../../components/AboutMe"
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contacts from "../../components/Contacts";
import ProfBG from "../../components/ProfessionalBackground";

export default function Home() {
    return (
        <div>
            <MainProfile />
            <AboutMe />
            <Skills />
            <Projects />
            <ProfBG />
            <Contacts />
        </div>
    )
}