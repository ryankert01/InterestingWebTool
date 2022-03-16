document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('#go').onclick = () => {
        const stringNum1 = document.querySelector('#num1').value;
        const stringNum2 = document.querySelector('#num2').value;

        //convert to integers
        var num1 = new Array();
        var j = 0;
        for(var i = stringNum1.length - 1; i >= 0 ; i--){
            num1[j] = Number(stringNum1[i]); j++;
        }
        var num2 = new Array();
        j=0;
        for(var i = stringNum2.length - 1; i >= 0; i--){
            num2[j] = Number(stringNum2[i]); j++;
        }

        substraction(num1,num2);

        var ansNum = new Array();
        j = 0;
        for(var i = num1.length; i >= 0; i--){
            ansNum[j] = num1[i];
            j++;
        }

        const ans1 = ansNum.join('');

        document.querySelector('.ans').textContent = ans1;
    }
});

function substraction(num1, num2){
    for(var i = 0; i < num2.length; i++){
        num1[i] -= num2[i];
    }
    for(var i = 0; i < num1.length; i++){
        while(num1[i] < 0){
            num1[i] += 10;
            num1[i+1]--;
        }
    }
    while(num1[num1.length-1] == 0){
        num1.pop();
    }
    
}