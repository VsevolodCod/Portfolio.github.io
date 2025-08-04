import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
  Target
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

const VideoEditorPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });


  const content = {
    ru: {
      name: "Фомин Вадим",
      profession: "Профессиональный видеомонтажер",
      description: "Создаю качественный видеоконтент более 5 лет. Специализируюсь на рекламных роликах, музыкальных клипах, свадебных фильмах и корпоративных презентациях. Превращаю идеи в визуальные истории, которые запоминаются.",
      experience: "5+ лет опыта",
      projects: "200+ проектов", 
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
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Замените на реальные видео
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
    { name: "Adobe Premiere Pro", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Цветокоррекция", level: 88 },
    { name: "Моушн дизайн", level: 82 },
    { name: "Звуковой дизайн", level: 75 }
  ];

  // Additional data для новых секций
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      company: "DigiTech Solutions",
      text: "Вадим создал для нас потрясающий рекламный ролик. Профессиональный подход, креативность и точное соблюдение дедлайнов. Рекомендую!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c602?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Михаил Волков",
      company: "Creative Music Label",
      text: "Работал с Вадимом над музыкальным видео. Результат превзошел все ожидания! Отличное понимание ритма и визуальной эстетики.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Елена Сидорова",
      company: "WeddingDream Studio",
      text: "Свадебное видео получилось невероятно трогательным и красивым. Вадим умеет передать эмоции через видео. Спасибо большое!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
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
      title: "Рекламные ролики",
      price: "от 15,000₽",
      features: ["Сценарий", "Съемка", "Монтаж", "Цветокоррекция", "Звуковой дизайн"],
      icon: Target
    },
    {
      title: "Музыкальные клипы",
      price: "от 25,000₽",
      features: ["Концепция", "Режиссура", "Пост-продакшн", "VFX эффекты", "Синхронизация"],
      icon: Film
    },
    {
      title: "Свадебные фильмы",
      price: "от 20,000₽",
      features: ["Съемка церемонии", "Интервью", "Монтаж", "Музыкальное сопровождение", "Цветокоррекция"],
      icon: Heart
    }
  ];

  const stats = [
    { number: "50+", label: content[language].clients, icon: Users },
    { number: "1000+", label: content[language].hoursEdited, icon: Clock },
    { number: "4.9", label: content[language].rating, icon: Star },
    { number: "1.2M+", label: content[language].views, icon: Eye }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2 border border-border/50">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="text-xs hover:bg-transparent"
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
            backgroundImage: `url('/lovable-uploads/83501283-d02d-4bde-b431-0e5098a0aa8a.png')`,
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
        <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
                  {content[language].name}
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                {content[language].profession}
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {content[language].description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary/10 text-primary border border-primary/20 px-6 py-3 text-sm backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                {content[language].experience}
              </Badge>
              <Badge className="bg-violet-500/10 text-violet-600 border border-violet-500/20 px-6 py-3 text-sm backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                {content[language].projects}
              </Badge>
              <Badge className="bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 px-6 py-3 text-sm backdrop-blur-sm">
                <Eye className="w-4 h-4 mr-2" />
                {content[language].views}
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg">
                <Mail className="w-4 h-4 mr-2" />
                {content[language].contactButton}
              </Button>
              <Button size="lg" variant="outline" className="px-8 backdrop-blur-sm border-primary/20 hover:bg-primary/10">
                <Download className="w-4 h-4 mr-2" />
                {content[language].downloadButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 space-y-20">

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].skillsTitle}</h2>
            <p className="text-muted-foreground">{content[language].skillsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-info h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-primary/5 via-violet-500/5 to-cyan-500/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].statsTitle}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].servicesTitle}</h2>
            <p className="text-muted-foreground">{content[language].servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <Star className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{content[language].getQuote}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gradient-to-b from-background to-muted/20 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].timelineTitle}</h2>
              <p className="text-muted-foreground">{content[language].timelineSubtitle}</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-violet-500"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="bg-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Briefcase className="w-5 h-5 text-primary mr-2" />
                          <span className="text-sm font-medium text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-violet-600 mb-3">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].testimonialsTitle}</h2>
            <p className="text-muted-foreground">{content[language].testimonialsSubtitle}</p>
          </div>
          
          <div className="relative">
            <Card className="bg-card border-border/50 shadow-xl">
              <CardContent className="p-8 text-center">
                <Quote className="w-8 h-8 text-primary mx-auto mb-6" />
                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Videos Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{content[language].portfolioTitle}</h2>
            <p className="text-muted-foreground">{content[language].portfolioSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
                    {video.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-card rounded-lg overflow-hidden max-w-4xl w-full"
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {portfolioVideos.find(v => v.id === selectedVideo)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {portfolioVideos.find(v => v.id === selectedVideo)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto text-center py-16 px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">{content[language].contactTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {content[language].contactSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Mail className="w-4 h-4 mr-2" />
                {content[language].contactButton}
              </Button>
              <Button size="lg" variant="outline" className="px-8">
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
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default VideoEditorPortfolio;