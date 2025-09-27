import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles, Star, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-32 right-20 p-4 bg-card/10 backdrop-blur-sm rounded-xl border border-accent/10 animate-bounce" style={{animationDelay: '0.5s'}}>
        <Code2 className="h-8 w-8 text-accent/60" />
      </div>
      <div className="absolute bottom-32 left-20 p-3 bg-card/10 backdrop-blur-sm rounded-full border border-primary/10 animate-bounce" style={{animationDelay: '1.5s'}}>
        <Sparkles className="h-6 w-6 text-primary/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Profile Image */}
          <div className="relative inline-block group mt-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-white/20 backdrop-blur-sm">
              <img 
                src={profileImage} 
                alt="المهندس عبدالواسع الخراساني" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-accent to-accent-soft rounded-full flex items-center justify-center border-3 border-background shadow-accent">
              <Star className="h-5 w-5 text-accent-foreground animate-pulse" />
            </div>
            {/* Status Badge */}
            <div className="absolute -top-2 -left-2 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-foreground border border-white/20">
              متاح للعمل
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-accent">
              عبدالواسع الخراساني
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              مطور أنظمة محترف متخصص في تحويل أفكارك إلى حلول برمجية واقعية
            </p>
          </div>

          {/* Services Preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="group px-6 py-3 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-full shadow-professional hover:shadow-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-default">
              <span className="text-gradient-accent font-medium">تطوير الأنظمة المخصصة</span>
            </span>
            <span className="group px-6 py-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-professional hover:shadow-elegant hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default">
              <span className="text-gradient-primary font-medium">تطبيقات الجوال</span>
            </span>
            <span className="group px-6 py-3 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-full shadow-professional hover:shadow-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-default">
              <span className="text-gradient-accent font-medium">مواقع الويب</span>
            </span>
            <span className="group px-6 py-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-professional hover:shadow-elegant hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default">
              <span className="text-gradient-primary font-medium">تحليل وحل المشاكل التقنية</span>
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
              href="https://wa.me/qr/HLAOI7ZVLESBH1" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
            >
              <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdulwasea-r-alkhorasani-6863b7335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
            </a>
            <a 
              href="mailto:abdulwasea.alkhorasani@gmail.com" 
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