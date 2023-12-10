import Sidebar from "../components/Sidebar"
import PeopleComunication from "../assets/illustration-people-languages.jpg"
import styles from "./TopicThree.module.css"

function TopicThree() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>Topic 3<br />How to Achieve Effective Intercultural Communication?</h2>
            <div className={styles.container}>
                <img src={PeopleComunication} alt="Ilustration people languaje" />
                <p>It's not only essential to be acquainted with other cultures, but intercultural communication also involves an awareness of one's own culture. Many times, our communications are filled with values that we transmit without being fully conscious of them. Intercultural communication not only means interacting with other cultures but also making the effort to rethink one's own culture.</p>
                <p>Firstly, one must be aware of their ethnocentric viewpoint and begin to reconsider many of the values that have hitherto underpinned what has been called cultural identity. I'm referring to those values that are based precisely on denigrating the foreign culture to praise one's own.</p>
                <p>This awareness should extend to language itself, as everyday language legitimates a social reality that can, at times, be profoundly discriminatory. Eliminating the negative stereotypes each culture holds about others is not an easy task. Communication is not merely an exchange of information; it also involves the ability to share emotions. In other words, one must be capable of creating an empathetic relationship. Empathy is the capacity to feel the emotion another person is experiencing. Having the ability to empathize is crucial in many interpersonal relationships.</p>
                <p>For effective intercultural communication, it is necessary to:</p>
                <ul>
                    <li>Have a common language</li>
                    <li>Possess knowledge of the foreign culture</li>
                    <li>Recognize one's own culture</li>
                    <li>Eliminate prejudices</li>
                    <li>Be capable of empathy</li>
                    <li>Know how to metacommunicate</li>
                    <li>Maintain a balanced relationship.</li>
                </ul>
            </div>
        </>
    )
}

export default TopicThree