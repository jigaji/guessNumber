while (true) {
    let n = Math.floor(Math.random() * 1000);

    console.log('Загадано:', n);

    let guess = prompt('Давай сыграем в игру "Угадай число". Введи свое число:');

    console.log('Введено:', guess);

    if (guess === 'q'){
        break;
    } else if (isNaN(guess)) {
        alert('Вы ввели не число!');
    } else if (guess == n) {
        alert('Вы угадали');
    } else if (guess > n) {
        alert('Вы не угадали, число должно быть меньше');
    } else if (guess < n) {
        alert('Вы не угадали, число должно быть больше');
    }
}