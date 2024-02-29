const firstrow = document.getElementById('firstrow');
const secondrow = document.getElementById('secondrow');
const thirdrow = document.getElementById('thirdrow');
const correctAns = document.getElementById('correctAnswers');
const submitButtonWrapper = document.getElementById('submitButtonWrapper');
let returnValue = false;


function toSup(value){
    return value.sup();
}

function toSub(value){
    return value.sub()
}


const allData = [
    ["метан", `CH${toSub("4")}`, "алкан"], 
    ["этан", `C${toSub("2")}H${toSub("6")}`, "алкан"], 
    ["пропан", `C${toSub("3")}H${toSub("8")}`, "алкан"], 
    ["бутан", `C${toSub("4")}H${toSub("10")}`, "алкан"], 
    ["пентан", `C${toSub("5")}H${toSub("12")}`, "алкан"], 
    ["гексан", `C${toSub("6")}H${toSub("14")}`, "алкан"], 
    ["гептан", `C${toSub("7")}H${toSub("16")}`, "алкан"], 
    ["октан", `C${toSub("8")}H${toSub("18")}`, "алкан"], 
    ["нонан", `C${toSub("9")}H${toSub("20")}`, "алкан"], 
    ["декан", `C${toSub("10")}H${toSub("22")}`, "алкан"], 
    ["этилен", `C${toSub("2")}H${toSub("4")}`, "алкен"], 
    ["этен", `C${toSub("2")}H${toSub("4")}`, "алкен"], 
    ["пропилен", `C${toSub("3")}H${toSub("6")}`, "алкен"], 
    ["пропен", `C${toSub("3")}H${toSub("6")}`, "алкен"], 
    ["бутен", `C${toSub("4")}H${toSub("8")}`, "алкен"], 
    ["бутилен", `C${toSub("4")}H${toSub("8")}`, "алкен"], 
    ["пентен", `C${toSub("5")}H${toSub("10")}`, "алкен"], 
    ["гексен", `C${toSub("6")}H${toSub("12")}`, "алкен"],
    ["гептен", `C${toSub("7")}H${toSub("14")}`, "алкен"],
    ["ацетилен", `C${toSub("2")}H${toSub("2")}`, "алкин"], 
    ["этин", `C${toSub("2")}H${toSub("2")}`, "алкин"],
    ["пропин", `C${toSub("3")}H${toSub("4")}`, "алкин"],
    ["бутин", `C${toSub("4")}H${toSub("6")}`, "алкин"],
    ["бутадиен", `C${toSub("4")}H${toSub("6")}`, "алкадиен"],
    ["пентадиен", `C${toSub("5")}H${toSub("8")}`, "алкадиен"],
    ["бензол", `C${toSub("6")}H${toSub("6")}`, "ароматты"], 
    ["фенол", `C${toSub("6")}H${toSub("5")}OH`, "ароматты"], 
    ["анилин", `C${toSub("6")}H${toSub("5")}NH${toSub("2")}`, "ароматты"], 
    ["толуол", `C${toSub("6")}H${toSub("5")}CH${toSub("3")}`, "ароматты"], 
    ["кумол", `C${toSub("6")}H${toSub("5")}CH(CH${toSub("3")})${toSub("2")}`, "ароматты"], 
    ["стирол", `C${toSub("6")}H${toSub("5")}CH=CH${toSub("2")}`, "ароматты"],
    ["ацетон", `CH${toSub("3")}COCH${toSub("3")}`, "кетон"],
    ["ацетальдегид", `CH${toSub("3")}CHO/CH${toSub("3")}COH`, "альдегид"], 
    ["сірке альдегиді", `CH${toSub("3")}CHO/CH${toSub("3")}COH`, "альдегид"], 
    ["құмырсқа альдегиді", `HCHO`, "альдегид"], 
    ["метаналь", `HCHO`, "альдегид"], 
    ["этаналь", `CH${toSub("3")}CHO/CH${toSub("3")}COH`, "альдегид"], 
    ["пропаналь", `C${toSub("2")}H${toSub("5")}CHO/C${toSub("2")}H${toSub("5")}COH`, "альдегид"], 
    ["бутаналь", `C${toSub("3")}H${toSub("7")}CHO/C${toSub("3")}H${toSub("7")}COH`, "альдегид"], 
    ["пропанон", `CH${toSub("3")}COCH${toSub("3")}`, "кетон"], 
    ["бутанон-2", `CH${toSub("3")}COCH${toSub("2")}CH${toSub("3")}`, "кетон"], 
    ["пентанон-2", `CH${toSub("3")}COCH${toSub("2")}CH${toSub("2")}CH${toSub("3")}`, "кетон"], 
    ["құмысқа қышқылы", `HCOOH`, "карбон қышқылы"], 
    ["метан қышқылы", `HCOOH`, "карбон қышқылы"], 
    ["этан қышқылы", `CH${toSub("3")}COOH`, "карбон қышқылы"], 
    ["сірке қышқылы", `CH${toSub("3")}COOH`, "карбон қышқылы"],
    ["пропион қышқылы", `C${toSub("2")}H${toSub("5")}COOH`, "карбон қышқылы"],
    ["май қышқылы", `C${toSub("3")}H${toSub("7")}COOH`, "карбон қышқылы"],
    ["валериан қышқылы", `C${toSub("4")}H${toSub("9")}COOH`, "карбон қышқылы"], 
    ["капрон қышқылы", `C${toSub("5")}H${toSub("11")}COOH`, "карбон қышқылы"], 
    ["энант қышқылы", `C${toSub("6")}H${toSub("13")}COOH`, "карбон қышқылы"], 
    ["пропан қышқылы", `C${toSub("2")}H${toSub("5")}COOH`, "карбон қышқылы"],
    ["бутан қышқылы", `C${toSub("3")}H${toSub("7")}COOH`, "карбон қышқылы"], 
    ["пентан қышқылы", `C${toSub("4")}H${toSub("9")}COOH`, "карбон қышқылы"], 
    ["гексан қышқылы", `C${toSub("5")}H${toSub("11")}COOH`, "карбон қышқылы"], 
    ["гептан қышқылы", `C${toSub("6")}H${toSub("13")}COOH`, "карбон қышқылы"], 
    ["пальмитин қышқылы", `C${toSub("15")}H${toSub("31")}COOH`, "карбон қышқылы"], 
    ["стеарин қышқылы", `C${toSub("17")}H${toSub("35")}COOH`, "карбон қышқылы"], 
    ["бензой қышқылы", `C${toSub("6")}H${toSub("5")}COOH`, "карбон қышқылы"], 
    ["олеин қышқылы", `C${toSub("17")}H${toSub("33")}COOH`, "карбон қышқылы"],
    ["акрил қышқылы", `CH${toSub("2")}=CHCOOH`, "карбон қышқылы"], 
    ["линоль қышқылы", `C${toSub("17")}H${toSub("31")}COOH`, "карбон қышқылы"], 
    ["линолен қышқылы", `C${toSub("17")}H${toSub("29")}COOH`, "карбон қышқылы"],
    ["метанол", `CH${toSub("3")}OH`, "спирт"], 
    ["этанол", `C${toSub("2")}H${toSub("5")}OH`, "спирт"], 
    ["диметил эфирі", `CH${toSub("3")}OCH${toSub("3")}`, "жай эфир"],
    ["диэтил эфирі", `C${toSub("2")}H${toSub("5")}OC${toSub("2")}H${toSub("5")}`, "жай эфир"],
    ["метилэтил эфирі", `CH${toSub("3")}OC${toSub("2")}H${toSub("5")}`, "жай эфир"],
    ["метилацетат-сірке қышқылының метил эфирі", `CH${toSub("3")}COOCH${toSub("3")}`, "күрделі эфир"],
    ["этилацетат-сірке қышқылының этил эфирі", `CH${toSub("3")}COOC${toSub("2")}H${toSub("5")}`, "күрделі эфир"],
    ["метилбензоат-бензой қышқылының метил эфирі", `C${toSub("6")}H${toSub("5")}COOCH${toSub("3")}`, "күрделі эфир"],
    ["фенилформиат-құмырсқа қышқылының фенил эфирі", `HCOOC${toSub("6")}H${toSub("5")}`, "күрделі эфир"],
    ["метилформиат-құмырсқа қышқылының метил эфирі", `HCOOCH${toSub("3")}`, "күрделі эфир"],


]

