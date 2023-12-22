import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "/src/assets/sk-1.png";
import sk2 from "/src/assets/sk-2.png";
import sk3 from "/src/assets/sk-3.png";
import sk4 from "/src/assets/sk-4.png";
import sk5 from "/src/assets/sk-5.png";
import sk8 from "/src/assets/sk-8.png";
import sk9 from "/src/assets/sk-9.png";
import sk10 from "/src/assets/sk-10.png";
import sk11 from "/src/assets/sk-11.png";
import sknode from "/src/assets/node.png";
import skmongo from "/src/assets/mongo.png";
import skkotlin from "../assets/kotlin.png";
import skjava from "/src/assets/java.png";
import skgit from "/src/assets/gitt.png";
import skmysql from "/src/assets/mysql.png";
import skpython from "/src/assets/python.png";
import net from "../assets/net.png";
import cicd from "../assets/ci.png";

import pattern from "/src/assets/heading-pattern.png";
import pe1 from "/src/assets/sec-3-p-e-1.png";
import pe2 from "/src/assets/sec-3-p-e-2.png";
import pe3 from "/src/assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 justify-center gap-3 md:grid-cols-11 relative">
                <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sknode} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk1} />
                 
                    <SkillIcon path={skjava} />
                    <SkillIcon path={skgit} />
                    <SkillIcon path={skmysql} />
                    <SkillIcon path={skpython} />
                  
                   

                   
                     <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    
                    
                    
                   
                </Div>
                {/* SKILL ICONS END */}
                
                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                    <Service
                           num="1"
                           title="Frontend Development"
                           desc="I specialize in crafting captivating user interfaces through front-end development. With expertise in HTML, CSS, and JavaScript, I transform designs into interactive and user-friendly web applications. Let's collaborate to build visually stunning and seamlessly functional digital experiences."
                           data={[
                               "HTML",
                               "CSS",
                               "JavaScript",
                               "Responsive Design",
                               "User Interface (UI) Development",
                           ]}
                           
                        />
                                                <Service
                            num="2"
                            title="Software and APP Devlopment"
                            desc="I am highly skilled at solving problems through software development. I use coding, testing, and debugging to create effective solutions.
                            Expertise in Java and APIs. Join me to craft apps that redefine user experiences and solve real-world challenges."
                            data={[
                                "JAVA ",
                                "API",
                                "Design patterns",
                                "Design to code",
                                "Multi-threading",
                            ]}
                        />
                         

                        <Service
                            num="3"
                            title="Problem Solving and Programming"
                            desc="I excel in data analysis, AI bots, problem-solving, data handling, visualization, and regression modeling. Let's bring data to life and find optimal solutions together."
                            data={[
                                "Data Analysis",
                                "AI Bots",
                                "Best problem sloutions",
                                "Python",
                                "C language",
                                "java",
                            ]}
                        />
                                                <Service
                            num="4"
                            title="Ui/Ux Design"
                            desc="I specialize in making user experiences exciting. Using strong design principles, I enhance digital products with prototypes, wireframes, research, and beautiful UI designs. Let's work together to create impressive designs that users will love."
                            data={[
                                "Prototype",
                                "Wireframe",
                                "UX Research",
                                "UI Design",
                                "Human computer interaction",
                            ]}
                        />
                        <Service
num="5"
title="Team Management and Communication"
desc="I excel in orchestrating teams for seamless collaboration and communication. Leveraging my expertise in team dynamics, I ensure efficient project execution and foster a culture of open communication. Let's join forces to build strong teams that deliver exceptional results."
data={[
"Team Leadership",
"Collaborative Communication",
"Project Coordination",
"Strategic Planning",
"Interpersonal Skills",
]}
                        />

                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
