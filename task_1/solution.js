function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message;
    message = productName + " за " + productPrice + " теперь в корзине!";
    console.log (message);

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue;
    newValue =  oldValue + 1;

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum;
    newSum = oldSum + difference;
    
    let newSumText;
    newSumText = newSum + ' ₽';
    
    return newSumText;
}

