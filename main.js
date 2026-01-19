let paper = document.getElementById('paper')
let rock  = document.getElementById('rock')
let scissors  = document.getElementById('scissors')
let choice  = document.getElementById('choice')
let answer  = document.getElementById('answer')
let myChoice


// 随机生成石头剪刀布:0布 1石头 2剪刀
function randomNum(){
    // 生成 0, 1, 2 之间的随机整数
    let randomNum = Math.floor(Math.random() * 3); 
    if(randomNum == 0){
        answer.innerHTML = `<img src="./images/paper.svg" width="250px" height="250px"/>`
    }else if(randomNum == 1){
        answer.innerHTML = `<img src="./images/rock.svg" width="250px" height="250px"/>`
    }else{
        answer.innerHTML = `<img src="./images/scissors.svg" width="250px" height="250px"/>`
    }

    let result = determineWinner(myChoice,randomNum)
    setTimeout(function(){
        alert(result)
    },1000)
}

// 判断胜负的函数
function determineWinner(player, computer) {
    // 如果相同，平局
    if (player === computer) {
        return "平手！再来一局吧";
    }
    
    // 胜利规则：
    // 0(布) 赢 1(石头)
    // 1(石头) 赢 2(剪刀)
    // 2(剪刀) 赢 0(布)
    
    // 检查玩家是否获胜
    if (
        (player === 0 && computer === 1) || // 布赢石头
        (player === 1 && computer === 2) || // 石头赢剪刀
        (player === 2 && computer === 0)    // 剪刀赢布
    ) {
        return "你赢了";
    }
    
    // 否则电脑获胜
    return "你输了";
}

paper.addEventListener('click',function(){
    myChoice = 0
    choice.innerHTML= `<img src="./images/paper.svg" width="250px" height="250px"/>`
    randomNum()
})
rock.addEventListener('click',function(){
    myChoice = 1
    choice.innerHTML= `<img src="./images/rock.svg" width="250px" height="250px"/>`
    randomNum()
})
scissors.addEventListener('click',function(){
    myChoice = 2
    choice.innerHTML= `<img src="./images/scissors.svg" width="250px" height="250px"/>`
    randomNum()
})