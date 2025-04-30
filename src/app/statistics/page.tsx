import React from "react";
import Image from "next/image";

export default function Statistics() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Header */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="صورة لمباني حديثة في الإمارات"
            width={2000}
            height={1000}
          />
          <div
            className="absolute inset-0 bg-indigo-800 opacity-75"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            الإحصائيات
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            البيانات والإحصائيات الرئيسية لبرنامج استكرار وتأثيره على سوق العمل
            الإماراتي
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              نظرة عامة
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              إحصائيات عامة عن برنامج استكرار والمشاركين فيه منذ انطلاقه
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-indigo-600">
                      +15,000
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      عدد المتقدمين للبرنامج
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-indigo-600">
                      5,000
                    </h3>
                    <p className="mt-3 text-base text-gray-500">عدد الخريجين</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-indigo-600">85%</h3>
                    <p className="mt-3 text-base text-gray-500">
                      نسبة التوظيف بعد التخرج
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-indigo-600">7</h3>
                    <p className="mt-3 text-base text-gray-500">
                      إمارات مشاركة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              إحصائيات تفصيلية
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              بيانات تفصيلية عن نتائج البرنامج وتأثيره على تنمية المهارات
              والتوظيف
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    {demographicData.map((item) => (
                      <div key={item.id} className="mt-8 first:mt-0">
                        <div className="flex items-center justify-center">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {item.name}
                          </h3>
                        </div>
                        <dl className="mt-4 grid grid-cols-2 gap-4">
                          {item.stats.map((stat) => (
                            <div
                              key={stat.id}
                              className="bg-gray-50 rounded-lg px-4 py-5 text-center"
                            >
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {stat.name}
                              </dt>
                              <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                                {stat.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    {sectorData.map((item) => (
                      <div key={item.id} className="mt-8 first:mt-0">
                        <div className="flex items-center justify-center">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {item.name}
                          </h3>
                        </div>
                        <dl className="mt-4 grid grid-cols-2 gap-4">
                          {item.stats.map((stat) => (
                            <div
                              key={stat.id}
                              className="bg-gray-50 rounded-lg px-4 py-5 text-center"
                            >
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {stat.name}
                              </dt>
                              <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                                {stat.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                النمو والتطور
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                نمو برنامج استكرار وتطوره منذ انطلاقه عام 2018
              </p>
              <div className="mt-8">
                <div className="space-y-6">
                  {growthData.map((item) => (
                    <div key={item.year} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="mr-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {item.year}
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          {item.description}
                        </p>
                        <div className="mt-3 text-sm">
                          <div className="font-medium text-indigo-600">
                            عدد المشاركين: {item.participants}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-gray-50 rounded-lg px-6 py-8">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                  تأثير البرنامج بالأرقام
                </h3>
                <ul className="space-y-3">
                  {impactData.map((item) => (
                    <li key={item.id} className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="mr-3 text-base text-gray-700">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1563908830142-a5e389b8c80f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="متدربون في برنامج استكرار"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SVG Icon Props Type
type IconProps = React.SVGProps<SVGSVGElement>;

// Demographic Data
const demographicData = [
  {
    id: 1,
    name: "الخريجين حسب الجنس",
    stats: [
      { id: 1, name: "ذكور", value: "52%" },
      { id: 2, name: "إناث", value: "48%" },
    ],
  },
  {
    id: 2,
    name: "الخريجين حسب العمر",
    stats: [
      { id: 1, name: "18-24", value: "45%" },
      { id: 2, name: "25-34", value: "55%" },
    ],
  },
];

// Sector Data
const sectorData = [
  {
    id: 1,
    name: "مجالات التوظيف",
    stats: [
      { id: 1, name: "التكنولوجيا", value: "40%" },
      { id: 2, name: "الطاقة", value: "25%" },
    ],
  },
  {
    id: 2,
    name: "قطاعات التوظيف",
    stats: [
      { id: 1, name: "حكومي", value: "60%" },
      { id: 2, name: "خاص", value: "40%" },
    ],
  },
];

// Growth Data
const growthData = [
  {
    year: "2018",
    description: "انطلاق البرنامج بمشاركة 500 متدرب من 3 إمارات",
    participants: "500",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    year: "2019",
    description: "توسع البرنامج ليشمل 1000 متدرب من 5 إمارات",
    participants: "1,000",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    year: "2020",
    description:
      "تحول البرنامج إلى التدريب عن بعد خلال جائحة كورونا مع مشاركة 1500 متدرب",
    participants: "1,500",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    year: "2022",
    description:
      "توسع البرنامج ليشمل جميع إمارات الدولة السبع مع مشاركة 2000 متدرب",
    participants: "2,000",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

// Impact Data
const impactData = [
  {
    id: 1,
    text: "زيادة نسبة توطين الوظائف التقنية بنسبة 25% في الشركات المشاركة",
  },
  {
    id: 2,
    text: "توفير أكثر من 3000 فرصة عمل للشباب الإماراتي في قطاعات استراتيجية",
  },
  {
    id: 3,
    text: "مساهمة المشاريع الريادية للخريجين بأكثر من 50 مليون درهم في الاقتصاد المحلي",
  },
  {
    id: 4,
    text: "تطوير أكثر من 120 مشروع تقني مبتكر تخدم القطاعات الاستراتيجية في الدولة",
  },
  {
    id: 5,
    text: "إطلاق 15 مبادرة مجتمعية بالتعاون مع الجهات الحكومية والخاصة",
  },
  {
    id: 6,
    text: "توقيع اتفاقيات شراكة مع أكثر من 150 مؤسسة محلية وعالمية",
  },
];
