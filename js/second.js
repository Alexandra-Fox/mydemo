let test = prompt("Text:", '');
str = test.trim();
console.log('Исходный текст без пробелов на концах: ', str);
let l = str.length;
console.log('Длина исходного текста: ', l);
let new_lenght = prompt("new lenght", '');
console.log('Новая длина:', new_lenght);
let razn = new_lenght - l; 
console.log('Недостающая длина: ', razn);

function useArray() {
    let result = str.match(/ /g);
    console.log('Количество пробелов в исходном тексте: ', result.length);
    len = result.length; 
    let go = razn / len; 
    let m = Math.ceil(go);
    console.log('Добавим к каждому пробелу ', m);
    const regex = / /gi;
    console.log('Сделали по заданной ширине растяжку: ', str.replace(regex, ' '.repeat (m)));
}
