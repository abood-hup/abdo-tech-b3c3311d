import React from 'react';
import { Code, Smartphone, Globe, Database, CheckCircle } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Code,
      title: "تطوير أنظمة مخصصة",
      description: "نقوم ببناء أنظمة إدارة متكاملة تناسب احتياجاتك الخاصة",
      features: ["أنظمة إدارة", "حلول مخصصة", "تقارير متقدمة"]
    },
    {
      icon: Smartphone,
      title: "تطبيقات الجوال",
      description: "تطبيقات أندرويد و iOS احترافية وسهلة الاستخدام",
      features: ["Android & iOS", "واجهات جذابة", "أداء عالي"]
    },
    {
      icon: Globe,
      title: "مواقع الويب",
      description: "مواقع تفاعلية وتجاوبية بتصميم عصري وسرعة ممتازة",
      features: ["تصميم متجاوب", "سريع التحميل", "SEO محسّن"]
    },
    {
      icon: Database,
      title: "تحليل النظم",
      description: "دراسة وتحليل الأنظمة واقتراح حلول تقنية مبتكرة",
      features: ["تحليل دقيق", "حلول مبتكرة", "استشارات تقنية"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            في ماذا نعمل
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن نستطيع تحويل أفكارك إلى واقع رقمي من خلال خدماتنا المتنوعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-elegant hover:border-accent/30 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
