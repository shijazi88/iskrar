import Image from "next/image";
import { GiTeacher } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-indigo-800 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/dubai-skyline-new.jpg"
            alt="أفق مدينة دبي"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tajawal">
            عن برنامج استقرار
          </h1>
          <p className="text-lg md:text-xl max-w-3xl font-tajawal leading-relaxed">
            برنامج وطني مبتكر يهدف إلى تطوير مهارات العمالة قبل قدومها إلى دولة
            الإمارات العربية المتحدة، وذلك لتحقيق الاستقرار المهني والمساهمة في
            تعزيز التنافسية الاقتصادية للدولة.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-indigo-700 mb-6 font-tajawal">
                رؤيتنا
              </h2>
              <p className="text-gray-700 leading-relaxed font-tajawal">
                نطمح أن نكون البرنامج الرائد في تطوير مهارات العمالة على مستوى
                المنطقة، وأن نساهم في تحقيق رؤية الإمارات 2030 من خلال بناء
                اقتصاد معرفي متنوع ومستدام.
              </p>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed font-tajawal">
                  نسعى لتعزيز مكانة دولة الإمارات كوجهة عالمية للعمالة الماهرة،
                  وتوفير بيئة عمل محفزة ومستقرة تسهم في تحقيق التنمية الشاملة.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-indigo-700 mb-6 font-tajawal">
                رسالتنا
              </h2>
              <p className="text-gray-700 leading-relaxed font-tajawal">
                توفير برامج تدريبية متخصصة للعمالة قبل قدومها إلى الدولة، وذلك
                لتأهيلها مهنياً وثقافياً واجتماعياً، وضمان اندماجها السريع في
                بيئة العمل الإماراتية.
              </p>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-gray-700 leading-relaxed font-tajawal">
                  نلتزم بتطوير منظومة متكاملة للتدريب والتأهيل تراعي احتياجات
                  سوق العمل المحلي، وتسهم في رفع إنتاجية العمالة وتعزيز
                  استقرارها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 font-tajawal">
            قيمنا الأساسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-lg p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600 text-white p-4 rounded-full inline-block">
                  <IoIosRocket className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                الابتكار
              </h3>
              <p className="text-gray-700 font-tajawal">
                نسعى دائماً لتطوير منهجيات وأساليب تدريب مبتكرة تواكب التطورات
                العالمية في مجال تنمية المهارات، ونشجع الإبداع في تطوير حلول
                فعالة للتحديات.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600 text-white p-4 rounded-full inline-block">
                  <GiTeacher className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                الجودة
              </h3>
              <p className="text-gray-700 font-tajawal">
                نلتزم بتقديم برامج تدريبية عالية الجودة وفق أفضل الممارسات
                العالمية، ونهتم بالتطوير المستمر وقياس الأثر لضمان تحقيق أهداف
                البرنامج.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600 text-white p-4 rounded-full inline-block">
                  <FaHandshake className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                المسؤولية
              </h3>
              <p className="text-gray-700 font-tajawal">
                نؤمن بمسؤوليتنا تجاه المجتمع والاقتصاد الوطني، ونعمل على تطوير
                عمالة مسؤولة تسهم في تحقيق التنمية المستدامة وتعزيز الاستقرار
                الاجتماعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 font-tajawal">
            فوائد البرنامج
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                للعمالة
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    اكتساب مهارات فنية ومهنية متخصصة
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    التعرف على ثقافة وقيم دولة الإمارات قبل القدوم
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    زيادة فرص الترقي الوظيفي وتحسين الدخل
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    تسهيل الاندماج في بيئة العمل والمجتمع
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                لأصحاب العمل
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    تحسين إنتاجية العمالة وكفاءتها منذ بداية العمل
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    تقليل تكاليف التدريب الداخلي وفترة التأقلم
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    تعزيز الاستقرار الوظيفي وتقليل معدل دوران العمالة
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-tajawal">
                    تحسين جودة الخدمات والمنتجات المقدمة
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
