let carService ={
    name: "Dolinskiy mechanic",
    service: ["oil change", "diagnostics", "brake inspection"],
    price: [550, 450, 350],
    "tow truck": {
        available: true,
        price: 250,
    },
    hours: {
        open: "09:00",
        close: "20:00"
    },

    serviceInfo (typeHours) {
        let iPrice = () => {
            for (let i = 0; i < this.price.length; i++) {
                console.log(`Вартість послуги ${this.service[i]}: ${this.price[i]} гривень.`);
            }
        }
        if (typeHours === this.hours.open || typeHours === this.hours.close) {
                console.log (`${this.name} обслуговує ваші автмоблі з ${this.hours.open} по ${this.hours.close}`);
        } else if (
            typeHours !== this.hours.open || typeHours !== this.hours.close ) {
                console.log (`${this.name} зараз зачинено, але за необхідність поза робочий час ${this.price} подвійний тариф.`);
        } else { 
            console.log(`У критичних випадках налаємо послуги евакуатора за ${this["tow truck"].price} гривень.`);
        }
}
}
carService.serviceInfo("10:00");