import React from "react";
import Image from "next/image";

export default function Motivations() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Header */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1675546529278-bc2ac99879b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
            alt="مشهد لمدينة دبي"
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
            الدوافع
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            العوامل التي دفعتنا لإطلاق برنامج استقرار وأهمية هذا البرنامج في
            تلبية احتياجات سوق العمل الإماراتي
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              لماذا استقرار؟
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              دوافع إطلاق البرنامج
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              انطلاقاً من رؤية القيادة الرشيدة في دولة الإمارات العربية المتحدة
              لبناء اقتصاد معرفي متنوع ومستدام
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              {motivations.map((motivation) => (
                <div
                  key={motivation.title}
                  className="relative bg-white p-8 border border-gray-200 rounded-2xl shadow-sm"
                >
                  <div className="absolute top-0 left-0 -mt-6 -ml-6">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-full shadow-lg">
                      <motivation.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="pt-6 text-right">
                    <h3 className="text-xl font-medium text-gray-900">
                      {motivation.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">
                      {motivation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              إحصائيات وأرقام
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              مؤشرات تؤكد أهمية برنامج استقرار في سوق العمل الإماراتي
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  {stat.name}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Strategic Needs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                احتياجات سوق العمل
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                يستجيب برنامج استقرار للاحتياجات الاستراتيجية لسوق العمل في دولة
                الإمارات، حيث يركز على تطوير المهارات المطلوبة في القطاعات ذات
                الأولوية الوطنية.
              </p>
              <dl className="mt-10 space-y-10">
                {strategicNeeds.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="mr-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 mr-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="برج العرب - دبي"
                  width={800}
                  height={600}
                  className="object-cover"
                />
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

// Motivations Data
const motivations = [
  {
    title: "استجابة لرؤية الإمارات 2030",
    description:
      "يأتي برنامج استقرار استجابة لرؤية الإمارات 2030 التي تركز على بناء اقتصاد معرفي متنوع ومستدام وتطوير الكوادر الوطنية.",
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "سد الفجوة بين التعليم وسوق العمل",
    description:
      "يهدف البرنامج إلى سد الفجوة بين مخرجات التعليم ومتطلبات سوق العمل من خلال توفير برامج تدريبية متخصصة تلبي احتياجات القطاعات الاستراتيجية.",
    icon: (props: IconProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    title: "مواكبة التحول الرقمي",
    description:
      "يسعى البرنامج إلى تمكين الشباب الإماراتي من المهارات الرقمية اللازمة لمواكبة التحول الرقمي السريع الذي تشهده الدولة في مختلف القطاعات.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

// Stats Data
const stats = [
  { id: 1, name: "نسبة الشباب في المجتمع الإماراتي", value: "60%" },
  { id: 2, name: "معدل نمو الوظائف التقنية سنوياً", value: "25%" },
  { id: 3, name: "نسبة الوظائف التي تتطلب مهارات رقمية", value: "85%" },
];

// Strategic Needs Data
const strategicNeeds = [
  {
    id: 1,
    name: "الذكاء الاصطناعي وعلوم البيانات",
    description:
      "يحتاج سوق العمل الإماراتي إلى متخصصين في مجالات الذكاء الاصطناعي وعلوم البيانات لدعم مبادرات الحكومة الذكية والتحول الرقمي.",
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "الطاقة المتجددة والاستدامة",
    description:
      "تتزايد الحاجة إلى خبراء في مجالات الطاقة المتجددة والاستدامة لدعم مبادرات الإمارات في مجال الطاقة النظيفة واستراتيجية الإمارات للطاقة 2050.",
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
    id: 3,
    name: "ريادة الأعمال والابتكار",
    description:
      "يحتاج الاقتصاد الإماراتي إلى رواد أعمال ومبتكرين قادرين على إطلاق مشاريع ريادية تساهم في تنويع مصادر الدخل وتعزيز القدرة التنافسية للاقتصاد الوطني.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];
