import {useState} from 'react';

import RegionesNorte from '../../components/Maps/RegionesMacroRegionNorte.jsx'

const RegionN = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handleClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent:"center" , alignContent:"center", flexDirection:"column", backgroundColor:"black"}}>
            <p style={{color: "var(--color-white)", textAlign:"center", marginTop:"4rem"}}>{nombreArea}</p>
            <RegionesNorte onClick={handleClick} />
        </div>
    )
}

export default RegionN