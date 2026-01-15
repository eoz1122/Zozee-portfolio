import { IconType } from "react-icons";
import { FiCheckSquare } from "react-icons/fi";
import Image from "next/image";

// Placeholder image if Sanity image is missing or for the newly designed section
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

interface AboutProps {
    content: any; // PortableText value
    imageSrc?: string;
}

export default function About({ content, imageSrc }: AboutProps) {
    return (
        <section className="col-span-full py-24" id="about">
            <div className="responsive-wrapper flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[rgb(var(--txt-heading))] mb-2">
                    Solutions <span className="text-[rgb(var(--txt-heading))]">&lt;Architect&gt;</span>
                </h2>
                <p className="text-[rgb(var(--txt-body))] mb-16 text-lg">
                    System Architect with over 10 years of experience in distributed systems.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">

                    {/* Checklist Area */}
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4">
                            <FiCheckSquare className="text-4xl text-[rgb(var(--color-primary))] flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-[rgb(var(--txt-heading))] mb-2">Expert in Distributed Systems.</h4>
                                <p className="text-[rgb(var(--txt-body))] leading-relaxed">
                                    Designing fault-tolerant, high-availability architectures that scale globally.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FiCheckSquare className="text-4xl text-[rgb(var(--color-primary))] flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-[rgb(var(--txt-heading))] mb-2">Specializing in Cloud Native.</h4>
                                <p className="text-[rgb(var(--txt-body))] leading-relaxed">
                                    Deep expertise in Kubernetes, AWS, and serverless infrastructure.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FiCheckSquare className="text-4xl text-[rgb(var(--color-primary))] flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-[rgb(var(--txt-heading))] mb-2">Engineering Leadership.</h4>
                                <p className="text-[rgb(var(--txt-body))] leading-relaxed">
                                    Mentoring teams and defining technical strategy for complex projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="relative bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 rounded-b-full overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
                            {/* Use the passed image source or a placeholder */}
                            <Image
                                src={imageSrc || PLACEHOLDER_IMG}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
