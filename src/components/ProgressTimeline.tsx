import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BookOpen,
  Laptop,
  Zap,
  Shapes,
  Crown,
  Building,
  Star,
  Award,
  Target,
  Rocket
} from 'lucide-react';



interface TimelineYear {
  year: number;
  title: string;
  steps: string[];
  theme: 'field' | 'forest' | 'city';
  background: string;
}

const timelineData: TimelineYear[] = [
  {
    year: 2023,
    title: "Старт в полях возможностей",
    steps: [
      "Освоил монтаж с нуля по зарубежным гайдам",
      "Выполнил первые платные заказы",
      "Научился решать базовые задачи уверенно"
    ],
    theme: 'field',
    background: 'linear-gradient(135deg, #a8e6cf, #dcedc1, #ffd3a5)'
  },
  {
    year: 2024,
    title: "Рост в лесу мастерства",
    steps: [
      "Прошел курсы, углубил знания",
      "Добавил After Effects в арсенал",
      "Брал крупные заказы, укрепил позиции",
      "Вошел в команду топового СНГ-специалиста"
    ],
    theme: 'forest',
    background: 'linear-gradient(135deg, #134e5e, #71b280, #2c5530)'
  },
  {
    year: 2025,
    title: "Вершины города побед",
    steps: [
      "Стал востребованным экспертом",
      "Берем проекты любой сложности: от обзоров до кино",
      "Гарантируем кинематографичное качество",
      "Работы говорят за нас"
    ],
    theme: 'city',
    background: 'linear-gradient(135deg, #c9b037, #e6e6fa, #b8860b)'
  }
];

const getStepIcon = (stepText: string, theme: string) => {
  if (theme === 'field') {
    if (stepText.includes('монтаж')) return <BookOpen className="w-5 h-5" />;
    if (stepText.includes('заказы')) return <Star className="w-5 h-5" />;
    return <Laptop className="w-5 h-5" />;
  }

  if (theme === 'forest') {
    if (stepText.includes('курсы')) return <BookOpen className="w-5 h-5" />;
    if (stepText.includes('After Effects')) return <Zap className="w-5 h-5" />;
    if (stepText.includes('заказы')) return <Target className="w-5 h-5" />;
    return <Shapes className="w-5 h-5" />;
  }

  if (theme === 'city') {
    if (stepText.includes('экспертом')) return <Crown className="w-5 h-5" />;
    if (stepText.includes('проекты')) return <Building className="w-5 h-5" />;
    if (stepText.includes('качество')) return <Award className="w-5 h-5" />;
    return <Rocket className="w-5 h-5" />;
  }

  return <Star className="w-5 h-5" />;
};

