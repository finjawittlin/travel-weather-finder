const destinations = [
  {
    name: "Funafuti",
    latitude: -8.52,
    longitude: 179.19,
    image: "images/destinations/funafuti.jpg",
    description: "A tiny tropical atoll in the Pacific Ocean, known for its crystal-clear lagoon, laid-back atmosphere, and beautiful palm-lined beaches. A peaceful island destination perfect for relaxing, snorkeling, and enjoying simple island life.",
    facts: ["The airport runway is also used as a playground.", "Funafuti is one of the world’s lowest-lying capitals.", "Its lagoon is home to colorful tropical fish and sea turtles."],
    quickFacts: { country: "Tuvalu", language: "Tuvaluan", currency: "AUD", season: "May–Oct" }
  },
  {
    name: "Tromsø",
    latitude: 69.65,
    longitude: 18.96,
    image: "images/destinations/tromso.jpg",
    description: "A lively Arctic city in northern Norway, famous for its snowy landscapes, colorful houses, and spectacular Northern Lights. A popular destination for winter adventures, fjord cruises, and experiencing the midnight sun.",
    facts: ["Tromsø is called the “Gateway to the Arctic.”", "In summer, the sun doesn’t set for weeks.", "It’s one of the best places to see the Northern Lights."],
    quickFacts: { country: "Norway", language: "Norwegian", currency: "NOK", season: "Nov–Mar" }
  },
  {
    name: "Ushuaia",
    latitude: -54.8,
    longitude: -68.3,
    image: "images/destinations/ushuaia.jpg",
    description: "A remote city at the southern tip of Argentina, surrounded by snowy mountains, forests, and the Beagle Channel. Known as the “End of the World,” it’s a gateway to Antarctica and famous for its dramatic scenery.",
    facts: ["Ushuaia is considered the world’s southernmost city.", "Many Antarctica cruises start from its harbor.", "You can see penguins on nearby islands."],
    quickFacts: { country: "Argentina", language: "Spanish", currency: "ARS", season: "Dec–Mar" }
  },
  {
    name: "El Nido",
    latitude: 11.2,
    longitude: 119.41,
    image: "images/destinations/elnido.jpg",
    description: "A tropical beach destination in the Philippines, famous for its crystal-clear waters, limestone cliffs, and hidden lagoons. A paradise for island-hopping, snorkeling, and exploring untouched beaches and coral reefs.",
    facts: ["El Nido has over 40 small islands and islets.", "Its lagoons were featured in Hollywood movies.", "The area is home to sea turtles and colorful coral reefs."],
    quickFacts: { country: "Philippines", language: "Filipino", currency: "PHP", season: "Dec–May" }
  },
  {
    name: "Santa Teresa",
    latitude: 9.65,
    longitude: -85.17,
    image: "images/destinations/santateresa.jpg",
    description: "A laid-back surf town on Costa Rica’s Nicoya Peninsula, known for long sandy beaches, consistent waves, and a bohemian jungle vibe. It’s a popular spot for surfing, yoga, and sunset views over the Pacific.",
    facts: ["It’s one of Costa Rica’s top surf destinations year-round.", "The sunsets here are especially famous for their vivid colors.", "The roads are mostly unpaved, giving it a rustic, off-grid feel."],
    quickFacts: { country: "Costa Rica", language: "Spanish", currency: "CRC", season: "Dec–Apr" }
  },
  {
    name: "Aitutaki",
    latitude: -18.85,
    longitude: -159.78,
    image: "images/destinations/aitutaki.jpg",
    description: "A small tropical paradise in the Cook Islands, best known for its stunning turquoise lagoon and white-sand beaches. A quiet, uncrowded island and perfect for relaxing, swimming, and island-hopping.",
    facts: ["It’s a “almost-atoll” with a volcanic island center.", "One Foot Island is famous for its passport stamp.", "It appeared on Survivor: Cook Islands."],
    quickFacts: { country: "Cook Islands", language: "English", currency: "NZD", season: "May–Oct" }
  },
  {
    name: "Tbilisi",
    latitude: 41.72,
    longitude: 44.78,
    image: "images/destinations/tbilisi.jpg",
    description: "Tbilisi is the vibrant capital of Georgia, set along the Mtkvari River and surrounded by hills. It blends old-world charm with modern culture, known for its historic old town, sulfur baths, and lively food and nightlife scene.",
    facts: ["Tbilisi’s old town is famous for its colorful balconies and narrow streets.", "The city has natural sulfur hot springs used for centuries.", "It sits at a crossroads between Europe and Asia."],
    quickFacts: { country: "Georgia", language: "Georgian", currency: "GEL", season: "May–Jun" }
  },
  {
    name: "Cartagena",
    latitude: 10.39,
    longitude: -75.48,
    image: "images/destinations/cartagena.jpg",
    description: "A historic coastal city on Colombia’s Caribbean coast, known for its colorful colonial old town, fortified walls, and lively tropical atmosphere. It blends rich history with beaches, music, and a vibrant street culture.",
    facts: ["Its walled old town is a UNESCO World Heritage Site.", "Pirates once frequently attacked the city, leading to massive fortifications.", "It’s one of the most colorful cities in South America."],
    quickFacts: { country: "Colombia", language: "Spanish", currency: "COP", season: "Dec–Apr" }
  },
  {
    name: "Hoi An",
    latitude: 15.88,
    longitude: 108.34,
    image: "images/destinations/hoian.jpg",
    description: "A charming ancient town in central Vietnam, known for its lantern-lit streets, preserved architecture, and riverside atmosphere. It’s a popular destination for culture, tailoring, and relaxed strolls through history.",
    facts: ["The old town is a UNESCO World Heritage Site.", "At night, the city is lit up with thousands of lanterns.", "It was once a major trading port for merchants from Asia and Europe."],
    quickFacts: { country: "Vietnam", language: "Vietnamese", currency: "VND", season: "Feb–Apr" }
  },
  {
    name: "Addis Ababa",
    latitude: 9.03,
    longitude: 38.74,
    image: "images/destinations/addisababa.jpg",
    description: "Addis Ababa is the capital of Ethiopia and one of Africa’s highest capital cities, sitting in the central highlands. It’s a major political, cultural, and diplomatic hub, known for its mix of modern development, historic sites, and vibrant coffee culture.",
    facts: ["It’s the headquarters of the African Union.", "Addis Ababa means “New Flower” in Amharic.", "It’s considered the birthplace of coffee culture."],
    quickFacts: { country: "Ethiopia", language: "Amharic", currency: "ETB", season: "Oct–Mar" }
  }
];

