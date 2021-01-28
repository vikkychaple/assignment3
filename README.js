#1)



function validateCreditCard(ccNumberNoDashes) {

    //Remove dashes from creditCardNum string
    var ccNumberNoDashes = '';
    for (var i = 0; i < creditCardNum.length; i++) {
        if (creditCardNum[i] !== '-') {
            ccNumberNoDashes += creditCardNum[i];
        }
    }

    // The credit card number must be 16 digits in length
    if (ccNumberNoDashes.length !== 16) {
        return false;
    }

    // All of the digits must be numbers
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        // store the current digit
        var currentNumber = ccNumberNoDashes[i];

        // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
        currentNumber = Number.parseInt(currentNumber);

        // check that the digit is a number
        if (!Number.isInteger(currentNumber)) {
            return false;
        }
    }

    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    var obj = {};
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        obj[ccNumberNoDashes[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }

    // The final digit of the credit card number must be even
    if (ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0) {
        return false;
    }

    // The sum of all the digits must be greater than 16
    var sum = 0;
    for (var i = 0; i < ccNumberNoDashes.length; i++) {
        sum += Number(ccNumberNoDashes[i]);
    }
    if (sum <= 16) {
        return false;
    }

    return true;
};

2)html code.....

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript difference between two dates in days</title>
</head>
<body>
</body>
</html>

Javascript....
var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));


3)html

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Window Size : height and width</title>
</head>
<!-- Resize the window (here output panel) and see the result !-->
<body onload="getSize()" onresize="getSize()">
<div id="wh"> 
<!-- Place height and width size here! --> 
</div>
<body>
</body>
</html>


javascript...

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " *Height: " + h + "</h1>";
}

4)html..

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Three digit armstrong numbers</title>
</head>
<body>
  
</body>
</html>
  Javascript...

function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();


5)html


<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>LCM of two numbers</title>
  </head>
  <body>
</body>
  </html>
   Javascript.....
function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));

