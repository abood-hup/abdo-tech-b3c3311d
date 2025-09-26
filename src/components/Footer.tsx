import { Code2, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من أنا", href: "#about" },
    { name: "خدماتي", href: "#services" },
    { name: "أعمالي", href: "#portfolio" },
    { name: "اتصل بي", href: "#contact" },
  ];

  const services = [
    "تطوير الأنظمة المخصصة",
    "تطبيقات الجوال",
    "مواقع الويب",
    "تحليل الأنظمة",
    "الاستشارات التقنية"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Code2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">We Code One</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              نحول أفكارك إلى حلول برمجية واقعية تساعد أعمالك على النمو والازدهار في العصر الرقمي.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
              className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:abdulwasea@wecodeone.com" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-300 ease-out hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">خدماتي</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">abdulwasea@wecodeone.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+967 xxx xxx xxx</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">صنعاء، اليمن</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} We Code One. جميع الحقوق محفوظة.
            </div>
            <div className="text-primary-foreground/80 text-sm">
              صُنع بـ ❤️ في اليمن
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;