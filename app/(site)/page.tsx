"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectThumbnail from "@/components/home/ProjectThumbnail";
import SectionHeading from "@/components/SectionHeading";

// Custom Projects Data
const projects = [
  {
    _id: "hidava",
    projectName: "HiDAVA",
    projDisplay: true,
    heroImage: {
      alt: "HiDAVA Platform",
      asset: {
        _ref: "image-hidava" // Special handling or use local path logic if refactoring component
      }
    },
    synopsis: "Turkish Legal AI Platform. Democratizing justice through artificial intelligence and automated legal assistance.",
    technologies: ["AI", "Python", "React", "Legal Tech"],
    slug: "hidava",
    liveUrl: "https://hidava.com",
    demoUrl: "https://hidava.com",
    localImage: "/hidava.png" // Added support for local images
  },
  {
    _id: "dailyaiwire",
    projectName: "Daily AI Wire",
    projDisplay: true,
    heroImage: { alt: "Daily AI Wire", asset: { _ref: "" } },
    synopsis: "Automated AI News Aggregator. The pulse of the artificial mind, curated by agents.",
    technologies: ["Next.js", "AI Agents", "Automation"],
    slug: "daily-ai-wire",
    liveUrl: "https://dailyaiwire.news",
    demoUrl: null,
    localImage: null // Use placeholder
  },
  {
    _id: "novara",
    projectName: "Novara",
    projDisplay: true,
    heroImage: { alt: "Novara Talent", asset: { _ref: "" } },
    synopsis: "Premium Nearshore Talent. Connecting the best engineering minds across borders.",
    technologies: ["Staff Augmentation", "Global Talent", "B2B"],
    slug: "novara",
    liveUrl: null, // "Glofy isn't ours" - Removed link
    demoUrl: null,
    localImage: null
  },
  {
    _id: "tachyon",
    projectName: "Tachyon V2",
    projDisplay: true,
    heroImage: { alt: "Tachyon Hub", asset: { _ref: "" } },
    synopsis: "Creator Hub for the Digital Age. Empowering content creators with next-gen tools.",
    technologies: ["YouTube API", "React", "Cloud"],
    slug: "tachyon",
    liveUrl: "https://devran.cloud/",
    demoUrl: null,
    localImage: null
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Hero heading="The Architect" tagline="Designing the laws of digital reality." />
      <About />
      <Skills />

      {projects.length > 0 && (
        <section className="w-full py-20" id="projects">
          <div className="responsive-wrapper flex flex-col gap-8">
            <SectionHeading showIcon={false}>The Great Work</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectThumbnail
                  key={project._id}
                  hero={false} // Force regular card layout
                  // @ts-ignore: Bypassing strict Sanity types for local dev
                  imgSrc={project.localImage ? { asset: { _ref: project.localImage }, local: true } : { asset: { _ref: "" } }}
                  title={project.projectName}
                  desc={project.synopsis}
                  techList={project.technologies}
                  caseStudyUrl={project.slug}
                  liveUrl={project.liveUrl}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
