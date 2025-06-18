import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "Все работы" },
    { id: "business", label: "Бизнес" },
    { id: "lifestyle", label: "Лайфстайл" },
    { id: "education", label: "Обучение" },
    { id: "entertainment", label: "Развлечения" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Рилс для IT-стартапа",
      category: "business",
      views: "2.5M",
      description: "Объяснение сложного продукта простыми словами",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Утренняя рутина предпринимателя",
      category: "lifestyle",
      views: "1.8M",
      description: "Мотивационный контент с элементами сторителлинга",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      title: "3 секрета продающих рилсов",
      category: "education",
      views: "3.2M",
      description: "Образовательный контент с максимальной ценностью",
      thumbnail:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Танцевальный челлендж",
      category: "entertainment",
      views: "5.1M",
      description: "Вирусный формат с участием популярных блогеров",
      thumbnail:
        "https://images.unsplash.com/photo-1574391884720-bbc8d1fddc1b?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      title: "День из жизни дизайнера",
      category: "business",
      views: "900K",
      description: "Behind the scenes с элементами экспертности",
      thumbnail:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Лайфхаки для продуктивности",
      category: "education",
      views: "1.4M",
      description: "Полезные советы в динамическом формате",
      thumbnail:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=600&fit=crop",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
            Портфолио
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in delay-200">
            Коллекция вирусных рилсов с суммарным охватом более 50 миллионов
            просмотров
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-creative-purple text-white shadow-lg transform -translate-y-1"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:transform hover:-translate-y-1"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden creative-shadow hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Icon name="Eye" size={14} className="inline mr-1" />
                    {item.views}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-creative-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
