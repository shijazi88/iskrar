import React from "react";
import Image from "next/image";

export default function Results() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Header */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
            alt="مشهد لمدينة دبي في الليل"
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
            النتائج
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            نتائج وإنجازات برنامج استكرار في مجال تطوير مهارات الشباب الإماراتي
          </p>
        </div>
      </div>

      {/* Main Content - Key Results */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              النتائج الرئيسية
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              نتائج البرنامج في أرقام
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              حقق برنامج استكرار نتائج متميزة منذ إطلاقه في مجال تأهيل وتدريب
              الكوادر الوطنية
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {keyResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-gray-50 rounded-lg px-6 pb-8 pt-12 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-indigo-500 rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
                      <result.icon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-indigo-600">
                    {result.value}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    {result.name}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              قصص نجاح
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              قصص نجاح لخريجي برنامج استكرار وتجاربهم في سوق العمل
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {story.category}
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {story.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {story.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{story.author}</span>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={story.authorImageSrc}
                        alt={story.author}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">
                        {story.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Impact */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                تأثير البرنامج
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                ساهم برنامج استكرار في إحداث تأثير إيجابي في المجتمع الإماراتي
                وتعزيز التنمية المستدامة من خلال:
              </p>
              <div className="mt-10 space-y-10">
                {impacts.map((impact) => (
                  <div key={impact.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <impact.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="mr-16 text-lg leading-6 font-medium text-gray-900">
                        {impact.title}
                      </p>
                    </dt>
                    <dd className="mt-2 mr-16 text-base text-gray-500">
                      {impact.description}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1538121614163-510d42f0e3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="متحف المستقبل في دبي"
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

// Key Results Data
const keyResults = [
  {
    id: 1,
    name: "خريج ومتدرب",
    value: "+5000",
    description:
      "تخريج أكثر من 5000 شاب وشابة مؤهلين للعمل في مختلف القطاعات الاستراتيجية",
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
    id: 2,
    name: "شركة ومؤسسة شريكة",
    value: "+150",
    description:
      "شراكات استراتيجية مع أكثر من 150 شركة ومؤسسة محلية وعالمية لتوفير فرص عمل للخريجين",
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
  {
    id: 3,
    name: "مشروع ريادي",
    value: "+120",
    description:
      "إطلاق أكثر من 120 مشروع ريادي من أفكار المشاركين في البرنامج في مختلف المجالات",
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
    id: 4,
    name: "فرصة عمل",
    value: "+3000",
    description:
      "توفير أكثر من 3000 فرصة عمل للخريجين في القطاعات الاستراتيجية بالتعاون مع الشركاء",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "دورة تدريبية",
    value: "+200",
    description:
      "تنفيذ أكثر من 200 دورة تدريبية متخصصة في مجالات مختلفة بالتعاون مع أفضل المدربين والخبراء",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "نسبة التوطين",
    value: "+20%",
    description:
      "زيادة نسبة التوطين في القطاعات الاستراتيجية بأكثر من 20% في الشركات المشاركة في البرنامج",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

// Success Stories Data
const successStories = [
  {
    id: 1,
    title: "من متدرب إلى مدير تنفيذي",
    description:
      "قصة أحمد السويدي الذي بدأ متدرباً في برنامج استكرار وأصبح مديراً تنفيذياً لقسم التكنولوجيا في إحدى الشركات الرائدة في الإمارات.",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    imageAlt: "رجل أعمال إماراتي",
    category: "القطاع التكنولوجي",
    author: "أحمد السويدي",
    authorImageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "مدير تنفيذي للتكنولوجيا",
  },
  {
    id: 2,
    title: "ريادة الأعمال في مجال الطاقة المتجددة",
    description:
      "قصة نجاح مريم المنصوري التي أسست شركتها الخاصة في مجال الطاقة المتجددة بعد تخرجها من برنامج استكرار وحصولها على تمويل من صندوق خليفة.",
    imageSrc:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    imageAlt: "سيدة أعمال إماراتية",
    category: "ريادة الأعمال",
    author: "مريم المنصوري",
    authorImageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "مؤسسة شركة الطاقة الخضراء",
  },
];

// Program Impact Data
const impacts = [
  {
    id: 1,
    title: "تعزيز الاقتصاد المعرفي",
    description:
      "ساهم البرنامج في تعزيز الاقتصاد المعرفي في دولة الإمارات من خلال تأهيل كوادر وطنية في مجالات التكنولوجيا والابتكار.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "تحقيق التوازن بين الجنسين",
    description:
      "نجح البرنامج في تحقيق التوازن بين الجنسين، حيث تشكل النساء 48% من إجمالي المشاركين، مما يساهم في تمكين المرأة الإماراتية.",
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "دعم التنمية المستدامة",
    description:
      "يساهم البرنامج في تحقيق أهداف التنمية المستدامة من خلال التركيز على القطاعات ذات الأولوية مثل الطاقة المتجددة والتكنولوجيا النظيفة.",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];
