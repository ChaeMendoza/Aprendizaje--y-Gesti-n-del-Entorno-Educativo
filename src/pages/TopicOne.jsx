import Sidebar from "../components/Sidebar"
import InterculturalCompetence from "../assets/intercultural_competence-1.webp"
import styles from "./TopicOne.module.css"

function TopicOne() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>Topic 1 <br/> Intercultural Competence</h2>
            <div className={styles.container}>
                <img src={InterculturalCompetence} alt="Intercultural competence" />
                <p>Culture from the perspective of a multicultural organization:</p>
                <ul>
                    <li>A set of conscious and unconscious facts, rules, emotions, symbols, or artifacts that can determine practices, norms of social relations, etc.</li>
                    <li>That can impact ethnographic variables (nationality, ethnicity, language, or religion) affecting identities, images, belongings.</li>
                    <li>Whose goal is the adaptation of the individual and their social group to the environment in which they live.</li>
                    <li>That determine both social relations and other more individual aspects of the person in both private life and professional activities.</li>
                </ul>
                <p>Interculturality is a social, cultural, and communicative phenomenon in which two or more cultures or, more precisely, representatives of different specific cultural identities relate on equal terms, without any perspective prevailing over others or being considered "normal."</p>
                <p>Interculturality refers to the presence and equitable interaction of diverse cultures and the possibility of generating shared cultural expressions through dialogue and mutual respect.</p>
            </div>
        </>
    )
}

export default TopicOne