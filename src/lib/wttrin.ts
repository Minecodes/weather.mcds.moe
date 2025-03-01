import axios from 'axios';

interface WeatherDesc {
    value: string;
}

interface WeatherIconUrl {
    value: string;
}

interface CurrentCondition {
    FeelsLikeC: string;
    FeelsLikeF: string;
    cloudcover: string;
    humidity: string;
    lang_de: { value: string }[];
    localObsDateTime: string;
    observation_time: string;
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    temp_C: string;
    temp_F: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherDesc[];
    weatherIconUrl: WeatherIconUrl[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
}

interface Area {
    areaName: { value: string }[];
    country: { value: string }[];
    latitude: string;
    longitude: string;
    population: string;
    region: { value: string }[];
    weatherUrl: { value: string }[];
}

interface Request {
    query: string;
    type: string;
}

interface Astronomy {
    moon_illumination: string;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

interface HourlyForecast {
    DewPointC: string;
    DewPointF: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    HeatIndexC: string;
    HeatIndexF: string;
    WindChillC: string;
    WindChillF: string;
    WindGustKmph: string;
    WindGustMiles: string;
    chanceoffog: string;
    chanceoffrost: string;
    chanceofhightemp: string;
    chanceofovercast: string;
    chanceofrain: string;
    chanceofremdry: string;
    chanceofsnow: string;
    chanceofsunshine: string;
    chanceofthunder: string;
    chanceofwindy: string;
    cloudcover: string;
    diffRad: string;
    humidity: string;
    lang_de: { value: string }[];
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    shortRad: string;
    tempC: string;
    tempF: string;
    time: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherDesc[];
    weatherIconUrl: WeatherIconUrl[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
}

interface DayForecast {
    astronomy: Astronomy[];
    avgtempC: string;
    avgtempF: string;
    date: string;
    hourly: HourlyForecast[];
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
    sunHour: string;
    totalSnow_cm: string;
    uvIndex: string;
}

interface Weather {
    current_condition: CurrentCondition[];
    nearest_area: Area[];
    request: Request[];
    weather: DayForecast[];
}

export const getWeather = async (city?: string): Promise<Weather> => {
  const res = await axios.get(
    city ? `https://wttr.in/${city}?format=j1` : "https://wttr.in/?format=j1"
  );

  return res.data;
};

export type { CurrentCondition, Area, Request, Astronomy, HourlyForecast, DayForecast, Weather };