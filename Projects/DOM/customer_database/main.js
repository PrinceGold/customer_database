
//get the HTML element you want to manipulate using document.getElementById()


//For each customer create a string with a div and the customer informtion in HTML



let htmlStr  = ""
customers.results.map(function(item){
	htmlStr += `

		<div class='divide'>
		<img src='${item.picture.large}'/>
		<h2 class="name"> ${item.name.first} ${item.name.last} </h2>
		<p class="email"> ${item.email} </p>
		<p class="middle"> ${item.location.street} </p>
		<p class="middle"> ${item.location.city} ${item.location.state} ${item.location.postcode} </p>
		<p class="middle"> ${item.cell} </p>
		<p class="green"> ${item.id.value} </p>
		</div>
	`
})



	
	//Append new stinrg to customers.innerHTML
	// customers.innerHTML += html
document.getElementById("customers").innerHTML += htmlStr;
