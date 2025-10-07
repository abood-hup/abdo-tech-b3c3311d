import { Code2, Database, Smartphone, Globe, Award, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML", level: 98 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 90 },
    { name: "C#", level: 88 },
    { name: "Java", level: 85 },
    { name: "PHP", level: 88 },
    { name: "Flutter", level: 82 },
    { name: "React", level: 87 },
    { name: "MySQL", level: 85 },
    { name: "System Analysis", level: 92 },
  ];

  const achievements = [
    { icon: Code2, title: "مشاريع مكتملة", value: "25+" },
    { icon: Users, title: "عملاء راضون", value: "50+" },
    { icon: Award, title: "سنوات خبرة", value: "3+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              من أنا؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مطور أنظمة شغوف بتحويل التحديات التقنية إلى حلول مبتكرة تساعد الأعمال على النمو والازدهار
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-gradient-accent" dir="rtl">قصتي</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  بدأت رحلتي في عالم البرمجة منذ أكثر من 3 سنوات، مدفوعاً بشغف حقيقي لحل المشاكل وبناء حلول تقنية تحدث فرقاً في حياة الناس والأعمال.
                </p>
                <p>
                  تخصصت في تطوير الأنظمة المخصصة وتطبيقات الجوال، وأؤمن بأن كل مشروع هو فرصة لتقديم شيء مبتكر وعملي يلبي احتياجات العميل بدقة.
                </p>
                <p>
                  أهدف إلى أن أكون الشريك التقني المثالي للشركات والأفراد الذين يسعون لتطوير أعمالهم من خلال التكنولوجيا.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-gradient-accent">مهاراتي التقنية</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-professional p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Interests */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="card-professional p-8 animate-slide-up">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold" dir="rtl">التعليم والشهادات</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• بكالوريوس نظم معلومات حاسوبية</li>
                <li>• شهادات في تطوير التطبيقات المتقدمة</li>
                <li>• دورات متخصصة في تحليل الأنظمة</li>
                <li>• ورش عمل في إدارة المشاريع التقنية</li>
              </ul>
            </div>

            <div className="card-professional p-8 animate-slide-up">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-bold" dir="rtl">اهتماماتي</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• تطوير الأنظمة المخصصة</li>
                <li>• إدارة مواقع الويب</li>
                <li>• الذكاء الاصطناعي وتطبيقاته</li>
                <li>• أمان المعلومات والبيانات</li>
                <li>• مشاركة المعرفة التقنية</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;