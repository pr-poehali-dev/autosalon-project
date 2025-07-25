import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const cars = [
    {
      id: 1,
      name: 'BMW 3 Series',
      price: '2 890 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Седан',
      brand: 'BMW',
      image: '/img/35658ce2-0e0f-41a4-a417-c35990cabc29.jpg',
      features: ['Кожаный салон', 'Подогрев сидений', 'Навигация', 'Климат-контроль', 'Bluetooth', 'USB'],
      engine: '2.0L турбо',
      power: '184 л.с.',
      acceleration: '7.1 сек',
      consumption: '6.8 л/100км',
      drive: 'Задний привод',
      color: 'Серебристый металлик',
      description: 'Элегантный и динамичный BMW 3 Series представляет собой идеальное сочетание спортивности и комфорта. Этот седан оснащен передовыми технологиями и обеспечивает превосходное качество вождения.',
      specs: {
        dimensions: '4709×1827×1442 мм',
        trunk: '480 л',
        weight: '1570 кг',
        fuelTank: '59 л',
        maxSpeed: '235 км/ч'
      }
    },
    {
      id: 2,
      name: 'Audi Q5',
      price: '3 450 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Кроссовер',
      brand: 'Audi',
      image: '/img/b6e0d970-0bdc-442d-af99-f0a51ff0863e.jpg',
      features: ['Полный привод', 'Панорамная крыша', 'LED фары', 'Virtual Cockpit', 'Кожаный салон', 'Подогрев сидений'],
      engine: '2.0L TFSI',
      power: '249 л.с.',
      acceleration: '6.3 сек',
      consumption: '7.4 л/100км',
      drive: 'Полный привод quattro',
      color: 'Красный металлик',
      description: 'Audi Q5 - это премиальный кроссовер, который сочетает в себе элегантность, технологии и превосходные внедорожные возможности. Оснащен системой полного привода quattro для максимального контроля.',
      specs: {
        dimensions: '4663×1893×1659 мм',
        trunk: '550 л',
        weight: '1765 кг',
        fuelTank: '70 л',
        maxSpeed: '237 км/ч'
      }
    },
    {
      id: 3,
      name: 'Mercedes C-Class Coupe',
      price: '4 120 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Купе',
      brand: 'Mercedes',
      image: '/img/8da9e761-2e1b-453f-9c89-1afd4df236ee.jpg',
      features: ['AMG пакет', 'Премиум звук', 'Автопилот', 'Панорамная крыша', 'Ambient освещение', 'Массаж сидений'],
      engine: '2.0L турбо',
      power: '255 л.с.',
      acceleration: '6.0 сек',
      consumption: '7.2 л/100км',
      drive: 'Задний привод',
      color: 'Жемчужно-белый',
      description: 'Mercedes C-Class Coupe воплощает в себе спортивную элегантность и роскошь. Этот автомобиль создан для тех, кто ценит стиль, производительность и передовые технологии.',
      specs: {
        dimensions: '4751×1810×1421 мм',
        trunk: '400 л',
        weight: '1615 кг',
        fuelTank: '66 л',
        maxSpeed: '250 км/ч'
      }
    }
  ];

  const brands = ['BMW', 'Audi', 'Mercedes'];
  const types = ['Седан', 'Кроссовер', 'Купе'];

  const filteredCars = cars.filter(car => {
    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBrand === 'all' || car.brand === selectedBrand) &&
      (selectedType === 'all' || car.type === selectedType)
    );
  });

  const CarDetailModal = ({ car }: { car: any }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-secondary">{car.name}</DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        <div className="relative">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-80 object-cover rounded-lg"
          />
          <Badge className="absolute top-4 right-4 bg-primary text-lg px-3 py-1">
            {car.price} ₽
          </Badge>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="features">Опции</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Zap" size={16} className="text-primary" />
                  <span className="font-semibold">Двигатель</span>
                </div>
                <p className="text-sm text-gray-600">{car.engine}</p>
                <p className="text-sm text-gray-600">{car.power}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Activity" size={16} className="text-primary" />
                  <span className="font-semibold">Разгон</span>
                </div>
                <p className="text-sm text-gray-600">0-100 км/ч</p>
                <p className="text-sm text-gray-600">{car.acceleration}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Settings" size={16} className="text-primary" />
                  <span className="font-semibold">Расход</span>
                </div>
                <p className="text-sm text-gray-600">Смешанный цикл</p>
                <p className="text-sm text-gray-600">{car.consumption}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="specs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-secondary">Технические характеристики</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Год выпуска:</span>
                    <span>{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Двигатель:</span>
                    <span>{car.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Мощность:</span>
                    <span>{car.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Привод:</span>
                    <span>{car.drive}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Коробка передач:</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Макс. скорость:</span>
                    <span>{car.specs.maxSpeed}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-secondary">Габариты и вес</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Размеры (Д×Ш×В):</span>
                    <span>{car.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Багажник:</span>
                    <span>{car.specs.trunk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Масса:</span>
                    <span>{car.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Топливный бак:</span>
                    <span>{car.specs.fuelTank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Цвет:</span>
                    <span>{car.color}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="space-y-4">
            <h4 className="font-semibold text-secondary">Комплектация и опции</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {car.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex space-x-4 pt-4 border-t">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Записаться на тест-драйв
          </Button>
          <Button variant="outline" className="flex-1">
            <Icon name="Calculator" size={16} className="mr-2" />
            Рассчитать кредит
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary">AutoPremium</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Найдите автомобиль своей мечты</h2>
          <p className="text-xl mb-8 opacity-90">Более 500 премиальных автомобилей в наличии</p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Поиск по модели..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <select 
                value={selectedBrand} 
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Все марки</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Все типы</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                <Icon name="Search" size={16} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Car Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Наш каталог</h3>
            <p className="text-gray-600 text-lg">Найдено {filteredCars.length} автомобилей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">Новый</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{car.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{car.price} ₽</div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      {car.year} год
                    </div>
                    <div className="flex items-center">
                      <Icon name="Zap" size={14} className="mr-2" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Settings" size={14} className="mr-2" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Activity" size={14} className="mr-2" />
                      {car.mileage} км
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="flex-1 bg-primary hover:bg-primary/90">
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <CarDetailModal car={car} />
                    </Dialog>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Наши услуги</h3>
            <p className="text-gray-600 text-lg">Полный спектр автомобильных услуг</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ShoppingCart', title: 'Продажа авто', description: 'Широкий выбор новых и подержанных автомобилей' },
              { icon: 'CreditCard', title: 'Кредит и лизинг', description: 'Выгодные условия финансирования' },
              { icon: 'Shield', title: 'Страхование', description: 'КАСКО и ОСАГО на лучших условиях' },
              { icon: 'Wrench', title: 'Сервисное обслуживание', description: 'Профессиональный ремонт и ТО' }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Автомобилей в наличии' },
              { number: '15+', label: 'Лет на рынке' },
              { number: '10000+', label: 'Довольных клиентов' },
              { number: '98%', label: 'Положительных отзывов' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">AutoPremium</h4>
              </div>
              <p className="text-gray-400 mb-4">Лучший автосалон премиальных автомобилей в городе</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Продажа автомобилей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trade-in</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредитование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сервис</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@autopremium.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoPremium. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;