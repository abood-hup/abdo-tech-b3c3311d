import { Code, Smartphone, Globe, BarChart3, CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "تطوير وتصميم الأنظمة المخصصة",
      description: "بناء أنظمة إدارة متكاملة (مخازن، موظفين، مبيعات) تلبي احتياجات شركتك بدقة وتساعدك في تنظيم أعمالك وزيادة الكفاءة.",
      features: ["أنظمة إدارة المخازن", "أنظمة الموظفين", "أنظمة المبيعات", "التقارير والتحليلات"],
      color: "primary",
      badge: "الأكثر طلباً"
    },
    {
      icon: Smartphone,
      title: "تطوير تطبيقات الجوال",
      description: "تصميم وتطوير تطبيقات أندرويد و iOS بخصائص مميزة وسهلة الاستخدام تلبي احتياجات عملائك وتزيد من تفاعلهم مع خدماتك.",
      features: ["تطبيقات الأندرويد", "تطبيقات iOS", "تطبيقات متعددة المنصات", "واجهات مستخدم جذابة"],
      color: "accent",
      badge: "عالي الجودة"
    },
    {
      icon: Globe,
      title: "تطوير مواقع الويب",
      description: "إنشاء مواقع ويب تفاعلية وتجاوبية تعمل على جميع الأجهزة مع تصميم عصري وسرعة تحميل ممتازة لضمان تجربة مستخدم رائعة.",
      features: ["مواقع تجاوبية", "مواقع تجارية", "مواقع شخصية", "تحسين محركات البحث"],
      color: "primary",
      badge: "سريع التسليم"
    },
    {
      icon: BarChart3,
      title: "تحليل النظم وحل المشكلات",
      description: "دراسة الأنظمة الحالية، تحليل نقاط القوة والضعف، واقتراح الحلول التقنية المبتكرة لتحسين الأداء وزيادة الكفاءة.",
      features: ["تحليل الأنظمة", "حل المشكلات التقنية", "تطوير الحلول", "استشارات تقنية"],
      color: "accent",
      badge: "حلول مبتكرة"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm border border-accent/20">
              ماذا أقدم
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">خدماتي المميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            أقدم مجموعة شاملة من الخدمات التقنية لمساعدة الشركات والأفراد في تحقيق أهدافهم الرقمية بأعلى معايير الجودة والكفاءة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-professional hover:shadow-elegant transition-all duration-500 hover:border-accent/30 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    service.color === 'primary' 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <service.icon className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${
                    service.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary to-primary-glow shadow-elegant' 
                      : 'bg-gradient-to-br from-accent to-accent/80 shadow-accent'
                  }`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className={`h-4 w-4 ${
                          service.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    service.color === 'primary' 
                      ? 'bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-elegant' 
                      : 'bg-accent/10 text-accent border-2 border-accent/20 hover:bg-accent hover:text-accent-foreground hover:shadow-accent'
                  }`}>
                    <span>تعرف على المزيد</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
            <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-accent mb-1">30+</div>
            <div className="text-sm text-muted-foreground">عميل راضي</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
            <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">جودة مضمونة</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">دعم متواصل</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;