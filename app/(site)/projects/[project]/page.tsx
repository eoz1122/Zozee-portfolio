import { notFound } from "next/navigation";
import { getProject } from "@/sanity/sanity-utils";
import { ProjectPage } from "@/types/data";
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { Metadata } from 'next';

// Hardcoded Projects Data (Manifestation of the Architect)
const projectsData: Record<string, any> = {
  "hidava": {
    title: "HiDAVA",
    tagline: "The Judge, Jury, and Executioner of Automated Law.",
    description: [
      "HiDAVA is not merely a tool; it is valid legal counsel encoded into silicon.",
      "Democratizing justice through artificial intelligence. It processes thousands of legal precedents in milliseconds, delivering verdicts and documents with superhuman precision.",
      "Built for the Turkish legal system, it bridges the gap between complex bureaucracy and instant accessibility."
    ],
    technologies: ["AI", "Python", "React", "Legal Tech", "NLP"],
    image: "/uploaded_image_1768515830690.png", // Using the correct uploaded filename if possible or the one in public
    liveUrl: "https://hidava.com",
    bgColor: "from-blue-900 to-black"
  },
  "daily-ai-wire": {
    title: "Daily AI Wire",
    tagline: "The Pulse of the Artificial Mind.",
    description: [
      "An automated aggressive aggregator of the synthetic intelligence explosion.",
      "Curated by agents, for the informed. It tracks the exponential curve of AI development so you don't have to.",
      "Zero human latency. Pure signal."
    ],
    technologies: ["Next.js", "AI Agents", "Automation", "Aggregators"],
    image: "/daily_ai_wire.png",
    liveUrl: "https://dailyaiwire.news",
    bgColor: "from-cyan-900 to-black"
  },
  "novara": {
    title: "Novara",
    tagline: "Global Talent. Zero Borders.",
    description: [
      "Connecting the hive mind. Novara is the bridge between elite European engineering standards and global execution.",
      "Staff augmentation that feels like telepathy. Why allow geography to limit genius?"
    ],
    technologies: ["Staff Augmentation", "Global Talent", "B2B", "Infrastructure"],
    image: "/novara.png",
    liveUrl: null,
    bgColor: "from-indigo-900 to-black"
  },
  "tachyon": {
    title: "Tachyon V2",
    tagline: "Faster Than Light Creation.",
    description: [
      "The Creator Hub for the digital age. Empowering content creators with tools that move at the speed of thought.",
      "Analytics, management, and growth hacking in a unified dashboard."
    ],
    technologies: ["YouTube API", "React", "Cloud", "Analytics"],
    image: "/tachyon.png",
    liveUrl: "https://devran.cloud/",
    bgColor: "from-red-900 to-black"
  }
};

export default function ProjectDetails({ params }: { params: { project: string } }) {
  const slug = params.project;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg))] text-[rgb(var(--txt-heading))]">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl opacity-70">This creation has been unmade.</p>
          <Link href="/" className="mt-8 inline-block px-8 py-3 bg-[rgb(var(--color-primary))] text-white rounded-full hover:scale-105 transition-transform">
            Return to Source
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--txt-heading))] pb-20`}>
      {/* Cosmic Header Background */}
      <div className={`absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b ${project.bgColor} opacity-20 pointer-events-none blur-3xl`} />

      <main className="max-w-7xl mx-auto px-6 relative z-10 pt-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-[rgb(var(--txt-muted))] hover:text-[rgb(var(--color-primary))] transition-colors mb-12 group">
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" /> Back to The Great Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Visuals */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))] to-purple-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl font-light text-[rgb(var(--color-primary))] italic">
                {project.tagline}
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-[rgb(var(--txt-body))] opacity-90">
              {project.description.map((block: string, i: number) => (
                <p key={i}>{block}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 my-4">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-[rgb(var(--color-primary))]">
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <div className="pt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-block px-12 py-5 bg-[rgb(var(--color-primary))] text-white font-bold text-lg rounded-xl shadow-[0_0_30px_-5px_rgba(var(--color-primary),0.5)] hover:shadow-[0_0_50px_-5px_rgba(var(--color-primary),0.8)] hover:scale-105 transition-all duration-300"
                >
                  Access System
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
