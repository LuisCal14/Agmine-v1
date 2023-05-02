import React from 'react'
import About1 from '../assets/images/about1.png';
import About2 from '../assets/images/about2.png';
import About3 from '../assets/images/about3.png';
import '../assets/style/aboutmain.css';

function MainAbout() {
  return (
    <>
     <div className="aboutm">
        <div class="about1">
            <div id="text">
                <h1>Sobre Nosotros</h1>
                <p>Somos un grupo de estudiantes del instituto tecnico Salesiano (ITESA)
                dedicados a la programacion tanto web como desktop con un  
                objetivo clave
                </p>
            </div>
            <div id="img"><img src={About1} alt=""/></div>
        </div>

        <div class="about2">
            <div id="text">
                <h1>Misión</h1>
                <p>Ayudar a los profesores de geografía e historia a tener una clase más dinámica y 
                    didáctica para sus estudiantes.</p>
            </div>
            <div id="img"><img src={About2} alt=""/></div>
        </div>

        <div class="about3">
            <div id="text">
                <h1>Visión</h1>
                <p>Poder automatizar los procesos de impartición de clases a los 
                    profesores de todo el mundo.</p>
            </div>
            <div id="img"><img src={About3} alt=""/></div>
        </div>
    </div>
    </>
  )
}

export default MainAbout