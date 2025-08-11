import React, { useEffect, useState, useRef } from 'react';
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

interface TimelineStep {
  text: string;
  icon: React.ReactNode;
}

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

const YearSection: React.FC<{ yearData: TimelineYear; index: number }> = ({ yearData, index }) => {
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
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: yearData.background
      }}
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {yearData.theme === 'field' && (
          <div className="absolute inset-0 opacity-20">
            <BookOpen className="absolute top-20 left-10 w-16 h-16 text-green-600 animate-float" />
            <Laptop className="absolute bottom-32 right-20 w-12 h-12 text-blue-500 animate-float-delayed" />
            <Star className="absolute top-1/3 right-1/4 w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
        )}
        
        {yearData.theme === 'forest' && (
          <div className="absolute inset-0 opacity-30">
            <Zap className="absolute top-16 right-16 w-14 h-14 text-yellow-400 animate-pulse" />
            <Shapes className="absolute bottom-20 left-16 w-10 h-10 text-blue-400 animate-float" />
            <Target className="absolute top-1/2 left-1/3 w-12 h-12 text-green-400 animate-float-delayed" />
          </div>
        )}
        
        {yearData.theme === 'city' && (
          <div className="absolute inset-0 opacity-25">
            <Crown className="absolute top-12 left-20 w-16 h-16 text-yellow-500 animate-bounce" />
            <Building className="absolute bottom-16 right-12 w-14 h-14 text-gray-600 animate-float" />
            <Award className="absolute top-2/3 right-1/3 w-10 h-10 text-gold animate-pulse" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          {/* Year Badge */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <div className={`inline-block px-8 py-4 rounded-full text-4xl font-bold font-oswald
              ${yearData.theme === 'field' ? 'bg-green-100 text-green-800' : ''}
              ${yearData.theme === 'forest' ? 'bg-blue-100 text-blue-800' : ''}
              ${yearData.theme === 'city' ? 'bg-yellow-100 text-yellow-800' : ''}
              shadow-lg transform hover:scale-105 transition-transform duration-300
            `}>
              {yearData.year}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className={`text-4xl md:text-6xl font-bold text-center mb-12 font-oswald
              ${yearData.theme === 'field' ? 'text-green-800' : ''}
              ${yearData.theme === 'forest' ? 'text-white' : ''}
              ${yearData.theme === 'city' ? 'text-yellow-900' : ''}
            `}
          >
            {yearData.title}
          </motion.h2>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {yearData.steps.map((step, stepIndex) => (
              <motion.div
                key={stepIndex}
                variants={itemVariants}
                className={`p-6 rounded-xl backdrop-blur-sm border transform hover:scale-105 
                  hover:shadow-2xl transition-all duration-300 group cursor-pointer
                  ${yearData.theme === 'field' ? 'bg-white/80 border-green-200 hover:bg-white/90' : ''}
                  ${yearData.theme === 'forest' ? 'bg-white/10 border-blue-300 hover:bg-white/20' : ''}
                  ${yearData.theme === 'city' ? 'bg-white/20 border-yellow-300 hover:bg-white/30' : ''}
                `}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full group-hover:scale-110 transition-transform duration-300
                    ${yearData.theme === 'field' ? 'bg-green-100 text-green-600' : ''}
                    ${yearData.theme === 'forest' ? 'bg-blue-100 text-blue-600' : ''}
                    ${yearData.theme === 'city' ? 'bg-yellow-100 text-yellow-600' : ''}
                  `}>
                    {getStepIcon(step, yearData.theme)}
                  </div>
                  <p className={`text-lg font-raleway leading-relaxed
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

          {/* Call to Action for 2025 */}
          {yearData.year === 2025 && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <button
                className="px-8 py-4 text-xl font-bold font-oswald rounded-full text-black 
                  transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl
                  animate-pulse hover:animate-none"
                style={{ backgroundColor: '#FFD700' }}
              >
                Заказать проект
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ProgressTimeline: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Fixed Year Indicator */}
      <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
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