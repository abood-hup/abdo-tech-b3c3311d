import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
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

    // Simulate form submission
    toast({
      title: "تم إرسال الرسالة بنجاح!",
      description: "سأتواصل معك في أقرب وقت ممكن",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "abdulwasea@wecodeone.com",
      link: "mailto:abdulwasea@wecodeone.com"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+967 xxx xxx xxx",
      link: "tel:+967xxxxxxxxx"
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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              اتصل بي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              هل لديك مشروع أو فكرة تود تحويلها إلى واقع؟ دعنا نناقشها معاً ونجد الحل الأمثل لك
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                  معلومات التواصل
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 rounded-lg hover:bg-card hover:shadow-professional transition-all duration-300 ease-out group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 ease-out">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        <div className="text-muted-foreground group-hover:text-accent transition-all duration-300 ease-out">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card-professional p-6">
                <h4 className="font-bold mb-4 text-gradient-accent">تواصل سريع</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/967xxxxxxxxx"
                    className="flex items-center justify-center w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-out"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    واتساب
                  </a>
                  <a
                    href="mailto:abdulwasea@wecodeone.com"
                    className="flex items-center justify-center w-full py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 ease-out"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    إيميل
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="card-professional p-8">
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                  أرسل رسالة
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out"
                      >
                        <option value="">اختر نوع المشروع</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      تفاصيل المشروع *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ease-out resize-none"
                      placeholder="اشرح لي تفاصيل مشروعك، أهدافك، والميزانية المتوقعة..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center btn-hero"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="card-professional p-8">
              <h3 className="text-xl font-bold text-gradient-primary mb-4">
                💡 هل تعلم؟
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
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