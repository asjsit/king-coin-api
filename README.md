<p align=center>
<img src="https://raw.githubusercontent.com/asjsit/king-coin-api/6ee46785e24d3afe3f51b1bd9ea53d8e97d9fa55/docs/logo.svg"></img>
</p>
<div align="center">

**Модуль** для удобного использования **[King Coin API](https://kcbot.ru/docx/)**.
  
От **[AdepT-Hub](https://adept-hub.ru)** с  ❤.

</div>



## 📦 Установка

```sh
$ npm install king-coin-api
```
<br>

## 🚀 Использование

```js
const { API } = require('king-coin-api')
const api = new API({ token: 'YOUR_TOKEN' }) // Ваш токен

// Получение баланса мерчанта
async getMyBalance() {
    const balance = await api.getMyBalance() // Получаем баланс
    console.log(balance) // Выводим результат в консоль
}

// Получение баланса пользователей
async getUserBalance() {
    const user_ids = [657023844] // Создаем массив пользователей (до 1000)
    const userBalance = await api.getUserBalance({ user_ids }) // Получаем балансы пользователей
    console.log(userBalance) // Выводим результат в консоль
}

// Получение историю переводов
async getHistory() {
    const history = await api.getHistory({ filter: "IN", count: 20 }) // Получаем 20 последних пополнений
    console.log(history) // Выводим результат в консоль
}

//Перевод коинов пользователю
async sendCoins() {
    const send = await api.sendCoins({ receiver: 657023844, amount: 1 }) // Делаем перевод 1 коин
    console.log(send) // Выводим результат в консоль
}

```