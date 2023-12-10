import Logo from '../assets/logo.png'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <h1>UNIVERSIDAD DE LAS FUERZAS <br /> ARMADAS ESPE</h1>
            <img src={Logo} alt="Logo fuerzas armadas" className='image-logo' />
            <h2>NRC 18229_MATERIALS ENVIRON RESOURCES</h2>
            <h2>GROUP: 13</h2>
            <Link to="/actividad">
                <button>Comenzar Actividad</button>
            </Link>
        </>
    )
}