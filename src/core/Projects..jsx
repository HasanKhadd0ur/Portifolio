
import style from '../app/App.module.css'
import {ProjectsList} from "../configs/portfolio.config"
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";

import IconButton from '../shared/components/IconButton/IconButton';

function Projects (){

    return(

    <div id='Projects' className={style.projects}>
        <div className={style.container}>
            <h2 className={style.title}>Projects</h2>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <div className={style["projects-list"]}>
                {
                    ProjectsList.map((project, index) => {
                        return <div key={`project${index}`} className={style.project}>
                            <div className={style["project-image"]}>
                                <img src={project.image}  alt="Project Image"  style={{ width: "600px", height: "350px"}} />
                            </div>
                            <div className={style["project-info"]}>
                                <h3>{project.projectName}</h3>
                                <p>{project.description}</p>
                                <div className={style["project-buttons"]}>
                                    <IconButton
                                        width="170px"
                                        height="50px"
                                        backgroundColor="var(--primary-main)"
                                        color="white"
                                        link={project.link}
                                        icon={<AiOutlineEye size="25px" color='white' />}
                                    >
                                        Live Demo
                                    </IconButton>
                                    <IconButton
                                        width="100px"
                                        height="50px"
                                        backgroundColor="black"
                                        color="white"
                                        link={project.sourceCode}
                                        icon={<AiFillGithub size="25px" color='white' />}
                                    >
                                        Github
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    </div>
    );


}
export default Projects;