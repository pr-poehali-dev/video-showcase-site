import React from "react";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстро",
      description: "От идеи до готового рилса за 2-7 дней",
    },
    {
      icon: "TrendingUp",
      title: "Вирусно",
      description: "Использую трендовые механики для максимального охвата",
    },
    {
      icon: "Target",
      title: "Эффективно",
      description: "Каждый рилс создается под конкретную цель и аудitorию",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Создаю контент, который
              <span className="text-creative-purple"> работает</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Я специализируюсь на создании коротких видео для Instagram, TikTok
              и YouTube Shorts. Мой подход — это сочетание креативности,
              понимания алгоритмов и глубокого анализа трендов.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl creative-shadow hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-creative-purple to-creative-magenta rounded-xl flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Placeholder for image */}
          <div className="animate-fade-in delay-300">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-creative-purple via-creative-magenta to-creative-orange rounded-3xl p-8 creative-shadow">
                <div className="w-full h-full bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon
                      name="Video"
                      size={80}
                      className="mx-auto mb-4 opacity-80"
                    />
                    <div className="text-2xl font-bold mb-2">500+ Рилсов</div>
                    <div className="text-lg opacity-90">
                      Создано за последний год
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-creative-orange rounded-full flex items-center justify-center text-white font-bold text-xl creative-shadow">
                🔥
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-creative-blue rounded-full flex items-center justify-center text-white font-bold creative-shadow">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
