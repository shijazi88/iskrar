import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define a type for the SVG icon props
type IconProps = React.SVGProps<SVGSVGElement>;

export default function Home() {
  return (
    <div className="bg-white font-tajawal" dir="rtl">
      {/* Hero Section - Enhanced with gradient and better layout */}
      <div className="relative bg-gradient-to-l from-white via-indigo-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:translate-y-0 lg:translate-x-0"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="heropattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-indigo-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#heropattern)" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">مرحباً بكم في</span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    استقرار
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  منصة تدريبية متكاملة للعمالة قبل القدوم إلى دولة الإمارات
                  العربية المتحدة، لتعريفهم بالثقافة والقوانين وضمان تجربة عمل
                  ناجحة ومستقرة
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                    >
                      تعرف على البرنامج
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:mr-3">
                    <Link
                      href="/registration"
                      className="w-full flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                    >
                      التسجيل في البرنامج
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none shadow-2xl"
            src="/images/Hero Section.png"
            alt="برنامج استقرار للعمالة في الإمارات"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>

      {/* About Section - Improved with card design */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              عن البرنامج
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              برنامج استقرار
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              برنامج تدريبي شامل يؤهل العمالة للعمل في دولة الإمارات من خلال
              شهادات معتمدة ودورات متخصصة قبل القدوم للدولة
            </p>
          </div>

          <div className="mt-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-indigo-500">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  رؤيتنا ورسالتنا
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  يهدف برنامج استقرار إلى تمكين العمالة من المهارات والمعرفة
                  اللازمة للنجاح في بيئة العمل الإماراتية قبل وصولهم للدولة. من
                  خلال تدريبهم على الثقافة والعادات والقوانين وحقوق وواجبات
                  العمل لضمان تجربة عمل ناجحة ومستقرة.
                </p>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300 inline-flex items-center"
                  >
                    اقرأ المزيد عن رؤيتنا
                    <svg
                      className="mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/ourmessage.png"
                    alt="رؤيتنا ورسالتنا - برنامج استقرار"
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced with better card design */}
      <div className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              مزايا البرنامج
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              تأهيل شامل قبل القدوم للإمارات
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              نقدم برامج تدريبية متكاملة لإعداد العمالة قبل بدء العمل في دولة
              الإمارات العربية المتحدة
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-r-4 border-indigo-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="mr-4 text-lg font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </div>
                  <p className="text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-base font-semibold text-indigo-200 tracking-wide uppercase">
            أهداف البرنامج
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
            مخرجات البرنامج
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-indigo-200">
            نهدف إلى تحقيق بيئة عمل مستقرة وناجحة من خلال الإعداد الجيد للعمالة
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {strategicGoals.map((goal) => (
              <div
                key={goal.title}
                className="pt-6 bg-white rounded-lg shadow-lg px-6 pb-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white mx-auto shadow-md">
                  <goal.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/goals"
              className="inline-flex items-center text-base font-medium text-white hover:text-indigo-100 transition-colors duration-300"
            >
              اكتشف المزيد عن أهدافنا
              <svg
                className="mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section - Enhanced visual design */}
      <div className="bg-indigo-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              مؤشرات النجاح
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              حققنا نتائج ملموسة في مجال تدريب وتأهيل العمالة قبل القدوم إلى
              الإمارات
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-indigo-50 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-indigo-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-xl sm:grid sm:grid-cols-4 text-white">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.name}
                      className={`flex flex-col p-6 text-center ${
                        index < stats.length - 1
                          ? "sm:border-r sm:border-indigo-500"
                          : ""
                      }`}
                    >
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-100">
                        {stat.name}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Enhanced with improved cards */}
      <div className="bg-white py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                ماذا يقول المستفيدون من البرنامج
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                آراء العمال وأصحاب العمل حول تأثير برنامج التدريب قبل القدوم
                للإمارات
              </p>
            </div>
            <div className="mt-12">
              <div className="max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author.name}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-indigo-500"
                  >
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="text-indigo-500 mb-4 text-2xl">"</div>
                        <p className="text-lg text-gray-900 mb-4 leading-relaxed">
                          {testimonial.content}
                        </p>
                        <div className="text-indigo-500 text-right text-2xl">
                          "
                        </div>
                      </div>
                      <div className="mt-6 flex items-center border-t border-gray-200 pt-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="mr-3">
                          <p className="text-sm font-medium text-gray-900">
                            {testimonial.author.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M0 4c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block mb-2">
                  هل أنت جاهز لتحسين تجربة العمل؟
                </span>
                <span className="block text-indigo-100 text-xl font-medium mt-2">
                  انضم إلى برنامج التدريب قبل القدوم إلى الإمارات
                </span>
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                سجل الآن للاستفادة من برنامجنا التدريبي الشامل الذي يؤهلك للعمل
                بنجاح في الإمارات العربية المتحدة
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  <Link
                    href="/registration"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  >
                    سجل كصاحب عمل
                  </Link>
                  <Link
                    href="/worker-registration"
                    className="w-full flex items-center justify-center px-5 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300"
                  >
                    سجل كعامل
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature type definition
type Feature = {
  name: string;
  description: string;
  icon: (props: IconProps) => React.ReactElement;
};

const features: Feature[] = [
  {
    name: "دورات تدريبية معتمدة",
    description:
      "نقدم دورات تدريبية معتمدة تؤهل العمالة للعمل في الإمارات وتمنحهم الشهادات اللازمة قبل القدوم للدولة.",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "التعريف بالثقافة الإماراتية",
    description:
      "نزود العمالة بفهم عميق للثقافة والعادات والتقاليد الإماراتية لمساعدتهم على الاندماج بسرعة وتجنب أي سوء فهم ثقافي.",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "التوعية القانونية والحقوقية",
    description:
      "توعية العمالة بحقوقهم وواجباتهم وفق قوانين العمل الإماراتية، مما يضمن بيئة عمل مستقرة وصحية ويقلل المخالفات القانونية.",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    name: "منصة تدريب إلكترونية",
    description:
      "منصة رقمية متكاملة تتيح للعمالة إكمال التدريب والحصول على الشهادات في بلدانهم قبل القدوم إلى الإمارات، مما يسهل عملية الانتقال والاندماج.",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
];

// Strategic Goals
const strategicGoals = [
  {
    title: "توعية قانونية شاملة",
    description:
      "تعريف العمالة بحقوقهم وواجباتهم وفق قوانين العمل الإماراتية لخلق بيئة عمل آمنة ومستقرة",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "خفض النزاعات العمالية",
    description:
      "تقليل النزاعات والخلافات في بيئة العمل من خلال التوعية المسبقة والتدريب الشامل",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "تقليل المخالفات",
    description:
      "تقليل المخالفات القانونية وخلق نموذج عالي للاستقرار المجتمعي من خلال الوعي القانوني",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

// Statistics
const stats = [
  { name: "متدرب معتمد", value: "+10,000" },
  { name: "شهادة معتمدة", value: "+8,500" },
  { name: "دولة مستهدفة", value: "12" },
  { name: "نسبة انخفاض النزاعات العمالية", value: "65%" },
];

// Testimonials
const testimonials = [
  {
    content:
      "برنامج التدريب قبل القدوم ساعدني على فهم حقوقي وواجباتي كعامل في الإمارات، وجعلني أكثر ثقة في بداية عملي.",
    author: {
      name: "راجيش كومار",
      role: "عامل في شركة إنشاءات",
      imageUrl: "/images/testimonial-1.jpg",
    },
  },
  {
    content:
      "لاحظنا تحسناً كبيراً في أداء العمال الذين خضعوا للتدريب المسبق، فهم أكثر وعياً بإجراءات السلامة وأكثر إلماماً بالثقافة المحلية.",
    author: {
      name: "سعيد المنصوري",
      role: "مدير موارد بشرية - شركة الإمارات للتطوير",
      imageUrl: "/images/testimonial-2.jpg",
    },
  },
  {
    content:
      "البرنامج ساعدني على التكيف بشكل أسرع مع بيئة العمل في الإمارات، وخصوصاً فهم الثقافة المحلية والتقاليد التي يجب احترامها.",
    author: {
      name: "ماريا سانتوس",
      role: "عاملة في قطاع الضيافة",
      imageUrl: "/images/testimonial-3.jpg",
    },
  },
];
