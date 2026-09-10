import type { HTMLAttributes } from "react";

export interface ContentItemProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  link?: string;
  websiteLink?: string;
  meta?: string;
  date?: string;
  websiteLabel?: string;
  titleClassName?: string;
}

const ContentItem = ({
  title,
  description,
  link,
  websiteLink,
  meta,
  date,
  websiteLabel,
  titleClassName = "max-w-[260px] sm:max-w-[280px]",
  className = "",
  ...props
}: ContentItemProps) => {
  const href = link || websiteLink;
  const badge = meta || date || websiteLabel;

  return (
    <article
      className={`first:pt-0 pt-6 ${className}`.trim()}
      {...props}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group text-base font-medium text-neutral-200 hover:text-white transition-colors leading-snug ${titleClassName}`.trim()}
          >
            {title}
            <span className="inline-block ml-1.5 text-neutral-400 group-hover:text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">
              ↗
            </span>
          </a>
        ) : (
          <span
            className={`text-base font-medium text-neutral-200 leading-snug ${titleClassName}`.trim()}
          >
            {title}
          </span>
        )}

        {badge && (
          <span className="font-mono text-xs text-neutral-400 shrink-0">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default ContentItem;

