import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Frontend Development", level: 85 },
    { name: "Graphic Design", level: 80 },
    { name: "Branding", level: 75 },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Modern e-commerce solution with clean UI",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Intuitive banking experience for mobile users",
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      description: "Complete brand identity for startup",
    },
    {
      id: 4,
      title: "Dashboard Design",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Analytics dashboard with data visualization",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-foreground">Portfolio</h1>
            <div className="flex gap-8 items-center">
              <div className="hidden md:flex gap-8">
                {[
                  { id: "home", label: "Главная" },
                  { id: "about", label: "Обо мне" },
                  { id: "works", label: "Работы" },
                  { id: "contact", label: "Контакты" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4"
              >
                {theme === "light" ? (
                  <Icon name="Moon" size={20} />
                ) : (
                  <Icon name="Sun" size={20} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="container mx-auto text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground">
              Творческий дизайнер
              <br />& разработчик
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаю современные цифровые решения с фокусом на пользовательский опыт
              и визуальную эстетику
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("works")}
                className="font-medium"
              >
                Посмотреть работы
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-4xl font-heading font-bold text-foreground">
                Обо мне
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Привет! Я дизайнер и разработчик с более чем 5-летним опытом создания
                цифровых продуктов. Специализируюсь на создании интуитивных интерфейсов
                и привлекательных визуальных решений.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мой подход сочетает творческое мышление с техническими навыками,
                что позволяет воплощать идеи в жизнь от концепции до реализации.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <div className="space-y-8 animate-scale-in">
              <h4 className="text-2xl font-heading font-semibold text-foreground">
                Навыки
              </h4>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="min-h-screen px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Мои работы
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, демонстрирующие мой подход к дизайну и разработке
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card
                    className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-sm font-medium mb-2">{project.category}</p>
                          <h4 className="text-xl font-heading font-bold">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto"
                    />
                    <div className="p-8">
                      <div className="text-sm text-primary font-medium mb-2">
                        {project.category}
                      </div>
                      <h4 className="text-3xl font-heading font-bold mb-4">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
              Свяжитесь со мной
            </h3>
            <p className="text-lg text-muted-foreground">
              Готов обсудить ваш проект или ответить на вопросы
            </p>
          </div>
          <Card className="p-8 animate-scale-in">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Имя</label>
                <Input placeholder="Ваше имя" className="h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="your@email.com" className="h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </Card>
          <div className="text-center mt-12 text-muted-foreground">
            <p className="mb-4">Или напишите напрямую:</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={20} />
                hello@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={20} />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;