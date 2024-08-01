const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=a4e0bd5c993a44a1a64125815242507"

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};