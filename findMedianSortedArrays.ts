export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    var array: number[] = nums1.concat(nums2)
    var negativeArray: number[] = [];
    array.sort((a, b) => { return a - b});
    if (array.some(number => number < 0)) {
      negativeArray = array.filter(number => number < 0);
      negativeArray.sort((a, b) => a - b)
      for (let i=0; i<negativeArray.length; i++) {
        array[i] = negativeArray[i]
      }
    }
  
    if (array.length%2==0) {
      return (array[array.length/2] + array[(array.length/2)-1]) / 2;
    }
    else return array[Math.floor(array.length/2)]
  };