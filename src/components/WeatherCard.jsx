const WeatherCard = ({ name, weather }) => {
  return (
    <div>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 text-white text-center w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-6xl font-bold">
          <span dir="ltr">{weather.temperature_2m}°C</span>
        </p>
        <p className="text-sm text-white/70">الحرارة</p>
        <p className="mt-4 text-lg text-white/80">
          الرياح: <span dir="ltr">{weather.wind_speed_10m} km/h</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
