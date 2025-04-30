import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFingerprint,
  FaEye,
  FaUserShield,
  FaMobileAlt,
} from "react-icons/fa";
import { BiSolidChart, BiSolidCloudUpload } from "react-icons/bi";

export default function Biometrics() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/fingerprint-scan.jpeg"
            alt="تقنيات البصمة ومراقبة السلوك"
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
            البصمة ومراقبة السلوك
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            تقنيات متطورة للتحقق من الهوية وضمان الأمان والاستقرار في بيئة العمل
          </p>
        </div>
      </div>

      {/* Main Content - Two Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              التقنيات الحديثة
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              ضمان الأمان والشفافية
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              توظيف أحدث التقنيات للتحقق من الهوية ومراقبة السلوك لضمان بيئة عمل
              آمنة ومستقرة
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {/* Fingerprint Technology */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    تقنية البصمة الحيوية
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    نستخدم أحدث تقنيات البصمة الحيوية للتحقق من هوية العمالة
                    وضمان سلامة عملية التسجيل والتدريب. توفر هذه التقنية مستوى
                    عالٍ من الأمان وتمنع أي محاولات للانتحال أو الغش.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-8">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <div className="mb-4">
                        <FaFingerprint className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">
                        بصمة الإصبع
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        تسجيل بصمات الأصابع للتحقق من الهوية بسرعة ودقة عالية
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <div className="mb-4">
                        <FaUserShield className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">
                        حماية البيانات
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        تشفير البيانات البيومترية وتخزينها وفق أعلى معايير
                        الأمان العالمية
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-span-1">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/fingerprint-scan.jpeg"
                      alt="تقنية البصمة الحيوية"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Behavior Monitoring */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:col-span-1 order-last lg:order-first">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/fp4.png"
                      alt="مراقبة السلوك"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-span-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    مراقبة السلوك والأداء
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    نوظف تقنيات ذكية لمراقبة سلوك وأداء المتدربين خلال فترة
                    التدريب، مما يساعد على تقييم مهاراتهم وقدراتهم بشكل موضوعي
                    وتحديد مجالات التحسين.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-8">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <div className="mb-4">
                        <FaEye className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">
                        تحليل السلوك
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        تحليل أنماط السلوك والتفاعل أثناء التدريب لتقييم
                        المهارات الشخصية
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <div className="mb-4">
                        <BiSolidChart className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">
                        قياس الأداء
                      </h4>
                      <p className="mt-2 text-sm text-gray-500">
                        مؤشرات قياس أداء موضوعية تعكس مستوى التقدم في البرنامج
                        التدريبي
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              كيف تعمل منظومة البصمة ومراقبة السلوك
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              خطوات مبسطة وآمنة تضمن دقة البيانات وسرية المعلومات
            </p>
          </div>
          <div className="mt-16">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-indigo-50 px-4 text-sm text-gray-500">
                  مراحل العملية
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflowSteps.map((step) => (
                <div
                  key={step.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center">
                          <step.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="mr-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {step.name}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              فوائد نظام البصمة ومراقبة السلوك
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              مزايا متعددة تعود بالنفع على كافة الأطراف المشاركة في البرنامج
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.name}
                  className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-full shadow-lg">
                      <benefit.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fingerprint Examples Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              أمثلة على تقنيات البصمة
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              نماذج لتقنيات البصمة المستخدمة في نظامنا لضمان الدقة والأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Fingerprint Image */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  نموذج البصمة الأول
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fp2.jpeg"
                    alt="نموذج البصمة الأول"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  تقنية متطورة لقراءة بصمات الأصابع بدقة عالية مع خاصية منع
                  التزوير
                </p>
              </div>
            </div>

            {/* Second Fingerprint Image */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  نموذج البصمة الثاني
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    src="/images/fp4.png"
                    alt="نموذج البصمة الثاني"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  نظام متكامل لتسجيل وتخزين البصمات وربطها بقواعد البيانات
                  المؤمنة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">
              جاهز للاستفادة من نظام البصمة ومراقبة السلوك؟
            </span>
            <span className="block text-indigo-200">
              سجل الآن واستفد من كافة المزايا
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4 rtl:space-x-reverse">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/registration"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                سجل كصاحب عمل
              </Link>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/worker-registration"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                سجل كعامل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Workflow Steps
const workflowSteps = [
  {
    id: 1,
    name: "التسجيل والتحقق",
    description:
      "يتم تسجيل البصمة والبيانات الشخصية بطريقة آمنة ومشفرة والتحقق من هوية المتدرب.",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <FaFingerprint {...props} />
    ),
  },
  {
    id: 2,
    name: "المراقبة والتحليل",
    description:
      "يتم تحليل سلوك المتدرب وأدائه خلال البرنامج التدريبي لتقييم مهاراته وقدراته.",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaEye {...props} />,
  },
  {
    id: 3,
    name: "التقارير والتقييم",
    description:
      "إصدار تقارير دورية عن أداء المتدرب وتقديم توصيات لتحسين مهاراته وقدراته.",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <BiSolidCloudUpload {...props} />
    ),
  },
];

// Benefits
const benefits = [
  {
    name: "الأمان والموثوقية",
    description:
      "ضمان دقة البيانات وموثوقيتها عبر التحقق من هوية المتدربين باستخدام البصمة الحيوية.",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaUserShield {...props} />,
  },
  {
    name: "تقييم موضوعي",
    description:
      "تقييم أداء المتدربين بشكل موضوعي بناءً على معايير محددة ومؤشرات قياس دقيقة.",
    icon: (props: React.SVGProps<SVGSVGElement>) => <BiSolidChart {...props} />,
  },
  {
    name: "سهولة الاستخدام",
    description:
      "واجهة مستخدم بسيطة وسهلة الاستخدام تمكن جميع الأطراف من الوصول إلى المعلومات المطلوبة بسهولة.",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaMobileAlt {...props} />,
  },
];
