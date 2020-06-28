let todoitems: string[] = ["kochen", "putzen", "tanzen"];

window.addEventListener("load", function () {
    var muell: HTMLElement = document.getElementsByClassName("fas fa-trash-alt");
    var todofeld: HTMLElement = document.querySelector(".addlist");

    todoliste();

    var input: HTMLInputElement = document.querySelector("#input");
    console.log(input);
    var button: HTMLElement = document.querySelector("#button");



    button.addEventListener('keypress', function (e) {
        if(e.key === 'Enter'){
        todoitems.push(input.value);
        todoliste();
        input.value = "";
        console.log(todoitems);
        } 
    });

    button.addEventListener("click", function () {
        todoitems.push(input.value);
        todoliste();
        input.value = "";
        console.log(todoitems);
    });


    function todoliste(): void {
        todofeld.innerHTML = "";
        for (var index = 0; index < todoitems.length; index++) {
            todofeld.innerHTML += "<div style='padding-bottom: 15px'>" + "<input type='checkbox'>"  + todoitems[index] + "<i class='fas fa-trash-alt'id=delete></i>" +  "</div>";
        }
        var aufgaben: HTMLElement = document.querySelector("#aufgaben");
        aufgaben.innerHTML = todoitems.length;
    }
    var i;
    for (i = 0; i < muell.length; i++) {
        muell[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
});
