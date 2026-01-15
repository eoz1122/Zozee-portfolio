import Image from "next/image";
import ProjectThumbnail from "../../components/home/ProjectThumbnail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { getProjects, getHomeContent, sanityImg } from "@/sanity/sanity-utils";
import SectionHeading from "@/components/SectionHeading";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();
  const { hero, about } = await getHomeContent();

  return (
    <>
      {Object.keys(hero).length > 0 && (
        <Hero heading={hero.heading} tagline={hero.tagline} />
      )}

      {Object.keys(about).length > 0 && (
        <About
          content={about.aboutContent}
          imageSrc={about.aboutImage.asset._ref ? sanityImg(about.aboutImage.asset._ref).url() : undefined}
        />
      )}

      <Skills />

      {projects.length > 0 && (
        <section className="w-full py-20" id="projects">
          <div className="responsive-wrapper flex flex-col gap-8">
            <SectionHeading showIcon={false}>Projects</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectThumbnail
                  key={project._id}
                  hero={project.projDisplay}
                  imgSrc={project.heroImage}
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
    </>
  );
}
