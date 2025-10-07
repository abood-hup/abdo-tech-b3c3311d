import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Database, Smartphone, Globe, Code, Calculator, Brain, BookOpen, Package } from 'lucide-react';
import portfolioWarehouse from "@/assets/portfolio-warehouse.jpg";
import portfolioUniversityPayment from "@/assets/portfolio-university-payment.jpg";
import portfolioCompanyWebsite from "@/assets/portfolio-company-website.jpg";
import portfolioEmployeeSystem from "@/assets/portfolio-employee-system.jpg";
import portfolioAccountingSystem from "@/assets/portfolio-accounting-system.jpg";
import portfolioMedicalAI from "@/assets/portfolio-medical-ai.jpg";
import portfolioNovelsWebsite from "@/assets/portfolio-novels-website.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "نظام إدارة المخازن المتقدم",
      description: "نظام شامل لإدارة المخازن والمبيعات مع تتبع المخزون في الوقت الفعلي وتقارير مالية متقدمة",
      image: portfolioWarehouse,
      technologies: ["Java", "MySQL", "JavaFX"],
      category: "تطبيقات سطح المكتب",
      icon: Package,
      demoUrl: "#"
    },
    {
      id: 2,
      title: "تطبيق السداد الجامعي",
      description: "تطبيق جوال يستطيع الطالب من خلاله تسديد رسومه الجامعية بطريقة آمنة ومريحة",
      image: portfolioUniversityPayment,
      technologies: ["Flutter", "PHP", "MySQL"],
      category: "تطبيقات الجوال",
      icon: Smartphone,
      demoUrl: "#"
    },
    {
      id: 3,
      title: "موقع للطلب أونلاين",
      description: "موقع ويب تفاعلي بالكامل للطلبات أونلاين مع لوحة إدارة متطورة ونظام إدارة المحتوى",
      image: portfolioCompanyWebsite,
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "تطوير الويب",
      icon: Globe,
      demoUrl: "#"
    },
    {
      id: 4,
      title: "نظام إدارة الموظفين",
      description: "تطبيق ويب لإدارة الموظفين والحضور والانصراف مع تقارير الأداء",
      image: portfolioEmployeeSystem,
      technologies: ["C#", "ASP.NET", "SQL Server"],
      category: "تطبيقات الويب",
      icon: Database,
      demoUrl: "#"
    },
    {
      id: 5,
      title: "نظام محاسبي لإدارة الرسوم الجامعية",
      description: "نظام محاسبي شامل لإدارة الرسوم الجامعية للطلاب ومتابعة عمليات التسديد والتقارير المالية",
      image: portfolioAccountingSystem,
      technologies: ["C#", "SQL Server", "Crystal Reports"],
      category: "تطبيقات سطح المكتب",
      icon: Calculator,
      demoUrl: "#"
    },
    {
      id: 6,
      title: "نظام ضبابي خبير طبي",
      description: "نظام ذكاء اصطناعي طبي متقدم يقوم بتشخيص الحالات المرضية بناءً على الأعراض وتقديم توصيات علاجية مناسبة",
      image: portfolioMedicalAI,
      technologies: ["Python", "AI", "Machine Learning"],
      category: "الذكاء الاصطناعي",
      icon: Brain,
      demoUrl: "#"
    },
    {
      id: 7,
      title: "موقع روايات أدبية",
      description: "موقع ويب أنيق لعرض الروايات الأدبية الكلاسيكية لكبار الكتاب مثل فيودور ديستويفسكي وويليام شكسبير",
      image: portfolioNovelsWebsite,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "تطوير الويب",
      icon: BookOpen,
      demoUrl: "#"
    }
  ];

  const categories = [
    { name: "الكل", count: projects.length },
    { name: "تطبيقات الويب", count: 2 },
    { name: "تطبيقات الجوال", count: 1 },
    { name: "تطبيقات سطح المكتب", count: 2 },
    { name: "الذكاء الاصطناعي", count: 1 }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            معرض أعمالي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة مختارة من مشاريعي المميزة التي تعكس خبرتي في تطوير الحلول البرمجية المتنوعة
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30">
              <div className="relative overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 z-20 w-14 h-14 bg-gradient-to-br from-accent via-accent/90 to-accent/80 rounded-2xl flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-foreground font-semibold border border-white/20 shadow-md">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl group-hover:text-accent transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span>{project.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-3 py-1 bg-accent/5 border-accent/20 text-accent hover:bg-accent/10 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-accent group/btn" 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    معاينة المشروع
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-professional border border-border">
            <h3 className="text-2xl font-bold text-gradient-accent mb-4">
              هل لديك فكرة مشروع؟
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              أتطلع إلى العمل على مشاريع جديدة ومثيرة. دعنا نناقش كيف يمكنني مساعدتك في تحويل فكرتك إلى واقع رقمي.
            </p>
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.open('https://wa.me/qr/HLAOI7ZVLESBH1', '_blank')}
            >
              ابدأ مشروعك الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;