// Escribe tu código aquí.

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


const a = "bocina";
function sentence (string,arrayStrings){
    //console.log("entrando al ciclo");
        const compare = string;
        const newArray = [];
    for (let i = 0; i < arrayStrings.length; i++) {

        //console.log(arrayStrings[i]);
       // console.log(arrayStrings[i].length);

        if (arrayStrings[i].length > compare.length){
            newArray.push(arrayStrings[i]);

        }
        
    }
    //console.log(newArray);
    return newArray
};
console.log(sentence(a,myArray));

function printArray(newArray){
    const displayList = document.getElementById("displayList");
    let listElement= "";
    for (let i = 0; i < newArray.length; i++) {
        
        listElement+=`<li>${newArray[i]}</li>`;
        console.log(listElement);
        
    }
    console.log(listElement);
    displayList.innerHTML=listElement;

};

printArray(sentence(a,myArray));
printArray(myArray);
