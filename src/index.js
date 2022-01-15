import React, {useRef, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {TweenMax, Power3} from "gsap";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import './index.css';

import Header from "./Header";
import FadeInAnimation from "./Animation_FadeIn";
import Footer from "./Footer"
import data from "./data";
import skill from "./Skills_Data"
import Card from './Components/Card'
import Modal from "./Components/Modal";

function Welcome() {
    let welcomeTitle = useRef(null)

    useEffect(() => {
        TweenMax.from(welcomeTitle, .8, {opacity: 0, y: -100, ease: Power3.easeIn, delay: .4})

    }, [])


    return (
        <div className="welcomeTitle">
            <h1
                ref={el => welcomeTitle = el}>Welcome</h1>
        </div>

    )

}

function Skills() {


    return (
        <section className="skills">
            <h1>skills</h1>

            <div className="grid_card">

                {skill.map(skill => (
                    <Card
                        title={skill.title}
                        imageurl={skill.image}
                    />
                ))}
            </div>

        </section>
    )

}

function Experience() {

    return (
        <section className="experience">


            <h1 className="experience_title" style={{color: "#fff"}}>Timeline and Work Experience</h1>


            <VerticalTimeline>
                {data.map(event => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={event.category}
                        icon = {event.icon}
                        position={event.position}
                    >
                        <h3 className="vertical-timeline-element-title"
                            dangerouslySetInnerHTML={{__html: event.title}}

                        />
                        <p>{event.date}</p>

                        <p>{event.paragraph}</p>


                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>


        </section>

    )

}

function Projects() {


    return (
        <div className="projects">
            <h1>Projects</h1>

        </div>

    );

}

function AboutMe() {

}



class Main extends React.Component {


    render() {

        return (
            <div className="index">
                <FadeInAnimation direction="down">
                    <Header/>
                </FadeInAnimation>

                {/*<App/>*/}
                <Welcome/>

                <Experience/>
                <Skills/>
                <Projects/>

            </div>
        );
    }

}

ReactDOM.render(<Main/>, document.getElementById('Main'));

