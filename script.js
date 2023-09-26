const convert = document.querySelector('#from')
const converted = document.querySelector('#convert-to')
let result = document.querySelector('p');
const inputValue = document.querySelector('input');



        function convertUnit (){
            if (convert.value === 'kilograms' && converted.value === 'kilograms'){
            let outcome = Number(inputValue.value) * 1;
            result.innerText = outcome + ' ' + converted.value;
        }
        else if(convert.value === 'kilograms' && converted.value === 'grams'){
            let outcome = Number(inputValue.value) * 1000;
            result.innerText = outcome + ' ' + converted.value;
        } else if(convert.value === 'kilograms' && converted.value === 'ounces'){
            let outcome = Number(inputValue.value) * 35.274;
            result.innerText = outcome + ' ' + converted.value;
        } else if(convert.value === 'kilograms' && converted.value === 'pounds'){
            let outcome = Number(inputValue.value) * 2.205;
            result.innerText = outcome + ' ' + converted.value;
        } else if(convert.value === 'kilograms' && converted.value === 'us-tons'){
            let outcome = Number(inputValue.value) * 0.0011;
            result.innerText = outcome + ' ' + converted.value;
        } else if(convert.value === 'kilograms' && converted.value === 'uk-tons'){
            let outcome = Number(inputValue.value) * 0.000984;
            result.innerText = outcome + ' ' + converted.value;
        } else if(convert.value === 'kilograms' && converted.value === 'tons'){
            let outcome = Number(inputValue.value) * 0.001;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'grams'){
            let outcome = Number(inputValue.value) * 1;
            result.innerText = outcome + ' ' + converted.value;
        } 
        else if (convert.value === 'grams' && converted.value === 'kilograms') {
            let outcome = Number(inputValue.value) * 0.001;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'ounces') {
            let outcome = Number(inputValue.value) * 0.035274;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'pounds') {
            let outcome = Number(inputValue.value) * 0.002205;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'us-tons') {
            let outcome = Number(inputValue.value) * 0.0000011023;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'uk-tons') {
            let outcome = Number(inputValue.value) * 0.000000984;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'grams' && converted.value === 'tons') {
            let outcome = Number(inputValue.value) * 0.000001;
            result.innerText = outcome + ' ' + converted.value;
        } // OUNCES
        else if (convert.value === 'ounces' && converted.value === 'ounces'){
            let outcome = Number(inputValue.value) * 1;
            result.innerText = outcome + ' ' + converted.value;
        } 
        if (convert.value === 'ounces' && converted.value === 'kilograms') {
            let outcome = Number(inputValue.value) * 0.0283495;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'ounces' && converted.value === 'grams') {
            let outcome = Number(inputValue.value) * 28.3495;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'ounces' && converted.value === 'pounds') {
            let outcome = Number(inputValue.value) * 0.0625;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'ounces' && converted.value === 'us-tons') {
            let outcome = Number(inputValue.value) * 0.00003125;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'ounces' && converted.value === 'uk-tons') {
            let outcome = Number(inputValue.value) * 0.0000279018;
            result.innerText = outcome + ' ' + converted.value;
        } else if (convert.value === 'ounces' && converted.value === 'tons') {
            let outcome = Number(inputValue.value) * 0.0000283495;
            result.innerText = outcome + ' ' + converted.value;
        }  // POUNDS

            if (convert.value ==='pounds' && converted.value === 'pounds'){
                    let outcome = Number(this.value)*1
                    result.innerText = outcome + ' ' + converted.value
                } 
                        if (convert.value === 'pounds' && converted.value === 'grams') {
                    let outcome = Number(this.value) * 453.592;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'pounds' && converted.value === 'ounces') {
                    let outcome = Number(this.value) * 16;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'pounds' && converted.value === 'kilograms') {
                    let outcome = Number(this.value) * 0.453592;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'pounds' && converted.value === 'us-tons') {
                    let outcome = Number(this.value) * 0.0005;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'pounds' && converted.value === 'uk-tons') {
                    let outcome = Number(this.value) * 0.000446;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'pounds' && converted.value === 'tons') {
                    let outcome = Number(this.value) * 0.0005;
                    result.innerText = outcome + ' ' + converted.value;
                }// US-TONS
                else if (convert.value ==='us-tons' && converted.value === 'us-tons'){
                    let outcome = Number(this.value)*1
                    result.innerText = outcome + ' ' + converted.value
                } 
                        if (convert.value === 'us-tons' && converted.value === 'grams') {
                    let outcome = Number(this.value) * 907185;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'us-tons' && converted.value === 'ounces') {
                    let outcome = Number(this.value) * 32000;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'us-tons' && converted.value === 'kilograms') {
                    let outcome = Number(this.value) * 907.185;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'us-tons' && converted.value === 'pounds') {
                    let outcome = Number(this.value) * 2000;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'us-tons' && converted.value === 'uk-tons') {
                    let outcome = Number(this.value) * 0.892857;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'us-tons' && converted.value === 'tons') {
                    let outcome = Number(this.value) * 0.91;
                    result.innerText = outcome + ' ' + converted.value;
                } //UK-TONS

                else if (convert.value ==='uk-tons' && converted.value === 'uk-tons'){
                    let outcome = Number(this.value)*1
                    result.innerText = outcome + ' ' + converted.value
                } 
                    else if (convert.value === 'uk-tons' && converted.value === 'grams') {
                    let outcome = Number(this.value) * 1016047.67;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'uk-tons' && converted.value === 'ounces') {
                    let outcome = Number(this.value) * 35840;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'uk-tons' && converted.value === 'kilograms') {
                    let outcome = Number(this.value) * 1016.04767;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'uk-tons' && converted.value === 'pounds') {
                    let outcome = Number(this.value) * 2240;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'uk-tons' && converted.value === 'us-tons') {
                    let outcome = Number(this.value) * 1.12;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'uk-tons' && converted.value === 'tons') {
                    let outcome = Number(this.value) * 1.016;
                    result.innerText = outcome + ' ' + converted.value;
                } // TONS
                if (convert.value === 'tons' && converted.value === 'tons'){
                    let outcome = Number(this.value)*1
                    result.innerText = outcome + ' ' + converted.value
                } 
                else if (convert.value === 'tons' && converted.value === 'grams') {
                    let outcome = Number(this.value) * 1000000;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'tons' && converted.value === 'ounces') {
                    let outcome = Number(this.value) * 35273.96;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'tons' && converted.value === 'kilograms') {
                    let outcome = Number(this.value) * 1000;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'tons' && converted.value === 'pounds') {
                    let outcome = Number(this.value) * 2204.62;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'tons' && converted.value === 'us-tons') {
                    let outcome = Number(this.value) * 1.10231;
                    result.innerText = outcome + ' ' + converted.value;
                } else if (convert.value === 'tons' && converted.value === 'uk-tons') {
                    let outcome = Number(this.value) * 0.984207;
                    result.innerText = outcome + ' ' + converted.value;
                };


            };










    inputValue.addEventListener('keyup', function (){
        convertUnit()


    });