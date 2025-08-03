import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Truck, 
  Package, 
  CheckCircle, 
  Clock, 
  XCircle, 
  TrendingUp,
  Star,
  MapPin
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

const DeliveryDashboard = () => {
  // Mock data
  const deliveryStats = {
    total: 2847,
    completed: 2234,
    inTransit: 456,
    cancelled: 157,
    avgTime: "24 мин",
    satisfaction: 4.8
  };

  const chartData = [
    { month: 'Янв', deliveries: 2100, completed: 1980 },
    { month: 'Фев', deliveries: 2300, completed: 2180 },
    { month: 'Мар', deliveries: 2700, completed: 2580 },
    { month: 'Апр', deliveries: 2400, completed: 2290 },
    { month: 'Май', deliveries: 2847, completed: 2690 },
  ];

  const topCouriers = [
    { name: "Алексей Петров", deliveries: 234, rating: 4.9, avatar: "АП" },
    { name: "Мария Сидорова", deliveries: 198, rating: 4.8, avatar: "МС" },
    { name: "Иван Козлов", deliveries: 176, rating: 4.7, avatar: "ИК" },
    { name: "Елена Волкова", deliveries: 165, rating: 4.9, avatar: "ЕВ" }
  ];

  const recentOrders = [
    { id: "#12847", customer: "Анна Иванова", status: "delivered", time: "2 мин назад", address: "ул. Ленина, 45" },
    { id: "#12846", customer: "Петр Сергеев", status: "in-transit", time: "15 мин назад", address: "пр. Мира, 12" },
    { id: "#12845", customer: "Мария Попова", status: "in-transit", time: "23 мин назад", address: "ул. Советская, 78" },
    { id: "#12844", customer: "Игорь Смирнов", status: "delivered", time: "1 час назад", address: "ул. Пушкина, 23" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-success text-success-foreground">Доставлено</Badge>;
      case "in-transit":
        return <Badge className="bg-info text-info-foreground">В пути</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Отменено</Badge>;
      default:
        return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Дашборд Доставок</h1>
          <p className="text-muted-foreground mt-1">Аналитика и управление доставками</p>
        </div>
        <div className="flex items-center space-x-2">
          <Truck className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary/20 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего заказов</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{deliveryStats.total.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-xs text-success">
              <TrendingUp className="h-3 w-3" />
              <span>+12% к прошлому месяцу</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-success/10 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Выполнено</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{deliveryStats.completed.toLocaleString()}</div>
            <div className="mt-2">
              <Progress value={(deliveryStats.completed / deliveryStats.total) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-info/10 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">В пути</CardTitle>
            <Clock className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{deliveryStats.inTransit}</div>
            <div className="text-xs text-muted-foreground mt-1">Среднее время: {deliveryStats.avgTime}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-warning/10 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Рейтинг</CardTitle>
            <Star className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{deliveryStats.satisfaction}</div>
            <div className="flex items-center space-x-1 text-xs text-warning">
              <Star className="h-3 w-3 fill-current" />
              <span>Средняя оценка клиентов</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-foreground">Динамика доставок</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Line type="monotone" dataKey="deliveries" stroke="hsl(var(--primary))" strokeWidth={3} />
                <Line type="monotone" dataKey="completed" stroke="hsl(var(--success))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-foreground">Топ курьеров</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCouriers.map((courier, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {courier.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{courier.name}</div>
                    <div className="text-sm text-muted-foreground">{courier.deliveries} доставок</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-warning">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{courier.rating}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="bg-card border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-foreground">Последние заказы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="font-mono text-sm text-primary font-semibold">{order.id}</div>
                  <div>
                    <div className="font-medium text-foreground">{order.customer}</div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{order.address}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-muted-foreground">{order.time}</div>
                  {getStatusBadge(order.status)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryDashboard;