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
      portfolioSubtitle: "Избранные проекты из моего портфолио",
      contactTitle: "Готовы к сотрудничеству?",
      contactSubtitle: "Обсудим ваш проект и создадим что-то невероятное вместе",
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
      description: "Творческий музыкальный видеоклип с синхронизацией и визуальными эффектами. Эксперименты с цветом и ритмом.",
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

  // Additional data для новых секций
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
      description: "Специализировался на музыкальных клипах и корпоративных видео."
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
          hasExamples: true
        }
      ]
    },
    {
      title: "Горизонтальные видео",
      price: "от 15,000₽",
      features: ["Профессиональное качество", "Полный цикл производства", "Индивидуальный подход"],
      icon: Film,
      subcategories: [
        {
          title: "Рекламные видео",
          features: ["Сторителлинг", "Монтаж", "Цветокоррекция", "Звуковой дизайн", "Спец эффекты", "Графика и анимация"],
          hasExamples: true
        },
        {
          title: "Обычные видео",
          features: ["Сторителлинг", "Монтаж", "Цветокоррекция", "Звуковой дизайн", "Музыкальное сопровождение", "Титры и надписи"],
          hasExamples: true
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
          display: isControlsOpen ? 'block' : 'block' // Всегда показываем для отладки
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
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/95 via-background/85 to-background/95 dark:from-background/90 dark:via-background/70 dark:to-background/90" />
        
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
        <div className="relative z-30 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
                  {content[language].name}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                {content[language].profession}
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {content[language].description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Badge className="bg-primary/10 text-primary border border-primary/20 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {content[language].experience}
              </Badge>
              <Badge className="bg-violet-500/10 text-violet-600 border border-violet-500/20 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {content[language].projects}
              </Badge>
              <Badge className="bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {content[language].views}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 shadow-lg w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                {content[language].contactButton}
              </Button>
              <Button size="lg" variant="outline" className="px-6 sm:px-8 backdrop-blur-sm border-primary/20 hover:bg-primary/10 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                {content[language].downloadButton}
              </Button>
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

        {/* Stats Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/15 to-cyan-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--primary))_0%,transparent_50%)] opacity-30"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                {content[language].statsTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Цифры, которые говорят о качестве моей работы
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-purple-500/50 to-cyan-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-105 transform">
                    {/* Icon with glow effect */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Number with gradient */}
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm sm:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </div>
                    
                    {/* Decorative elements with slower animation */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500/40 rounded-full" style={{ animation: 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom decoration with slower animation */}
            <div className="flex justify-center mt-12 sm:mt-16">
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary/30 rounded-full" style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: `${i * 0.5}s` }}></div>
                ))}
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
                                  <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-xl text-primary group-hover:text-primary/80 transition-colors duration-300">
                                      {sub.title}
                                    </h4>
                                    {sub.hasExamples && (
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button 
                                            variant="outline" 
                                            size="sm"
                                            className="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary hover:text-primary/80 transition-all duration-300 group/btn"
                                          >
                                            <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                                            Примеры
                                            <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                                          </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl">
                                          <DialogHeader>
                                            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                              Примеры работ: {sub.title}
                                            </DialogTitle>
                                          </DialogHeader>
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-6 border border-border/20">
                                              <div className="aspect-video bg-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                                                <p className="text-muted-foreground">Видео будет добавлено</p>
                                              </div>
                                              <h5 className="font-semibold mb-2">Пример 1</h5>
                                              <p className="text-sm text-muted-foreground">Описание примера работы</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-6 border border-border/20">
                                              <div className="aspect-video bg-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                                                <p className="text-muted-foreground">Видео будет добавлено</p>
                                              </div>
                                              <h5 className="font-semibold mb-2">Пример 2</h5>
                                              <p className="text-sm text-muted-foreground">Описание примера работы</p>
                                            </div>
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
                          <div className="mt-8 mb-8">
                            <div className="relative">
                              <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground border-0 py-6 text-base font-semibold group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">                              
                              <span className="relative z-10">{content[language].getQuote}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </Button>
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
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary text-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                Обсудить индивидуальный проект
              </Button>
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

        {/* Partners Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">Со мной сотрудничают</h2>
            <p className="text-muted-foreground text-base sm:text-lg animate-fade-in delay-100">Люди, с которыми я горжусь работать</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {partners.map((p, i) => (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={p.name}
                className="group bg-card border border-border/50 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative mb-4">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-3 sm:border-4 border-primary shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute -bottom-2 right-2 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs shadow animate-bounce">
                    {i === 0 ? 'Reels' : i === 1 ? '404' : 'Режиссёр'}
                  </span>
                </div>
                <div className="font-semibold text-lg sm:text-xl text-foreground mb-2">{p.name}</div>
                <div className="text-muted-foreground text-xs sm:text-sm mb-2">{p.description}</div>
                <span className="inline-block mt-2 text-primary underline opacity-80 group-hover:opacity-100 transition text-sm">Перейти в Telegram</span>
              </a>
            ))}
          </div>
          {/* Simple animated particles (пример) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="absolute top-10 left-10 animate-float-slow" width="40" height="40"><circle cx="20" cy="20" r="20" fill="#a5b4fc" fillOpacity="0.2"/></svg>
            <svg className="absolute bottom-10 right-20 animate-float" width="24" height="24"><circle cx="12" cy="12" r="12" fill="#f472b6" fillOpacity="0.18"/></svg>
            <svg className="absolute top-1/2 left-1/2 animate-float-fast" width="16" height="16"><circle cx="8" cy="8" r="8" fill="#34d399" fillOpacity="0.15"/></svg>
          </div>
          <style>{`
            @keyframes float { 0%{transform:translateY(0)} 50%{transform:translateY(-16px)} 100%{transform:translateY(0)} }
            @keyframes float-slow { 0%{transform:translateY(0)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0)} }
            @keyframes float-fast { 0%{transform:translateY(0)} 50%{transform:translateY(-24px)} 100%{transform:translateY(0)} }
            .animate-float { animation: float 6s ease-in-out infinite; }
            .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
            .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
            .animate-fade-in { opacity:0; animation: fadeIn 1s forwards; }
            .animate-fade-in.delay-100 { animation-delay: .1s; }
            @keyframes fadeIn { to { opacity: 1; } }
            .animate-bounce { animation: bounce 1.2s infinite alternate; }
            @keyframes bounce { to { transform: translateY(-8px); } }
          `}</style>
        </section>

        {/* Portfolio Videos Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{content[language].portfolioTitle}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">{content[language].portfolioSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {portfolioVideos.map((video, index) => (
              <Card 
                key={video.id} 
                className="bg-card border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
                    {video.category}
                  </Badge>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm px-2 sm:px-3">
                      {content[language].watchButton}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto text-center py-12 sm:py-16 px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{content[language].contactTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {content[language].contactSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                {content[language].contactButton}
              </Button>
              <Button size="lg" variant="outline" className="px-6 sm:px-8 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                {content[language].downloadButton}
              </Button>
            </div>
          </div>
        </section>
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