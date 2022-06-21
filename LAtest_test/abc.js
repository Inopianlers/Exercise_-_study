var sum=0
for(i=4; i<8; i++){
    if(i==6){
break;
    }
    sum += i;
}

document.getElementById('demo').innerHTML = document.write(sum);
