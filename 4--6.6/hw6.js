
function BST(){
    this.root = null;
    function Node(val){
        this.val = val;
        this.leftNode = null;
        this.rightNode = null;
    }
    
    this.createTree = function(array){
        this.root = create(array, 0, array.length - 1);
    }

    function create(array, min, max){
        if(min === max) return new Node(array[min]);
        if(min > max) return null;
        var mid = parseInt(min + (max - min) / 2);
        var node = new Node(array[mid]);
        node.leftNode = create(array, min, mid - 1);
        node.rightNode = create(array, mid + 1, max);
        return node;
    }

    this.bfs = function(target){
        var queue = [];
        queue.push(this.root);
        while(queue.length != 0){
            var node = queue.shift();
            if(node.val === target) return true;
            if(node.leftNode != null) queue.push(node.leftNode);
            if(node.rightNode != null) queue.push(node.rightNode);
        }
        return false;
    }

    this.dfs = function(target){
        return helper(this.root, target);
    }
    function helper(root, target) {
        if(root === null) return false;
        if(root.val === target) return true;
        return helper(root.leftNode, target) || helper(root.rightNode, target);
    }
}



var nodes = [6,1,4,5,2,10,3,8,9,7];
nodes.sort(function(a, b){ return a - b});
var binaryTree = new BST();
binaryTree.createTree(nodes);
console.log(binaryTree.dfs(10));

