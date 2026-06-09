import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/bucket/7c03aee9-db98-438c-9c9b-c806121d9b68.jpg";
const HERO_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/bucket/6d1b13de-0136-4a30-8adb-624a45e72a64.jpg";
const MASTER1_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/fa5644c3-0981-40f9-95ad-8b2bfe32838e.jpg";
const PORTFOLIO1_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/bb534303-afaf-434b-aaa6-fb5acaad860d.jpg";
const INTERIOR_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/8867c29f-9877-4973-98c7-c812fc5dbf2d.jpg";

const services = [
  { icon: "Scissors", title: "Плетение кос", desc: "Афрокосы, корнроу, твисты — любые техники плетения" },
  { icon: "Sparkles", title: "Уход за волосами", desc: "Восстановление, питание и укрепление от корней до кончиков" },
  { icon: "Star", title: "Стрижки", desc: "Модные стрижки с учётом структуры и типа волос" },
  { icon: "Heart", title: "Макияж", desc: "Дневной, вечерний и свадебный макияж" },
  { icon: "Gem", title: "Маникюр", desc: "Покрытие гель-лак, наращивание, дизайн ногтей" },
  { icon: "Flower2", title: "Уход за кожей", desc: "Профессиональные процедуры для сияния и здоровья кожи" },
];

const masters = [
  { name: "Амара", role: "Мастер по косам и укладкам", exp: "7 лет опыта", img: MASTER1_URL },
  { name: "Диана", role: "Визажист и мастер маникюра", exp: "5 лет опыта", img: HERO_URL },
  { name: "Зара", role: "Парикмахер-стилист", exp: "9 лет опыта", img: MASTER1_URL },
];

const prices = [
  {
    category: "Волосы",
    items: [
      { name: "Афрокосы (средние)", price: "от 3 500 ₽" },
      { name: "Корнроу", price: "от 2 000 ₽" },
      { name: "Стрижка", price: "от 1 500 ₽" },
      { name: "Уход и восстановление", price: "от 2 500 ₽" },
    ],
  },
  {
    category: "Ногти",
    items: [
      { name: "Маникюр с покрытием", price: "от 1 800 ₽" },
      { name: "Наращивание ногтей", price: "от 3 000 ₽" },
      { name: "Педикюр", price: "от 2 000 ₽" },
      { name: "Дизайн", price: "от 500 ₽" },
    ],
  },
  {
    category: "Лицо",
    items: [
      { name: "Макияж дневной", price: "от 2 500 ₽" },
      { name: "Макияж вечерний", price: "от 3 500 ₽" },
      { name: "Уход за кожей", price: "от 2 000 ₽" },
      { name: "Оформление бровей", price: "от 800 ₽" },
    ],
  },
];

