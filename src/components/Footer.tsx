import { Link } from "react-router-dom";
import { navigation } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-8">
        <Link
          to="/"
          className="font-display text-lg font-700 tracking-tight text-slate-800"
        >
          The EasyLab Club
        </Link>

        <div className="flex flex-wrap justify-center gap-8">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-500 text-slate-500 transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link to="/privacy" className="transition-colors hover:text-slate-600">
            Privacy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-slate-600">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
