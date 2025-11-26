/* 1. Дописати доступність послуг. Якщо послуга доступна, то нічого не показується, 
        якщо послуга недоступна, то відображається інформація, що послуга недоступна.
    2. Виводити графік роботи
    3. Зробити так, щоб часу можна було вводити лише '22:30' наприклад, а не цілу дату
    4. Додати getter/setter
    5. Метод що повертає повний список послуг
    6. Використати super
    7. чи можна додати валідацію/перевірку при створенні конструктора? Наприклад services це має бути масив, 
        у якомі міститься 2 об'єкти, об'єкт мвстить в собі 2 ключі. Ключ 1 "name" - який приймає str, 
        ключ 2 "price" - який приймає numb (це виконується за допомогою get/set?)
    8. Метод isServisWork та workingHours об'єднати в 1, прописати elsе, якщо буде введений не коректний формат дати, 
        то буде відображатись лише години роботи від та до
    9. setTimeout використати для поточного оновлення часу

*/
class CarService {
    constructor(name, services, schedule) {
        this.name = name;
        this.services = services;
        this.schedule = schedule;
        this.closePrice = 2;
    }
    
    isOpen(dateInput) {
        const date = dateInput ? new Date(dateInput) : new Date();

        const current = date.getHours() * 60 + date.getMinutes();
        const open = this.schedule.open * 60;
        const close = this.schedule.close * 60;

        return current >= open && current < close
    }

    servicePrice (date) {
        if (this.isOpen(date)) {
            this.services.forEach (services => {
            console.log(`Сервіс відчинено! Вартість послуги ${services.name} коштує ${services.price} грн.`)});
        } else {
            this.services.forEach ( services => {
            console.log(`Сервіс зачинено, діє підвищений тариф! Вартість послуги ${services.name} коштує ${services.price * this.closePrice} грн.`)});
    }}

    workingHours () {
            console.log(`Сервіс працює від ${this.schedule.open} години до ${this.schedule.close} години.`);
        }

    isServisWork (date) {
        if (this.isOpen(date)) {
            console.log(`Сервіс відчинений! Працюємо до ${this.schedule.close}години`);
        } else {
            console.log(`Сервіс не працює! Запрошуємо від ${this.schedule.open} години`);
        };

    };}


const BestService = new CarService (
    "Best Service", 
    [
        {name:"Заміна олії", price: 550,  available: true},
        {name: "Діагностика", price: 450, available: false},
        {name: "Перевірка гальм", price: 350, available: true},
        {name: "Евакуатор", price: 250, available: true}
    ],
    {open: 9, close: 20}
)

BestService.servicePrice();
BestService.workingHours();
BestService.isServisWork("2025-11-21T12:30:00");


//  "2025-11-21T22:30:00"