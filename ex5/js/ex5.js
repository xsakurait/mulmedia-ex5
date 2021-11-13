let chr_cnt,int_cnt;
let lp_cnt;

chr_cnt = window.prompt("何回おみくじ引く？(半角数字)");
int_cnt = parseInt(chr_cnt,10);
console.log("int_cnt(入力値) =",int_cnt);

let pObj = window.document.getElementById("p_target");
pObj.innerHTML ="おみくじを" + chr_cnt +"回、引きます！";
for(lp_cnt = 0;lp_cnt<int_cnt;lp_cnt++){
    let omikuji = Math.floor(Math.random()*4); //0から3
    console.log("lp_cnt =%d omikuji =%d,lp_cnt,omikuji");
    switch(omikuji){
        case 0:
            window.document.write("大当たり！大吉！<br>");
            break;
        case 1:
            window.document.write("まあまあ、吉<br>");
            break;
        case 2:
            window.document.write("そこそこ、中吉<br>");
            break;
        case 3:
            window.document.write("次こそ！　小吉！<br>");
            break;
    }
}