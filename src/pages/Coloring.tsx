import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/bucket/7c03aee9-db98-438c-9c9b-c806121d9b68.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/9f5c006c-cbfb-4763-99da-fa60015a899a.jpg";
const OMBRE_IMG = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/37f9e8af-2767-49e6-a403-8ea9b9c2fb70.jpg";
const MELIR_IMG = "https://cdn.poehali.dev/projects/05678fba-cda3-409c-ad61-485a007e85f3/files/b3058528-1c83-47cf-b695-5d5cbca9e2b3.jpg";

const services = [
  {
    title: "Балаяж / Шатуш",
    desc: "Техника свободного окрашивания — плавные переходы от тёмного к светлому, как выгоревшие на солнце волосы. Результат держится 4–6 месяцев.",
    img: HERO_IMG,
    price: "от 5 000 ₽",
    time: "3–5 часов",
  },
  {
    title: "Омбре",
    desc: "Градиентный переход от тёмных корней к светлым кончикам. Контрастный и стильный эффект для любого типа волос.",
    img: OMBRE_IMG,
    price: "от 4 000 ₽",
    time: "2–4 часа",
  },
  {
    title: "Окрашивание в один тон",
    desc: "Равномерное насыщенное окрашивание по всей длине. Идеально для смены цвета или перекрашивания отросших корней.",
    img: MELIR_IMG,
    price: "от 2 500 ₽",
    time: "1,5–2,5 часа",
  },
  {
    title: "Мелирование",
    desc: "Классическая техника: тонкие пряди осветляются через фольгу. Объём, свет и натуральность без кардинальной смены цвета.",
    img: OMBRE_IMG,
    price: "от 3 500 ₽",
    time: "2–3 часа",
  },
  {
    title: "Аиртач",
    desc: "Airtouch — авторская техника с феном. Воздушное, ультраестественное осветление без резких границ. Минимальная нагрузка на волосы.",
    img: HERO_IMG,
    price: "от 6 000 ₽",
    time: "4–6 часов",
  },
];

const steps = [
  { num: "01", title: "Консультация", desc: "Обсуждаем желаемый результат, оцениваем состояние волос и подбираем технику" },
  { num: "02", title: "Подготовка", desc: "Нанесение защитных средств, смешивание красителей под ваш тип волос" },
  { num: "03", title: "Окрашивание", desc: "Работа по выбранной технике — точно и аккуратно, прядь за прядью" },
  { num: "04", title: "Уход", desc: "Тонирование, маска, восстанавливающий уход — волосы сияют и живут" },
];

const faqs = [
  { q: "Как долго держится цвет?", a: "Зависит от техники: балаяж и аиртач — 4–6 месяцев, тонирование — 4–8 недель, окрашивание в один тон — 4–6 недель." },
  { q: "Можно ли осветлиться за один раз?", a: "Зависит от исходного цвета и состояния волос. Мастер оценит на консультации и предложит безопасный план." },
  { q: "Нужна ли подготовка перед окрашиванием?", a: "Приходите с чистыми, немытыми 1–2 дня волосами. Не делайте домашних масок накануне — так краска ляжет лучше." },
  { q: "Как ухаживать после окрашивания?", a: "Шампунь и маска для окрашенных волос, защита от солнца, минимум укладки горячими инструментами — расскажем всё на приёме." },
];

