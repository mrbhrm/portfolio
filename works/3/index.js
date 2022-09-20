// 必要な定数を定義する
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

// ローカルストレージにtodosが存在すれば。リストに入れる
if(todos){
    todos.forEach(todo => {
        add(todo);
    })
}

// インターが押されたときリストに追加する
form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
});


// リストに追加するための関数を作る
function add(todo){
    // 入力された文を変数に入れる
    let todoText = input.value;
    // todo にテキストがあった場合に変数に入れる 
    if (todo) {
        todoText = todo.text;
    }
    // 入力された文をリストに追加する
    if (todoText){
        // li　にリストを追加する
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        // todoとconpleteタグがあった場合リストに打消し線をつける
        if(todo && todo.completed) {
            li.classList.add("text-decoration-line-through");
        }
        // 右クリックしたときリストから消す
        li.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            li.remove();
            saveData();
        });
        // クリックしたとき打消し線をつける
        li.addEventListener("click", function () {
            li.classList.toggle("text-decoration-line-through");
            saveData();
        });
        // リストを追加する
        ul.appendChild(li);
        input.value = "";
        saveData();
    }

}

// ローカルストレージにデータを保存する
function saveData() {
    // リストの要素をtodosに保存する
    const lists = document.querySelectorAll("li");
    let todos = [];
    // リストの要素それぞれにタグをつけてtodosに入れる
    lists.forEach(list =>{
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    });
    // ローカルストレージにtodosを入れる
    localStorage.setItem("todos", JSON.stringify(todos));
}