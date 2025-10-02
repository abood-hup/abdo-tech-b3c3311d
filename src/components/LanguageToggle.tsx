import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    // Here you would implement actual translation logic
    // For now, this is a placeholder
    console.log('Language switched to:', newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 shadow-lg"
      title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">تبديل اللغة</span>
    </Button>
  );
};

export default LanguageToggle;
