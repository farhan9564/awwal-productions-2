"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/process", "Process"],
  ["/contact", "Contact"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState("0%");
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 35);
      const height = document.documentElement.scrollHeight - innerHeight;
      setProgress(height > 0 ? `${(scrollY / height) * 100}%` : "0%");
    };
    const escape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const resize = () => {
      if (innerWidth > 850) setOpen(false);
      update();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle("lock-scroll", open);
    return () => document.body.classList.remove("lock-scroll");
  }, [open]);
  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-visible" : ""}`}
      id="siteHeader"
      style={{ "--scroll-progress": progress }}
    >
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Awwal Productions — Home"
          onClick={() => setOpen(false)}
        >
          <img
            alt="Awwal Productions"
            src="/assets/awwal-logo.svg"
            width="177"
            height="75"
            fetchPriority="high"
          />
        </Link>
        <nav
          aria-label="Primary navigation"
          className={`main-nav${open ? " open" : ""}`}
          id="mainNav"
        >
          {links.map(([href, label]) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                prefetch={false}
                className={`nav-link${active ? " current" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-lime header-cta" href="/contact">
            REQUEST A QUOTE{" "}
            <span aria-hidden="true" className="arr">
              ↗
            </span>
          </Link>
          <button
            aria-controls="mainNav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="hamburger"
            id="mobileToggle"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
