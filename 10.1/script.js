// Завдання 1. Кількість замовлень кожного користувача
    // Використовуйте reduce, щоб створити об’єкт:

function showCountOrder(obj) {
    const users = obj.reduce((count, order) => {
        if (count[order.user]) {
            count[order.user] += 1;
        } else {
            count[order.user] = 1;
        }
        return count;
    }, {});

    return console.log(users);
}

showCountOrder(orders);

    // Використовуйте Map:
function showCountOrderByMap(obj) {
    const users = new Map();

    for(let i = 0; i < obj.length; i++){
        if(users.has(obj[i].user)) {
            users.set(obj[i].user, users.get(obj[i].user) + 1);
        } else {
            users.set(obj[i].user, 1);
        }
    }
    return console.log(users);
}

showCountOrderByMap(orders);

// Завдання 2. Сума замовлень кожного користувача
    // Використати map + reduce, щоб створити об’єкт

function showSumUserOrders(obj) {
    const users = {};

    for (const order of obj) {
        const resultSum = order.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

        if (users[order.user]) {
            users[order.user] += resultSum;
        } else {
            users[order.user] = resultSum;
        }
    }
    return users;
}

console.log(showSumUserOrders(orders));

// Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
function showSumUserOrdersByMap(obj) {
    const users = new Map();

    const result = obj.reduce((users, order) => {
        const resultSum = order.items.reduce((sum, item) => {
            return (sum + item.price);
        }, 0);

        if (users.has(order.user)) {
            users.set(order.user, users.get(order.user) + resultSum);
        } else {
            users.set(order.user, resultSum);
        }
        return users;
    }, users);

    return result;
}

console.log(showSumUserOrdersByMap(orders));

// Завдання  3. Унікальні товари

function showUniqueProducts(obj) {
    const products = new Set();

    obj.forEach(order => {
        order.items.forEach(item => {
            products.add(item.name);
        });
    });
    return products;
}

console.log(showUniqueProducts(orders));

// Завдання 4. Хто витратив більше за всіх?

function showUserSpentMore(obj) {
    const users = {};

    for (const order of obj) {
        const resultSum = order.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

        if (users[order.user]) {
            users[order.user] += resultSum;
        } else {
            users[order.user] = resultSum;
        }
    }

    let bigSpent, maxSpent = 0;

    for(const user in users) {
        if(users[user] > maxSpent) {
            maxSpent = users[user];
            bigSpent = user;
        }
    }
    let message = `${bigSpent} витратив більше за всіх: $${maxSpent}`;
    return message;
}

console.log(showUserSpentMore(orders));