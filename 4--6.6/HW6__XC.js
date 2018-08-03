class TreeNode{
    constructor(name,val){
        this.name = name;
        this.val = val;
        this.LeftChild = null;
        this.RightChild = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    create(num){
        
        function createSort(min,max){
            if(min == max)
                return new TreeNode("name:"+min,min);
            if(min>max||max<min)
                return null;   
            let curr_root_val = parseInt((max+min+1)/2);
            let root = new TreeNode("name:"+curr_root_val,curr_root_val);
            root.LeftChild = createSort(min,curr_root_val-1);
            root.RightChild = createSort(curr_root_val+1,max);
            return root;
        }
        this.root = createSort(1,num);
        
    }
    dfs(val){
        let result = null;
        return (function search(root){
            if(root==null||result!=null){
                return;
            }
                
            else if(root.val == val){
                result = root.name;
            }else{
                search(root.LeftChild);
                search(root.RightChild);
                
            }
            return result==null?"not found":result;
        })(this.root);
        
    }
    bfs(val){       
        return function find(root){
            let queue = [];
            while(root!=null){
                if(root.val == val)
                    return root.name;
                if(root.LeftChild!=null)
                    queue.push(root.LeftChild);
                if(root.RightChild!=null)
                    queue.push(root.RightChild);
                root = queue.shift();
            }
            return "not found"
        }(this.root);
    }
    // structure(){
    //     let root = this.root;
    //     console.log(root.val);
    //     let str = "";
    //     let count = 1;
    //     let sum = 0;
    //     let queue = [];
    //     while(root!=null){
    //         if(root.LeftChild==null){
    //             str+="0 ";
    //         }
    //         else{
    //             queue.push(root.LeftChild);
    //             str+=root.LeftChild.val+" ";
    //         }
    //         if(root.RightChild==null){
    //             str+="0 ";
    //         }else{
    //             queue.push(root.RightChild);

    //         }
                
    //         root = queue.shift();
    //     }
    //     return "not found"
        

    // }
}


let tree = new Tree();
tree.create(7);
console.log(tree.root.val);
console.log(tree.root.RightChild.LeftChild.val);

console.log("dfs: "+tree.dfs(3));
console.log("bfs: "+tree.bfs(2));
