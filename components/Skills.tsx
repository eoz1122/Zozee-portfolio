import { IconType } from "react-icons";
import {
    SiJavascript, SiReact, SiNextdotjs, SiVuedotjs,
    SiMongodb, SiTailwindcss, SiSass, SiGit,
    SiFigma, SiNodedotjs, SiTypescript
} from "react-icons/si";

interface Skill {
    name: string;
    icon: IconType;
    description: string;
}

const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, description: "Strong JS knowledge and advanced web development." },
    { name: "React", icon: SiReact, description: "Building fast and efficient React App's and websites." },
    { name: "Next.js", icon: SiNextdotjs, description: "Fast server-side rendering, dynamic routing & less code." },
    { name: "Vue.js", icon: SiVuedotjs, description: "I build web interfaces & one page applications using Vue." },
    { name: "MongoDB", icon: SiMongodb, description: "Using MongoDB for scalable databases on the backend." },
    { name: "Git", icon: SiGit, description: "DevOps tool for streamlined source code management." },
    { name: "TailwindCSS", icon: SiTailwindcss, description: "A utility-first widely used frontend CSS framework." },
    { name: "CSS & Sass", icon: SiSass, description: "I use SASS as CSS pre-processor." },
];

export default function Skills() {
    return (
        <section className="col-span-full py-20" id="skills">
            <div className="responsive-wrapper">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col gap-3 group">
                            <skill.icon className="text-4xl text-[rgb(var(--txt-heading))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300" />
                            <div>
                                <h4 className="font-bold text-[rgb(var(--txt-heading))] mb-1">{skill.name}</h4>
                                <p className="text-[rgb(var(--txt-body))] text-sm leading-relaxed opacity-80">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
