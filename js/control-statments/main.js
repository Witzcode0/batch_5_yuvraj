const nums = [1,2,3,4,5,6,7,8,9,10];

for (let num of nums){
    if(num == 2){
        continue;
    }

    if(num == 6){
        break;
    }
    console.log(num)
}