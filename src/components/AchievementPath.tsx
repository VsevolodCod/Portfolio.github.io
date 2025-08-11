import React, { useState, useMemo } from 'react';
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
  Rocket,
  Trophy,
  Gem,
  Check
} from 'lucide-react';

interface Achievement {
  id: string;
  year: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface YearData {
  year: number;
  title: string;
  achievements: Achievement[];
  yearColor: string;
  position: { x: number; y: number };
}

const achievementData: YearData[] = [
  {
    year: 2023,
    title: "Старт в полях возможностей",
    yearColor: "from-green-400 to-emerald-500",
    position: { x: 15, y: 9 },
    achievements: [
      {
        id: "2023-1",
        year: 2023,
        title: "Основы монтажа",
        description: "Освоил монтаж с нуля по зарубежным гайдам",
        icon: <BookOpen className="w-4 h-4" />,
        color: "from-green-300 to-green-400"
      },
      {
        id: "2023-2", 
        year: 2023,
        title: "Первые заказы",
        description: "Выполнил первые платные заказы",
        icon: <Trophy className="w-4 h-4" />,
        color: "from-emerald-300 to-emerald-400"
      },
      {
        id: "2023-3",
        year: 2023,
        title: "Базовые навыки",
        description: "Научился решать базовые задачи уверенно",
        icon: <Target className="w-4 h-4" />,
        color: "from-teal-300 to-teal-400"
      }
    ]
  },
  {
    year: 2024,
    title: "Рост в лесу мастерства",
    yearColor: "from-blue-400 to-indigo-500",
    position: { x: 50, y: 50 },
    achievements: [
      {
        id: "2024-1",
        year: 2024,
        title: "Углубление знаний",
        description: "Прошел курсы, углубил знания",
        icon: <Laptop className="w-4 h-4" />,
        color: "from-blue-300 to-blue-400"
      },
      {
        id: "2024-2",
        year: 2024,
        title: "After Effects",
        description: "Добавил After Effects в арсенал",
        icon: <Zap className="w-4 h-4" />,
        color: "from-indigo-300 to-indigo-400"
      },
      {
        id: "2024-3",
        year: 2024,
        title: "Крупные заказы",
        description: "Брал крупные заказы, укрепил позиции",
        icon: <Building className="w-4 h-4" />,
        color: "from-purple-300 to-purple-400"
      },
      {
        id: "2024-4",
        year: 2024,
        title: "Команда топ-специалиста",
        description: "Вошел в команду топового СНГ-специалиста",
        icon: <Award className="w-4 h-4" />,
        color: "from-violet-300 to-violet-400"
      }
    ]
  },
  {
    year: 2025,
    title: "Вершины города побед",
    yearColor: "from-yellow-400 to-amber-500",
    position: { x: 85, y: 90 },
    achievements: [
      {
        id: "2025-1",
        year: 2025,
        title: "Востребованный эксперт",
        description: "Стал востребованным экспертом",
        icon: <Crown className="w-4 h-4" />,
        color: "from-yellow-300 to-yellow-400"
      },
      {
        id: "2025-2",
        year: 2025,
        title: "Проекты любой сложности",
        description: "Берем проекты любой сложности: от обзоров до кино",
        icon: <Rocket className="w-4 h-4" />,
        color: "from-amber-300 to-amber-400"
      },
      {
        id: "2025-3",
        year: 2025,
        title: "Кинематографичное качество",
        description: "Гарантируем кинематографичное качество",
        icon: <Gem className="w-4 h-4" />,
        color: "from-orange-300 to-orange-400"
      },
      {
        id: "2025-4",
        year: 2025,
        title: "Работы говорят за нас",
        description: "Работы говорят за нас",
        icon: <Star className="w-4 h-4" />,
        color: "from-red-300 to-red-400"
      }
    ]
  }
];

// Функция для вычисления точки на кривой Безье (улучшенная S-кривая для большего вертикального растяжения)
const getPointOnCurve = (t: number): { x: number; y: number } => {
  // Точки кривой Безье для более выраженной S-образной формы с лучшим вертикальным растяжением
  const P0 = { x: 10, y: 2.8 };   // Начало - левый верх
  const P1 = { x: 30, y: 1 };   // Контрольная точка 1 - подъем вверх
  const P2 = { x: 70, y: 20 };  // Контрольная точка 2 - движение вправо
  const P3 = { x: 50, y: 50 };  // Средняя точка - центр S
  const P4 = { x: 30, y: 80 };  // Контрольная точка 3 - влево и вниз
  const P5 = { x: 70, y: 99 };  // Контрольная точка 4 - вправо
  const P6 = { x: 85, y: 92 };  // Конец - правый низ

  if (t <= 0.5) {
    const u = t * 2;
    // Расчет для первого сегмента криой (P0-P3)
    const x =
      Math.pow(1 - u, 3) * P0.x +
      3 * Math.pow(1 - u, 2) * u * P1.x +
      3 * (1 - u) * Math.pow(u, 2) * P2.x +
      Math.pow(u, 3) * P3.x;
    const y =
      Math.pow(1 - u, 3) * P0.y +
      3 * Math.pow(1 - u, 2) * u * P1.y +
      3 * (1 - u) * Math.pow(u, 2) * P2.y +
      Math.pow(u, 3) * P3.y;
    return { x, y };
  } else {
    const u = (t - 0.5) * 2;
    // Расчет для второго сегмента кривой (P3-P6)
    const x =
      Math.pow(1 - u, 3) * P3.x +
      3 * Math.pow(1 - u, 2) * u * P4.x +
      3 * (1 - u) * Math.pow(u, 2) * P5.x +
      Math.pow(u, 3) * P6.x;
    const y =
      Math.pow(1 - u, 3) * P3.y +
      3 * Math.pow(1 - u, 2) * u * P4.y +
      3 * (1 - u) * Math.pow(u, 2) * P5.y +
      Math.pow(u, 3) * P6.y;
    return { x, y };
  }
};

// Точные позиции для годов на кривой
const getYearPositions = () => {
  const step = 0.06;
  let currentT = 0.03;

  // 2023 год - начало
  const year2023T = currentT;
  currentT += step * 4 + 0.02; // 3 достижения + отступ

  // 2024 год
  const year2024T = currentT;
  currentT += step * 5; // 4 достижения

  // 2025 год - в конце последовательности
  const year2025T = 0.97;

  return {
    2023: year2023T,
    2024: year2024T,
    2025: year2025T
  };
};

// Функция для расчета всех позиций в правильной последовательности
const calculateAllPositions = () => {
  const positions: any = {
    years: {} as Record<number, {x: number, y: number}>,
    achievements: {} as Record<number, {x: number, y: number}[]>
  };

  const yearTs = getYearPositions();
  const step = 0.06; // Уменьшенный шаг
  let currentT = 0.03; // Начало кривой

  // 1. 2023 год - начало кривой
  positions.years[2023] = getPointOnCurve(yearTs[2023]);
  currentT += step;

  // 2. Достижения 2023 года (3 штуки)
  positions.achievements[2023] = [];
  for (let i = 0; i < 3; i++) {
    positions.achievements[2023].push(getPointOnCurve(currentT));
    currentT += step;
  }

  // Уменьшение расстояния до 2024 года
  currentT += 0.02; // Маленький отступ

  // 3. 2024 год - точно на кривой
  positions.years[2024] = getPointOnCurve(yearTs[2024]);
  currentT += step;

  // 4. Достижения 2024 года (4 штуки)
  positions.achievements[2024] = [];
  for (let i = 0; i < 4; i++) {
    positions.achievements[2024].push(getPointOnCurve(currentT));
    currentT += step;
  }

  // 5. Достижения 2025 года (4 штуки) - убеждаемся что они на кривой
  positions.achievements[2025] = [];
  for (let i = 0; i < 4; i++) {
    if (currentT <= 0.95) { // Проверяем что не выходим за границы кривой
      positions.achievements[2025].push(getPointOnCurve(currentT));
      currentT += step;
    }
  }

  // 6. 2025 год - конец кривой
  positions.years[2025] = getPointOnCurve(yearTs[2025]);

  return positions;
};

const AchievementPath: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<{ type: 'year' | 'achievement'; data: any } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Предварительный расчет позиций
  const processedData = useMemo(() => {
    const allPositions = calculateAllPositions();

    return achievementData.map((yearData) => {
      const yearPosition = allPositions.years[yearData.year];
      const achievementPositions = allPositions.achievements[yearData.year];

      return {
        ...yearData,
        position: {
          x: `${yearPosition.x}%`,
          y: `${yearPosition.y}%`
        },
        achievements: yearData.achievements.map((achievement, idx) => ({
          ...achievement,
          position: {
            x: `${achievementPositions[idx].x}%`,
            y: `${achievementPositions[idx].y}%`
          }
        }))
      };
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative w-full h-[200vh] bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-48 h-48 bg-green-200/15 dark:bg-green-800/15 rounded-full animate-float blur-2xl" />
        <div className="absolute top-1/4 right-24 w-56 h-56 bg-blue-200/15 dark:bg-blue-800/15 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute top-2/3 left-1/4 w-52 h-52 bg-purple-200/15 dark:bg-purple-800/15 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-24 right-1/3 w-44 h-44 bg-yellow-200/15 dark:bg-yellow-800/15 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-emerald-200/10 to-blue-200/10 dark:from-emerald-800/10 dark:to-blue-800/10 rounded-full animate-float blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* S-shaped Path SVG */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="25%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="75%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
          </linearGradient>
          <filter id="glowEffect">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* S-shaped Main Path */}
        <path
          d="M 15,5 C 30,1 70,20 50,50 C 30,80 70,99 85,95"
          stroke="url(#sPathGradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glowEffect)"
          className="animate-pulse"
          strokeLinecap="round"
        />

        {/* Path Dots for years - используем точные позиции */}
        {(() => {
          const yearTs = getYearPositions();
          return (
            <>
              <circle cx={getPointOnCurve(yearTs[2023]).x} cy={getPointOnCurve(yearTs[2023]).y} r="2" fill="#10b981" className="animate-pulse drop-shadow-lg" />
              <circle cx={getPointOnCurve(yearTs[2024]).x} cy={getPointOnCurve(yearTs[2024]).y} r="2" fill="#3b82f6" className="animate-pulse drop-shadow-lg" style={{animationDelay: '0.6s'}} />
              <circle cx={getPointOnCurve(yearTs[2025]).x} cy={getPointOnCurve(yearTs[2025]).y} r="2" fill="#f59e0b" className="animate-pulse drop-shadow-lg" style={{animationDelay: '1.2s'}} />
            </>
          );
        })()}
      </svg>

      {/* Year Nodes (Main points) */}
      {processedData.map((yearData, yearIndex) => (
        <motion.div
          key={yearData.year}
          className="absolute pointer-events-auto"
          style={{ 
            left: yearData.position.x, 
            top: yearData.position.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: yearIndex * 0.4, duration: 0.6 }}
        >
          <motion.div
            className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${yearData.yearColor}
              shadow-xl cursor-pointer flex items-center justify-center text-white
              hover:shadow-2xl transition-all duration-300 border-3 border-white dark:border-gray-800`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredItem({ type: 'year', data: yearData })}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <div className="text-lg font-bold">{yearData.year}</div>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${yearData.yearColor}
              opacity-20 animate-pulse blur-sm scale-125`} />
          </motion.div>
        </motion.div>
      ))}

      {/* Achievement Checkpoints */}
      {processedData.map((yearData) => 
        yearData.achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="absolute pointer-events-auto"
            style={{ 
              left: achievement.position.x, 
              top: achievement.position.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: yearData.year - 2022 + Math.random() * 0.5, duration: 0.4 }}
          >
            <svg 
              className="absolute inset-0 pointer-events-none"
              style={{
                width: '200px',
                height: '200px',
                left: '-100px',
                top: '-100px'
              }}
            >
              <line
                x1="100"
                y1="100"
                x2={100 + (parseFloat(yearData.position.x) - parseFloat(achievement.position.x)) * 3}
                y2={100 + (parseFloat(yearData.position.y) - parseFloat(achievement.position.y)) * 3}
                stroke={`url(#sPathGradient)`}
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.6"
                className="animate-pulse"
              />
            </svg>

            <motion.div
              className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${achievement.color}
                shadow-lg cursor-pointer flex items-center justify-center text-white
                hover:shadow-xl transition-all duration-300 border-2 border-white dark:border-gray-700`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem({ type: 'achievement', data: achievement })}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <div className="w-4 h-4">{achievement.icon}</div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </motion.div>
          </motion.div>
        ))
      )}

      {/* Tooltip */}
      {hoveredItem && (
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
            
            {hoveredItem.type === 'year' ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${hoveredItem.data.yearColor} text-white`}>
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl">
                      {hoveredItem.data.year}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {hoveredItem.data.title}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Достижения ({hoveredItem.data.achievements.length}):
                  </p>
                  <ul className="space-y-1">
                    {hoveredItem.data.achievements.map((achievement: Achievement, index: number) => (
                      <motion.li
                        key={achievement.id}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{achievement.title}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${hoveredItem.data.color} text-white`}>
                    {hoveredItem.data.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {hoveredItem.data.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {hoveredItem.data.year}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-foreground">
                  {hoveredItem.data.description}
                </p>
              </div>
            )}
            
            {hoveredItem.type === 'year' && hoveredItem.data.year === 2025 && (
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
          
          <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 
            border-t-transparent border-b-transparent border-r-border/50" />
        </motion.div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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
