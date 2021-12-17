module.exports = function toReadable (number) {
    const one =  "one";
    const  two =  "two";
    const  three=  "three";
    const  four=  "four";
    const  five=  "five";
    const  six =  "six";
    const  seven=  "seven";
    const  eight=  "eight";
    const  nine=  "nine";
    const zero =  "zero";
    const oneDigit = () => {
        switch (number) {
         case  1: return one;
         case  2: return two;
         case  3: return three;
         case  4: return four;
         case  5: return five;
         case  6: return six;
         case  7: return seven;
         case  8: return eight;
         case  9: return nine;
         case  0: return zero;
                 }


    if(number < 10) {
        oneDigit();
        }
        
    } else if (number >= 10 &&  number < 20) {
        switch (number) {
            case  11: return "eleven";
            case  12: return "twelve";
            case  13: return "thirteen";
            case  14: return `${four}teen`;
            case  15: return "fifteen";
            case  16: return `${six}teen`;
            case  17: return `${seven}teen`;
            case  18: return `${eight}een`;
            case  19: return `${nine}teen`;
            case  10: return "ten ";
                    }
    } else if (number >= 20 &&  number < 100) {
        switch (+ number.toString()[0]){
            case  2: 
            switch (+ number.toString()[1]) {
                case  1: return `twenty-${one}`;
                case  2: return `twenty-${two}`;
                case  3: return `twenty-${three}`;
                case  4: return `twenty-${four}`;
                case  5: return `twenty-${five}`;
                case  6: return `twenty-${six}`;
                case  7: return `twenty-${seven}`;
                case  8: return `twenty-${eight}`;
                case  9: return `twenty-${nine}`;
                case  0: return `twenty`;
                        }


            case  3:
                switch (+ number.toString()[1]) {
                case  1: return `thirty-${one}`;
                case  2: return `thirty-${two}`;
                case  3: return `thirty-${three}`;
                case  4: return `thirty-${four}`;
                case  5: return `thirty-${five}`;
                case  6: return `thirty-${six}`;
                case  7: return `thirty-${seven}`;
                case  8: return `thirty-${eight}`;
                case  9: return `thirty-${nine}`;
                case  0: return `thirty`;
                        }
            case  4: 
            switch (+ number.toString()[1]) {
                case  1: return `forty-${one}`;
                case  2: return `forty-${two}`;
                case  3: return `forty-${three}`;
                case  4: return `forty-${four}`;
                case  5: return `forty-${five}`;
                case  6: return `forty-${six}`;
                case  7: return `forty-${seven}`;
                case  8: return `forty-${eight}`;
                case  9: return `forty-${nine}`;
                case  0: return `forty`;
            }


            case  5: 
            switch (+ number.toString()[1]) {
                case  1: return `fifty-${one}`;
                case  2: return `fifty-${two}`;
                case  3: return `fifty-${three}`;
                case  4: return `fifty-${four}`;
                case  5: return `fifty-${five}`;
                case  6: return `fifty-${six}`;
                case  7: return `fifty-${seven}`;
                case  8: return `fifty-${eight}`;
                case  9: return `fifty-${nine}`;
                case  0: return `fifty`;
            }
            case  6: 
            switch (+ number.toString()[1]) {
                case  1: return `sixty-${one}`;
                case  2: return `sixty-${two}`;
                case  3: return `sixty-${three}`;
                case  4: return `sixty-${four}`;
                case  5: return `sixty-${five}`;
                case  6: return `sixty-${six}`;
                case  7: return `sixty-${seven}`;
                case  8: return `sixty-${eight}`;
                case  9: return `sixty-${nine}`;
                case  0: return `sixty`;
            }
            case  7: 
            switch (+ number.toString()[1]) {
                case  1: return `seventy-${one}`;
                case  2: return `seventy-${two}`;
                case  3: return `seventy-${three}`;
                case  4: return `seventy-${four}`;
                case  5: return `seventy-${five}`;
                case  6: return `seventy-${six}`;
                case  7: return `seventy-${seven}`;
                case  8: return `seventy-${eight}`;
                case  9: return `seventy-${nine}`;
                case  0: return `seventy`;
            }
            case  8: 
            switch (+ number.toString()[1]) {
                case  1: return `eighty-${one}`;
                case  2: return `eighty-${two}`;
                case  3: return `eighty-${three}`;
                case  4: return `eighty-${four}`;
                case  5: return `eighty-${five}`;
                case  6: return `eighty-${six}`;
                case  7: return `eighty-${seven}`;
                case  8: return `eighty-${eight}`;
                case  9: return `eighty-${nine}`;
                case  0: return `eighty`;
            }
            case  9: 
            switch (+ number.toString()[1]) {
                case  1: return `ninety-${one}`;
                case  2: return `ninety-${two}`;
                case  3: return `ninety-${three}`;
                case  4: return `ninety-${four}`;
                case  5: return `ninety-${five}`;
                case  6: return `ninety-${six}`;
                case  7: return `ninety-${seven}`;
                case  8: return `ninety-${eight}`;
                case  9: return `ninety-${nine}`;
                case  0: return `ninety`;
        }


       

    }
   
        } else if (number >= 100 && number < 1000){
            switch (+ number.toString()[0]){
                case 1: 
                return 
            }

        }
}
