/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/



let hand = []

function handValue (hand) {
	
	let total = 0;

	//loop over the hand array and add the value of each card to total

	    for (let i = 0; i < hand.length; i++){
	    	
	    	if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
				total += 10
			}

			if (hand[i] === "A") {
				total += 11
			}

			if (hand[i] === "1") {
				total += 1
			}

			if (hand[i] === "2") {
				total += 2
			}

			if (hand[i] === "3") {
				total += 3
			}

			if (hand[i] === "4") {
				total += 4
			}

			if (hand[i] === "5") {
				total += 5
			}

			if (hand[i] === "6") {
				total += 6
			}

			if (hand[i] === "7") {
				total += 7
			}

			if (hand[i] === "8") {
				total += 8
			}

			if (hand[i] === "9") {
				total += 9
			}

			if (hand[i] === "10") {
				total += 10
			}

	    	//if hand[i] is an A then add 11 to total

	    	//else it's a number card so add it's value to total

	    }
        for (let j = 0; j < hand.length; j++){
			if (total > 21 && hand[j] === "A"){
				total -= 10
			}

		}
	    //check if the total is greater than 21, if so and you have an ace, subtract 10.
	    //put that in a loop so you can check for more than one ace


	return total;
}
