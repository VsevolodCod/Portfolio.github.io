import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Film
} from "lucide-react";
import { useState } from "react";

const VideoEditorPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Анимированные фоновые элементы */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 animate-bounce">
          <Camera size={60} />
        </div>
        <div className="absolute top-40 right-20 text-info/15 animate-pulse">
          <Video size={45} />
        </div>
        <div className="absolute bottom-32 left-20 text-warning/10 animate-spin" style={{ animationDuration: '8s' }}>
          <Film size={70} />
        </div>
        <div className="absolute top-60 left-1/2 text-success/10 animate-bounce" style={{ animationDelay: '1s' }}>
          <Youtube size={50} />
        </div>
        <div className="absolute bottom-20 right-40 text-destructive/15 animate-pulse" style={{ animationDelay: '2s' }}>
          <Edit size={40} />
        </div>
        <div className="absolute top-32 right-1/3 text-primary/10 animate-spin" style={{ animationDuration: '12s' }}>
          <Instagram size={35} />
        </div>
      </div>

      <div className="relative z-10 p-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Место для фотографии */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-info border-4 border-primary/20 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* ИНСТРУКЦИЯ: Чтобы добавить фотографию Вадима:
                  1. Положите фото в папку src/assets/ (например, vadim-photo.jpg)
                  2. Замените эту секцию на:
                  <img 
                    src="/src/assets/vadim-photo.jpg" 
                    alt="Фомин Вадим - Видеомонтажер" 
                    className="w-full h-full object-cover"
                  />
              */}
              <div className="text-6xl font-bold text-primary-foreground">ВФ</div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-info bg-clip-text text-transparent animate-fade-in">
                Фомин Вадим
              </h1>
              <p className="text-2xl text-primary font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Профессиональный видеомонтажер
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Создаю качественный видеоконтент более 5 лет. Специализируюсь на рекламных роликах, 
                музыкальных клипах, свадебных фильмах и корпоративных презентациях. 
                Превращаю идеи в визуальные истории, которые запоминаются.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                5+ лет опыта
              </Badge>
              <Badge className="bg-success text-success-foreground px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-2" />
                200+ проектов
              </Badge>
              <Badge className="bg-info text-info-foreground px-4 py-2 text-sm">
                <Eye className="w-4 h-4 mr-2" />
                1M+ просмотров
              </Badge>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Навыки и технологии</h2>
            <p className="text-muted-foreground">Профессиональное владение индустриальными инструментами</p>
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

        {/* Portfolio Videos Section */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Лучшие работы</h2>
            <p className="text-muted-foreground">Избранные проекты из моего портфолио</p>
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
                      Смотреть
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
        <section className="max-w-4xl mx-auto text-center py-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Готовы к сотрудничеству?</h2>
            <p className="text-lg text-muted-foreground">
              Обсудим ваш проект и создадим что-то невероятное вместе
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Связаться со мной
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Скачать портфолио
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoEditorPortfolio;