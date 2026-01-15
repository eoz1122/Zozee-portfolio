import { IconType } from "react-icons";
import {
    SiKubernetes, SiAmazonaws, SiGo, SiPython,
    SiTerraform, SiDocker, SiPostgresql, SiRust
} from "react-icons/si";

interface Skill {
    name: string;
    icon: IconType;
    description: string;
}

const skills: Skill[] = [
    { name: "Kubernetes", icon: SiKubernetes, description: "Container orchestration and scalable cluster management." },
    { name: "AWS", icon: SiAmazonaws, description: "Cloud infrastructure architecture and serverless patterns." },
    { name: "Go", icon: SiGo, description: "High-performance backend services and microservices." },
    { name: "Terraform", icon: SiTerraform, description: "Infrastructure as Code (IaC) for reproducible deployments." },
    { name: "Python", icon: SiPython, description: "Data engineering, automation, and backend development." },
    { name: "Docker", icon: SiDocker, description: "Containerization strategies for consistent environments." },
    { name: "PostgreSQL", icon: SiPostgresql, description: "Advanced database design, optimization and sharding." },
    { name: "Rust", icon: SiRust, description: "Systems programming for performance-critical components." },
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
