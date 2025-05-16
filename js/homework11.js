// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 




const bankAccount = {
    ownerName: "Nazar Balitskyi",
    accountNumber: "4546 6483 7434",
    balance: 1000,

    deposit() {
        
        const result = confirm("ЧИ бажаєте поповнити рахунок");
        if (!result) {
            console.log("Пока досвидос");
            return;

            
        } else {
            const userAmount = Number(prompt("Внесіть Бакси"));
            this.balance = this.balance + userAmount;
            alert(`Баланс попвнено, Залишок ${this.balance}`)
        }


    },

    withdraw(money) {
        if (money > this.balance) {
            alert("недостатньо коштів")
        } else {
            this.balance = this.balance - money;
            alert(`грошей знято, на рахунку ${this.balance}`)
        }
    },

    

}
    if (confirm("Хочеш поповнити?")) {
        const suma = parseFloat(prompt("сума на поповнення"));
        if (!isNaN(suma)) {
            bankAccount.balance += suma;
            alert(`Баланс поповпнено, Залишок ${bankAccount.balance}`)
        }
    }

bankAccount.withdraw(200)
// bankAccount.deposit()
console.log(bankAccount);



// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: null,
    humidity: 50,
    windSpeed: 10,


    isBelowThreshold(threshold) {
    const input = prompt("Введіть температуру в градусах");
    this.temperature = Number(input);
    if (isNaN(this.temperature)) {
        alert("не число");
        return;
    };


if (this.temperature < threshold) {
    alert(`Температура нижче ${threshold}`);
    return true;
} else {
    alert(`Температура більше або дорівнює ${threshold} градусів`)
    return false;
}
}
}

 
weather.isBelowThreshold(0);




// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 


const user = {
    name: "Nazar",
    email: "nazar4964@gmail.com",
    password: "12345",


    login() {
    const inputEmail = prompt("введіть ваш емайл");
    const inputPassword = prompt("Ведыть пароль");

    if (inputEmail === this.email && inputPassword === this.password) {
        alert("Вхід дозволено");
    } else {
        alert("Вхід не дозволено");
    }
}
}

user.login()





// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 


const movie = {
    title: "Venom",
    director: "nazar",
    year: 2024,
    rating: 8.2,

    highRated () {
        return this.rating > 8;
    }
};

if (movie.highRated()) {
    console.log("рейтинг больше 8");
    
} else {
    console.log("Менше 8 балів");
    
}


console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

