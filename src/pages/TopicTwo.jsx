import Sidebar from "../components/Sidebar"
import ChildremWord from "../assets/childrem.png"
import styles from "./TopicTwo.module.css"

function TopicTwo() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>Topic 2 <br /> Principles of Interculturality</h2>
            <div className={styles.container}>
                <p>There are no cultures superior to others, nor more advanced; instead, all cultures are equally worthy and deserving of respect. Therefore, the only way to understand a culture is to interpret it from its own criteria. Cultures are enriched through contact with others: the greatest manifestations of cultural wealth and diversity are associated with migration, integration, hybridization, and mestizaje.</p>
                <p>There are three recognizable types of interculturality:</p>
                <ol>
                    <li>
                        Relational Interculturality, which concerns the contact between cultures, i.e., the equal coexistence of people from different cultural backgrounds.
                    </li>
                    <li>
                        Functional Interculturality, which involves the inclusion of traditionally marginalized groups in the economic, cultural, social, and political apparatus of the nation through equalizing mechanisms such as positive discrimination.
                    </li>
                    <li>
                        Critical Interculturality, which involves fostering a critical debate regarding relationships between cultures to illuminate and question historical, colonial, and racial inequities among different cultures, promoting a high-level cultural dialogue.
                    </li>
                </ol>
                <img src={ChildremWord} alt="Childrem Intercultural" />
            </div>
        </>
    )
}

export default TopicTwo