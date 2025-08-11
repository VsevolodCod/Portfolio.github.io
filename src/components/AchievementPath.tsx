import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

interface Achievement {
  year: number;
  title: string;
  achievements: string[];
  icon: React.ReactNode;
  color: string;
  position: { x: string; y: string };
}

const achievements: Achievement[] = [
  {
    year: 2023,
    title: "Старт в полях возможностей",
    achievements: [
      "Освоил монтаж с нуля по зарубежным гайдам",
      "Выполнил первые платные заказы",
      "Научился решать базовые задачи уверенно"
    ],
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-green-400 to-emerald-500",
    position: { x: "20%", y: "15%" }
  },
  {
    year: 2024,
    title: "Рост в лесу мастерства", 
    achievements: [
      "Прошел курсы, углубил знания",
      "Добавил After Effects в арсенал",
      "Брал крупные заказы, укрепил позиции",
      "Вошел в команду топового СНГ-специалиста"
    ],
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-400 to-indigo-500",
    position: { x: "75%", y: "50%" }
  },
  {
    year: 2025,
    title: "Вершины города побед",
    achievements: [
      "Стал востребованным экспертом",
      "Берем проекты любой сложности: от обзоров до кино",
      "Гарантируем кинематографичное качество",
      "Работы говорят за нас"
    ],
    icon: <Crown className="w-6 h-6" />,
    color: "from-yellow-400 to-amber-500",
    position: { x: "45%", y: "85%" }
  }
];

const AchievementPath: React.FC = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<Achievement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 dark:bg-green-800/20 rounded-full animate-float blur-xl" />
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-blue-200/20 dark:bg-blue-800/20 rounded-full animate-float-delayed blur-xl" />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-yellow-200/20 dark:bg-yellow-800/20 rounded-full animate-float blur-xl" />
      </div>

      {/* Winding Path SVG */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Winding Path */}
        <path
          d="M 15,20 Q 40,5 60,25 T 80,45 Q 90,60 70,75 T 40,90"
          stroke="url(#pathGradient)"
          strokeWidth="0.8"
          fill="none"
          filter="url(#glow)"
          className="animate-pulse"
        />
        
        {/* Path Dots */}
        <circle cx="15" cy="20" r="0.8" fill="#10b981" className="animate-pulse" />
        <circle cx="60" cy="25" r="0.8" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="80" cy="45" r="0.8" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="70" cy="75" r="0.8" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        <circle cx="40" cy="90" r="0.8" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '2s'}} />
      </svg>

      {/* Achievement Nodes */}
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.year}
          className="absolute pointer-events-auto"
          style={{ 
            left: achievement.position.x, 
            top: achievement.position.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
        >
          <motion.div
            className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} 
              shadow-lg cursor-pointer flex items-center justify-center text-white
              hover:shadow-2xl transition-all duration-300 border-4 border-white dark:border-gray-800`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredAchievement(achievement)}
            onHoverEnd={() => setHoveredAchievement(null)}
          >
            {achievement.icon}
            
            {/* Year Label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
              text-sm font-bold text-foreground bg-background/90 dark:bg-background/90 
              px-3 py-1 rounded-full border border-border/50 shadow-md">
              {achievement.year}
            </div>
            
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} 
              opacity-20 animate-pulse blur-sm scale-150`} />
          </motion.div>
        </motion.div>
      ))}

      {/* Achievement Tooltip */}
      {hoveredAchievement && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 10,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-card/95 dark:bg-card/95 backdrop-blur-md border border-border/50 
            rounded-xl shadow-2xl p-6 max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${hoveredAchievement.color} text-white`}>
                {hoveredAchievement.icon}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  {hoveredAchievement.year}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {hoveredAchievement.title}
                </p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {hoveredAchievement.achievements.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            {hoveredAchievement.year === 2025 && (
              <motion.button
                className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg 
                  font-semibold hover:bg-primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Заказать проект
              </motion.button>
            )}
          </div>
          
          {/* Tooltip Arrow */}
          <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 
            border-t-transparent border-b-transparent border-r-border/50" />
        </motion.div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementPath;