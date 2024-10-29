let arr = [7,1,5,3,6,4];
let curr_min = arr[0]; // atleast buy on day 0
let profit = 0;

// agar value chota hai toh curr_min set karo
// agar value bada hai toh profit set karo 
// profit set karo only if joh profit mila hai voh phle wle profit se jada ho

for(let i = 1 ; i < arr.length ; i++) {

	  // can I sell?
    if(arr[i] > curr_min) {
				// you can sell , but check if it is better then prev profit ?
        profit = Math.max(profit,arr[i] - curr_min);
    }

		// can I buy?
    if(arr[i] < curr_min) {
        curr_min = arr[i];
    }

    
}

console.log(profit); // 5

