import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Database, Smartphone, Globe, Code, Calculator, Brain, BookOpen, Package, X } from 'lucide-react';
import portfolioWarehouse from "@/assets/portfolio-warehouse.jpg";
import portfolioUniversityPayment from "@/assets/portfolio-university-payment.jpg";
import portfolioCompanyWebsite from "@/assets/portfolio-company-website.jpg";
import portfolioEmployeeSystem from "@/assets/portfolio-employee-system.jpg";
import portfolioAccountingSystem from "@/assets/portfolio-accounting-system.jpg";
import portfolioMedicalAI from "@/assets/portfolio-medical-ai.jpg";
import portfolioNovelsWebsite from "@/assets/portfolio-novels-website.jpg";
import demoWarehouse from "@/assets/demo-warehouse.jpg";
import demoUniversityPayment from "@/assets/demo-university-payment.jpg";
import demoCompanyWebsite from "@/assets/demo-company-website.jpg";
import demoEmployeeSystem from "@/assets/demo-employee-system.jpg";
import demoAccountingSystem from "@/assets/demo-accounting-system.jpg";
import demoMedicalAI from "@/assets/demo-medical-ai.jpg";
import demoNovelsWebsite from "@/assets/demo-novels-website.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "نظام إدارة المخازن المتقدم",
      description: "نظام شامل لإدارة المخازن والمبيعات مع تتبع المخزون في الوقت الفعلي وتقارير مالية متقدمة",
      image: portfolioWarehouse,
      demoImage: demoWarehouse,
      technologies: ["Java", "MySQL", "JavaFX"],
      category: "تطبيقات سطح المكتب",
      icon: Package
    },
    {
      id: 2,
      title: "تطبيق السداد الجامعي",
      description: "تطبيق جوال يستطيع الطالب من خلاله تسديد رسومه الجامعية بطريقة آمنة ومريحة",
      image: portfolioUniversityPayment,
      demoImage: demoUniversityPayment,
      technologies: ["Flutter", "PHP", "MySQL"],
      category: "تطبيقات الجوال",
      icon: Smartphone
    },
    {
      id: 3,
      title: "موقع للطلب أونلاين",
      description: "موقع ويب تفاعلي بالكامل للطلبات أونلاين مع لوحة إدارة متطورة ونظام إدارة المحتوى",
      image: portfolioCompanyWebsite,
      demoImage: demoCompanyWebsite,
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "تطوير الويب",
      icon: Globe
    },
    {
      id: 4,
      title: "نظام إدارة الموظفين",
      description: "تطبيق ويب لإدارة الموظفين والحضور والانصراف مع تقارير الأداء",
      image: portfolioEmployeeSystem,
      demoImage: demoEmployeeSystem,
      technologies: ["C#", "ASP.NET", "SQL Server"],
      category: "تطبيقات الويب",
      icon: Database
    },
    {
      id: 5,
      title: "نظام محاسبي لإدارة الرسوم الجامعية",
      description: "نظام محاسبي شامل لإدارة الرسوم الجامعية للطلاب ومتابعة عمليات التسديد والتقارير المالية",
      image: portfolioAccountingSystem,
      demoImage: demoAccountingSystem,
      technologies: ["C#", "SQL Server", "Crystal Reports"],
      category: "تطبيقات سطح المكتب",
      icon: Calculator
    },
    {
      id: 6,
      title: "نظام ضبابي خبير طبي",
      description: "نظام ذكاء اصطناعي طبي متقدم يقوم بتشخيص الحالات المرضية بناءً على الأعراض وتقديم توصيات علاجية مناسبة",
      image: portfolioMedicalAI,
      demoImage: demoMedicalAI,
      technologies: ["Python", "AI", "Machine Learning"],
      category: "الذكاء الاصطناعي",
      icon: Brain
    },
    {
      id: 7,
      title: "موقع روايات أدبية",
      description: "موقع ويب أنيق لعرض الروايات الأدبية الكلاسيكية لكبار الكتاب مثل فيودور ديستويفسكي وويليام شكسبير",
      image: portfolioNovelsWebsite,
      demoImage: demoNovelsWebsite,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "تطوير الويب",
      icon: BookOpen
    }
  ];

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  const categories = [
    { name: "الكل", count: projects.length },
    { name: "تطبيقات الويب", count: 2 },
    { name: "تطبيقات الجوال", count: 1 },
    { name: "تطبيقات سطح المكتب", count: 2 },
    { name: "الذكاء الاصطناعي", count: 1 }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-4 md:mb-6 px-4">
            معرض أعمالي
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            مجموعة مختارة من مشاريعي المميزة التي تعكس خبرتي في تطوير الحلول البرمجية المتنوعة
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8 px-4">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full text-xs sm:text-sm"
                size="sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30">
              <div className="relative overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent via-accent/90 to-accent/80 rounded-xl md:rounded-2xl flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <project.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-foreground font-semibold border border-white/20 shadow-md text-xs md:text-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-lg md:text-xl group-hover:text-accent transition-colors duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                    <project.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span>{project.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
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
                    onClick={() => setSelectedProject(project.id)}
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

      {/* Project Demo Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          {currentProject && (
            <div className="h-full flex flex-col">
              <DialogHeader className="p-4 md:p-6 border-b bg-gradient-to-r from-accent/5 to-accent/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                      <currentProject.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <DialogTitle className="text-lg md:text-xl font-bold text-right">
                        {currentProject.title}
                      </DialogTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {currentProject.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="hover:bg-accent/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/20">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-2xl border border-border/50">
                    <img 
                      src={currentProject.demoImage} 
                      alt={`معاينة ${currentProject.title}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 md:p-6 shadow-md border border-border/50">
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-right">وصف المشروع</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-right leading-relaxed mb-4">
                      {currentProject.description}
                    </p>
                    
                    <h3 className="text-base md:text-lg font-semibold mb-3 text-right">التقنيات المستخدمة</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs md:text-sm px-3 py-1 bg-accent/5 border-accent/20 text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;