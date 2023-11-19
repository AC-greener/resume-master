import { promises as fs } from 'fs';
import React from 'react';
import './style.css'
export default async function Tpl() {
    const file = await fs.readFile(process.cwd() + '/src/app/tpl.json', 'utf8');
    const data = JSON.parse(file);
    console.log(data)
    return (
        <div>
        <div className="wrapper layout clearfix">
            <div className="aside">
                <div className="user">
                    <div className="avatar">
                        <img src={data.personalInfo.avatar} alt="avatar" />
                    </div>
                    <h1>{data.personalInfo.name}</h1>
                    <p>{data.personalInfo.title}</p>
                </div>
                <ul className="contact">
                    {data.contact.map((item, index) => (
                        <li key={index}><span className={`iconfont ${item.icon}`}></span> {item.value}</li>
                    ))}
                </ul>
                <div className="skills">
                    <h2>我的技能</h2>
                    <dl>
                        {data.skills.map((skill, index) => (
                            <React.Fragment key={index}>
                                <dt>{skill.name}</dt>
                                <dd><span className="mastery" style={{ "width": `${skill.mastery}%` }}></span></dd>
                            </React.Fragment>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="main">
                <div className="education section">
                    <h2 className="x">个人技能</h2>
                    <div className="item">
                        <div className="more myskill">
                            <ul>
                                {data.skillDetailList.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h2>教育经历</h2>
                    {data.education.map((edu, index) => (
                        <div className="item" key={index}>
                            <div className="left pill">{edu.startTime} - {edu.endTime}</div>
                            <div className="more">
                                <h3>{edu.institution}, {edu.major}, {edu.degree}</h3>
                            </div>
                        </div>
                    ))}
                    <h2>实习经历</h2>
                    {data.workExperience.map((intern, index) => (
                        <div className="item" key={index}>
                            <div className="left pill">{intern.startTime} - {intern.endTime}</div>
                            <div className="more">
                                <h3>{intern.company}</h3>
                                <ul>
                                    <li><strong>个人职责：</strong>{intern.responsibilities}</li>
                                    <li><strong>实习收获：</strong>{intern.achievements}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="projects section">
                        <h2>项目经历</h2>
                        {data.projects.map((project, index) => (
                            <div className="item" key={index}>
                                <div className="left pill">{project.startTime} - {project.endTime}</div>
                                <div className="more">
                                    <h3>{project.title}</h3>
                                    <ul>
                                        <li><strong>项目简介：</strong>{project.description}</li>
                                        <li><strong>技术栈：</strong>{project.techStack}</li>
                                        <li><strong>项目源码:</strong><a href={project.sourceCode} target="_blank">{project.sourceCode}</a></li>
                                        <li><strong>预览项目:</strong><a href={project.previewLink} target="_blank">{project.previewLink}</a></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="about-me section">
                        <h2>个人评价</h2>
                        <p>{data.aboutMe.evaluation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
