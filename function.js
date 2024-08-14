// Question 1


function sumOfArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
sumOfArray([2,3,4,6])


// Question 2


function avgOfArray(nums) {
    let sum = 0; avg=0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    avg=sum/nums.length
    console.log(avg);
}

avgOfArray([1,2,3,4])

//Question 3

function longestString(str){   
    let longestString=''     
    for (let j=0; j<str.length; j++){
        if (str[j].length>=longestString.length){
            longestString=str[j]
        }
    }
    console.log(longestString)
}

longestString(['ab359t','abc','abcd','abcded'])

//Question 4
function longerString(array,num){
    let longerString=[]
    for(let i=0; i<array.length; i++){
        if(array[i].length>num){longerString.push(array[i])}
    }
    console.log(longerString)
}

longerString(['say', 'hello', 'in', 'the', 'morning'], 3)

//Question 5
function nRecursion(num, current=1){
    if (current > num) {
        return;
    }
    console.log(current);
    nRecursion(num,current+1)}

nRecursion(5)