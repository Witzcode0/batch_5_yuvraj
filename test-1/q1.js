const nums = [1,22,3,4,5,66];

var max_num = nums[0]

for(let num of nums){
    // console.log(num);
    if(num > max_num){
        max_num = num
    }
}

console.log(max_num)