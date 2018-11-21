let obj = {
    Name: "anand",
    Stream: "IT",
    Age: 28
}

let jsonObj = JSON.stringify(obj);
console.log(jsonObj);


console.log(JSON.parse(jsonObj));


//filter  
let players = [{
            name: "Virat Kohli",
            Profession: "cricketer"
        },
        {
            name: "Roger Federer,"
            Profession: "tennis player"
        },

    },
]