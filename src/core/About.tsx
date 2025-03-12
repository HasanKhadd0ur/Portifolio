import style from '../app/App.module.css';
import { SkillsList } from '../configs/skills.config';
import { DefaultConfig as config } from '../configs/app.config';
function About() {

    return (
        <div id='About' className={style.about}>
        <div className={style.container}>
            <h2 className={style.title}>About Me</h2>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <div className={style["about-content"]}>
                <div className={style["about-info"]}>
                    <h3>Get to know me!</h3>
                    <p>
                        {config.about}Feel free to Connect or Follow me on my <a href={config.links.github} target="_blank">Github</a> where I post useful content related to Web Development and Programming. <br /> <br />
                        I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
                    </p>
                </div>
                <div className={style["my-skill"]}>
                    <h3>My Skills</h3>
                    <div className={style.skills}>
                        {
                            SkillsList.map((skill, index) => {
                                return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
                                    <div className={style["skill-name"]}>{skill.name}</div>
                                    <div className={style["skill-icon"]}><skill.icon  size="25px" color="white"/></div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
   )

}
export default About;