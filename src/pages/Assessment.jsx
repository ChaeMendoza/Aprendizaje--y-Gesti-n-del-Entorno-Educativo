import Sidebar from "../components/Sidebar";
import Preguntas from "../preguntas-respuestas.json"
import styles from "./Assessment.module.css";

function Assessment() {
    return (
        <>
            <Sidebar />
            <h2 className={styles.title}>Assesment</h2>
            <div className={styles.container}>
                {
                    Object.keys(Preguntas).map(pregunta => (
                        <div key={pregunta.id}>
                            <h3>{pregunta.pregunta}</h3>
                            <p>{pregunta.respuesta_correcta}</p>
                            <p>{pregunta.respuesta_incorrecta}</p>
                            <p>{pregunta.respuesta_incorrecta_dos}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Assessment