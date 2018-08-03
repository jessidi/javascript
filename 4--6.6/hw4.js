// function Earth(){
//     this.name = "Our home";  
// }

// var Singleton = {
//     instance: null,
//     getInstance: function() {
//         if(!this.instance){
//             this.instance = new Earth();
//         }
//         return this.instance;
//     }
// }

// var a = Singleton.getInstance();
// var b = Singleton.getInstance();
// console.log(a === b);

var Singleton = (function() {
    var instance;
    function getInstance(){
        if(instance === undefined){
            instance = new Earth();
        }
        return instance;
    }
    function Earth(){
        this.name = 'Earth';
        this.number = 1;
    }
   return {
        getInstance: getInstance
   };
})();
var a = Singleton.getInstance();
var b = Singleton.getInstance();
console.log(a);
console.log(a === b);


