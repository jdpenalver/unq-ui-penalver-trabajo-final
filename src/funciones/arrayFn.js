
const duplicarValores = (arr) => {
    return arr.concat(arr)
}

const mezclar = (arr) => {
    let arrMezclado = arr
        for(var i =arrMezclado.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) ); //random index
            [arrMezclado[i],arrMezclado[j]]=[arrMezclado[j],arrMezclado[i]]; // swap
        }
        return arrMezclado;
    }

export const funcionesArray = {
    duplicarValores, 
    mezclar
}