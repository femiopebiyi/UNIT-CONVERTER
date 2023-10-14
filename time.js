buttons[3].addEventListener('click', function(){
    convert.innerHTML = `
    <option value="milliseconds">Milliseconds</option>
    <option value="seconds">Seconds</option>
    <option value="minutes">Minutes</option>
    <option value="hours">Hours</option>
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    `

    converted.innerHTML = `
    <option value="milliseconds">Milliseconds</option>
    <option value="seconds">Seconds</option>
    <option value="minutes">Minutes</option>
    <option value="hours">Hours</option>
    <option value="days">Days</option>
    <option value="weeks">Weeks</option>
    `

    values[0].innerHTML = 'TIME FROM:'
    result.innerHTML = 0 + ' ' + converted.value
    inputValue.value = ''
})




function convertTime (){
    let outcome = Number(inputValue.value)
    let display;
    //milliseconds

    if(convert.value === 'milliseconds' && converted.value === 'milliseconds'){
        outcome*=1
    } else if(convert.value === 'milliseconds' && converted.value === 'seconds'){
        outcome*= 0.001
    } else if(convert.value === 'milliseconds' && converted.value === 'minutes'){
        outcome*=0.0000166667
    } else if(convert.value === 'milliseconds' && converted.value === 'hours'){
        outcome*=0.00000027778
    } else if(convert.value === 'milliseconds' && converted.value === 'days'){
        outcome*= 0.00001157407
    } else if (convert.value === 'milliseconds' && converted.value === 'weeks'){
        outcome*= 0.00000000165344
    }
    // seconds conversion
    else if (convert.value === 'seconds' && converted.value === 'seconds'){
        outcome*= 1
    } else if (convert.value === 'seconds' && converted.value === 'milliseconds'){
        outcome*= 1000
    }  else if (convert.value === 'seconds' && converted.value === 'minutes'){
        outcome*= 0.0166666667
    }  else if (convert.value === 'seconds' && converted.value === 'hours'){
        outcome*= 0.0002777778
    }  else if (convert.value === 'seconds' && converted.value === 'days'){
        outcome*= 0.0000115741
    }  else if (convert.value === 'seconds' && converted.value === 'weeks'){
        outcome*= 0.0000016534
    }

    display = outcome + ' ' + converted.value;
    result.innerText = display
}


inputValue.addEventListener('keyup', function(){
    if(values[0].innerHTML === 'TIME FROM:'){
        if(isNaN(inputValue.value*5)){
                result.innerHTML = 'please input numbers only!!!'
            }else {
                convertTime()
            }
    }
})