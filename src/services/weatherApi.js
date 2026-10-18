const getCoordinates = async (city) => {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
  );
  const data = await res.json();
  if (!data.results) {
    throw new Error("المدينة غير موجودة .");
  }

  return data.results[0];
};
const getWeather = async (latitude, longitude) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`,
  );
  const data = await res.json();
  return data.current;
};

export { getCoordinates, getWeather };
