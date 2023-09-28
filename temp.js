


buttons[1].addEventListener('click', function(){
    
        convert.innerHTML = `
    <option value="celcius">Celcius</option>
    <option value="fahrenheits">Fahrenheits</option>
    <option value="kelvin">Kelvin</option>
    `
    converted.innerHTML = `
    <option value="celcius">Celcius</option>
    <option value="fahrenheits">Fahrenheits</option>
    <option value="kelvin">Kelvin</option>
    `
    values[0].innerHTML = 'TEMP FROM:'
    result.innerHTML = 0 + ' ' + converted.value
    inputValue.value = ''

    
})
















function convertTempUnit(){
    let outcome = Number(inputValue.value)
    let display; 
    //CELCIUS
    if (convert.value === 'celcius' && converted.value=== 'celcius'){
        outcome *= 1;
    } else if(convert.value === 'celcius' && converted.value === 'fahrenheits'){
        let formula = Number(inputValue.value) *(9/5) +32
        outcome = formula
    } else if (convert.value === "celcius" && converted.value === 'kelvin'){
        outcome += 273.15;
    } // FAHRENHEITS 
    else if(convert.value === 'fahrenheits' && converted.value === 'fahrenheits'){
        outcome *=1
    }
    else if(convert.value === 'fahrenheits' && converted.value === 'celcius'){
        let formula = (Number(inputValue.value) -32) * (5/9)
        outcome = formula
    }
    else if(convert.value === 'fahrenheits' && converted.value === 'kelvin'){
        let formula = (Number(inputValue.value)-32) * (5/9) +273.15
        outcome = formula
    }  // KELVIN
    else if(convert.value === 'kelvin' && converted.value === 'kelvin'){
        outcome *=1
    }
    else if(convert.value === 'kelvin' && converted.value === 'celcius'){
        outcome -= 273.15
    }
    else if(convert.value === 'kelvin' && converted.value === 'fahrenheits'){
        let formula = (Number(inputValue.value)-273.15) * (9/5) + 32
        outcome = formula
    }

    display = outcome + ' ' + converted.value;
    result.innerText = display
}


inputValue.addEventListener('keyup', function(){
    if(values[0].innerHTML === 'TEMP FROM:'){
        if(isNaN(inputValue.value*5)){
                result.innerHTML = 'please input numbers only!!!'
            }else {
                convertTempUnit()
            }
    }
})
