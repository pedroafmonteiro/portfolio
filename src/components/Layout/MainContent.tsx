import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Outlet, useLocation } from "react-router";
import NavItem from "./NavItem";

export interface MainContentProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
}

const navItems = [
  { label: "Home", route: "/" },
  { label: "Experience", route: "/experience" },
  { label: "Projects", route: "/projects" },
  { label: "Contact", route: "/contact" },
];

const PAGE_TITLES: Record<string, string> = {
  "/": "Pedro Monteiro — Software Engineer",
  "/experience": "Experience — Pedro Monteiro",
  "/projects": "Projects — Pedro Monteiro",
  "/contact": "Contact — Pedro Monteiro",
};

const MainContent = ({
  children,
  className = "",
  ...props
}: MainContentProps) => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState({ top: 0, bottom: 0 });

  const updateScrollState = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;

    if (maxScroll <= 1) {
      setScrollProgress({ top: 0, bottom: 0 });
      return;
    }

    const threshold = 50;
    const top = Math.min(Math.max(scrollTop / threshold, 0), 1);
    const remaining = maxScroll - scrollTop;
    const bottom = Math.min(Math.max(remaining / threshold, 0), 1);

    setScrollProgress({ top, bottom });
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    updateScrollState();
    const frameId = requestAnimationFrame(() => {
      updateScrollState();
    });
    document.title =
      PAGE_TITLES[location.pathname] ?? "Pedro Monteiro — Software Engineer";
    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, updateScrollState]);

  useEffect(() => {
    updateScrollState();

    const el = mainRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      updateScrollState();
    });
    observer.observe(el);

    window.addEventListener("resize", updateScrollState);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <div className="flex justify-center w-full">
      <div
        className={[
          "flex flex-col w-full max-w-xl h-[calc(100dvh-1rem)] m-2 gap-2 overflow-hidden",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="relative flex-1 min-h-0 flex flex-col">
          <main
            ref={mainRef}
            onScroll={updateScrollState}
            className={[
              "flex-1 min-h-0 overflow-y-auto no-scrollbar",
              "p-4 rounded-2xl",
              "flex flex-col",
              "bg-neutral-900/40 backdrop-blur-md md:backdrop-blur-xl",
              "border border-white/5 shadow-2xl",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          >
            <div
              key={location.pathname}
              className="animate-page-enter flex-1 flex flex-col"
            >
              {children ?? <Outlet />}
            </div>
          </main>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[1px] inset-x-[1px] h-20 rounded-t-[15px] bg-gradient-to-b from-neutral-950/45 via-neutral-950/15 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] transition-opacity duration-300 ease-out z-10"
            style={{ opacity: scrollProgress.top }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[1px] inset-x-[1px] h-20 rounded-b-[15px] bg-gradient-to-t from-neutral-950/45 via-neutral-950/15 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)] transition-opacity duration-300 ease-out z-10"
            style={{ opacity: scrollProgress.bottom }}
          />
        </div>

        <nav className="shrink-0 w-full max-w-md mx-auto p-1.5 rounded-2xl bg-neutral-900/40 backdrop-blur-md md:backdrop-blur-xl border border-white/5 shadow-2xl">
          <div className="grid grid-cols-4 gap-1">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} route={item.route} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainContent;
