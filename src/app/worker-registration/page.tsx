"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function WorkerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    passportNumber: "",
    email: "",
    phone: "",
    jobType: "",
    experience: "",
    languages: [] as string[],
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        languages: [...prev.languages, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        languages: prev.languages.filter((lang) => lang !== value),
      }));
    }
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
                تم استلام طلبك بنجاح. سنقوم بالتواصل معك قريباً بخصوص برنامج
                التدريب وتفاصيل التسجيل.
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
            تسجيل العمال
          </h1>
          <p className="text-lg text-gray-600">
            سجل في برنامج التدريب قبل القدوم إلى الإمارات وتعلم المهارات اللازمة
            للعمل بنجاح
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nationality"
                    className="block text-sm font-medium text-gray-700"
                  >
                    الجنسية <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="nationality"
                    name="nationality"
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">اختر الجنسية</option>
                    <option value="indian">هندي</option>
                    <option value="pakistani">باكستاني</option>
                    <option value="bangladeshi">بنغلاديشي</option>
                    <option value="filipino">فلبيني</option>
                    <option value="nepalese">نيبالي</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="passportNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    رقم جواز السفر <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    required
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
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
                  htmlFor="jobType"
                  className="block text-sm font-medium text-gray-700"
                >
                  نوع الوظيفة المستهدفة <span className="text-red-500">*</span>
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  required
                  value={formData.jobType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">اختر نوع الوظيفة</option>
                  <option value="construction">عامل بناء</option>
                  <option value="household">عامل منزلي</option>
                  <option value="cleaning">عامل نظافة</option>
                  <option value="security">حارس أمن</option>
                  <option value="hospitality">عامل ضيافة</option>
                  <option value="driver">سائق</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  سنوات الخبرة <span className="text-red-500">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">اختر سنوات الخبرة</option>
                  <option value="0">لا توجد خبرة سابقة</option>
                  <option value="1-2">1-2 سنوات</option>
                  <option value="3-5">3-5 سنوات</option>
                  <option value="5+">أكثر من 5 سنوات</option>
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  اللغات التي تتحدثها <span className="text-red-500">*</span>
                </span>
                <div className="mt-1 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="arabic"
                      name="languages"
                      type="checkbox"
                      value="arabic"
                      onChange={handleLanguageChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="arabic"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      العربية
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="english"
                      name="languages"
                      type="checkbox"
                      value="english"
                      onChange={handleLanguageChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="english"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      الإنجليزية
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="hindi"
                      name="languages"
                      type="checkbox"
                      value="hindi"
                      onChange={handleLanguageChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hindi"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      الهندية
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="urdu"
                      name="languages"
                      type="checkbox"
                      value="urdu"
                      onChange={handleLanguageChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="urdu"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      الأوردو
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="tagalog"
                      name="languages"
                      type="checkbox"
                      value="tagalog"
                      onChange={handleLanguageChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="tagalog"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      التاغالوغية (الفلبينية)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                <div className="mr-3 text-sm">
                  <label
                    htmlFor="agreeToTerms"
                    className="font-medium text-gray-700"
                  >
                    أوافق على{" "}
                    <Link
                      href="/terms"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      شروط وأحكام
                    </Link>{" "}
                    البرنامج
                  </label>
                  <p className="text-gray-500">
                    أوافق على استخدام بياناتي للتسجيل في برنامج التدريب.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className={`inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isSubmitting || !formData.agreeToTerms
                      ? "opacity-70 cursor-not-allowed"
                      : ""
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
