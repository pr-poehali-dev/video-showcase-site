import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@reelsmaster",
      link: "https://t.me/reelsmaster",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@reels.master",
      link: "https://instagram.com/reels.master",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "hello@reelsmaster.ru",
      link: "mailto:hello@reelsmaster.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
  ];

  const socialLinks = [
    { name: "YouTube", icon: "Youtube", url: "#", color: "hover:text-red-500" },
    { name: "TikTok", icon: "Music", url: "#", color: "hover:text-gray-900" },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "Telegram",
      icon: "MessageCircle",
      url: "#",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
            Контакты
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in delay-200">
            Готов обсудить ваш проект и создать вирусный контент
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-2xl creative-shadow">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Обсудим ваш проект
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors"
                        placeholder="Как вас зовут?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип проекта
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors"
                      >
                        <option value="">Выберите тип</option>
                        <option value="single">Разовый рилс</option>
                        <option value="package">Пакет рилсов</option>
                        <option value="ongoing">
                          Постоянное сотрудничество
                        </option>
                        <option value="consultation">Консультация</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Бюджет проекта
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors"
                    >
                      <option value="">Выберите диапазон</option>
                      <option value="10-25">10,000 - 25,000 ₽</option>
                      <option value="25-50">25,000 - 50,000 ₽</option>
                      <option value="50-100">50,000 - 100,000 ₽</option>
                      <option value="100+">100,000+ ₽</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Расскажите о проекте *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-creative-purple focus:border-transparent transition-colors resize-none"
                      placeholder="Опишите вашу идею, цели, целевую аудиторию..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-creative-purple to-creative-magenta text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Icon name="Send" size={20} />
                    <span>Отправить заявку</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in delay-300">
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-white p-8 rounded-2xl creative-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Свяжитесь со мной
                  </h3>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.link}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-creative-purple to-creative-magenta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon
                            name={contact.icon}
                            size={20}
                            className="text-white"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {contact.title}
                          </div>
                          <div className="text-gray-600">{contact.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-creative-purple to-creative-magenta p-8 rounded-2xl text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Clock" size={32} />
                    <h3 className="text-2xl font-bold">Быстрый ответ</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Отвечаю на все сообщения в течение 2 часов в рабочее время
                  </p>
                  <div className="text-sm text-white/80">
                    Пн-Пт: 10:00 - 20:00 (МСК)
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white p-8 rounded-2xl creative-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Социальные сети
                  </h3>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 ${social.color}`}
                      >
                        <Icon name={social.icon} size={20} />
                      </a>
                    ))}
                  </div>

                  <p className="text-gray-600 mt-4 text-sm">
                    Следите за моими работами и получайте полезные советы о
                    создании контента
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
