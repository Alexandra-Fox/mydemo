let arr = [1, 2, 3, 4];
console.log('Для работы первых 7 кнопочек (исходник): ', arr);

let arr2 = [1, 2, 3, 4];

let arr1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]); 

let arr3 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]); 

console.log('Для работы двух последних (исходник): ', arr1);

function useArray() {
    let push = (a) => {
        arr[arr.length] = a;
        return arr;
    };
    push(5);
    console.log('PUSH (добавлю 5 в конец): ', arr);
}

function useArray2() {
    let unshift = (a) => {
        arr = [a].concat(arr);
        return arr;
    };
    unshift(0);
    console.log('UNSHIFT (добавлю 0 в начало): ', arr);
}

function useArray3() {                        
    let pop = (a) => {
        arr.splice(a,1);
    }
    let len = arr.length-1;
    pop(len);
    console.log('POP (уберу последее знаение массива): ', arr);
}

function useArray4() {                        
   let shifted = (a) => {
        arr.splice(a,1);
    }
    shifted(0);
    console.log('SHIFT (ну и первое уберу): ', arr);
}

function useArray5() { 
    for (i = 0; i < arr.length; i++) arr.splice(i);
    console.log('CLEAR (удаляем все): ', arr);
}

function useArray6() {
    let removedIndex = (a) => {
        for (var i = arr2.length - 1; i>=0; i--){
            if (arr2[i] == a){
                arr2.splice(i,1);
            }
        }
    }
    removedIndex(3);
    console.log('REMOVEDINDEX (а что если убрать "3"?): ', arr2);
}

function useArray7() {                        
    let move = (a,b) => {
        var element = arr2[a];
        arr2.splice(a,1);
        arr2.splice(b,0,element)  }
    move(0,1);
    console.log('MOVE (или поменять местами 1 и 2...): ', arr2);
}

function useArray8(){
    let removebyid = (a) => {
        arr1.delete(a);
    }
    removebyid('key1');
    console.log('REMOVEBYID (а еще могу убрать первый элемент, зная его ключик;): ', arr1);
}

function useArray9(){
        arr3.delete('key3');
    arr3.set('key4','value4');
    console.log('MODYFYID (а еще вот так могу): ', arr3);
}