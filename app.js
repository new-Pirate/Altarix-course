var content = document.getElementById('content');
var arrStrings = ['Мадам', 'неПалиндром', 'кабак', 'колхоз'];
var searchPalindromes = function (str) {
    str.forEach(function (element) {
        if (element.toLowerCase() == element.split('').reverse().join('').toLowerCase()) {
            content.innerHTML += 'Слово ' + '<strong>' + element + '</strong>' + ' является палиндромом' + '<br>';
        }
        else {
            content.innerHTML += 'Слово ' + '<strong>' + element + '</strong>' + ' не палиндром' + '<br>';
        }
    });
};
searchPalindromes(arrStrings);
