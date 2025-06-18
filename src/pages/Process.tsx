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
    },
    {
      number: "02",
      title: "Концепция и сценарий",
      description:
        "Создаю уникальную концепцию и пишу цепляющий сценарий для вашего рилса.",
      duration: "1-2 дня",
      icon: "FileText",
    },
    {
      number: "03",
      title: "Производство контента",
      description:
        "Съемка, монтаж, цветокоррекция, звук. Создаю качественный финальный продукт.",
      duration: "2-3 дня",
      icon: "Video",
    },
    {
      number: "04",
      title: "Оптимизация и запуск",
      description:
        "Подбираю хештеги, время публикации и помогаю с продвижением.",
      duration: "1 день",
      icon: "Rocket",
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Процесс работы
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачный и эффективный процесс создания контента
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-8">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-3">
                    <Icon name={step.icon} size={24} />
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white border border-gray-100 p-8 rounded-lg minimal-hover">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Пакеты услуг
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный вариант для ваших задач и бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg p-8 border transition-all duration-200 ${
                  pkg.popular
                    ? "border-gray-900 shadow-lg"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-900 text-white px-4 py-1 rounded-md text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-gray-600 flex-shrink-0 mt-1"
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacts"
                  className={`w-full block text-center py-3 rounded-md font-medium transition-all duration-200 ${
                    pkg.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
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
