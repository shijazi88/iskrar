import Image from "next/image";
import { FaHandshake, FaBuilding, FaGraduationCap } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";

export default function Partners() {
  return (
    <main className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-indigo-800 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="شراكات استقرار"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tajawal">
            شركاؤنا في النجاح
          </h1>
          <p className="text-lg md:text-xl max-w-3xl font-tajawal leading-relaxed">
            نعمل مع مجموعة متميزة من الشركاء الاستراتيجيين لتقديم برامج تدريبية
            عالية الجودة تلبي احتياجات سوق العمل وتسهم في تحقيق رؤيتنا.
          </p>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 font-tajawal">
            شركاؤنا الاستراتيجيون
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {strategicPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-indigo-500"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full inline-block">
                    <partner.icon className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-indigo-700 font-tajawal">
                  {partner.name}
                </h3>
                <p className="text-gray-700 font-tajawal mb-4">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 font-tajawal">
            شركات ومؤسسات متعاونة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partnerCompanies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <div className="h-20 w-20 relative mb-4">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center font-tajawal">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700 font-tajawal">
                انضم إلينا كشريك في برنامج استقرار
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-tajawal">
                نرحب بالشراكات الجديدة مع المؤسسات والشركات التي تشاركنا رؤيتنا
                في تطوير مهارات العمالة وتعزيز استقرار سوق العمل في دولة
                الإمارات.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 font-tajawal"
              >
                تواصل معنا للشراكة
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Define partners data
const strategicPartners = [
  {
    name: "وزارة الموارد البشرية والتوطين",
    description:
      "شريك استراتيجي في تطوير سياسات وبرامج تدريب العمالة قبل القدوم إلى دولة الإمارات.",
    icon: HiOfficeBuilding,
  },
  {
    name: "غرفة تجارة وصناعة أبوظبي",
    description:
      "تساهم في ربط البرنامج مع القطاع الخاص وتوفير فرص التعاون مع الشركات المحلية.",
    icon: FaBuilding,
  },
  {
    name: "معهد التدريب المهني",
    description:
      "يقدم خبراته في مجال التدريب المهني وتطوير المناهج التدريبية المتخصصة.",
    icon: GiTeacher,
  },
  {
    name: "جامعة زايد",
    description:
      "توفر البحوث والدراسات العلمية لتطوير برامج التدريب وفق أفضل الممارسات العالمية.",
    icon: FaGraduationCap,
  },
  {
    name: "مركز أبوظبي للتنمية المهنية",
    description:
      "يساهم في تقييم احتياجات سوق العمل وتطوير برامج تدريبية تلبي هذه الاحتياجات.",
    icon: GiTeacher,
  },
  {
    name: "مؤسسة الإمارات للخدمات الإنسانية",
    description:
      "تدعم البرنامج من خلال توفير موارد وخبرات في مجال تنمية المهارات الإنسانية.",
    icon: FaHandshake,
  },
];

const partnerCompanies = [
  {
    name: "شركة الإمارات للتطوير",
    logo: "/images/company-logo-1.png",
  },
  {
    name: "مجموعة الفطيم",
    logo: "/images/company-logo-2.png",
  },
  {
    name: "مجموعة الدار العقارية",
    logo: "/images/company-logo-3.png",
  },
  {
    name: "إعمار للتطوير",
    logo: "/images/company-logo-4.png",
  },
  {
    name: "موانئ أبوظبي",
    logo: "/images/company-logo-5.png",
  },
  {
    name: "طيران الإمارات",
    logo: "/images/company-logo-6.png",
  },
  {
    name: "شركة أبوظبي للطاقة",
    logo: "/images/company-logo-7.png",
  },
  {
    name: "مؤسسة دبي للاستثمارات",
    logo: "/images/company-logo-8.png",
  },
];
