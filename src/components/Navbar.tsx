"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-bold text-2xl text-indigo-600 font-tajawal tracking-wide hover:text-indigo-700 transition-colors duration-300"
            >
              استقرار
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/about")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              عن البرنامج
            </Link>
            <Link
              href="/goals"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/goals")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              أهداف البرنامج
            </Link>
            <Link
              href="/motivations"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/motivations")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              الدوافع
            </Link>
            <Link
              href="/results"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/results")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              النتائج
            </Link>
            <Link
              href="/partners"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/partners")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              الشركاء
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-tajawal tracking-wide nav-menu-item ${
                isActive("/contact")
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-300"
              }`}
            >
              اتصل بنا
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-4 ml-6">
            <Link
              href="/registration"
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 font-tajawal"
            >
              سجل كصاحب عمل
            </Link>
            <Link
              href="/worker-registration"
              className="inline-flex items-center px-3 py-1 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300 font-tajawal"
            >
              سجل كعامل
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">فتح القائمة</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            الرئيسية
          </Link>
          <Link
            href="/about"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/about")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            عن البرنامج
          </Link>
          <Link
            href="/goals"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/goals")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            أهداف البرنامج
          </Link>
          <Link
            href="/motivations"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/motivations")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            الدوافع
          </Link>
          <Link
            href="/results"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/results")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            النتائج
          </Link>
          <Link
            href="/partners"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/partners")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            الشركاء
          </Link>
          <Link
            href="/contact"
            className={`block pl-3 pr-4 py-2 border-r-4 text-base font-medium font-tajawal nav-menu-item ${
              isActive("/contact")
                ? "border-indigo-500 text-indigo-700 bg-indigo-50"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
            }`}
          >
            اتصل بنا
          </Link>

          {/* Registration buttons for mobile */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-3 px-4">
            <Link
              href="/registration"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 font-tajawal"
            >
              سجل كصاحب عمل
            </Link>
            <Link
              href="/worker-registration"
              className="w-full flex justify-center py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300 font-tajawal"
            >
              سجل كعامل
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
