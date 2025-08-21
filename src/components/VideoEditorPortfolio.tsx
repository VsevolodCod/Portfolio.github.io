import AchievementPath from "./AchievementPath";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Camera, 
  Video, 
  Edit, 
  Play, 
  Award,
  Clock,
  Eye,
  Star,
  Youtube,
  Instagram,
  Film,
  Sun,
  Moon,
  Globe,
  Download,
  Mail,
  Phone,
  Users,
  TrendingUp,
  Calendar,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Briefcase,
  Trophy,
  MessageCircle,
  Heart,
  ArrowUp,
  Send,
  DollarSign,
  Zap,
  Target,
  Bell,
  BellOff,
  ExternalLink
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

const VideoEditorPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [scrollY, setScrollY] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme, setTheme } = useTheme();
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });


  const content = {
    ru: {
      name: "Фомин Вадим",
      profession: "Профессиональный видеомонтажер",
      description: "Создаю качественный видеоконтент более 2 лет. Специализируюсь на рекламных роликах, рилсах, обзорах и корпоративных презентациях. Превращаю уже снятые материалы в визуальные истории, которые запоминаются.",
      experience: "2+ лет опыта",
      projects: "20+ проектов", 
      views: "1M+ просмотров",
      skillsTitle: "Навыки и технологии",
      skillsSubtitle: "Профессиональное владение индустриальными инструментами",
      portfolioTitle: "Лучшие работы",
      portfolioSubtitle: "Избранные проекты из моего порофолио",
      contactTitle: "Готовы к сотрудничеству?",
      contactSubtitle: "О��судим ваш проект и создадим что-то невероятное вместе",
      contactButton: "Связаться со мной",
      downloadButton: "Скачать портфолио",
      watchButton: "Смотреть",
      testimonialsTitle: "Отзывы клиентов",
      testimonialsSubtitle: "Что говорят о моей работе",
      timelineTitle: "Мой путь",
      timelineSubtitle: "Опыт работы и достижения",
      servicesTitle: "Услуги",
      servicesSubtitle: "Что я предлагаю",
      statsTitle: "Достижения в цифрах",
      awardsTitle: "Награды и сертификаты",
      getQuote: "Получить предложение",
      sendMessage: "Отправить сообщение",
      yourName: "Ваше имя",
      yourEmail: "Email",
      projectDescription: "Описание проекта",
      clients: "Клиентов",
      hoursEdited: "Часов монтажа",
      rating: "Рейтинг"
    },
    en: {
      name: "Vadim Fomin",
      profession: "Professional Video Editor",
      description: "Creating quality video content for over 5 years. I specialize in advertising videos, music videos, wedding films and corporate presentations. I turn ideas into visual stories that are memorable.",
      experience: "5+ years experience",
      projects: "200+ projects",
      views: "1M+ views", 
      skillsTitle: "Skills & Technologies",
      skillsSubtitle: "Professional mastery of industry tools",
      portfolioTitle: "Best Works",
      portfolioSubtitle: "Selected projects from my portfolio",
      contactTitle: "Ready to collaborate?",
      contactSubtitle: "Let's discuss your project and create something incredible together",
      contactButton: "Contact me",
      downloadButton: "Download portfolio",
      watchButton: "Watch",
      testimonialsTitle: "Client Reviews",
      testimonialsSubtitle: "What they say about my work",
      timelineTitle: "My Journey",
      timelineSubtitle: "Work experience and achievements",
      servicesTitle: "Services",
      servicesSubtitle: "What I offer",
      statsTitle: "Achievements in Numbers",
      awardsTitle: "Awards & Certificates",
      getQuote: "Get Quote",
      sendMessage: "Send Message",
      yourName: "Your Name",
      yourEmail: "Email",
      projectDescription: "Project Description",
      clients: "Clients",
      hoursEdited: "Hours Edited",
      rating: "Rating"
    }
  };

  // Mock data для портфолио
  const portfolioVideos = [
    {
      id: 1,
      title: "Рекламный ролик для IT-компании",
      description: "Динамичный корпоративный ролик с современной графикой и анимацией. Использованы сложные переходы и цветокоррекция.",
      duration: "2:30",
      views: "15.2K",
      category: "Реклама",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Свадебный клип",
      description: "Эмоциональный свадебный ролик с кинематографической обработкой. Акцент на атмосферу и передачу чувств.",
      duration: "4:15",
      views: "8.7K",
      category: "Свадьба",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Музыкальный клип",
      description: "Тв��рческий музыкальный видеоклип с синхронизацией и визуальными эффектами. Эксперименты с цветом и ритмом.",
      duration: "3:45",
      views: "23.1K",
      category: "Музыка",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Документальный фильм",
      description: "Короткометражный документальный фильм о местных художниках. Интервью, b-roll съемка, профессиональный звук.",
      duration: "12:20",
      views: "5.3K",
      category: "Документалистика",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const skills = [
    { name: "Adobe Premiere Pro", level: 100 },
    { name: "After Effects", level: 100 },
    { name: "DaVinci Resolve", level: 100 },
    { name: "Цветокоррекция", level: 100 },
    { name: "Моушн дизайн", level: 100 },
    { name: "Звуковой дизайн", level: 100 }
  ];

  // Additional data для новых лекций
  const partners = [
    {
      name: "Алексей Леденёв",
      photo: import.meta.env.BASE_URL + "Алексей Леденёв.jpg",
      description: (
        <>
          Привет! Меня зовут Алексей, я reels продюсер🎬<br/>
          <ul className="list-disc ml-4 mt-2 text-sm text-muted-foreground">
            <li>Основатель <a href="https://www.instagram.com/greenscreenvideos_?igsh=MWVkdDU0ZXJ2bjMyeg==" target="_blank" rel="noopener noreferrer" className="underline">аккаунта с зелёными роликами</a></li>
            <li>2 года в продюсировании коротких роликов</li>
            <li>100+ млн просмотров клиентам</li>
            <li>500+ тыс целевых подписчиков</li>
            <li>26 000 подписчиков клиенту с одного ролика</li>
            <li>С одного рилса клиент продал услуги на 5 млн</li>
          </ul>
        </>
      ),
      link: "https://t.me/aleksei_ledenyov"
    },
    {
      name: "Никита Волгин",
      photo: import.meta.env.BASE_URL + "Никита Волгин.jpg",
      description: (
        <>
          основатель канала <a href="https://t.me/volgin_404" target="_blank" rel="noopener noreferrer" className="underline">404</a>
        </>
      ),
      link: "https://t.me/volgin_404"
    },
    {
      name: "Сергей Копыл",
      photo: import.meta.env.BASE_URL + "Сергей Копыл.jpg",
      description: (
        <>
          Режиссёр<br/>
          <a href="https://t.me/kopyl_sergey" target="_blank" rel="noopener noreferrer" className="underline">Телеграм-канал</a>
        </>
      ),
      link: "https://t.me/kopyl_sergey"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Freelance Video Editor",
      company: "Собственная студия",
      description: "Открыл собственную студию видеопродакшена. Работаю с крупными брендами и частными клиентами."
    },
    {
      year: "2022-2023",
      title: "Senior Video Editor",
      company: "MediaPro Agency",
      description: "Руководил командой монтажеров, работал над крупными рекламными кампаниями."
    },
    {
      year: "2020-2022",
      title: "Video Editor",
      company: "Creative Studio X",
      description: "Специализировался на музык��льных клипах и корпоративных видео."
    },
    {
      year: "2019-2020",
      title: "Junior Video Editor",
      company: "StartUp Media",
      description: "Начало карьеры в видеопродакшене. Изучение основ монтажа и цветокоррекции."
    }
  ];

  const services = [
    {
      title: "Рилсы",
      price: "от 1500₽",
      features: ["Монтаж", "Цветокоррекция", "Музыкальное сопровождение", "Оптимизация под формат"],
      icon: Heart,
      subcategories: [
        {
          title: "Говорящая голова",
          features: ["Монтаж", "Цветокоррекция", "Музыкальное сопровождение", "Спец эффекты/вставки", "Оптимизация под формат"],
          hasExamples: true,
          examples: [
            {
              id: 1,
              title: "Говорящая голова - Пример 1",
              description: "Пример видео в стиле говорящая голова",
              videoUrl: "https://rutube.ru/play/embed/cb38b416d6278ec3d9d3fc98b51a51d0?p=1QDSgLWgwFjdnlnvv-IH2Q",
              isPlaceholder: false
            },
            {
              id: 2,
              title: "Говорящая голова - Пример 2",
              description: "Еще один пример говорящей головы",
              videoUrl: "https://rutube.ru/play/embed/b26e4fc240d6098f40be489d734a3d55?p=4m6qD8XZC0iDijGAMiCizQ",
              isPlaceholder: false
            }
          ]
        }
      ]
    },
    {
      title: "Горизонтальные видео",
      price: "от 700₽/минута",
      features: ["Профессиональное качество", "Полный цикл производства", "Индивидуальный подход"],
      icon: Film,
      subcategories: [
        {
          title: "Рекламные видео",
          features: ["Сторителлинг", "Монтаж", "Цветокоррекция", "Звуковой дизайн", "Спец эффекты", "Графика и анимация"],
          hasExamples: true,
          examples: [
            {
              id: 1,
              title: "Рекламное видео - Пример 1",
              description: "Рекламное видео - пример работы",
              videoUrl: "https://rutube.ru/play/embed/771ebc7e13985f6f13481f58f93856ed?p=_v49qhkhCPbUeeolGOawxg",
              isPlaceholder: false
            },
            {
              id: 2,
              title: "Рекламное видео - Пример 2",
              description: "Еще один пример рекламного видео",
              videoUrl: "https://rutube.ru/play/embed/example-ad-2",
              isPlaceholder: true
            }
          ]
        },
        {
          title: "Обычные видео",
          features: ["Сторителлинг", "Монтаж", "Цветокоррекция", "Звуковой дизайн", "Музыкальное сопровождение", "Титры и надписи"],
          hasExamples: true,
          examples: [
            {
              id: 1,
              title: "Обычное видео - Пример 1",
              description: "Пример обычного видео",
              videoUrl: "https://rutube.ru/play/embed/example-regular-1",
              isPlaceholder: true
            },
            {
              id: 2,
              title: "Обычное видео - Пример 2",
              description: "Еще один пример обычного видео",
              videoUrl: "https://rutube.ru/play/embed/example-regular-2",
              isPlaceholder: true
            }
          ]
        }
      ]
    }
  ];

  const stats = [
    { number: "50+", label: content[language].clients, icon: Users },
    { number: "1000+", label: content[language].hoursEdited, icon: Clock },
    { number: "4.9", label: content[language].rating, icon: Star },
    { number: "1.2M+", label: content[language].views, icon: Eye }
  ];

  // Удаляем testimonials и связанные с ними состояния
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Функции для управления музыкой
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  const handleMusicEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentTestimonial((prev) => (prev + 1) % testimonials.length); // Удалено
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-controls-area') && isControlsOpen) {
        setIsControlsOpen(false);
      }
    };

    if (isControlsOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isControlsOpen]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={import.meta.env.BASE_URL + "на фон.mp3"}
        onEnded={handleMusicEnded}
        loop
        preload="auto"
      />
      
      {/* Mobile Controls Toggle */}
      <div className="fixed top-4 right-4 z-50 sm:hidden mobile-controls-area">
        <Button
          variant="default"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Button clicked, current state:', isControlsOpen);
            setIsControlsOpen(!isControlsOpen);
          }}
          className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 border-2 border-primary/60 shadow-lg w-12 h-12 flex items-center justify-center"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isControlsOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>

      {/* Desktop Controls */}
      <div className="hidden sm:flex fixed top-6 right-6 z-50 items-center gap-4">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 border border-border/50">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="text-xs hover:bg-transparent p-2"
          >
            {language.toUpperCase()}
          </Button>
        </div>

        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 border border-border/50">
          <Sun className="w-4 h-4 text-muted-foreground" />
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <Moon className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 border border-border/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMusic}
            className="text-xs hover:bg-transparent p-2"
          >
            {isMusicPlaying ? (
              <Bell className="w-4 h-4 text-primary animate-pulse" />
            ) : (
              <BellOff className="w-4 h-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Controls Panel */}
      <div
        className={`fixed top-16 right-4 z-40 sm:hidden mobile-controls-area transition-all duration-300 transform ${
          isControlsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          display: isControlsOpen ? 'block' : 'block' 
        }}
      >
        <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-lg p-3 space-y-3">
          {/* Panel state debugging removed */}
          {/* Language Toggle */}
          <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-2">
            <Globe className="w-3 h-3 text-muted-foreground" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="text-xs hover:bg-transparent p-1 min-w-8"
            >
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-2">
            <Sun className="w-3 h-3 text-muted-foreground" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              className="scale-75"
            />
            <Moon className="w-3 h-3 text-muted-foreground" />
          </div>

          {/* Music Toggle */}
          <div className="flex items-center gap-2 bg-background/50 rounded-full px-3 py-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMusic}
              className="text-xs hover:bg-transparent p-1 flex items-center gap-1"
            >
              {isMusicPlaying ? (
                <Bell className="w-3 h-3 text-primary animate-pulse" />
              ) : (
                <BellOff className="w-3 h-3 text-muted-foreground" />
              )}
              <span className="text-xs">{isMusicPlaying ? 'ON' : 'OFF'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('${import.meta.env.BASE_URL}vadim-photo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gradient Overlay - Улучшено для лучшей видимости на белом фоне */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/90 via-background/70 to-background/90 dark:from-background/90 dark:via-background/70 dark:to-background/90" />
        <div className="absolute inset-0 z-15 bg-gradient-to-br from-transparent via-background/20 to-transparent" />
        
        {/* Animated Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-20 left-10 text-primary/20 animate-float">
            <Camera size={60} />
          </div>
          <div className="absolute top-40 right-20 text-primary/15 animate-float" style={{ animationDelay: '1s' }}>
            <Video size={45} />
          </div>
          <div className="absolute bottom-32 left-20 text-primary/10 animate-float" style={{ animationDelay: '2s' }}>
            <Film size={70} />
          </div>
          <div className="absolute top-60 left-1/2 text-primary/15 animate-float" style={{ animationDelay: '0.5s' }}>
            <Youtube size={50} />
          </div>
          <div className="absolute bottom-20 right-40 text-primary/20 animate-float" style={{ animationDelay: '1.5s' }}>
            <Edit size={40} />
          </div>
          <div className="absolute top-32 right-1/3 text-primary/10 animate-float" style={{ animationDelay: '3s' }}>
            <Instagram size={35} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-30 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div
            className={`space-y-8 sm:space-y-12 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Hero Badge */}
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 rounded-full border border-primary/20 backdrop-blur-xl mb-6">
              <Star className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">Профессиональный видеомонтажер</span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
                  <span className="bg-gradient-to-r from-primary via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {content[language].name}
                  </span>
                </h1>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
              </div>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {content[language].profession}
                </p>

                <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-border/30">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                    {content[language].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Улучшенные значки достижений */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8">
              <div className="group relative bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">2+</p>
                  <p className="text-sm text-muted-foreground font-medium">лет опыта</p>
                </div>
              </div>

              <div className="group relative bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-violet-600" />
                  </div>
                  <p className="text-2xl font-bold text-violet-600 mb-1">20+</p>
                  <p className="text-sm text-muted-foreground font-medium">проектов</p>
                </div>
              </div>

              <div className="group relative bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-cyan-600" />
                  </div>
                  <p className="text-2xl font-bold text-cyan-600 mb-1">1M+</p>
                  <p className="text-sm text-muted-foreground font-medium">просмотров</p>
                </div>
              </div>
            </div>

            {/* Улучшенные кнопки CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8 sm:pt-10 max-w-2xl mx-auto">
              <div className="group relative flex-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-600 to-cyan-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                <a href="https://t.me/vadimfom1n?text=Здравствуйте!%20Меня%20заинтересовали%20ваши%20услуги.%20Пожалуйста,%20расскажите%20подробнее%20о:%0A1)%20Какой%20тип%20заказа%20вас%20интересует%0A2)%20Бюджет%20проекта%0A3)%20Сроки%20реализации%0A4)%20Дополнительные%20пожелания" 
                  target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="relative w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-2xl border-0 group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    <Mail className="w-5 h-5 mr-3" />
                    {content[language].contactButton}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
              </div>

              <div className="group relative flex-1">
                <a href="https://t.me/vadimfom1n" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group-hover:scale-105 bg-card/50">
                    <Download className="w-5 h-5 mr-3" />
                    {content[language].downloadButton}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 space-y-20">

        {/* Skills Section - Redesigned with Infographics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {content[language].skillsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content[language].skillsSubtitle}
            </p>
          </div>

          {/* Skills Grid with Visual Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Adobe Premiere Pro */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.18l7 3.5v6.64l-7-3.5V9.18zm16 0v6.64l-7 3.5v-6.64l7-3.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Adobe Premiere Pro</h3>
                        <p className="text-sm text-muted-foreground">Video Editing</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-500">95%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-purple-500">Expert</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">Color Grading</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">Audio Sync</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">Transitions</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* After Effects */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">After Effects</h3>
                        <p className="text-sm text-muted-foreground">Motion Graphics</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-500">90%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Animation</span>
                      <span className="text-blue-500">Advanced</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '90%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">VFX</span>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 text-xs rounded-full">3D Animation</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">Compositing</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DaVinci Resolve */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">DaVinci Resolve</h3>
                        <p className="text-sm text-muted-foreground">Color Grading</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-amber-500">85%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Color Science</span>
                      <span className="text-amber-500">Professional</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded-full">HDR</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full">LUTs</span>
                    <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-xs rounded-full">Nodes</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Color Correction */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Color Correction</h3>
                        <p className="text-sm text-muted-foreground">Color Theory</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-500">92%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Color Balance</span>
                      <span className="text-emerald-500">Master</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">Scopes</span>
                    <span className="px-2 py-1 bg-teal-500/10 text-teal-500 text-xs rounded-full">Curves</span>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">Wheels</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Motion Design */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Motion Design</h3>
                        <p className="text-sm text-muted-foreground">Animation</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-rose-500">88%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Keyframes</span>
                      <span className="text-rose-500">Advanced</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-rose-500 to-pink-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '88%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-rose-500/10 text-rose-500 text-xs rounded-full">Easing</span>
                    <span className="px-2 py-1 bg-pink-500/10 text-pink-500 text-xs rounded-full">Timing</span>
                    <span className="px-2 py-1 bg-rose-500/10 text-rose-500 text-xs rounded-full">Dynamics</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sound Design */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Card className="relative bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Sound Design</h3>
                        <p className="text-sm text-muted-foreground">Audio Engineering</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-indigo-500">87%</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Audio Mixing</span>
                      <span className="text-indigo-500">Professional</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000" 
                           style={{ width: '87%' }} />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-xs rounded-full">EQ</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 text-xs rounded-full">Compression</span>
                    <span className="px-2 py-1 bg-indigo-500/10 text-indigo-500 text-xs rounded-full">Reverb</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Summary Chart */}
          <div className="mt-12">
            <Card className="bg-card/80 backdrop-blur-sm border-border/20 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Распределение навыков</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" 
                                className="text-secondary/20" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none"
                                strokeDasharray="251.2" strokeDashoffset="12.56"
                                className="text-purple-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">95%</span>
                      </div>
                    </div>
                    <p className="font-medium">Premiere Pro</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" 
                                className="text-secondary/20" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none"
                                strokeDasharray="251.2" strokeDashoffset="25.12"
                                className="text-blue-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">90%</span>
                      </div>
                    </div>
                    <p className="font-medium">After Effects</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" 
                                className="text-secondary/20" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none"
                                strokeDasharray="251.2" strokeDashoffset="37.68"
                                className="text-amber-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">85%</span>
                      </div>
                    </div>
                    <p className="font-medium">DaVinci Resolve</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section - НЕОНОВЫЙ СТИЛЬ - МОБИЛЬНАЯ ОПТИМИЗАЦИЯ */}
        <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Стильный фон - адаптивный для светлой и темной темы */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background dark:from-black dark:via-gray-900 dark:to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary)_0%,transparent_30%),radial-gradient(circle_at_80%_80%,theme(colors.primary)_0%,transparent_30%),radial-gradient(circle_at_50%_50%,theme(colors.primary)_0%,transparent_40%)] opacity-20 dark:bg-[radial-gradient(circle_at_30%_20%,#00ffff_0%,transparent_30%),radial-gradient(circle_at_80%_80%,#ff00ff_0%,transparent_30%),radial-gradient(circle_at_50%_50%,#00ff00_0%,transparent_40%)] dark:opacity-15 sm:opacity-25 sm:dark:opacity-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,theme(colors.primary)_50%,transparent_60%)] opacity-[0.08] dark:bg-[linear-gradient(45deg,transparent_40%,cyan_50%,transparent_60%)] dark:opacity-[0.02] sm:opacity-[0.1] sm:dark:opacity-[0.03]"></div>
            
            {/* Стильные анимированные частицы - адаптивные под тему */}
            <div className="hidden sm:block absolute top-20 left-10 w-3 h-3 bg-primary dark:bg-cyan-400 rounded-full animate-pulse shadow-lg dark:shadow-[0_0_30px_#00ffff] opacity-60 dark:opacity-100" style={{animationDuration: '2s'}}></div>
            <div className="hidden sm:block absolute top-40 right-20 w-4 h-4 bg-primary dark:bg-pink-400 rounded-full animate-bounce shadow-lg dark:shadow-[0_0_35px_#ff00ff] opacity-50 dark:opacity-100" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
            <div className="hidden sm:block absolute bottom-32 left-1/4 w-2 h-2 bg-primary dark:bg-green-400 rounded-full animate-ping shadow-lg dark:shadow-[0_0_25px_#00ff00] opacity-40 dark:opacity-100" style={{animationDelay: '2s'}}></div>
            <div className="hidden sm:block absolute bottom-20 right-1/3 w-3.5 h-3.5 bg-primary dark:bg-yellow-400 rounded-full animate-pulse shadow-lg dark:shadow-[0_0_30px_#ffff00] opacity-60 dark:opacity-100" style={{animationDelay: '0.5s'}}></div>
            <div className="hidden sm:block absolute top-60 left-1/3 w-2.5 h-2.5 bg-primary dark:bg-purple-400 rounded-full animate-bounce shadow-lg dark:shadow-[0_0_28px_#8000ff] opacity-50 dark:opacity-100" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/20 dark:bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 border border-primary/50 dark:border-cyan-400/50 shadow-lg dark:shadow-[0_0_15px_#00ffff] hover:shadow-xl dark:hover:shadow-[0_0_30px_#00ffff] transition-all duration-500">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-cyan-400 mr-2 sm:mr-3 animate-pulse" />
                <span className="text-foreground dark:text-white font-semibold text-sm sm:text-base">СТАТИСТИКА</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-white mb-3 sm:mb-4">
                {content[language].statsTitle}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto px-4">
                Цифры, которые говорят о качестве моей работы
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const lightColors = [
                  { main: 'primary', secondary: 'primary/80', bg: 'from-primary/20 to-primary/30', text: 'text-primary' },
                  { main: 'primary', secondary: 'primary/80', bg: 'from-primary/15 to-primary/25', text: 'text-primary' },
                  { main: 'primary', secondary: 'primary/80', bg: 'from-primary/20 to-primary/30', text: 'text-primary' },
                  { main: 'primary', secondary: 'primary/80', bg: 'from-primary/15 to-primary/25', text: 'text-primary' }
                ];
                const darkColors = [
                  { main: 'cyan-400', shadow: '#00ffff', bg: 'from-cyan-400/20 to-cyan-600/20', text: 'text-cyan-400' },
                  { main: 'pink-400', shadow: '#ff00ff', bg: 'from-pink-400/20 to-pink-600/20', text: 'text-pink-400' },
                  { main: 'green-400', shadow: '#00ff00', bg: 'from-green-400/20 to-green-600/20', text: 'text-green-400' },
                  { main: 'yellow-400', shadow: '#ffff00', bg: 'from-yellow-400/20 to-yellow-600/20', text: 'text-yellow-400' }
                ];
                const lightColor = lightColors[index % 4];
                const darkColor = darkColors[index % 4];
                
                return (
                  <div key={index} className="group relative">
                    {/* Элегантное/Неоновое свечение при hover */}
                    <div
                      className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse bg-gradient-to-r from-primary/30 to-primary/20"
                      style={{
                        background: theme === 'dark' ? `radial-gradient(circle, ${darkColor.shadow}40 0%, ${darkColor.shadow}20 30%, transparent 70%)` : undefined,
                        boxShadow: theme === 'dark' ? `0 0 40px ${darkColor.shadow}, 0 0 80px ${darkColor.shadow}60, 0 0 120px ${darkColor.shadow}30` : undefined
                      }}
                    ></div>
                    
                    <div
                      className="relative bg-card/90 dark:bg-black/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-500 group-hover:scale-105 sm:group-hover:scale-110 transform group-hover:-translate-y-1 sm:group-hover:-translate-y-3 shadow-lg hover:shadow-xl"
                      style={{
                        borderColor: theme === 'dark' ? `${darkColor.shadow}40` : 'hsl(var(--primary) / 0.4)',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                      }}
                      onMouseEnter={(e) => {
                        if (theme === 'dark') {
                          e.currentTarget.style.borderColor = darkColor.shadow;
                          e.currentTarget.style.boxShadow = `0 0 15px ${darkColor.shadow}30, 0 0 30px ${darkColor.shadow}15`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (theme === 'dark') {
                          e.currentTarget.style.borderColor = `${darkColor.shadow}40`;
                          e.currentTarget.style.boxShadow = '';
                        }
                      }}
                    >
                      
                      {/* Стильная/Неоновая иконка - адаптивные размеры */}
                      <div className="relative mb-4 sm:mb-6">
                        <div
                          className="absolute inset-0 rounded-full blur-lg sm:blur-xl scale-125 sm:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin bg-gradient-to-r from-primary/40 to-primary/20"
                          style={{
                            animationDuration: '4s',
                            background: theme === 'dark' ? `radial-gradient(circle, ${darkColor.shadow}40 0%, transparent 70%)` : undefined
                          }}
                        ></div>
                        <div
                          style={{
                            background: theme === 'dark' ? `linear-gradient(135deg, ${darkColor.shadow}20, ${darkColor.shadow.replace('#', '#').slice(0, -2)}6020)` : undefined,
                            borderColor: theme === 'dark' ? `${darkColor.shadow}60` : 'hsl(var(--primary) / 0.6)',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            boxShadow: theme === 'dark' ? `inset 0 0 15px ${darkColor.shadow}20, 0 0 20px ${darkColor.shadow}30` : undefined
                          }}
                          className={theme === 'dark' 
                            ? `relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500` 
                            : `relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br ${lightColor.bg} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500 border border-primary/60 shadow-lg`}
                        >
                           <stat.icon
                             style={{
                               color: theme === 'dark' ? darkColor.shadow : undefined,
                               filter: theme === 'dark' ? `drop-shadow(0 0 5px ${darkColor.shadow})` : undefined
                             }}
                             className={theme === 'dark' 
                               ? `w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500` 
                               : `w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${lightColor.text} group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500`}
                           />
                        </div>

                        {/* Декоративные/Неоновые частицы */}
                        <div
                          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping shadow-lg"
                          style={{
                            backgroundColor: theme === 'dark' ? darkColor.shadow : 'hsl(var(--primary))',
                            boxShadow: theme === 'dark' ? `0 0 12px ${darkColor.shadow}, 0 0 25px ${darkColor.shadow}70` : undefined
                          }}
                        ></div>
                        <div
                          className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce shadow-lg"
                          style={{
                            animationDelay: '0.2s',
                            backgroundColor: theme === 'dark' ? `${darkColor.shadow}80` : 'hsl(var(--primary) / 0.8)',
                            boxShadow: theme === 'dark' ? `0 0 8px ${darkColor.shadow}, 0 0 16px ${darkColor.shadow}60` : undefined
                          }}
                        ></div>
                      </div>
                      
                      {/* Стильное/Неоновое число */}
                      <div
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 group-hover:scale-110 sm:group-hover:scale-125 transition-all duration-500`}
                        style={{
                          color: theme === 'dark' ? darkColor.shadow : 'hsl(var(--primary))',
                          textShadow: theme === 'dark' ? `0 0 15px ${darkColor.shadow}, 0 0 30px ${darkColor.shadow}60, 0 0 45px ${darkColor.shadow}30` : undefined,
                          filter: theme === 'dark' ? 'brightness(1.3)' : undefined
                        }}
                      >
                        {stat.number}
                      </div>
                      
                      {/* Подпись - адаптивные размеры */}
                      <div
                        className="text-xs sm:text-sm md:text-base font-medium transition-all duration-300 group-hover:font-bold leading-tight"
                        style={{
                          color: theme === 'dark' ? '#9ca3af' : 'hsl(var(--muted-foreground))',
                          textShadow: theme === 'dark' ? `0 0 5px ${darkColor.shadow}30` : undefined
                        }}
                        onMouseEnter={(e) => {
                          if (theme === 'dark') {
                            e.currentTarget.style.color = darkColor.shadow;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (theme === 'dark') {
                            e.currentTarget.style.color = '#9ca3af';
                          }
                        }}
                      >
                        {stat.label}
                      </div>
                      
                      {/* Декоративные/Неоновые элементы - уменьшены для мобильных */}
                      <div
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse shadow-lg"
                        style={{
                          backgroundColor: theme === 'dark' ? `${darkColor.shadow}60` : 'hsl(var(--primary) / 0.6)',
                          boxShadow: theme === 'dark' ? `0 0 5px ${darkColor.shadow}, 0 0 10px ${darkColor.shadow}50` : undefined
                        }}
                      ></div>
                      <div
                        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping shadow-lg"
                        style={{
                          animationDelay: '0.3s',
                          backgroundColor: theme === 'dark' ? `${darkColor.shadow}80` : 'hsl(var(--primary) / 0.8)',
                          boxShadow: theme === 'dark' ? `0 0 4px ${darkColor.shadow}, 0 0 8px ${darkColor.shadow}50` : undefined
                        }}
                      ></div>
                      
                      {/* Волновой/Неоновый эффект */}
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                        <div
                          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                          style={{
                            background: theme === 'dark' ? `linear-gradient(90deg, transparent, ${darkColor.shadow}20, transparent)` : 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)'
                          }}
                        ></div>
                      </div>
                      
                      {/* Рамка/Неоновая рамка при hover - уменьшена для мобильных */}
                      <div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl border transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-inner"
                        style={{
                          borderColor: theme === 'dark' ? `${darkColor.shadow}00` : 'hsl(var(--primary) / 0)',
                          boxShadow: theme === 'dark' ? `inset 0 0 15px ${darkColor.shadow}15` : undefined
                        }}
                        onMouseEnter={(e) => {
                          if (theme === 'dark') {
                            e.currentTarget.style.borderColor = `${darkColor.shadow}60`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (theme === 'dark') {
                            e.currentTarget.style.borderColor = `${darkColor.shadow}00`;
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Декоративные/Неоновые элементы внизу - адаптивные */}
            <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
              <div className="flex space-x-2 sm:space-x-4">
                {[...Array(5)].map((_, i) => {
                  const neonColors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#8000ff'];
                  const neonColor = neonColors[i];
                  return (
                    <div
                      key={i}
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 sm:hover:scale-200 animate-pulse shadow-lg"
                      style={{
                        backgroundColor: theme === 'dark' ? neonColor : 'hsl(var(--primary))',
                        boxShadow: theme === 'dark' ? `0 0 10px ${neonColor}, 0 0 20px ${neonColor}30` : undefined,
                        animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Creative Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-cyan-500/10"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl mb-6 border border-primary/20">
                <Briefcase className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-semibold">Профессиональные услуги</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                  {content[language].servicesTitle}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content[language].servicesSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {services.map((service, index) => (
                <div key={index} className={`group relative ${index === 1 ? 'lg:row-span-2' : ''}`}>
                  {/* Animated border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-purple-500/40 to-cyan-500/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative h-full">
                    {/* Card */}
                    <div className="relative bg-card/70 backdrop-blur-2xl rounded-3xl border border-border/50 overflow-hidden group-hover:border-primary/30 transition-all duration-500 h-full">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative p-8 sm:p-10 flex flex-col h-full">
                        {/* Icon Section */}
                        <div className="relative mb-8">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/20">
                            <service.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Floating particles */}
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        {/* Price */}
                        <div className="mb-6">
                          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            {service.price}
                          </span>
                        </div>
                        
                        {/* Features */}
                        <div className="flex-grow mb-8">
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                <div className="w-5 h-5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:from-primary/40 group-hover:to-purple-500/40 transition-all duration-300">
                                  <Star className="w-3 h-3 text-primary" />
                                </div>
                                <span className="text-sm sm:text-base">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Subcategories with Examples */}
                        {service.subcategories && (
                          <div className="mt-6 space-y-6">
                            {service.subcategories.map((sub, subIndex) => (
                              <div key={subIndex} className="relative">
                                {/* Subcategory card */}
                                <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-6 border border-border/20 backdrop-blur-sm group-hover:border-primary/20 transition-all duration-300">
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                    <h4 className="font-semibold text-lg sm:text-xl text-primary group-hover:text-primary/80 transition-colors duration-300">
                                      {sub.title}
                                    </h4>
                                    {sub.hasExamples && (
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button 
                                            variant="outline" 
                                            size="sm"
                                            className="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary hover:text-primary/80 transition-all duration-300 group/btn self-start sm:self-auto shrink-0 text-xs sm:text-sm"
                                          >
                                            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                                            Примеры
                                            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 opacity-60" />
                                          </Button>
                                        </DialogTrigger>
                                          <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
                                            <DialogHeader className="sticky top-0 bg-card pb-4 z-10">
                                              <DialogTitle className="text-xl md:text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                                Примеры работ: {sub.title}
                                              </DialogTitle>
                                            </DialogHeader>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                                              {sub.examples && sub.examples.map((example: any, exampleIndex: number) => (
                                                <div key={example.id} className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-4 md:p-6 border border-border/20">
                                                  <div className="aspect-video bg-secondary/20 rounded-lg mb-3 md:mb-4 overflow-hidden relative">
                                                    {example.isPlaceholder ? (
                                                      <div className="w-full h-full flex items-center justify-center">
                                                        <p className="text-muted-foreground text-center text-sm md:text-base">
                                                          Видео будет добавлено
                                                        </p>
                                                      </div>
                                                    ) : (
                                                      <>
                                                        <iframe
                                                          src={example.videoUrl}
                                                          className="w-full h-full rounded-lg"
                                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                          allowFullScreen
                                                          title={example.title}
                                                          loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-transparent" onClick={(e) => e.stopPropagation()} />
                                                      </>
                                                    )}
                                                  </div>
                                                  <h5 className="font-semibold mb-1 md:mb-2 text-base md:text-lg">{example.title}</h5>
                                                  <p className="text-sm md:text-base text-muted-foreground">{example.description}</p>
                                                </div>
                                              ))}
                                            </div>
                                          </DialogContent>
                                      </Dialog>
                                    )}
                                  </div>
                                  
                                  <ul className="space-y-3">
                                    {sub.features.map((subFeature, subFeatureIdx) => (
                                      <li key={subFeatureIdx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                        <div className="w-4 h-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all duration-300">
                                          <Star className="w-2.5 h-2.5 text-primary" />
                                        </div>
                                        <span>{subFeature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  
                                  {/* Decorative gradient line */}
                                  <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* CTA Button */}
                          <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
                            <div className="relative">
                            <a href="https://t.me/vadimfom1n?text=Здравствуйте!%20Меня%20заинтересовали%20ваши%20услуги.%20Пожалуйста,%20расскажите%20подробнее%20о:%0A1)%20Какой%20тип%20заказа%20вас%20интересует%0A2)%20Бюджет%20проекта%0A3)%20Сроки%20реализации%0A4)%20Дополнительные%20пожелания"  target="_blank" rel="noopener noreferrer">
                              <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground border-0 py-4 sm:py-6 text-sm sm:text-base font-semibold group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                              <span className="relative z-10">{content[language].getQuote}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </Button>
                            </a> 
                            </div>
                        </div>
                      </div>
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-16">
                <p className="text-muted-foreground mb-6">Не нашли подходящий пакет?</p>
              <a href="https://t.me/vadimfom1n?text=Здравствуйте!%20Меня%20заинтересовали%20ваши%20услуги.%20Пожалуйста,%20расскажите%20подробнее%20о:%0A1)%20Какой%20тип%20заказа%20вас%20интересует%0A2)%20Бюджет%20проекта%0A3)%20Сроки%20реализации%0A4)%20Дополнительные%20пожелания"  target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary text-primary">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Обсудить индивидуальный проект
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Achievement Path Section */}
        <section>
          <div className="text-center mb-6 sm:mb-8 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{content[language].timelineTitle}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">{content[language].timelineSubtitle}</p>
          </div>
          <AchievementPath />
        </section>

        {/* Partners Section - Ultra Beautiful Design */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Background with Multiple Animated Layers */}
          <div className="absolute inset-0">
            {/* Gradient mesh background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-cyan-500/3 to-pink-500/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,theme(colors.purple.500)_0%,transparent_50%),radial-gradient(ellipse_at_center,theme(colors.cyan.500)_0%,transparent_70%)] opacity-10"></div>

            {/* Subtle animated grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Gentle floating orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-full blur-2xl opacity-70"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-500/8 to-orange-500/8 rounded-full blur-xl opacity-50"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            {/* Enhanced Title Section */}
            <div className="text-center mb-16 sm:mb-20">
              {/* Subtitle badge */}
              <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary font-semibold text-sm">Trusted Partners</span>
              </div>

              {/* Main title with subtle effects */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Со мной сотрудничают
                </span>

                {/* Subtle decorative elements around title */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/20 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-500/25 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-cyan-500/30 rounded-full opacity-40"></div>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Талантливые профессионалы, с которыми я создаю
                <span className="text-primary font-semibold"> выдающиеся проекты</span>
              </p>

              {/* Decorative line */}
              <div className="mt-8 flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Partners Cards with Advanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative z-10">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="group relative transform transition-all duration-700 hover:scale-105 h-full"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideUpFade 1s ease-out forwards'
                  }}
                >
                  {/* Animated border gradient - теперь точно подстраивается под размер карточки */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-purple-500/60 to-cyan-500/60 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-105"></div>

                  {/* Main card */}
                  <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl border border-border/30 overflow-hidden group-hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col">
                    {/* Top gradient overlay */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                    {/* Card content */}
                    <div className="relative p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                      {/* Profile section */}
                      <div className="relative mb-6 text-center">
                        {/* Photo container with multiple effects */}
                        <div className="relative inline-block">
                          {/* Animated ring - упрощено для мобильных */}
                          <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-500/30 rounded-full animate-spin [animation-duration:8s]"></div>
                          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500/20 via-primary/20 to-purple-500/20 rounded-full animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>

                          {/* Photo */}
                          <div className="relative">
                            <img
                              src={partner.photo}
                              alt={partner.name}
                              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-cover rounded-full border-3 sm:border-4 border-card shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10"
                            />

                            {/* Glow effect behind photo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>

                          {/* Floating badge with enhanced styling */}
                          <div className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-2 z-20">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-sm opacity-70"></div>
                              <span className="relative bg-gradient-to-r from-primary to-purple-500 text-white rounded-full px-2 py-1 sm:px-3 sm:py-2 text-xs font-bold shadow-lg border border-white/20">
                                {index === 0 ? '🎬 Reels' : index === 1 ? '📺 404' : '🎭 Режиссёр'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name with gradient */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {partner.name}
                        </span>
                      </h3>

                      {/* Description */}
                      <div className="text-muted-foreground text-center mb-6 sm:mb-8 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-1 text-sm sm:text-base">
                        {partner.description}
                      </div>

                      {/* CTA Button */}
                      <div className="text-center mt-auto">
                        <a
                          href={partner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary hover:to-purple-500 text-primary hover:text-white rounded-xl sm:rounded-2xl border border-primary/30 hover:border-transparent transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl font-semibold backdrop-blur-sm text-sm sm:text-base w-full"
                        >
                          <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="hidden sm:inline">Telegram</span>
                          <span className="sm:hidden">Telegram</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-60" />
                        </a>
                      </div>

                      {/* Bottom decorative elements */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-primary/40 rounded-full opacity-60"></div>
                          <div className="w-1 h-1 bg-purple-500/40 rounded-full opacity-70"></div>
                          <div className="w-1 h-1 bg-cyan-500/40 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300 rounded-bl-lg"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom section with stats */}
            <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 sm:p-6 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 mx-4 sm:mx-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Партнёров</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-border/50"></div>
                <div className="sm:hidden w-8 h-px bg-border/50"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-500">100M+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Просмотров</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-border/50"></div>
                <div className="sm:hidden w-8 h-px bg-border/50"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-500">500K+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Подписчиков</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CSS animations with mobile optimizations */}
          <style>{`
            @keyframes slideUpFade {
              0% {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }

            @keyframes glowPulse {
              0%, 100% { opacity: 0.5; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }

            .animate-float {
              animation: float 8s ease-in-out infinite;
            }

            .animate-glow {
              animation: glowPulse 3s ease-in-out infinite;
            }

            /* Mobile performance optimizations */
            @media (max-width: 768px) {
              * {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-perspective: 1000px;
                perspective: 1000px;
              }

              .group:hover .group-hover\\:scale-105 {
                transform: scale(1.02) !important;
              }

              .animate-spin {
                animation-duration: 12s !important;
              }
            }

            /* Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
              .animate-float,
              .animate-glow,
              .animate-spin,
              .animate-pulse {
                animation: none !important;
              }
            }
          `}</style>
        </section>

        {/* Portfolio Videos Section - Красивый гармоничный дизайн */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Элегантный фон с гармоничными цветами */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary)_0%,transparent_40%),radial-gradient(ellipse_at_bottom_right,theme(colors.primary)_0%,transparent_40%)] opacity-15"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,theme(colors.primary)_50%,transparent_100%)] opacity-[0.02]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Заголовок секции с улучшенным дизайном */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center justify-center p-3 mb-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm shadow-lg">
                <Trophy className="w-6 h-6 text-primary mr-3" />
                <span className="text-primary font-bold">Избранные работы</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {content[language].portfolioTitle}
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Каждый проект — это уникальная история, рассказанная через призму профессионального видеомонтажа
              </p>

              {/* Декоративные элементы */}
              <div className="flex justify-center items-center space-x-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="h-px w-32 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30"></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                <div className="h-px w-16 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
            </div>

            {/* Красивые карточки видео с гармоничным дизайном */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {portfolioVideos.map((video, index) => (
                <div key={video.id} className="group relative">
                  {/* Мягкое свечение при hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <Card className="relative bg-card/90 backdrop-blur-sm border border-border/40 rounded-3xl overflow-hidden group-hover:border-primary/40 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                        onClick={() => setSelectedVideo(video.id)}>

                    {/* Превью видео с элегантными эффектами */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      />

                      {/* Элегантный оверлей */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>

                      {/* Стильная кнопка воспроизведения */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-all duration-500"></div>
                          <div className="relative w-18 h-18 bg-gradient-to-br from-primary/90 to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-white/20">
                            <Play className="w-7 h-7 text-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Элегантная категория */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-primary/90 text-primary-foreground border-0 px-4 py-2 backdrop-blur-sm font-semibold shadow-lg">
                          {video.category}
                        </Badge>
                      </div>

                      {/* Статистика в стильном дизайне */}
                      <div className="absolute bottom-6 right-6">
                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-xl px-3 py-2 border border-white/10">
                          <Eye className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">{video.views}</span>
                        </div>
                      </div>
                    </div>

                    {/* Контент карточки с улучшенной типографикой */}
                    <CardContent className="p-6 sm:p-8">
                      <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {video.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {video.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/30">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm font-medium">{video.duration}</span>
                            </div>
                          </div>

                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-6 py-2 font-semibold rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {content[language].watchButton}
                          </Button>
                        </div>
                      </div>
                    </CardContent>

                    {/* Тонкие декоративные элементы */}
                    <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-primary/20 group-hover:border-primary/40 transition-colors duration-300"></div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Красивая кнопка "Смотреть все работы" с ссылкой на Telegram */}
            <div className="text-center mt-16 sm:mt-20">
              <div className="relative inline-block group">
                {/* Эффект свечения */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-primary/40 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Основная кнопка */}
                <a
                  href="https://t.me/portfoliovadimfom1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <Button size="lg" className="relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-6 text-lg font-bold rounded-2xl border-0 group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    {/* Внутренний градиент для блеска */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex items-center">
                      <Send className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Посмотреть все работы</span>
                      <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Button>
                </a>

                {/* Дополнительный текст */}
                <p className="mt-4 text-sm text-muted-foreground">
                  Больше работ в моём Telegram канале
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-card rounded-lg overflow-hidden max-w-4xl w-full mx-2 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  src={portfolioVideos.find(v => v.id === selectedVideo)?.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {portfolioVideos.find(v => v.id === selectedVideo)?.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {portfolioVideos.find(v => v.id === selectedVideo)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Floating Elements */}
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
        </button>
      )}

      
    </div>
  );
};

export default VideoEditorPortfolio;
