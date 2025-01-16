// index.js

/**
 * _log - Это функция, которая работает как console.log, но выводит сообщения только в режиме разработки.
 * @param  {...any} args - Сообщения для вывода в консоль.
 */
const _log = (...args) => {
    if (__DEV__) {
        console.log(...args);
    }
};

module.exports = _log;