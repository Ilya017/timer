let x;
function timer(date_in_future) {
  // Установить дату и время текущего момента
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("time").innerHTML =
    hours + ":" + minutes + ":" + seconds; // Выбор элемента документа по его id = "time"

  // Разница в милисекундах между текущей и будущей датой
  let ms = date_in_future - date;

  // Подсчет разницы времени в днях, часах, минутах и секундах
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hoursT = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesT = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let secondsT = Math.floor((ms % (1000 * 60)) / 1000);
  // Показать результат в теге с id="time"
  document.getElementById("timer").innerHTML =
    "Осталось: " +
    days +
    "дней " +
    hoursT +
    "часов " +
    minutesT +
    "минут " +
    secondsT +
    "секунд ";
  // Если время истекло, показать сообщение
  if (ms < 0) {
    //clearInterval(x);
    document.getElementById("time").innerHTML = "Время истекло!";
  }
}

function start() {
  // Установить дату и время в будущем
  let date_in_future = new Date(2021, 11, 11, 12, 27, 0); // 1.01.2020, 10:32:04
  x = setInterval(timer.bind(this, date_in_future), 1000);
}
