import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-bounce-in"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-bounce-in delay-300"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-6 animate-fade-in">
          Создаю
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Вирусные
          </span>
          Рилсы
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-opensans font-light mb-8 opacity-90 animate-fade-in delay-200">
          Превращаю идеи в миллионы просмотров. Креативные видео, которые
          цепляют и продают.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm opacity-80">Вирусных рилсов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50M+</div>
            <div className="text-sm opacity-80">Просмотров</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2-7</div>
            <div className="text-sm opacity-80">Дней на проект</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
          <Link
            to="/portfolio"
            className="group bg-white text-creative-purple px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
          >
            <Icon name="Play" size={20} />
            <span>Смотреть работы</span>
            <Icon
              name="ArrowRight"
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            to="/contacts"
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-creative-purple transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
          >
            <Icon name="MessageCircle" size={20} />
            <span>Обсудить проект</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
