"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 font-tajawal">استقرار</h2>
            <nav className="grid grid-cols-2 gap-4">
              <div>
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  الرئيسية
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  عن البرنامج
                </Link>
                <Link
                  href="/goals"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  أهداف البرنامج
                </Link>
                <Link
                  href="/motivations"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  الدوافع
                </Link>
              </div>
              <div>
                <Link
                  href="/results"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  النتائج
                </Link>
                <Link
                  href="/partners"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  الشركاء
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 mb-2 font-tajawal nav-menu-item"
                >
                  اتصل بنا
                </Link>
              </div>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-tajawal">تواصل معنا</h2>
            <p className="text-gray-300 mb-2 font-tajawal">
              الإمارات العربية المتحدة، أبوظبي
            </p>
            <p className="text-gray-300 mb-2 font-tajawal">
              البريد الإلكتروني: info@istekrar.ae
            </p>
            <p className="text-gray-300 font-tajawal">
              الهاتف: +971 2 123 4567
            </p>
          </div>

          {/* Registration */}
          <div>
            <h2 className="text-xl font-bold mb-4 font-tajawal">
              التسجيل في البرنامج
            </h2>
            <p className="text-gray-300 mb-4 font-tajawal">
              سجل الآن للاستفادة من برنامج تدريب العمال قبل القدوم إلى الإمارات
            </p>
            <div className="space-y-3">
              <Link
                href="/registration"
                className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 font-tajawal"
              >
                سجل كصاحب عمل
              </Link>
              <Link
                href="/worker-registration"
                className="block w-full text-center py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 transition-colors duration-300 font-tajawal"
              >
                سجل كعامل
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex space-x-6 mb-4 md:mb-0 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-base text-gray-400 font-tajawal">
              &copy; {new Date().getFullYear()} استقرار. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
