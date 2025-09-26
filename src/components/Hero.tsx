import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-accent/20">
              <img 
                src={profileImage} 
                alt="المهندس عبدالواسع الخراساني" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-accent-foreground rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              أهلاً، أنا{" "}
              <span className="text-gradient-accent">عبدالواسع الخراساني</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              مطور أنظمة محترف متخصص في تحويل أفكارك إلى حلول برمجية واقعية
            </p>
          </div>

          {/* Services Preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="px-4 py-2 bg-card border border-border rounded-full shadow-professional">
              تطوير الأنظمة المخصصة
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-full shadow-professional">
              تطبيقات الجوال
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-full shadow-professional">
              مواقع الويب
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-full shadow-professional">
              تحليل وحل المشاكل التقنية
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="btn-hero">
              شاهد أعمالي
            </a>
            <a href="#services" className="btn-outline-professional">
              تعرف على خدماتي
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
            </a>
            <a 
              href="#contact" 
              className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;