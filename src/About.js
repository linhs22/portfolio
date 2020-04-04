import React from "react"
import image from "./assets/images/IMG_7320.jpeg"
import "./About.css"

function About(props) {
    return (
            <div>
                <div class="container">
                    <div class="row">
                        <h1 id="about">About Me</h1>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <img class="img img-thumbnail" id="henrypic" src={image} alt="henrypic" />
                                </div>
                                <div class="col-md-8" id="bio">
                                    <p>
                                        Hi! My name is Henry Lin and I am young professional pursing a career in data/business analytics with hopes to set foot in the data science industry. I was born in Japan, but was raised in Seattle. As a child, I grew up expriencing multiple different cultures. From Chinese and Japanese culture instilled by my parents, to the American culture I aqcuired from living here. Since I was a child I have always had a passion for the sciences and baseball.
                        </p>
                                    <p>
                                        During my time at Whitman college, while studying mathematics and physics as well a minor chinese, I also had the opportunity to college baseball. Outside of studying and practice, I also volunteered at a local elemenatary school and became the marketing directory for our events board.
                        </p>
                                    <p>
                                        For the past few months, I was an enrolled in a intesive full stack web development bootcamp through the University of Washington to enhance my technical skills. During my time there, I was exposed to the world of software development and its power to create almost anything.
                        </p>
                                    <p>
                                        I am interested in pursuing a career in the field of business/data analytics and would welcome the opportunity to bring my analytical background, strong communication skills, and the skills I learned through my web development program to a postion in Data Analytics
                                        and Business Analytics.
                        </p>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Resources</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Phone</h6>
                                    <p class="card-text">425-999-6838</p>
                                    <h6 class="card-subtitle mb-2 text-muted">Email</h6>
                                    <p class="card-text">henrylin58@gmail.com</p>
                                    <a href="https://www.linkedin.com/in/linhenrys/" class="card-link">Linkedin</a>
                                    <a href="https://github.com/linhs22" class="card-link">Github</a>
                                    <a href="https://linhs22.github.io/henrylinportfolio/resume.html" target="_blank" class="card-link">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

export default About;