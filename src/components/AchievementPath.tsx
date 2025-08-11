import React, { useEffect } from 'react';
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

interface AchievementStep {
  text: string;
  icon: React.ReactNode;
}

interface AchievementPhase {
  year: number;
  title: string;
  steps: string[];
  background: string;
  textColor: string;
  cardBg: string;
  iconBg: string;
}

const achievementData: AchievementPhase[] = [
  {
    year: 2023,
    title: "Старт в полях возможностей",
    steps: [
      "Освоил монтаж с нуля по зарубежным гайдам",
      "Выполнил первые платные заказы",
      "Научился решать базовые задачи уверенно"
    ],
    background: 'from-green-50 via-emerald-50 to-lime-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-lime-950/20',
    textColor: 'text-green-800 dark:text-green-200',
    cardBg: 'bg-white/70 dark:bg-gray-800/50 border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
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
    background: 'from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20',
    textColor: 'text-blue-800 dark:text-blue-200',
    cardBg: 'bg-white/70 dark:bg-gray-800/50 border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
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
    background: 'from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20',
    textColor: 'text-yellow-800 dark:text-yellow-200',
    cardBg: 'bg-white/70 dark:bg-gray-800/50 border-yellow-200 dark:border-yellow-800',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
  }
];

const getStepIcon = (stepText: string, year: number) => {
  if (year === 2023) {
    if (stepText.includes('монтаж')) return <BookOpen className="w-4 h-4" />;
    if (stepText.includes('заказы')) return <Star className="w-4 h-4" />;
    return <Laptop className="w-4 h-4" />;
  }
  
  if (year === 2024) {
    if (stepText.includes('курсы')) return <BookOpen className="w-4 h-4" />;
    if (stepText.includes('After Effects')) return <Zap className="w-4 h-4" />;
    if (stepText.includes('заказы')) return <Target className="w-4 h-4" />;
    return <Shapes className="w-4 h-4" />;
  }
  
  if (year === 2025) {
    if (stepText.includes('экспертом')) return <Crown className="w-4 h-4" />;
    if (stepText.includes('проекты')) return <Building className="w-4 h-4" />;
    if (stepText.includes('качество')) return <Award className="w-4 h-4" />;
    return <Rocket className="w-4 h-4" />;
  }
  
  return <Star className="w-4 h-4" />;
};

const PhaseSection: React.FC<{ phase: AchievementPhase }> = ({ phase }) => {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div 
      ref={ref}
      className={`relative py-16 bg-gradient-to-br ${phase.background}`}
    >
      <div className="container mx-auto px-4">
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
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full font-bold text-2xl font-oswald shadow-lg ${phase.iconBg}`}>
              {phase.year}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 font-oswald ${phase.textColor}`}
          >
            {phase.title}
          </motion.h3>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {phase.steps.map((step, stepIndex) => (
              <motion.div
                key={stepIndex}
                variants={itemVariants}
                className={`p-6 rounded-xl backdrop-blur-sm border transform hover:scale-105 
                  hover:shadow-lg transition-all duration-300 group cursor-pointer ${phase.cardBg}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full group-hover:scale-110 transition-transform duration-300 ${phase.iconBg}`}>
                    {getStepIcon(step, phase.year)}
                  </div>
                  <p className={`text-base font-raleway leading-relaxed ${phase.textColor}`}>
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for 2025 */}
          {phase.year === 2025 && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <button
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold font-oswald 
                  transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Заказать проект
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const AchievementPath: React.FC = () => {
  return (
    <div className="relative">
      {/* Path connecting sections */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-yellow-500 transform -translate-x-1/2 z-10 hidden md:block" />
      
      {/* Achievement Phases */}
      {achievementData.map((phase, index) => (
        <PhaseSection key={phase.year} phase={phase} />
      ))}
    </div>
  );
};

export default AchievementPath;