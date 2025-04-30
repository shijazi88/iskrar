"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function EmployerRegistration() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    numberOfWorkers: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div
        className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8"
        dir="rtl"
      >
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              شكراً للتسجيل!
            </h1>
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <p className="text-green-700">
                تم استلام طلبك بنجاح. سيقوم فريقنا بالاتصال بك قريباً لمناقشة
                التفاصيل وكيفية المشاركة في برنامج التدريب.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            تسجيل أصحاب العمل
          </h1>
          <p className="text-lg text-gray-600">
            سجل شركتك للمشاركة في برنامج تدريب العمال قبل القدوم إلى الإمارات
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  اسم الشركة <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-gray-700"
                >
                  اسم الشخص المسؤول <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700"
                >
                  مجال العمل <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">اختر مجال العمل</option>
                  <option value="construction">البناء والإنشاءات</option>
                  <option value="services">الخدمات</option>
                  <option value="hospitality">الضيافة والفنادق</option>
                  <option value="retail">التجزئة</option>
                  <option value="industrial">الصناعة</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfWorkers"
                  className="block text-sm font-medium text-gray-700"
                >
                  عدد العمال المتوقع تدريبهم{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="numberOfWorkers"
                  name="numberOfWorkers"
                  required
                  value={formData.numberOfWorkers}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">اختر العدد</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-500">101-500</option>
                  <option value="500+">أكثر من 500</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700"
                >
                  معلومات إضافية (اختياري)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="أخبرنا عن احتياجاتك ومتطلباتك الخاصة"
                ></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  بالضغط على زر التسجيل، أنت توافق على{" "}
                  <Link
                    href="/terms"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    شروط وأحكام
                  </Link>{" "}
                  البرنامج وتؤكد أن جميع المعلومات المقدمة صحيحة.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "جاري التسجيل..." : "تسجيل"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
