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
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-4 md:mb-6 px-4">
            في ماذا نعمل
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            نحن نستطيع تحويل أفكارك إلى واقع رقمي من خلال خدماتنا المتنوعة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
              
              <div className="relative bg-card backdrop-blur-sm border-2 border-border rounded-2xl p-6 md:p-8 h-full transition-all duration-500 shadow-professional hover:shadow-elegant hover:border-accent/50 hover:-translate-y-2 md:hover:-translate-y-3 overflow-hidden">
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-50"></div>
                
                {/* Icon */}
                <div className="mb-4 md:mb-6 relative z-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/80 flex items-center justify-center shadow-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                  </div>
                  {/* Animated pulse dot */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-card-foreground group-hover:text-gradient-accent transition-all duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features with enhanced styling */}
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground group/item">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors duration-300">
                        <CheckCircle className="w-3 h-3 text-accent" />
                      </div>
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
