let son1 = prompt(" 1 son kiriting")
let son2 = prompt(" 2 son kiriting")
let son3 = prompt(" 2 son kiriting")
if (son1 < son2 && son1 > son3 ||son1 < son3 && son1 > son2){
    console.log("orta son", son1)
}else if(son2 < son1 && son2 > son3 || son2 < son3 && son2 > son1){
    console.log("orta son ", son2)
}else if(son3 < son1 && son3 > son2 || son3 < son2 && son3 > son1){
    console.log("orta son ", son3)
}
