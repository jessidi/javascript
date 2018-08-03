var TwoSum = function(){

    this.map = new Map();

    this.add = function(val) {
        if(!this.map.has(val)) this.map.set(val, 1);
        else this.map.set(val, this.map.get(val) + 1);
    }

    this.find = function(target) {
        for(let key of this.map){
            key = parseInt(key);
            if(target - key === key && this.map.get(key) > 1 || this.map.has(target - key)) return true;
        }
        return false;
    }

    this.remove = function(target) {
        let num = this.map.get(target);
        if(num === undefined) return 0;
        this.map.delete(target);
        return num;
    }
}


var sum = new TwoSum();
sum.add(1);
sum.add(1);
sum.add(3);
sum.add(5);
console.log(sum.find(4));
console.log(sum.find(7));
console.log(sum.remove(1));
console.log(sum.find(1));