// allData.forEach(elem => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('answers');
//         let newSpan1 = document.createElement('span')
//         let newSpan2 = document.createElement('span')
//         let newSpan3 = document.createElement('span')
//         newSpan1.innerHTML = elem[0];
//         newDiv.appendChild(newSpan1);
//         newSpan2.innerHTML = elem[1];
//         newDiv.append(newSpan2);
//         newSpan3.innerHTML = elem[2];
//         newDiv.append(newSpan3);
//         correctAns.appendChild(newDiv);
// })


function checkArray(value1, value2, value3, arrayList) {
    returnValue = false;
    arrayList.forEach(element => {
        if (value1 == element[0] && value2 == element[1] && value3 == element[2]) {
            returnValue = true;
        }
    })
    return returnValue;
}



/**

 */
function removeClassName(classNameRemoved, classNameType ) {
    const classRemove = document.querySelectorAll(`.${classNameType}`);
       
    classRemove.forEach(element => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected")
        }
    })
}

function clearVariables(val1, val2, val3) {
    val1 = null;
    val2 = null;
    val3 = null;
}


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function App() {
    submitButtonWrapper.innerHTML = "";
    const shuffled = allData.sort(() => 0.5 - Math.random());
    let data = shuffled.slice(0, 6);
    /** 
     * Here, each element that is picked from each row will be stored here
     */
    let row1SelectedElement = null;
    let row2SelectedElement = null;
    let row3SelectedElement = null;


    data.forEach(element => {
        // first row related 
        const spanElement1 = document.createElement('span');
        spanElement1.innerHTML = element[0];
        spanElement1.classList.add('card', "rowOne");
        spanElement1.addEventListener('click', () => {
            removeClassName("selected","rowOne");
            spanElement1.classList.add('selected');
            row1SelectedElement = spanElement1.innerHTML;
        })
        firstrow.appendChild(spanElement1);
    })
    shuffleArray(data);
    data.forEach(element => {
        // second row related
        const spanElement2 = document.createElement('span');
        spanElement2.innerHTML = element[1];
        spanElement2.classList.add('card', 'rowTwo');
        spanElement2.addEventListener('click', () => {
            removeClassName('selected', 'rowTwo');
            spanElement2.classList.add('selected');
            row2SelectedElement = spanElement2.innerHTML;
        })
        secondrow.appendChild(spanElement2);
    })
    shuffleArray(data);
    data.forEach(element => {
        // third row related
        const spanElement3 = document.createElement('span');
        spanElement3.innerHTML = element[2];
        spanElement3.classList.add('card', 'rowThree');
        spanElement3.addEventListener('click', () => {
            removeClassName('selected','rowThree');
            spanElement3.classList.add('selected');
            row3SelectedElement = spanElement3.innerHTML;
        })
        thirdrow.appendChild(spanElement3);
    })
    let submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerHTML = 'Жауапты қабылда'
    submitButtonWrapper.appendChild(submitButton);
    submitButton.addEventListener('click', () => {
        const removeAllElems = document.querySelectorAll('.selected');
        if (checkArray(row1SelectedElement, row2SelectedElement, row3SelectedElement, data)) {
            // const removeAllElems = document.querySelectorAll('.selected');
            // console.log(removeAllElems);
            removeAllElems.forEach(elem => {
                elem.remove();
            })
        let n = correctAns.childElementCount;
        if (n == 6) {
            correctAns.innerHTML = "";
        } 
        let newDiv = document.createElement('div');
        newDiv.classList.add('answers');
        let newSpan1 = document.createElement('span')
        let newSpan2 = document.createElement('span')
        let newSpan3 = document.createElement('span')
        newSpan1.innerHTML = row1SelectedElement;
        newDiv.appendChild(newSpan1);
        newSpan2.innerHTML = row2SelectedElement;
        newDiv.append(newSpan2);
        newSpan3.innerHTML = row3SelectedElement;
        newDiv.append(newSpan3);
        correctAns.appendChild(newDiv);
 
        } else {
            const removeAllElems = document.querySelectorAll('.selected');
            removeAllElems.forEach(elem => {
              elem.classList.remove('selected');  
            })
        }
        row1SelectedElement = null;
        row2SelectedElement = null;
        row3SelectedElement = null;
        if (firstrow.hasChildNodes()) {
        } else {
            App();
        }
    })
    

}

App();