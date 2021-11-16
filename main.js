/*
var btn = document.getElementById('btn');
var m = document.getElementById('member');
var result = document.getElementById('result')
let members = new Array();
//ボタンを押したときのアニメーション
btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
});

//ボタンから離れたときの処理
btn.addEventListener('mouseup', function() {
    this.className = '';
});

//ボタンをクリックしたときの処理
btn.addEventListener("click", function() {
    members.push = m;
    for (let i = 0; i < members.length; i++) {
        result.textContent = members[i];
    }
});
*/
const onClickAdd = () => {
    const inputMember = document.getElementById("member").value;
    document.getElementById("member").value = "";
    createMemcerList(inputMember);
}
const createMemcerList = (m) => {
    const div = document.createElement("div");
    div.class = "new-member" //今後CSSで操作するかも

    const li = document.createElement("li");
    li.innerText = m;

    const yameru = document.createElement("button");
    yameru.innerText = "やっぱやめる！";
    yameru.addEventListener("click", () => {
        document.getElementById("add-list").removeChild(yameru.parentNode);
    })
    div.appendChild(li);
    div.appendChild(yameru);
    document.getElementById("add-list").appendChild(div);
}
document.getElementById("add-member").addEventListener("click", () => onClickAdd());