import Sidebar from "../components/Sidebar"
import ChildremRol from "../assets/Childrem-rol.png"
import GroupTwo from "../assets/group2.png"
import styles from "./Activity.module.css"

function Activity() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>ACTIVITY<br />Role-play: Students work in two groups.</h2>
            <div className={styles.container}>
                <img src={ChildremRol} alt="Play rol" />
                <p><span>Group A:</span> What would you do if you were an immigrant from an unknown country? Imagine that, for economic reasons, you are moving to a distant country. It used to be a colony but is now independent and undergoing development, seeking people to repopulate. The main occupation is fishing, and the climate is tropical with very hot summers and rainy winters. They speak a different language, and the religion is also different.</p>
                <p>List of questions: Once in the country:</p>
                <ol>
                    <li>What language would be spoken in your home? Why?</li>
                    <li>Will you learn the language of the country? Why?</li>
                    <li>Your clothing is different from what is commonly worn in the new country. Will you start wearing the country's clothing? Why?</li>
                    <li>Will you attend the local temple? Why?</li>
                    <li>Will you observe Thursday as a holy day of the week, as the people of the country do? Why?</li>
                    <li>You normally eat beef, but people in the new country consider eating beef to be a cruel and offensive practice. What would you do? Why?</li>
                    <li>Women have a very high status, and most family decisions are made by them. Would your family follow the same principle?</li>
                </ol>
                <img src={GroupTwo} alt="Group B" />
                <p><span>Group B:</span> What should immigrants do in your country? Imagine that, for economic reasons, some foreigners come to live in your country. Your country is undergoing development and is looking for people to repopulate. The economy depends on fishing, and the climate is tropical with very hot summers and rainy winters. The foreigners who come speak a different language, and their religion is also different.</p>
                <p>List of questions: Once in the country:</p>
                <ol>
                    <li>What language should they speak in their homes? Why?</li>
                    <li>Should they be required to learn the language of the country? Why?</li>
                    <li>Their clothing is different from what is normally worn in your country. Should they start wearing the country's clothing? Why?</li>
                    <li>Should temples of their religion be built? Why?</li>
                    <li>Should they observe Thursday as a holy day of the week, as the people of the country do? Why?</li>
                    <li>In your country, beef is not commonly eaten, and it is considered a cruel and offensive practice. Do you think they should abstain from eating it? Why?</li>
                    <li>Women have a very high status, and most family decisions are made by them. Should the new families follow the same principle used in your country?</li>
                </ol>
            </div>
        </>
    )
}

export default Activity