import React from "react";

import a from '../../assets/images/a.png'
import pin from '../../assets/images/pin.png'

import './Aboutus.css'

function About() {

    return (
        <div className="aboutus app__bg flex__center section__padding" id="about">
            
            <div className="aboutus-overlay flex__center">
                <img src={a} alt="a letter" />
            </div>

            <div className="aboutus-content flex__center">
                <div className="aboutus-content_about">
                    <h1 className="headtext__poppins">About us</h1>
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis libero repellat qui ab repellendus sit necessitatibus inventore quod ratione tempora, dolores, sed quam facilis incidunt enim odit expedita provident.</p>
                </div>

                <div className="aboutus-content_pin flex__center">
                    <img src={pin} alt="about_pin" />
                </div>

                <div className="aboutus-content_history">
                    <h1 className="headtext__poppins">Our Mission</h1>
                    <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, deleniti, sapiente totam accusamus nam temporibus libero voluptates saepe odit recusandae in maxime iusto amet, natus pariatur quos. Vero, earum cupiditate?</p>
                </div>
            </div>

        </div>
    )
}

export default About