function index_belongs(arr, num){
    function comparar(a,b){
        a-b
    }
    arr.sort(comparar)
    for (let i = 0; i<arr.length;i++){
        if(arr[i] >= num){
            console.log(i)
        }
    }
    console.log(arr.length);
}
index_belongs([1,20,3,40,5,6,7,8.5],7.5)