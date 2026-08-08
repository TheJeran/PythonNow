import React from "react";

/**
 * TableOfContents
 * ----------------
 * A sticky TOC with a vertical "read progress" line running alongside
 * a nested list of topics/subtopics — the pattern used on pages like
 * prismic.io/blog articles.
 *
 * This component is purely presentational: you own scroll listeners,
 * IntersectionObservers, etc. Just pass in the current progress (0-100),
 * the id of the section that's currently active, and a click handler.
 *
 * Usage:
 *
 *   const items: TocItem[] = [
 *     { id: "what-is-vite", label: "What is Vite?" },
 *     {
 *       id: "vite-key-features",
 *       label: "Vite key features",
 *       children: [
 *         { id: "vite-dev-server", label: "Local development server" },
 *         { id: "vite-build", label: "Build command" },
 *       ],
 *     },
 *     { id: "what-is-nextjs", label: "What is Next.js" },
 *   ];
 *
 *   <TableOfContents
 *     items={items}
 *     activeId={activeId}
 *     progress={progress} // 0-100
 *     onItemClick={(id) => scrollToSection(id)}
 *   />
 */

export interface TocItem {
  /** Unique id — typically matches the heading's `id` attribute for scrolling. */
  id: number;
  /** Visible label text. */
  label: string;
  /** Optional nested subtopics. */
  children?: TocItem[];
}

export interface TableOfContentsProps {
  /** Flat or nested list of topics. */
  items: TocItem[];
  /** id of the currently active/in-view item (top-level or nested). */
  activeId?: number;
  /** Overall read progress, 0-100. Drives the vertical line fill. */
  progress: number;
  /** Called with the item's id when a row is clicked. */
  onItemClick: (id: number) => void;
  /** Optional heading shown above the list. Defaults to "Table of contents". Pass null to omit. */
  title?: string | null;
  /** Optional className for the outer wrapper. */
  className?: string;
}

// Flattens the tree into an ordered list of ids so we can figure out
// how far "down" the active item is, purely for optional future use
// (e.g. sub-progress). Not required for rendering.
function flattenIds(items: TocItem[]): number[] {
  return items.flatMap((item) => [
    item.id,
    ...(item.children ? flattenIds(item.children) : []),
  ]);
}

interface RowProps {
  item: TocItem;
  depth: number;
  activeId?: number;
  onItemClick: (id: number) => void;
}

const Row: React.FC<RowProps> = ({ item, depth, activeId, onItemClick }) => {
  const isActive = item.id === activeId;

  return (
    <li>
      <button
        type="button"
        onClick={() => onItemClick(item.id)}
        aria-current={isActive ? "true" : undefined}
        className={[
            "cursor-pointer",
            "block w-full text-left text-sm leading-snug py-1.5 transition-colors duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 rounded-sm",
            depth === 0 ? "font-medium" : "font-normal",
            isActive
                ? "text-indigo-600"
                : "text-slate-500 hover:text-slate-900",
        ].join(" ")}
        style={{ paddingLeft: `${depth * 14}px` }}
      >
        {item.label}
      </button>

      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child) => (
            <Row
              key={child.id}
              item={child}
              depth={depth + 1}
              activeId={activeId}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
  progress,
  onItemClick,
  title = "Table of contents",
  className = "",
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <nav
      aria-label="Table of contents"
      className={`absolute ${className}`}
    >
      {title !== null && (
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
          {title}
        </p>
      )}

      <div className="flex gap-3">
        {/* Progress line */}
        <div className="relative w-[2px] shrink-0 rounded-full bg-slate-200">
          <div
            className="absolute top-0 left-0 w-full rounded-full bg-indigo-600 transition-[height] duration-150 ease-out"
            style={{ height: `${clampedProgress}%` }}
          />
        </div>

        {/* List */}
        <ul className="flex-1">
          {items.map((item) => (
            <Row
              key={item.id}
              item={item}
              depth={0}
              activeId={activeId}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};


// Exported in case a consumer wants the flattened order (e.g. to compute
// activeId from scroll position themselves).
export { flattenIds };