const YearSection: React.FC<{ yearData: TimelineYear; index: number }> = ({ yearData }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section
      ref={ref}
      className="timeline-section relative min-h-screen flex items-center justify-center py-12 sm:py-20 overflow-hidden"
      style={{
        background: yearData.background
      }}
    >
      {/* Parallax Background Elements - Безопасное позиционирование для мобильных */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {yearData.theme === 'field' && (
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            {/* Скрываем на очень маленьких экранах, показываем только на планшетах и больше */}
            <BookOpen className="hidden sm:block absolute top-20 left-10 w-12 h-12 lg:w-16 lg:h-16 text-green-600 animate-float" />
            <Laptop className="hidden sm:block absolute bottom-32 right-20 w-8 h-8 lg:w-12 lg:h-12 text-blue-500 animate-float-delayed" />
            <Star className="hidden md:block absolute top-1/3 right-1/4 w-6 h-6 lg:w-8 lg:h-8 text-yellow-500 animate-pulse" />
          </div>
        )}

        {yearData.theme === 'forest' && (
          <div className="absolute inset-0 opacity-10 sm:opacity-30">
            <Zap className="hidden sm:block absolute top-16 right-16 w-10 h-10 lg:w-14 lg:h-14 text-yellow-400 animate-pulse" />
            <Shapes className="hidden sm:block absolute bottom-20 left-16 w-8 h-8 lg:w-10 lg:h-10 text-blue-400 animate-float" />
            <Target className="hidden md:block absolute top-1/2 left-1/3 w-8 h-8 lg:w-12 lg:h-12 text-green-400 animate-float-delayed" />
          </div>
        )}

        {yearData.theme === 'city' && (
          <div className="absolute inset-0 opacity-10 sm:opacity-25">
            <Crown className="hidden sm:block absolute top-12 left-20 w-12 h-12 lg:w-16 lg:h-16 text-yellow-500 animate-bounce" />
            <Building className="hidden sm:block absolute bottom-16 right-12 w-10 h-10 lg:w-14 lg:h-14 text-gray-600 animate-float" />
            <Award className="hidden md:block absolute top-2/3 right-1/3 w-8 h-8 lg:w-10 lg:h-10 text-gold animate-pulse" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 sm:px-8 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto relative"
        >
          {/* Year Badge - Адаптивный */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-6 sm:mb-8"
          >
            <div className={`inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-full text-2xl sm:text-3xl md:text-4xl font-bold font-oswald
              ${yearData.theme === 'field' ? 'bg-green-100 text-green-800' : ''}
              ${yearData.theme === 'forest' ? 'bg-blue-100 text-blue-800' : ''}
              ${yearData.theme === 'city' ? 'bg-yellow-100 text-yellow-800' : ''}
              shadow-lg transform hover:scale-105 transition-transform duration-300
            `}>
              {yearData.year}
            </div>
          </motion.div>

          {/* Title - Адаптивный */}
          <motion.h2
            variants={itemVariants}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 font-oswald leading-tight px-4
              ${yearData.theme === 'field' ? 'text-green-800' : ''}
              ${yearData.theme === 'forest' ? 'text-white' : ''}
              ${yearData.theme === 'city' ? 'text-yellow-900' : ''}
            `}
          >
            {yearData.title}
          </motion.h2>

          {/* Steps - Улучшенная мобильная адаптация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
            {yearData.steps.map((step, stepIndex) => (
              <motion.div
                key={stepIndex}
                variants={itemVariants}
                className={`p-4 sm:p-6 rounded-xl backdrop-blur-sm border transform hover:scale-105 
                  hover:shadow-2xl transition-all duration-300 group cursor-pointer
                  ${yearData.theme === 'field' ? 'bg-white/80 border-green-200 hover:bg-white/90' : ''}
                  ${yearData.theme === 'forest' ? 'bg-white/10 border-blue-300 hover:bg-white/20' : ''}
                  ${yearData.theme === 'city' ? 'bg-white/20 border-yellow-300 hover:bg-white/30' : ''}
                `}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shrink-0
                    ${yearData.theme === 'field' ? 'bg-green-100 text-green-600' : ''}
                    ${yearData.theme === 'forest' ? 'bg-blue-100 text-blue-600' : ''}
                    ${yearData.theme === 'city' ? 'bg-yellow-100 text-yellow-600' : ''}
                  `}>
                    {getStepIcon(step, yearData.theme)}
                  </div>
                  <p className={`text-sm sm:text-base md:text-lg font-raleway leading-relaxed
                    ${yearData.theme === 'field' ? 'text-green-800' : ''}
                    ${yearData.theme === 'forest' ? 'text-white' : ''}
                    ${yearData.theme === 'city' ? 'text-yellow-900' : ''}
                  `}>
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for 2025 - Адаптивная кнопка */}
          {yearData.year === 2025 && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-8 sm:mt-12 px-4"
            >
              <a
                href="https://t.me/vadimfom1n?text=Здравствуйте!%20Хочу%20заказать%20проект"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold font-oswald rounded-full text-black 
                    transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl
                    animate-pulse hover:animate-none w-full sm:w-auto touch-manipulation"
                  style={{ backgroundColor: '#FFD700' }}
                >
                  Заказать проект
                </button>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ProgressTimeline: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = timelineData.map(year =>
        document.querySelector(`[data-year="${year.year}"]`)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentYear(timelineData[i].year);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу для установки начального состояния

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Desktop Year Indicator */}
      <div className="fixed top-1/2 left-2 sm:left-4 lg:left-8 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-3">
          {timelineData.map((year) => (
            <div
              key={year.year}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer
                ${currentYear === year.year
                  ? 'bg-white border-white scale-125 shadow-lg'
                  : 'bg-transparent border-white/50 hover:border-white'
                }
              `}
              onClick={() => {
                document.querySelector(`[data-year="${year.year}"]`)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Progress Indicator - Более тонкий и элегантный */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="flex space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
          {timelineData.map((year, index) => (
            <div
              key={year.year}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${currentYear === year.year
                  ? 'bg-white scale-125'
                  : 'bg-white/30'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Timeline Sections */}
      {timelineData.map((yearData, index) => (
        <div key={yearData.year} data-year={yearData.year}>
          <YearSection yearData={yearData} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ProgressTimeline;

// Добавляем стили для лучшего контроля анимаций на мобильных
const styles = `
  @media (max-width: 640px) {
    .animate-float {
      animation-duration: 6s !important;
      animation-timing-function: ease-in-out !important;
      transform: translateY(0px) !important;
    }
    
    .animate-bounce {
      animation-duration: 3s !important;
      animation-iteration-count: infinite !important;
    }
    
    .animate-pulse {
      animation-duration: 4s !important;
    }
    
    /* Предотвращаем выход элементов за границы экрана */
    .timeline-section {
      overflow-x: hidden !important;
      overflow-y: visible !important;
      position: relative !important;
    }
    
    .timeline-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 1;
    }
    
    /* Ограничиваем позиционирование фоновых элементов */
    .timeline-section .absolute {
      max-width: calc(100vw - 2rem) !important;
      max-height: calc(100vh - 2rem) !important;
    }
    
    /* Уменьшаем интенсивность анимаций на мобильных */
    @media (prefers-reduced-motion: reduce) {
      .animate-float,
      .animate-bounce,
      .animate-pulse {
        animation: none !important;
      }
    }
    
    /* Дополнительная защита от overflow */
    body {
      overflow-x: hidden !important;
    }
  }
  
  /* Улучшенные анимации для планшетов */
  @media (min-width: 641px) and (max-width: 1024px) {
    .animate-float {
      animation-duration: 8s !important;
    }
  }
`;

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('timeline-mobile-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'timeline-mobile-styles';
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}