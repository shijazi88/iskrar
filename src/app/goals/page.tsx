import React from "react";
import Image from "next/image";

export default function Goals() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            أهدافنا
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            أهداف برنامج استقرار
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            نسعى من خلال برنامج استقرار إلى تحقيق مجموعة من الأهداف الاستراتيجية
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {/* Main Goals */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                الأهداف الرئيسية
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {mainGoals.map((goal) => (
                  <div
                    key={goal.title}
                    className="pt-6 border border-gray-200 rounded-lg px-6 pb-8"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="rounded-md bg-indigo-500 p-3">
                          <goal.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="mr-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4 text-base text-gray-500">
                      {goal.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                النتائج المتوقعة
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                يهدف برنامج استقرار إلى تحقيق مجموعة من النتائج الملموسة
                المرتبطة بتحسين بيئة العمل في دولة الإمارات العربية المتحدة
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome.title}
                    className="bg-gray-50 px-6 py-5 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="text-indigo-500 flex-shrink-0 mr-2">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {outcome.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term Vision */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                رؤيتنا طويلة المدى
              </h2>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  نتطلع إلى أن يصبح برنامج استقرار المنصة الرائدة في مجال تدريب
                  وتأهيل العمالة الوافدة إلى دولة الإمارات العربية المتحدة، وأن
                  يساهم بشكل فعال في:
                </p>
                <ul>
                  <li>
                    بناء بيئة عمل آمنة ومستقرة في جميع القطاعات الاقتصادية
                  </li>
                  <li>
                    تعزيز التفاهم الثقافي والاجتماعي بين العمالة الوافدة
                    والمجتمع الإماراتي
                  </li>
                  <li>
                    خفض معدلات النزاعات العمالية وتحسين العلاقة بين العمال
                    وأصحاب العمل
                  </li>
                  <li>
                    دعم سياسات التوطين من خلال تدريب الكوادر الوطنية في إدارة
                    برامج التدريب
                  </li>
                  <li>
                    تحسين سمعة دولة الإمارات كوجهة عمل تحترم حقوق العمال وتوفر
                    لهم بيئة عمل محفزة
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

type Goal = {
  title: string;
  description: string;
  icon: (props: IconProps) => React.ReactElement;
};

const mainGoals: Goal[] = [
  {
    title: "تأهيل العمالة قبل القدوم",
    description:
      "تزويد العمالة بالمعرفة والمهارات اللازمة عن بيئة العمل والقوانين الإماراتية قبل وصولهم إلى الدولة.",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "توفير شهادات معتمدة",
    description:
      "منح العمالة شهادات معتمدة تؤكد حصولهم على التدريب اللازم وفهمهم للثقافة والقوانين الإماراتية.",
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
    title: "تعزيز التناغم الثقافي",
    description:
      "بناء جسور التفاهم بين الثقافات المختلفة وتعزيز التعايش الإيجابي بين العمالة والمجتمع الإماراتي.",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "تقليل النزاعات العمالية",
    description:
      "خفض معدلات النزاعات العمالية من خلال توعية العمال بحقوقهم وواجباتهم والإجراءات القانونية في دولة الإمارات.",
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
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    title: "تحسين بيئة العمل",
    description:
      "المساهمة في خلق بيئة عمل صحية ومستدامة تعزز إنتاجية العمال وتحافظ على حقوقهم.",
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
    title: "دعم سوق العمل الإماراتي",
    description:
      "تلبية احتياجات سوق العمل الإماراتي من العمالة المؤهلة والمدربة على الثقافة والقوانين المحلية.",
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
];

type Outcome = {
  title: string;
  description: string;
};

const outcomes: Outcome[] = [
  {
    title: "انخفاض في معدلات المخالفات القانونية",
    description:
      "خفض نسبة المخالفات القانونية التي ترتكبها العمالة نتيجة عدم الإلمام بالقوانين المحلية.",
  },
  {
    title: "تحسين ظروف العمل",
    description:
      "تحسين ظروف العمل من خلال زيادة وعي العمال بحقوقهم وأصحاب العمل بواجباتهم.",
  },
  {
    title: "زيادة الإنتاجية",
    description:
      "زيادة إنتاجية العمال نتيجة لفهمهم بيئة العمل وثقافة المجتمع الإماراتي.",
  },
  {
    title: "تسهيل عملية التوظيف",
    description:
      "تسهيل عملية توظيف العمالة الجديدة وتقليل الوقت اللازم لتدريبهم بعد وصولهم.",
  },
  {
    title: "تعزيز سمعة الإمارات",
    description:
      "تعزيز سمعة دولة الإمارات كوجهة عمل تحترم حقوق العمال وتوفر لهم بيئة عمل آمنة.",
  },
  {
    title: "تطوير منظومة تدريبية متكاملة",
    description:
      "بناء منظومة تدريبية متكاملة تلبي احتياجات كافة القطاعات الاقتصادية من العمالة المؤهلة.",
  },
];
