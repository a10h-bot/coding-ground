class graphNode{
    constructor(dataValue,edge){
        this.dataValue=dataValue;
        this.edge=edge;
    }
}

let x = new graphNode(6,8);
console.log(x);
let graph ={};
graph["you"] =["Alice","Bob","Kate"];
graph["Alice"]=["wills","David","Daniel","Irvin"];
graph["wills"]=[];
graph["Bob"] ="Irvin";
console.log(graph);

console.log("Hello I am a developer !");