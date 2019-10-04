let arr = [5,6,10,13,14,18,12,24,26,28];

function binarSearch(arr,e) {
    let low=0;
    let end = arr.length-1;
    mid=Math.floor(low+end)/2;
    while(arr[mid]!=e && low<=end) {
        if(e<arr[mid]) {
            low = 0;
            end = mid-1;
        } else if( e>arr[mid]) {
            low = mid+1;
        }
         mid = Math.floor((low+end)/2);
    }
    return arr[mid] == e ?mid : -1
}
console.log(binarSearch(arr,5));

let l = 0;
let end = arr.length-1;
let  e = 28
function recursiveBinary(arr,l,end,e) {
    let mid=Math.floor((l+end)/2);
    
    if(e == arr[mid]) {
        return mid;
    } else if(e>arr[mid]) {
        l = mid+1;
       return recursiveBinary(arr,l,end,e);
    } else if(e<arr[mid]){
        end = mid-1;
       return recursiveBinary(arr,l,end,e);
    } else {
        return -1;
    }

}
console.log(recursiveBinary(arr,l,end,5));
