import { IconType } from "react-icons";
import { IoEyeSharp, IoInfiniteSharp, IoGitNetworkSharp, IoMedicalSharp } from "react-icons/io5";

interface Principle {
    name: string;
    icon: IconType;
    description: string;
}

const principles: Principle[] = [
    {
        name: "Omniscience",
        icon: IoEyeSharp,
        description: "Seeing all. Knowing all. A system that cannot hide its state is a system that can be ruled."
    },
    {
        name: "Omnipresence",
        icon: IoGitNetworkSharp,
        description: "Everywhere, all at once. Latency is the enemy of the divine. Distribution is the key to ubiquity."
    },
    {
        name: "Immortality",
        icon: IoInfiniteSharp,
        description: "That which cannot die. Self-healing architectures that outlast their creators and defy entropy."
    },
    {
        name: "Harmony",
        icon: IoMedicalSharp,
        description: "Order from chaos. ACID properties are not suggestions; they are the commandments of consistency."
    },
];

export default function Skills() {
    return (
        <section className="col-span-full py-24" id="principles">
            <div className="responsive-wrapper flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-[rgb(var(--txt-heading))]">The Principles</h2>
                    <div className="h-1 w-12 bg-[rgb(var(--color-primary))]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((principle) => (
                        <div key={principle.name} className="flex flex-col gap-4 p-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[rgb(var(--color-primary))]/30 hover:shadow-2xl hover:shadow-[rgb(var(--color-primary))]/10 group">
                            <div className="bg-[rgb(var(--color-primary))]/10 w-16 h-16 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <principle.icon className="text-3xl text-[rgb(var(--color-primary))]" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[rgb(var(--txt-heading))] mb-3">{principle.name}</h4>
                                <p className="text-[rgb(var(--txt-body))] text-sm leading-relaxed opacity-90">
                                    {principle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
