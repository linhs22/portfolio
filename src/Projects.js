import React from "react"
import Thumbnail from './Thumbnail.js'
import ate from './assets/images/ate.jpeg'
import budget from './assets/images/budget_tracker.png'
import burger from './assets/images/burger.png'
import day from './assets/images/day_planner.png'
import employee from './assets/images/Employee_manager.png'
import fitness from './assets/images/fitness2.png'
import password from './assets/images/password_generator.png'
import trade from './assets/images/trade-jack.png'
import "./Project.css"

function Projects(props) {
    return (
        <div>
            <div class="container">
                <h1 class="homeHeader">Hi! My name is Henry.
            <br />
                    I'm currently a student studying web development.
            <br />
                    Previously with the Seattle Mariners.
                </h1>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <p id="quick">
                            I'm an analytical thinker as well as a strong empathizer. I take pride in what I do and thankful of
                            the opportunities I get. My diverse experiences bring in a new perspective to every problem
                            that I encounter. I'm constantly learning and open to new opportunities that aid me in my personal
                            and professional growth.
                </p>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <h3>
                    Some of my work
                </h3>
            </div>
            <div class="row">
            <Thumbnail
                image = {ate}
                name = "Ate-i"
                text = "An application that allows users to get nutritional information with a picture."
                link = "https://foodie-helper-2019.appspot.com/"
                github = "https://github.com/Javeyn/project1"
            />
            <Thumbnail
                image = {trade}
                name = "Trade Jack"
                text = "A reverse bidding application that allow users to create and bid on tasks."
                link = "http://trade-jack.herokuapp.com/"
                github = "https://github.com/jittel/project2"
            />
            </div>
            <div class="row">
            <Thumbnail
                image = {password}
                name = "Password Generator"
                text = "A password generator that generates a password based on user specifications."
                link = "https://linhs22.github.io/henryhw3/"
                github = "https://github.com/linhs22/henryhw3"
            />
            <Thumbnail
                image = {budget}
                name = "Budget Tracker"
                text = "A reverse bidding application that allow users to create and bid on tasks."
                link = "https://progressive-finance-tracker.herokuapp.com/"
                github = "https://github.com/linhs22/progressive"
            />
            </div>
            <div class="row">
            <Thumbnail
                image = {burger}
                name = "Burger Logger"
                text = "An application to track the burgers you have eaten and need to eat"
                link = "https://burgerloggerhl.herokuapp.com/"
                github = "https://github.com/linhs22/sequelize"
            />
            <Thumbnail
                image = {fitness}
                name = "Fitness Tracker"
                text = "An application that lets gym goers to track their workouts"
                link = "https://workout-tracker-hl.herokuapp.com/"
                github = "https://github.com/linhs22/workout-tracker"
            />
            </div>
            <div class="row">
            <Thumbnail
                image = {employee}
                name = "Employee Management"
                text = "An application to track the employees in a business."
                github = "https://github.com/linhs22/employee-tracker"
            />
            <Thumbnail
                image = {day}
                name = "Work Day Scheduler"
                text = "An application to track the task that need to be done in a day"
                link = "https://linhs22.github.io/henryhw5/"
                github = "https://github.com/linhs22/henryhw5"
            />
            </div>
        </div>
    )
}

export default Projects;