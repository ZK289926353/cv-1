let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/* 你好，我是一名前端新人
 接下来我要加样式了
 我要加的样式是*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
 * 看好了
 * 首先，把div变成一个园
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
}
/* 八卦是阴阳组成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(2,0,36,1) 50%, rgba(2,0,36,1) 100%);
}
/* 加两个神秘的小球
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 25%, rgba(2,0,36,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(2,0,36,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';

let n = 0;

let step = () => {
    if (n < string.length) {
        setTimeout(() => {
            if (string[n] === '\n') {
                string2 += '<br>';
            } else if (string[n] === ' ') {
                string2 += '&nbsp';
            } else {
                string2 += string[n];
            }
            n++;
            html.innerHTML = string2;
            window.scrollTo(0, 99999);
            html.scrollTo(0, 99999);
            style.innerHTML = string.substring(0, n);
            step();
        }, 50);
    }
}
step();