import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#232526] to-[#414345] text-white pt-12 pb-6 px-4 mt-16 relative overflow-hidden">
      {/* Decorative Top Border */}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-cormorant font-bold tracking-wide">
           სასტუმრო
          </span>
          <span className="w-3 h-3 bg-[#ff7200] rounded-full animate-pulse" />
        </div>
        {/* Navigation */}
        <nav className="flex gap-8 text-base font-medium">
          <Link
            href="/"
            className="hover:text-[#ff7200]  transition-colors duration-200"
          >
           მთავარი
          </Link>
     
          <Link
            href="/about"
            className="hover:text-[#ff7200] transition-colors duration-200"
          >
            ჩვენს შესახებ
          </Link>
      
        </nav>
        {/* Social Icons */}
        <div className="flex gap-5">
          {/* Facebook */}
          <a href="#" className="group" aria-label="Facebook">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#ff7200] transition-colors duration-200">
              <svg
                className="w-6 h-6 text-white rounded-full group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </span>
          </a>
          {/* Instagram */}
          <a href="#" className="group" aria-label="Instagram">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#ff7200] transition-colors duration-200">
              <svg
                className="w-6 h-6 text-white rounded-full group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-[18px] text-white font-cormorant text-center mt-5">
        დაისვენეთ კომფორტში, ბუნებით გარშემორტყმულ გარემოში
      </div>
    </footer>
  );
};

export default Footer;
