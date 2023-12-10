import Sidebar from '../components/Sidebar'
import ClaseProfe from '../assets/classroom-management-strategies-1.jpg'
import styles from './Actividad.module.css'

function Actividad() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>Welcome! <br /> Learning and Management of the Educational Environment</h2>
            <div className={styles.container}>
                <h3>INTRODUCTION</h3>
                <p>Learning occurs most effectively in an environment or setting where interaction and communication are possible, rather than as a set of memorized knowledge. This course will employ teaching methodologies that reflect and address the strengths and challenges of learners, facilitating their learning process.</p>
                <ul>
                    <li>
                    The ultimate goal in teaching a foreign language is to promote the development of thinking, social, and creative skills essential for lifelong learning and citizenship. Additionally, it aims to integrate language learning with cultural and cognitive aspects so that the acquisition of this language serves as a catalyst for the students' overall development.
                    </li>
                </ul>
                <img src={ClaseProfe} alt="Classroom management strategies" />
            </div>
        </>
    )
}

export default Actividad