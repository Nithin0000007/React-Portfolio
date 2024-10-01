import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { CiLink } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h2
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap  lg:justify-center">

                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4">
                            <img className="mb-6 rounded" src={project.image} width={150} height={150} alt="" />
                        </motion.div>

                        <motion.div className="w-full max-w-xl lg:w-3/4"
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}>
                            {/* <h6 className="mb-2 font-semibold">{project.title}  {<FaLink />}</h6> */}
                            <div className="flex items-center">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                {(project.title !== 'Portfolio Website' && project.title !== 'HireHub') ? (
                                    <a href={project.projectLink} target="blank">
                                        <FaExternalLinkAlt className="ml-2 mb-2 text-red-500" />
                                    </a>
                                ) : null}

                            </div>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mt-4 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" >{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
