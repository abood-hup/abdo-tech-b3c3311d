import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    timeline: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `مرحباً، أنا ${formData.name}
    
البريد الإلكتروني: ${formData.email}
الهاتف: ${formData.phone || 'غير محدد'}
نوع المشروع: ${formData.project || 'غير محدد'}
الجدول الزمني: ${formData.timeline || 'غير محدد'}

تفاصيل المشروع:
${formData.message}`;

    const whatsappURL = `https://wa.me/967739266110?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    toast({
      title: "تم توجيهك للواتساب!",
      description: "سيتم فتح الواتساب لإرسال رسالتك",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      timeline: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "abdulwasea.alkhorasani@gmail.com",
      link: "mailto:abdulwasea.alkhorasani@gmail.com"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+967 739266110",
      link: "tel:+967739266110"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "صنعاء، اليمن",
      link: "#"
    }
  ];

  const projectTypes = [
    "تطوير نظام إدارة مخصص",
    "تطبيق جوال (Android/iOS)",
    "موقع ويب تفاعلي",
    "متجر إلكتروني",
    "تحليل وتحسين نظام موجود",
    "استشارة تقنية",
    "أخرى"
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background via-accent-soft/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-4 md:mb-6 px-4">
              اتصل بي
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              هل لديك مشروع أو فكرة تود تحويلها إلى واقع؟ دعنا نناقشها معاً ونجد الحل الأمثل لك
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-accent mb-4 md:mb-6">
                  معلومات التواصل
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-card hover:shadow-professional transition-all duration-300 ease-out group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300 ease-out">
                        <info.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-foreground text-sm md:text-base">{info.title}</div>
                        <div className="text-xs md:text-sm text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out truncate">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card-professional p-4 md:p-6">
                <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gradient-accent">تواصل سريع</h4>
                <div className="space-y-2 md:space-y-3">
                  <a
                    href="https://wa.me/967739266110"
                    className="flex items-center justify-center w-full py-2.5 md:py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-out text-sm md:text-base"
                  >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    واتساب
                  </a>
                  <a
                    href="mailto:abdulwasea.alkhorasani@gmail.com"
                    className="flex items-center justify-center w-full py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 ease-out"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    إيميل
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="card-professional p-4 md:p-6">
                <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gradient-accent">تابعني على</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/abdulwasea-r-alkhorasani-6863b7335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
                  </a>
                  <a 
                    href="https://www.instagram.com/0a_r.9?igsh=MWk5b3o5aWtyajZ3ZQ==" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1A9i2gAigv/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border shadow-professional hover:shadow-accent hover:border-accent/30 transition-all duration-300 ease-out group"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="relative bg-gradient-to-br from-card via-background to-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-accent/30 overflow-hidden backdrop-blur-lg">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-accent mb-2 flex items-center gap-2 md:gap-3">
                    <Send className="h-5 w-5 md:h-7 md:w-7 text-accent flex-shrink-0" />
                    <span>أرسل رسالة</span>
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">املأ النموذج وسأتواصل معك في أقرب وقت</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                      placeholder="اسمك الكامل"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                        placeholder="+967 xxx xxx xxx"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        نوع المشروع
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                      >
                        <option value="">اختر نوع المشروع</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      الجدول الزمني المطلوب
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                    >
                      <option value="">اختر المدة المتوقعة</option>
                      <option value="عاجل (أقل من أسبوع)">عاجل (أقل من أسبوع)</option>
                      <option value="1-2 أسابيع">1-2 أسابيع</option>
                      <option value="شهر واحد">شهر واحد</option>
                      <option value="2-3 أشهر">2-3 أشهر</option>
                      <option value="مرن">مرن</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">
                      تفاصيل المشروع *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-border bg-background/80 focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out resize-none"
                      placeholder="اشرح لي تفاصيل مشروعك، أهدافك، والميزانية المتوقعة..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-accent to-primary text-white font-bold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <Send className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 md:mt-12 lg:mt-16 text-center animate-fade-in">
            <div className="card-professional p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gradient-primary mb-3 md:mb-4">
                💡 هل تعلم؟
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                أقدم استشارة مجانية أولى لمدة 30 دقيقة لمناقشة مشروعك وتقديم التوجيه الأولي. 
                هذا يساعدك في فهم المتطلبات والتكاليف قبل البدء في التنفيذ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;