import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "نظام إدارة المخازن المتقدم",
      description: "نظام شامل لإدارة المخازن والمبيعات مع تتبع المخزون في الوقت الفعلي وتقارير مالية متقدمة",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "MySQL", "JavaFX"],
      category: "Desktop Application",
      icon: <Database className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "تطبيق التجارة الإلكترونية",
      description: "تطبيق جوال متكامل للتجارة الإلكترونية مع نظام دفع آمن وإدارة الطلبات",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "PHP", "MySQL"],
      category: "Mobile App",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "موقع الشركة التفاعلي",
      description: "موقع ويب تفاعلي بالكامل مع لوحة إدارة متطورة ونظام إدارة المحتوى",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Web Development",
      icon: <Globe className="w-5 h-5" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "نظام إدارة الموظفين",
      description: "تطبيق ويب لإدارة الموظفين والحضور والانصراف مع تقارير الأداء",
      image: "/api/placeholder/400/250",
      technologies: ["C#", "ASP.NET", "SQL Server"],
      category: "Web Application",
      icon: <Code className="w-5 h-5" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const categories = [
    { name: "الكل", count: projects.length },
    { name: "تطبيقات الويب", count: 2 },
    { name: "تطبيقات الجوال", count: 1 },
    { name: "أنظمة سطح المكتب", count: 1 }
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
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-white text-6xl opacity-20">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  {project.icon}
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 ml-2" />
                    معاينة المشروع
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 ml-2" />
                    الكود
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
            <Button size="lg" className="btn-hero">
              ابدأ مشروعك الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;