import {useState} from 'react';

import RegionesSur from '../../components/Maps/RegionesMacroRegionSur.jsx'

const RegionS = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handleClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent:"center" , alignContent:"center", flexDirection:"column", backgroundColor:"black"}}>
            <p style={{color: "var(--color-white)", textAlign:"center", marginTop:"4rem"}}>{nombreArea}</p>
            <RegionesSur onClick={handleClick} />
        </div>
    )
}

export default RegionS