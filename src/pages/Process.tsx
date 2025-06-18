import React from "react";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Анализ и стратегия",
      description:
        "Изучаю вашу аудиторию, конкурентов и тренды. Разрабатываю контент-стратегию.",
      duration: "1 день",
      icon: "Search",
      color: "from-creative-purple to-creative-magenta",
    },
    {
      number: "02",
      title: "Концепция и сценарий",
      description:
        "Создаю уникальную концепцию и пишу цепляющий сценарий для вашего рилса.",
      duration: "1-2 дня",
      icon: "FileText",
      color: "from-creative-magenta to-creative-orange",
    },
    {
      number: "03",
      title: "Производство контента",
      description:
        "Съемка, монтаж, цветокоррекция, звук. Создаю качественный финальный продукт.",
      duration: "2-3 дня",
      icon: "Video",
      color: "from-creative-orange to-creative-blue",
    },
    {
      number: "04",
      title: "Оптимизация и запуск",
      description:
        "Подбираю хештеги, время публикации и помогаю с продвижением.",
      duration: "1 день",
      icon: "Rocket",
      color: "from-creative-blue to-creative-purple",
    },
  ];

  const packages = [
    {
      name: "Стартовый",
      price: "15,000 ₽",
      description: "Для первого знакомства с форматом",
      features: [
        "1 рилс до 30 секунд",
        "Базовый монтаж",
        "Подбор музыки",
        "2 правки",
        "Рекомендации по публикации",
      ],
      popular: false,
    },
    {
      name: "Профессиональный",
      price: "35,000 ₽",
      description: "Для серьезного продвижения",
      features: [
        "3 рилса до 60 секунд",
        "Профессиональный монтаж",
        "Цветокоррекция",
        "Авторская музыка",
        "5 правок на каждый рилс",
        "Стратегия публикации",
        "Аналитика результатов",
      ],
      popular: true,
    },
    {
      name: "Вирусный",
      price: "65,000 ₽",
      description: "Для максимального охвата",
      features: [
        "5 рилсов до 90 секунд",
        "Премиум производство",
        "Профессиональная съемка",
        "Сложная анимация",
        "Неограниченные правки",
        "Персональный менеджер",
        "Гарантия результата",
        "Поддержка 30 дней",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
            Процесс работы
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in delay-200">
            Прозрачный и эффективный процесс создания вирусного контента
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4 creative-shadow`}
                    >
                      <Icon name={step.icon} size={32} />
                    </div>
                    <div className="text-4xl font-black text-gray-200 text-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white p-8 rounded-2xl creative-shadow hover-lift">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-32 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Пакеты услуг
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный вариант для ваших задач и бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover-lift animate-fade-in ${
                  pkg.popular
                    ? "border-creative-purple shadow-2xl transform scale-105"
                    : "border-gray-200 creative-shadow"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-creative-purple to-creative-magenta text-white px-6 py-2 rounded-full text-sm font-bold">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-black text-creative-purple mb-2">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacts"
                  className={`w-full block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-creative-purple to-creative-magenta text-white hover:shadow-xl hover:transform hover:-translate-y-1"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Выбрать пакет
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
