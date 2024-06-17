const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let curresntSub=[];
	let sum =0;
	for(let i=0;i<arr.length;i++){
		const num=arr[i];
		if(sum+num<=n){
			curresntSub.push(num);
			sum+=num;
		}
		else{
			result.push(curresntSub);
			curresntSub=[num];
			sum=num;
		}
	}
	if(curresntSub.length>0){
		result.push(curresntSub);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