export default function Coloring() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F5EDD8] min-h-screen font-body">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5EDD8]/90 backdrop-blur-sm border-b border-[#E8D9B8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={LOGO_URL} alt="КАЙЯ" className="h-10 w-10 object-cover rounded-full" />
            <div>
              <p className="font-display text-lg text-[#3D1C0E] font-light leading-none tracking-widest">КАЙЯ</p>
              <p className="text-[10px] text-[#C9973A] tracking-widest uppercase">Студия красоты</p>
            </div>
          </a>
          <a
            href="#form"
            className="bg-[#1B4332] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#C9973A] transition-colors duration-300"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Окрашивание волос КАЙЯ"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D1C0E]/80 via-[#3D1C0E]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/50 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-3xl">
          <p className="text-[#C9973A] text-xs tracking-[0.5em] uppercase mb-4 animate-fade-in-up delay-100">
            Студия красоты КАЙЯ
          </p>
          <h1 className="font-display text-white font-light leading-tight mb-6 animate-fade-in-up delay-200"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", letterSpacing: "-0.01em" }}>
            Окрашивание<br />волос
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-300 font-light">
            Балаяж, омбре, аиртач — техники, которые делают цвет живым, естественным и стойким
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-up delay-300">
            <a href="#form" className="inline-block bg-[#C9973A] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#B8862A] transition-colors">
              Записаться
            </a>
            <a href="#services" className="inline-block border border-white/50 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-white transition-colors">
              Услуги и цены
            </a>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className="bg-[#1B4332] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { val: "5", label: "техник окрашивания" },
            { val: "10+", label: "лет опыта" },
            { val: "100%", label: "профессиональные красители" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-[#C9973A] font-light">{s.val}</p>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Что мы предлагаем</p>
            <h2 className="section-title">Техники окрашивания</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group grid md:grid-cols-2 overflow-hidden bg-white hover:shadow-xl transition-shadow duration-500 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors duration-500" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-3xl md:text-4xl text-[#3D1C0E] font-light mb-4">{s.title}</h3>
                  <div className="w-10 h-0.5 bg-[#C9973A] mb-6" />
                  <p className="text-[#6B5040] leading-relaxed mb-8">{s.desc}</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-xs text-[#6B5040] tracking-widest uppercase mb-1">Стоимость</p>
                      <p className="font-display text-2xl text-[#C9973A] font-light">{s.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B5040] tracking-widest uppercase mb-1">Время</p>
                      <p className="font-display text-2xl text-[#3D1C0E] font-light">{s.time}</p>
                    </div>
                  </div>
                  <a href="#form" className="mt-8 self-start border border-[#1B4332] text-[#1B4332] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#1B4332] hover:text-white transition-colors duration-300">
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#1B4332]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Процесс</p>
            <h2 className="font-display text-[#F5EDD8] font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Как проходит<br />окрашивание
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-white/10 z-0" style={{ width: "calc(100% - 3rem)" }} />
                )}
                <div className="relative z-10">
                  <p className="font-display text-5xl text-[#C9973A]/30 font-light mb-4">{step.num}</p>
                  <h3 className="font-display text-xl text-white font-light mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Вопросы и ответы</p>
            <h2 className="section-title">Часто спрашивают</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#E8D9B8] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5EDD8] transition-colors"
                >
                  <span className="font-display text-xl text-[#3D1C0E] font-light pr-4">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={18}
                    className="text-[#C9973A] flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[#6B5040] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-24 px-6 bg-[#F5EDD8]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C9973A] text-xs tracking-[0.4em] uppercase mb-4">Запись</p>
            <h2 className="section-title text-left mb-6">Запишитесь<br />на окрашивание</h2>
            <div className="w-12 h-0.5 bg-[#C9973A] mb-8" />
            <p className="text-[#6B5040] leading-relaxed mb-8">
              Оставьте заявку — мастер свяжется с вами, ответит на вопросы и подберёт удобное время.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-[#C9973A]" />
                <a href="tel:+79991234567" className="text-[#3D1C0E] hover:text-[#C9973A] transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={16} className="text-[#C9973A]" />
                <span className="text-[#3D1C0E]">г. Москва, ул. Красота, 1</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={16} className="text-[#C9973A]" />
                <span className="text-[#3D1C0E]">Пн–Сб: 10:00–20:00, Вс: 11:00–18:00</span>
              </div>
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
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Техника окрашивания</label>
                <select className="w-full border border-[#E8D9B8] bg-[#FAFAF7] px-4 py-3 text-sm text-[#3D1C0E] focus:outline-none focus:border-[#C9973A] transition-colors appearance-none">
                  <option value="">Выберите технику</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-[#6B5040] tracking-widest uppercase block mb-2">Комментарий</label>
                <textarea
                  placeholder="Опишите желаемый результат или прикрепите фото-референс в сообщении"
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
      <footer className="bg-[#3D1C0E] py-10 px-6 text-center">
        <a href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
          <img src={LOGO_URL} alt="КАЙЯ" className="h-12 w-12 object-cover rounded-full" />
          <p className="font-display text-xl text-[#C9973A] font-light tracking-widest">КАЙЯ</p>
        </a>
        <p className="text-white/30 text-xs tracking-wider mt-2">© 2024 КАЙЯ Студия красоты. Все права защищены.</p>
      </footer>
    </div>
  );
}