const homeScreen = document.querySelector("#homeScreen");
const loadingScreen = document.querySelector("#loadingScreen");
const resultScreen = document.querySelector("#resultScreen");
const detailScreen = document.querySelector("#detailScreen");
const noMatchScreen = document.querySelector("#noMatchScreen");

const dropdownToggle = document.querySelector("#dropdownToggle");
const dropdownMenu = document.querySelector("#dropdownMenu");
const selectedWeatherText = document.querySelector("#selectedWeatherText");
const weatherError = document.querySelector("#weatherError");

const findBtn = document.querySelector("#findBtn");
const exploreBtn = document.querySelector("#exploreBtn");
const newBtn = document.querySelector("#newBtn");
const backBtn = document.querySelector("#backBtn");

const destinationImage = document.querySelector("#destinationImage");
const destinationName = document.querySelector("#destinationName");

const detailName = document.querySelector("#detailName");
const aboutTitle = document.querySelector("#aboutTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailImage = document.querySelector("#detailImage");

const temperature = document.querySelector("#temperature");
const factsList = document.querySelector("#factsList");
const quickFacts = document.querySelector("#quickFacts");
const weatherIcon = document.querySelector("#weatherIcon");

let selectedWeather = "";
let currentDestination = null;
let lastDestination = "";

const loaderAnimation = lottie.loadAnimation({
  container: document.querySelector("#lottie-loader"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "lottie/sun-loading.json"
});

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  screen.classList.add("active");
}

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");

  const chevron = document.querySelector(".chevron");

  chevron.style.transform = dropdownMenu.classList.contains("open")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});

