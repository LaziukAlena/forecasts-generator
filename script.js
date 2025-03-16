/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector(".forecast-btn");
const currentForecast = document.querySelector(".current-forecast");
const forecasts = document.querySelector(".forecasts");
const forecastTemplate = document.querySelector("#forecast-item");

forecastButton.addEventListener("click", generatePrediction) 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrediction() {
    const probability = getRandomInt(0, 100)
    const predictionNumber = getRandomInt(1, 3); 
    let predictionText = "";

    if (predictionNumber == 1) {
        predictionText = "Вам пора отдохнуть!";
    } else if (predictionNumber == 2) {
         predictionText = "Готовьтесь к романтическим приключениям.";
    } else {
        predictionText = "Если Вы проявите инициативу, успех не заставит себя ждать";
    }

    currentForecast.querySelector("h1").textContent = predictionText;
    currentForecast.querySelector("p").textContent = `Вероятность: ${probability}%`;


    const newForecast = forecastTemplate.content.cloneNode(true);
    newForecast.querySelector("h3").textContent = predictionText;
    newForecast.querySelector("p").textContent = `Вероятность: ${probability}%`;

    forecasts.prepend(newForecast);
}

     