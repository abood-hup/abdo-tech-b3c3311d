import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles, Star, MessageCircle, Instagram, Facebook } from "lucide-react";
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
      <div className="absolute top-20 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-32 md:w-40 h-32 md:h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 md:w-20 h-16 md:h-20 bg-accent/10 rounded-full blur-2xl"></div>
      
      {/* Floating Icons - Hidden on mobile */}
      <div className="hidden md:block absolute top-40 right-20 p-4 bg-card/10 backdrop-blur-sm rounded-xl border border-accent/10 animate-bounce" style={{animationDelay: '0.5s'}}>
        <Code2 className="h-8 w-8 text-accent/60" />
      </div>
      <div className="hidden md:block absolute bottom-40 left-20 p-3 bg-card/10 backdrop-blur-sm rounded-full border border-primary/10 animate-bounce" style={{animationDelay: '1.5s'}}>
        <Sparkles className="h-6 w-6 text-primary/60" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-slide-up">
          {/* Profile Image */}
          <div className="relative inline-block group mt-8 md:mt-16">
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-white/20 backdrop-blur-sm">
              <img 
                src={profileImage} 
                alt="المهندس عبدالواسع الخراساني" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent to-accent-soft rounded-full flex items-center justify-center border-2 md:border-3 border-background shadow-accent">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-accent-foreground animate-pulse" />
            </div>
            {/* Status Badge */}
            <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 px-2 py-0.5 md:px-3 md:py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-foreground border border-white/20">
              متاح للعمل
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-accent">
              عبدالواسع الخراساني
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              مطور أنظمة محترف متخصص في تحويل أفكارك إلى حلول برمجية واقعية
            </p>
          </div>

          {/* Services Preview */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base px-4 sm:px-0">
            <span className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-full shadow-professional hover:shadow-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-default">
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
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 sm:px-0">
            <a href="#portfolio" className="btn-hero w-full sm:w-auto text-center">
              شاهد أعمالي
            </a>
            <a href="#services" className="btn-outline-professional w-full sm:w-auto text-center">
              تعرف على خدماتي
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