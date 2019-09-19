// [6,3,5,8] = [6][3][5][8][6,3][5,8]  ==> 6 , max noof odd numbers = 1
// [2,1,2,1,3] = [[2][1][3][2,1][1,2][2,1,2][1,3][1,2,1][2,1,3][2,1,2,1]] ==> 10, max noof odd numbers=2
let nums = [6,3,5,8];
let n=1;

let main_arr = [];
for(let i=1;i<nums.length;i++) {
    for(let j=0;j<nums.length;j++) {
        let small_arr = [];
        let odd = 0;
        let count = 0;    
        for(let k=j;k<j+i;k++) {
            if(nums[k] !== undefined) {
                small_arr.push(nums[k]);
                if(nums[k]%2 ==1) {
                    odd++;
                } 
            }
        }
        if( i !=1 && j>nums.length-i) {
            continue;
        }
        if(odd<=n) {
            for(let ele of main_arr) {
                if(ele.length == small_arr.length) {
                    for( let i =0; i<ele.length;i++) {
                        if(ele[i]==small_arr[i]) {
                            count++;
                        }
                    }
                }
            }
            if(count!==small_arr.length) {
                main_arr.push(small_arr);
            }
        }
    }
}
console.log(main_arr.length);
