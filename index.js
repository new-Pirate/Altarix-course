const result = require('./calc');
try {
    console.log(result.calc(10, 2, "+"));
} catch (e) {
    console.log("Ошибка: " + e.message);
}