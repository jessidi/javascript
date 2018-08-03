function reverses(s){
    let array = s.split(' ');
    let i = 0, j = array.length - 1;
    while(i < j){
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
    }
    return array.join(' ');
}
console.log(reverses("the sky is blue"));

