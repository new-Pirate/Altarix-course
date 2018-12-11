const content: any = document.getElementById('content');
const arrStrings: string[] = ['Мадам', 'неПалиндром', 'кабак', 'колхоз'];
let searchPalindromes = (str: string[]) => {
    str.forEach(function (element) {
        if (element.toLowerCase() == element.split('').reverse().join('').toLowerCase()) {
            content.innerHTML += 'Слово ' + '<strong>' + element + '</strong>' + ' является палиндромом' + '<br>';
        } else {
            content.innerHTML += 'Слово ' + '<strong>' + element + '</strong>' + ' не палиндром' + '<br>';
        }
    });
}

searchPalindromes(arrStrings);