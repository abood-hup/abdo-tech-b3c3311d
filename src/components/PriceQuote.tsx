import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  Smartphone, 
  Globe, 
  Database,
  Code,
  Send
} from 'lucide-react';

const PriceQuote = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const services = [
    {
      id: 'web',
      title: 'تطوير مواقع الويب',
      icon: <Globe className="w-6 h-6" />,
      basePrice: 1500,
      timeline: '2-4 أسابيع',
      features: ['تصميم متجاوب', 'لوحة إدارة', 'تحسين محركات البحث', 'استضافة مجانية لسنة']
    },
    {
      id: 'mobile',
      title: 'تطبيقات الجوال',
      icon: <Smartphone className="w-6 h-6" />,
      basePrice: 2500,
      timeline: '4-8 أسابيع',
      features: ['Android & iOS', 'تصميم حديث', 'ربط قواعد بيانات', 'تحديثات مجانية لـ 6 أشهر']
    },
    {
      id: 'desktop',
      title: 'أنظمة سطح المكتب',
      icon: <Database className="w-6 h-6" />,
      basePrice: 2000,
      timeline: '3-6 أسابيع',
      features: ['واجهة سهلة', 'قواعد بيانات متقدمة', 'تقارير شاملة', 'دعم فني لسنة']
    },
    {
      id: 'analysis',
      title: 'تحليل وحل المشاكل',
      icon: <Code className="w-6 h-6" />,
      basePrice: 800,
      timeline: '1-2 أسبوع',
      features: ['تحليل شامل', 'توصيات مفصلة', 'خطة تنفيذ', 'متابعة النتائج']
    }
  ];

  const budgetRanges = [
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000 - $2,500', value: '1000-2500' },
    { label: '$2,500 - $5,000', value: '2500-5000' },
    { label: '$5,000+', value: '5000+' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedService });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              احصل على عرض سعر
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              أخبرني عن مشروعك وسأقدم لك عرض سعر مفصل ومجاني خلال 24 ساعة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Selection */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                اختر نوع الخدمة
              </h3>
              
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedService === service.id 
                        ? 'border-accent shadow-accent/20 shadow-lg' 
                        : 'hover:border-accent/50 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          selectedService === service.id 
                            ? 'bg-accent text-white' 
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {service.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant="outline" className="text-accent border-accent">
                              من ${service.basePrice}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.timeline}
                            </span>
                          </div>
                          
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-accent" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quote Form */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                تفاصيل المشروع
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+967 xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الميزانية المتوقعة</label>
                    <select 
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">اختر الميزانية</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">وصف المشروع</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="اشرح لنا تفاصيل مشروعك والميزات المطلوبة..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الجدول الزمني المطلوب</label>
                  <Input
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    placeholder="متى تحتاج المشروع أن يكون جاهزاً؟"
                  />
                </div>

                {selectedServiceData && (
                  <div className="p-6 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-accent" />
                      ملخص العرض المتوقع
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">الخدمة:</span> {selectedServiceData.title}</p>
                      <p><span className="font-medium">السعر المبدئي:</span> ${selectedServiceData.basePrice}</p>
                      <p><span className="font-medium">المدة المتوقعة:</span> {selectedServiceData.timeline}</p>
                      <p className="text-xs text-muted-foreground mt-3">
                        * السعر النهائي قد يختلف حسب متطلبات المشروع المحددة
                      </p>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full btn-hero text-lg py-3"
                  disabled={!selectedService}
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال طلب عرض السعر
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceQuote;