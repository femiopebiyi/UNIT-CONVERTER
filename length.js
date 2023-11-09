const lengthsObject = {
  "inch": "in",           // "in" represents inches
  "foot": "ft",           // "ft" represents feet
  "yard": "yd",           // "yd" represents yards
  "meter": "m",           // "m" represents meters
  "centimeter": "cm",     // "cm" represents centimeters
  "millimeter": "mm",     // "mm" represents millimeters
  "nautical-Mile": "NM",   // "NM" represents nautical miles
  "kilometer": "km",     // "km" represents kilometers
  "mile": "mi"            // "mi" represents miles
};

function addLength(convert){
  
while (convert.options.length > 0) {
        convert.remove(0);
      }

    for (const length in lengthsObject) {
        let option = `<option value="${lengthsObject[length]}">${length}</option>`;
        convert.insertAdjacentHTML("beforeend", option)
    }
}

buttons[2].addEventListener("click", ()=>{
  values[0].innerHTML = 'LENGTH FROM:'
    inputValue.value = ''
    addLength(convert);
    addLength(converted);
    result.innerHTML = 0 + ' ' + converted.value;
    

})


function convertLength (){
  let outcome = Number(inputValue.value)
    let display;

    if(convert.value === 'in' && converted.value === 'in'){
        outcome*=1
    } else if (convert.value === 'in' && converted.value === 'ft'){
      outcome *= 0.0833333333
    } else if (convert.value === 'in' && converted.value === 'yd'){
      outcome *= 0.0277777778
    } else if (convert.value === 'in' && converted.value === 'm'){
      outcome *= 0.0254
    } else if (convert.value === 'in' && converted.value === 'cm'){
      outcome*= 2.54
    } else if (convert.value === 'in' && converted.value === 'mm'){
      outcome*= 25.4
    } else if (convert.value === 'in' && converted.value === 'NM'){
      outcome*= 0.0000137149
    } else if (convert.value === 'in' && converted.value === 'km') {
      outcome*= 0.0000254
    } else if (convert.value === 'in' && converted.value === 'mi'){
      outcome*= 0.0000157828
    }
    

    display = outcome + ' ' + converted.value;
    result.innerText = display
}

inputValue.addEventListener('keyup', function(){
    if(values[0].innerHTML === 'LENGTH FROM:'){
        if(isNaN(inputValue.value*5)){
                result.innerHTML = 'please input numbers only!!!'
            }else {
                convertLength()
            }
    }
})
