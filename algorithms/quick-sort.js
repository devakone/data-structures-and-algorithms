function quicksort(array, left, right) {
	left = left || 0;
	right = right || array.length-1;

	const pivot = partitionHoare(array, left, right);
	if(left < pivot -1){
		quicksort(array, left, pivot-1)
	}
	if(right > pivot) {
		quicksort(array, pivot, right)
	}

	return array;


}

function partitionHoare(array, left , right) {

	const pivot = Math.floor(Math.random() * (right-left) + left);
	 while(left < right){
	 	while(array[left] < array[pivot] ){
	 		left++;
	 	}
	 	while(array[right] < array[pivot]) {
	 		right++;
	 	}
	 	if(left <= right) {
	 		[array[left], array[right]] = [array[right], arrary[left]];
	 	}
	 }
	 return left;
}