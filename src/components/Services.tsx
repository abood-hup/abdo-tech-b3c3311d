import { Monitor, Smartphone, Globe, BarChart3, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "تطوير وتصميم الأنظمة المخصصة",
      description: "بناء أنظمة إدارة متكاملة (مخازن، موظفين، مبيعات) تلبي احتياجات شركتك بدقة وتساعد في تنظيم العمليات وزيادة الإنتاجية.",
      features: ["أنظمة إدارة المخازن", "أنظمة الموارد البشرية", "أنظمة نقاط البيع", "تقارير وتحليلات مفصلة"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "تطوير تطبيقات الجوال",
      description: "تصميم وتطوير تطبيقات أندرويد و iOS بخصائص مميزة وسهلة الاستخدام، مع تركيز على تجربة المستخدم المثالية.",
      features: ["تطبيقات أندرويد أصلية", "تطبيقات iOS", "تطبيقات متعددة المنصات", "تصميم UI/UX احترافي"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "تطوير مواقع الويب",
      description: "إنشاء مواقع ويب تفاعلية وتجاوبية تعمل على جميع الأجهزة، مع تركيز على الأداء والأمان وسهولة الاستخدام.",
      features: ["مواقع تجاوبية", "متاجر إلكترونية", "مواقع الشركات", "تحسين محركات البحث"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "تحليل النظم وحل المشكلات",
      description: "دراسة الأنظمة الحالية، تحليل نقاط القوة والضعف، واقتراح الحلول التقنية المناسبة لتحسين الأداء.",
      features: ["تحليل الأنظمة الحالية", "استشارات تقنية", "تحسين الأداء", "خطط التطوير"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              خدماتي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              أقدم حلول برمجية شاملة ومتقدمة تساعد أعمالك على النمو والتطور في العصر الرقمي
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-service group animate-slide-up">
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gradient-accent">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 rtl:mr-0 rtl:ml-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">اطلب استشارة مجانية</span>
                  <button className="flex items-center text-accent hover:text-accent/80 transition-all duration-300 ease-out group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-professional p-12 text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                هل لديك مشروع في البال؟
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                دعنا نناقش مشروعك ونحوله إلى واقع رقمي يحقق أهدافك ويتجاوز توقعاتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-hero">
                  ابدأ مشروعك الآن
                </a>
                <button className="btn-outline-professional">
                  اطلب استشارة مجانية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;