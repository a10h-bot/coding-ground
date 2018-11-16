const animal =[ {
	            "name" :"cat",
                "size" :"small",
                "weight" :6
                },
                {
	            "name" :"dog",
                "size" :"small",
                "weight" :10
                },
                {
	            "name" :"lion",
                "size" :"medium",
                "weight" :100
                },
                {
	            "name" :"elephant",
                "size" :"big",
                "weight" :500
                }
]

const ages=[33,45,67,23,89,26,34,21,38,35,16,18];
//console.log(animal);

let onlyNames=[];
for (var i = 0; i < animal.length; i++) {
	onlyNames.push(animal[i].name);
}
//console.log(onlyNames);

//let canDrink =[];
//for (var i = 0; i < ages.length; i++) {
	 //if(ages[i]>=21){
	 	//canDrink.push(ages[i]);
	 //}

//}
//console.log(canDrink);

let canDrink2 =ages.filter(function(age){
	if(age>=33){
	return true;
}
});
console.log(canDrink2);

const canDrink3 =ages.filter(age=>age>=33)
console.log(canDrink3);
