import { ProjectThumbnailProps } from "@/types/componentProps";
import { sanityImg } from "@/sanity/sanity-utils";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

export default function ProjectThumbnail({
  hero,
  imgSrc,
  title,
  desc,
  techList,
  liveUrl,
  demoUrl,
  caseStudyUrl,
}: ProjectThumbnailProps) {
  return (
    <article className="group flex flex-col bg-[rgb(var(--container-fill))] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgb(var(--color-primary))]/20">

      {/* Image Section */}
      <Link href={`/projects/${caseStudyUrl}`} className="relative aspect-video overflow-hidden bg-gray-800">
        <Image
          src={
            // @ts-ignore
            imgSrc.local
              // @ts-ignore
              ? imgSrc.asset._ref
              : ((imgSrc.asset && imgSrc.asset._ref) ? sanityImg(imgSrc.asset._ref).url() : "https://via.placeholder.com/1280x720/1a1a2e/ffffff?text=Project")
          }
          alt={imgSrc?.alt ? imgSrc.alt : `${title} project`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[rgb(var(--color-primary))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content Section */}
      <div className="flex flex-col gap-4 p-6 flex-grow">

        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-[rgb(var(--txt-heading))] group-hover:text-[rgb(var(--color-primary))] transition-colors">
            {title}
          </h4>
          <p className="text-[rgb(var(--txt-body))] text-sm leading-relaxed line-clamp-3 opacity-90">
            {desc}
          </p>
        </div>

        {/* Tech Stack */}
        {techList && techList.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {techList.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="text-xs font-mono px-2 py-1 rounded bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2 pt-4 border-t border-[rgb(var(--txt-body))]/10">
          {liveUrl && (
            <a href={liveUrl} target="_blank" className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--txt-heading))] hover:text-[rgb(var(--color-primary))] transition-colors">
              Live Site
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--txt-heading))] hover:text-[rgb(var(--color-primary))] transition-colors">
              Demo
            </a>
          )}
          {caseStudyUrl && (
            <Link href={`/projects/${caseStudyUrl}`} className="ml-auto text-xs font-bold uppercase tracking-wider text-[rgb(var(--color-primary))]">
              View Case Study →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
