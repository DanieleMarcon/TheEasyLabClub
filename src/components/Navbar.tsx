import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="font-display text-xl font-800 tracking-tight text-slate-900"
        >
          The EasyLab Club
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-500 text-slate-600 transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to={navigation.login.href}
            className="text-sm font-500 text-slate-600 transition-colors hover:text-primary-600"
          >
            {navigation.login.label}
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.primary.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-base font-500 text-slate-700 transition-colors hover:text-primary-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={navigation.login.href}
              className="text-base font-500 text-slate-600 transition-colors hover:text-primary-600"
              onClick={() => setMobileOpen(false)}
            >
              {navigation.login.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