const portfolio = [
  { img: PORTFOLIO1_URL, title: "Афрокосы" },
  { img: MASTER1_URL, title: "Укладка" },
  { img: INTERIOR_URL, title: "Интерьер студии" },
  { img: HERO_URL, title: "Образ" },
  { img: PORTFOLIO1_URL, title: "Плетение" },
  { img: MASTER1_URL, title: "Арт-макияж" },
];

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Цены", href: "#prices" },
  { label: "Мастера", href: "#masters" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-kaya-beige min-h-screen font-body">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-kaya-beige/90 backdrop-blur-sm border-b border-[#E8D9B8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-xs tracking-widest uppercase text-[#3D1C0E] hover:text-[#C9973A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="КАЙЯ — Студия красоты"
              className="h-12 w-12 object-cover rounded-full"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-xs tracking-widest uppercase text-[#3D1C0E] hover:text-[#C9973A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-[#3D1C0E]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-kaya-beige border-t border-[#E8D9B8] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#3D1C0E] hover:text-[#C9973A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={HERO_URL}
          alt="КАЙЯ Студия красоты"
          className="absolute inset-0 w-full h-full object-cover object-top animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D1C0E]/20 via-transparent to-[#1B4332]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1C0E]/30 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-20">
          <div className="animate-fade-in-up delay-200">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-3 font-body">
              Студия красоты
            </p>
            <h1
              className="font-display text-white font-light leading-none mb-6"
              style={{ fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "-0.02em" }}
            >
              КАЙЯ
            </h1>
            <p className="text-white/80 text-sm md:text-base tracking-wider max-w-md mb-10 font-light">
              Раскройте природную красоту с мастерами, которые понимают вас
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contacts"
                className="inline-block bg-[#C9973A] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#B8862A] transition-colors"
              >
                Записаться
              </a>
              <a
                href="#services"
                className="inline-block border border-white/60 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-white transition-colors"
              >
                Услуги
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
          <div className="w-px h-12 bg-white/40 animate-pulse" />
          <p className="text-white/40 text-xs tracking-widest uppercase">scroll</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-[#F5EDD8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Что мы делаем</p>
            <h2 className="section-title">Наши услуги</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="service-card bg-white p-8 transition-all duration-300 cursor-default group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 bg-[#1B4332] flex items-center justify-center mb-5 group-hover:bg-[#C9973A] transition-colors duration-300">
                  <Icon name={s.icon} size={20} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#3D1C0E] mb-3">{s.title}</h3>
                <p className="text-[#6B5040] text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 w-0 h-0.5 bg-[#C9973A] group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={INTERIOR_URL}
              alt="Студия КАЙЯ"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1B4332] p-8 hidden md:block">
              <p className="font-display text-5xl text-[#C9973A] font-light">10+</p>
              <p className="text-white text-xs tracking-widest uppercase mt-1">лет опыта</p>
            </div>
          </div>
          <div>
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">О нас</p>
            <h2 className="section-title text-left mb-6">
              Студия,<br />где рождается<br />красота
            </h2>
            <div className="w-12 h-0.5 bg-[#C9973A] mb-8" />
            <p className="text-[#6B5040] leading-relaxed mb-6">
              КАЙЯ — это больше, чем студия красоты. Это место, где африканские традиции ухода
              встречаются с современными техниками, создавая уникальный опыт для каждого гостя.
            </p>
            <p className="text-[#6B5040] leading-relaxed mb-10">
              Наши мастера специализируются на работе с натуральными и афро-текстурированными волосами,
              помогая раскрыть природную красоту с помощью профессионального ухода и любви к своему делу.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Довольных клиентов" },
                { num: "10+", label: "Лет опыта" },
                { num: "6", label: "Видов услуг" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl text-[#1B4332] font-light">{stat.num}</p>
                  <p className="text-[#6B5040] text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 px-6 bg-[#1B4332]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Прозрачные цены</p>
            <h2 className="font-display text-[#F5EDD8] font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Прайс-лист
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((cat) => (
              <div key={cat.category} className="bg-white/5 border border-white/10 p-8">
                <h3 className="font-display text-2xl text-[#C9973A] font-light mb-6 pb-4 border-b border-white/10">
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <span className="text-white/80 text-sm">{item.name}</span>
                      <span className="text-[#C9973A] text-sm font-medium whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#contacts"
              className="inline-block border border-[#C9973A] text-[#C9973A] text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#C9973A] hover:text-white transition-colors"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-24 px-6 bg-[#F5EDD8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Команда</p>
            <h2 className="section-title">Наши мастера</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master) => (
              <div key={master.name} className="master-card group text-center">
                <div className="overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={master.img}
                    alt={master.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                <p className="text-[#C9973A] text-xs tracking-widest uppercase mb-1">{master.exp}</p>
                <h3 className="font-display text-3xl text-[#3D1C0E] font-light mb-2">{master.name}</h3>
                <p className="text-[#6B5040] text-sm">{master.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Наши работы</p>
            <h2 className="section-title">Портфолио</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {portfolio.map((item, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/60 transition-all duration-500 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display text-xl tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-[#F5EDD8]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Свяжитесь с нами</p>
            <h2 className="section-title text-left mb-6">
              Запишитесь<br />на приём
            </h2>
            <div className="w-12 h-0.5 bg-[#C9973A] mb-8" />
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", content: <a href="tel:+79991234567" className="text-[#3D1C0E] hover:text-[#C9973A] transition-colors font-medium">+7 (999) 123-45-67</a> },
                { icon: "MapPin", label: "Адрес", content: <p className="text-[#3D1C0E]">г. Москва, ул. Красота, 1</p> },
                { icon: "Clock", label: "Часы работы", content: <><p className="text-[#3D1C0E]">Пн–Сб: 10:00 – 20:00</p><p className="text-[#3D1C0E]">Вс: 11:00 – 18:00</p></> },
                { icon: "Instagram", label: "Instagram", content: <a href="#" className="text-[#3D1C0E] hover:text-[#C9973A] transition-colors">@kaya_beauty_studio</a> },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1B4332] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={item.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B5040] tracking-widest uppercase mb-1">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="font-display text-2xl text-[#3D1C0E] mb-6">Оставить заявку</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-[#E8D9B8] bg-[#FAFAF7] px-4 py-3 text-sm text-[#3D1C0E] placeholder-[#B8A090] focus:outline-none focus:border-[#C9973A] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-[#E8D9B8] bg-[#FAFAF7] px-4 py-3 text-sm text-[#3D1C0E] placeholder-[#B8A090] focus:outline-none focus:border-[#C9973A] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Услуга</label>
                <select className="w-full border border-[#E8D9B8] bg-[#FAFAF7] px-4 py-3 text-sm text-[#3D1C0E] focus:outline-none focus:border-[#C9973A] transition-colors appearance-none">
                  <option value="">Выберите услугу</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Комментарий</label>
                <textarea
                  placeholder="Пожелания или вопросы..."
                  rows={3}
                  className="w-full border border-[#E8D9B8] bg-[#FAFAF7] px-4 py-3 text-sm text-[#3D1C0E] placeholder-[#B8A090] focus:outline-none focus:border-[#C9973A] transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-[#1B4332] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#C9973A] transition-colors duration-300">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3D1C0E] py-12 px-6 text-center">
        <img src={LOGO_URL} alt="КАЙЯ" className="h-16 w-16 object-cover rounded-full mx-auto mb-4" />
        <p className="font-display text-2xl text-[#C9973A] font-light tracking-widest mb-2">КАЙЯ</p>
        <p className="text-white/40 text-xs tracking-wider mb-6">СТУДИЯ КРАСОТЫ</p>
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 text-xs tracking-widest uppercase hover:text-[#C9973A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-white/20 text-xs">© 2024 КАЙЯ Студия красоты. Все права защищены.</p>
      </footer>
    </div>
  );
}