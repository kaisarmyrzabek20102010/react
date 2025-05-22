import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("Almaty");
  const [weather, setWeather] = useState(null);

  const getWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c391c129d08e8acaf2778a2c15eeedbd&units=metric`
      );
      const data = response.data;
      setWeather({
        temp: data.main.temp,
        condition: data.weather[0].description,
      });
    } catch (error) {
      console.error("Weather API error:", error);
    }
  };

  const fetchNews = (searchQuery = "") => {
    setLoading(true);
    const URL = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=20c5a3e0f2c74289a5a45e263052b135`
      : `https://newsapi.org/v2/top-headlines?country=ru&apiKey=20c5a3e0f2c74289a5a45e263052b135`;

    axios
      .get(URL)
      .then((res) => {
        setArticles(res.data.articles.slice(0, 20));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    getWeatherData(selectedCity);
    const interval = setInterval(() => getWeatherData(selectedCity), 86400000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  useEffect(() => {
    fetchNews();
  }, []);

  const searchNews = () => {
    fetchNews(query);
  };

  const goToLogin = () => navigate("/login");
  const goToprofile = () => navigate("/profile");

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10"
            src="https://www.svgrepo.com/show/281516/news-broadcast.svg"
            alt="News logo"
          />
          <h1 className="text-xl font-bold">News</h1>
        </div>

        {!showSearch ? (
          <button
            onClick={() => setShowSearch(true)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Показать поиск
          </button>
        ) : (
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={searchNews}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Найти
            </button>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={goToLogin}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Login
          </button>
          <button
            onClick={goToprofile}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Profile
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm">{darkMode ? "Dark" : "Light"} Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <main className="p-4">
        <div className="bg-blue-100 p-4 rounded-lg mb-4 shadow font-semibold">
          <h2 className="text-lg font-semibold mb-2">Погода в городе</h2>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="p-2 rounded border mb-3"
          >
            <option value="Almaty">Almaty</option>
            <option value="Astana">Astana</option>
            <option value="Shymkent">Shymkent</option>
          </select>
          {weather ? (
            <div className="text-sm">
              <h1 className="text-lg">Температура: {weather.temp}°C</h1>
              <h1 className="text-lg">Состояние: {weather.condition}</h1>
              <h1 className="text-lg">
                Скорость ветра: {weather.windSpeed} м/с
              </h1>
            </div>
          ) : (
            <p className="text-sm text-gray-600">Загрузка погоды...</p>
          )}
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Загрузка...</p>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-4 border rounded shadow bg-white dark:bg-gray-800"
              >
                <h3 className="font-bold mb-2">{article.title}</h3>
                <p className="text-sm mb-2">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Читать далее
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Новости не найдены.</p>
        )}
      </main>
      <footer class="bg-gray-800 text-gray-300 py-10">
        <div class="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8">
          <div class="w-full sm:w-[45%] md:w-[30%]">
            <h3 class="text-white text-lg font-semibold mb-4">О нас</h3>
            <p class="text-sm leading-relaxed">
              Мы предоставляем актуальные данные о городах по всему миру.
            </p>
          </div>

          <div class="w-full sm:w-[45%] md:w-[30%]">
            <h3 class="text-white text-lg font-semibold mb-4">Контакты</h3>
            <p class="text-sm">Email: support@example.com</p>
            <p class="text-sm">Телефон: ‪+7 (777) 777-77-77‬</p>
          </div>

          <div class="w-full md:w-[30%]">
            <h3 class="text-white text-lg font-semibold mb-4">
              Следите за нами
            </h3>
            <div class="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/"
                class="flex items-center hover:text-white transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  class="w-5 h-5 mr-2"
                />
                Facebook
              </a>
              <a
                href="https://x.com/"
                class="flex items-center hover:text-white transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png"
                  alt="Twitter"
                  class="w-5 h-5 mr-2"
                />
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                class="flex items-center hover:text-white transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                  alt="Instagram"
                  class="w-5 h-5 mr-2"
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-10 pt-4 text-center">
          <p class="text-sm text-gray-500">&copy; 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
