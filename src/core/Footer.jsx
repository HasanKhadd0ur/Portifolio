import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";
import style from '../app/App.module.css';

import {DefaultConfig as config }from '../configs/app.config'

function Footer(){
    return(
			<div className={style.footer}>
            <div className={style.container}>
                <div className={style["footer-info"]}>
                    <div>
                        <h3>{config.fullName}</h3>
                        <p>A Software Engineer with experience in AI, Web Development.</p>
                    </div>
                    <div className={style.social}>
                        <h3>Social</h3>
                        <div className="">
                            <a className={style.git} target="_blank" href={config.links.github} >
                                <AiFillGithub size="30px" color='white' />
                            </a>
                            <a className={style.linkedin} target="_blank" href={config.links.linkedin}>
                                <AiFillLinkedin size="30px" color='white' />
                            </a>
                            <a className={style.gmail} target="_blank" href={config.email} >
                                <BiLogoGmail size="30px" color='white' />
                            </a>
                            <a className={style.facebook} target="_blank" href={config.links.facebook} >
                                <BsFacebook size="30px" color='white' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style["copy-right"]}>
                    © Copyright 2025. Made by <span>{config.userName}</span>
                </div>
            </div>
        </div>

    )
}
export default Footer;