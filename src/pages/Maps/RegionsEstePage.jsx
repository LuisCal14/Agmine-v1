import {useState} from 'react';

import RegionesEste from '../../components/Maps/RegionesMacroRegionEste.jsx'

const RegionE = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handleClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignContent:"center", flexDirection:"column", backgroundColor:"black"}}>
            <p style={{color: "var(--color-white)", textAlign:"center", marginTop:"4rem"}}>{nombreArea}</p>
            <RegionesEste onClick={handleClick} />
        </div>
    )
}

export default RegionE