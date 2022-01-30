function devolverMayores(arr){
    let resultado = [];
    for(let i = 0; i < arr.length; i++){
         let  mayores = arr[i][0];// que empiece primero de cada subarreglo
         for(let j = 0; j < arr[i].length; j++){//arr[i] es cada subarreglo
            if(arr[i][j] > mayores){
                mayores = arr[i][j];
            }
         }
         resultado[i] = mayores
    }
    console.log (resultado)
}
devolverMayores([[52,36,555,88], [33,4,666,87,54], [21,1,34,900]]);

//para acceder a turing
function find_max(nums){
    let max_num=Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num>max_num){
            max_num=num;
        }
    }
    console.log(max_num)
}

find_max([2,3,4,6,10,5])