document.querySelectorAll(".weather-option").forEach(option => {
  option.addEventListener("click", () => {
    selectedWeather = option.dataset.value;
    selectedWeatherText.textContent = option.textContent;

    if (weatherError) {
      weatherError.classList.remove("show");
    }

    dropdownMenu.classList.remove("open");
    document.querySelector(".chevron").style.transform = "rotate(0deg)";
  });
});

async function getWeather(destination) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${destination.latitude}&longitude=${destination.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum&forecast_days=7`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather API failed");
  }

  const data = await response.json();

  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;
  const weatherCodes = data.daily.weather_code;
  const windSpeeds = data.daily.wind_speed_10m_max;
  const precipitation = data.daily.precipitation_sum;

  const averageTemperature = Math.round(
    maxTemps.reduce((sum, maxTemp, index) => {
      const dailyAverage = (maxTemp + minTemps[index]) / 2;
      return sum + dailyAverage;
    }, 0) / maxTemps.length
  );

  const averageWind = Math.round(
    windSpeeds.reduce((sum, wind) => sum + wind, 0) / windSpeeds.length
  );

  const totalRain = Math.round(
    precipitation.reduce((sum, rain) => sum + rain, 0)
  );

  const mainWeatherCode = getMostFrequentCode(weatherCodes);

  return {
    temperature: averageTemperature,
    weatherCode: mainWeatherCode,
    windSpeed: averageWind,
    rainAmount: totalRain
  };
}

function getMostFrequentCode(codes) {
  const counts = {};

  codes.forEach(code => {
    counts[code] = (counts[code] || 0) + 1;
  });

  return Number(
    Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0]
  );
}

function classifyWeather(code, temp) {
  const rainyCodes = [
    51, 53, 55,
    61, 63, 65,
    80, 81, 82,
    95, 96, 99
  ];

  const snowCodes = [
    71, 73, 75,
    77, 85, 86
  ];

  if (snowCodes.includes(code) || temp <= 8) {
    return "cold";
  }

  if (temp >= 25) {
    return "tropical";
  }

  if (temp >= 20 && temp < 25) {
    return "sunny";
  }

  if (rainyCodes.includes(code)) {
    return "rainy";
  }

  return "cloudy";
}

function getWeatherLabel(type) {
  if (type === "tropical") return "Tropical week";
  if (type === "sunny") return "Sunny week";
  if (type === "rainy") return "Rainy week";
  if (type === "cold") return "Cold week";
  if (type === "cloudy") return "Cloudy week";
  return "Weather forecast";
}

function getWeatherDistance(destination, wantedWeather) {
  const temp = destination.temperature;

  const rainyCodes = [
    51, 53, 55,
    61, 63, 65,
    80, 81, 82,
    95, 96, 99
  ];

  if (wantedWeather === "tropical") return Math.abs(28 - temp);
  if (wantedWeather === "sunny") return Math.abs(22 - temp);
  if (wantedWeather === "cloudy") return Math.abs(15 - temp);
  if (wantedWeather === "cold") return temp;
  if (wantedWeather === "rainy") return rainyCodes.includes(destination.weatherCode) ? 0 : 50;

  return 999;
}

async function findBestDestination(wantedWeather) {
  const weatherData = await Promise.all(
    destinations.map(async destination => {
      const weather = await getWeather(destination);

      return {
        ...destination,
        temperature: weather.temperature,
        weatherCode: weather.weatherCode,
        windSpeed: weather.windSpeed,
        rainAmount: weather.rainAmount,
        realWeather: classifyWeather(weather.weatherCode, weather.temperature)
      };
    })
  );

  console.table(
    weatherData.map(destination => {
      return {
        name: destination.name,
        averageTemperature: destination.temperature,
        weeklyWeatherCode: destination.weatherCode,
        weeklyWind: destination.windSpeed,
        weeklyRain: destination.rainAmount,
        realWeather: destination.realWeather
      };
    })
  );

  let filteredDestinations = weatherData.filter(destination => {
    return destination.realWeather === wantedWeather;
  });

  const withoutLastDestination = filteredDestinations.filter(destination => {
    return destination.name !== lastDestination;
  });

  if (withoutLastDestination.length > 0) {
    filteredDestinations = withoutLastDestination;
  }

  if (filteredDestinations.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredDestinations.length);
    const selectedDestination = filteredDestinations[randomIndex];

    lastDestination = selectedDestination.name;

    return selectedDestination;
  }

  const fallbackDestinations = weatherData
    .filter(destination => destination.name !== lastDestination)
    .sort((a, b) => {
      return getWeatherDistance(a, wantedWeather) - getWeatherDistance(b, wantedWeather);
    });

  const selectedDestination = fallbackDestinations[0] || weatherData[0];

  lastDestination = selectedDestination.name;

  return selectedDestination;
}

function showResult(destination) {
  destinationName.textContent = destination.name.toUpperCase();

  destinationImage.onerror = () => {
    console.log("Bild nicht gefunden:", destination.image);
  };

  destinationImage.src = destination.image;

  showScreen(resultScreen);
}

function createWeatherMeta(destination) {
  const weatherCard = document.querySelector(".weather-card");

  let weatherMeta = document.querySelector("#weatherMeta");

  if (!weatherMeta) {
    weatherMeta = document.createElement("div");
    weatherMeta.id = "weatherMeta";
    weatherMeta.classList.add("weather-meta");
    weatherCard.appendChild(weatherMeta);
  }

  weatherMeta.innerHTML = `
    <p>${getWeatherLabel(destination.realWeather)}</p>
    <p>Wind: ${destination.windSpeed} km/h</p>
    <p>Rain: ${destination.rainAmount} mm</p>
    <span>Powered by Open-Meteo</span>
  `;
}

function createQuickFacts(destination) {
  if (!quickFacts) {
    return;
  }

  quickFacts.innerHTML = `
    <div class="quick-fact">
      <span>Country</span>
      <strong>${destination.quickFacts.country}</strong>
    </div>

    <div class="quick-fact">
      <span>Language</span>
      <strong>${destination.quickFacts.language}</strong>
    </div>

    <div class="quick-fact">
      <span>Currency</span>
      <strong>${destination.quickFacts.currency}</strong>
    </div>

    <div class="quick-fact">
      <span>Best Season</span>
      <strong>${destination.quickFacts.season}</strong>
    </div>
  `;
}

function showDetails(destination) {
  detailName.textContent = destination.name.toUpperCase();
  aboutTitle.textContent = `About ${destination.name}`;
  detailDescription.textContent = destination.description;
  detailImage.src = destination.image;

  temperature.textContent = `${destination.temperature} °C`;

  if (weatherIcon) {
    weatherIcon.src = `images/icons/${destination.realWeather}.png`;
    weatherIcon.alt = `${destination.realWeather} weather icon`;
  }

  createWeatherMeta(destination);
  createQuickFacts(destination);

  factsList.innerHTML = "";

  destination.facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });

  showScreen(detailScreen);
}

findBtn.addEventListener("click", async () => {
  if (!selectedWeather) {
    if (weatherError) {
      weatherError.classList.add("show");
    }

    return;
  }

  if (weatherError) {
    weatherError.classList.remove("show");
  }

  showScreen(loadingScreen);

  loaderAnimation.stop();
  loaderAnimation.goToAndPlay(0, true);

  try {
    currentDestination = await findBestDestination(selectedWeather);

    setTimeout(() => {
      loaderAnimation.stop();
      showResult(currentDestination);
    }, 2200);

  } catch (error) {
    loaderAnimation.stop();
    console.log(error);

    showScreen(noMatchScreen);
  }
});

exploreBtn.addEventListener("click", () => {
  showDetails(currentDestination);
});

newBtn.addEventListener("click", () => {
  selectedWeather = "";
  selectedWeatherText.textContent = "Select preferred weather";

  if (weatherError) {
    weatherError.classList.remove("show");
  }

  showScreen(homeScreen);
});

if (backBtn) {
  backBtn.addEventListener("click", () => {
    selectedWeather = "";
    selectedWeatherText.textContent = "Select preferred weather";

    if (weatherError) {
      weatherError.classList.remove("show");
    }

    showScreen(homeScreen);
  });
}