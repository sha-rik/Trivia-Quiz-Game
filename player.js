let form = document.getElementById('form');
let Player_1 = document.getElementById('Player_1');
let Player_2 = document.getElementById('Player_2');
let info = document.getElementById('info');
let round=1;
let Score_arr = [0, 0];


let run_dom = async function () {
    try {
        let res = await fetch("https://the-trivia-api.com/v2/categories")
        if (!res.ok) {
            throw new Error("Server error: " + res.status);
        }
        let result = await res.json(); // <--- ye string
        let categories = Object.keys(result); //<-- par Object.keys kya hota h ?
        if (categories.length === 0) {
            throw new Error(`Error in doing response.json()`)
        }
        // localStorage.setItem("number_of_categories",categories.length);
        localStorage.setItem("remaining_option",JSON.stringify(categories));

    } catch (err) {
        alert(`Error in player page function run_dom : ${err}`);
    }
}
document.addEventListener("DOMContentLoaded", run_dom)



let game = function(e){
    e.preventDefault();
    let name1=Player_1.value.toLowerCase().trim();
    let name2=Player_2.value.toLowerCase().trim();
    if(!name1 || !name2)
    {
        info.style.color='red';
        info.innerText='Please enter a valid name';
        return;
    }
    if(name1===name2)
    {
        info.style.color="red";
        info.innerText='Player names cannot be same'
        return;
    }
    localStorage.setItem("p1", Player_1.value);
    localStorage.setItem("p2", Player_2.value);
    localStorage.setItem('round',round);
    localStorage.setItem("score_arr", JSON.stringify(Score_arr));
    window.location.href = "./category/category.html";
}

form.addEventListener('submit',game);

let remove_error = function(e)
{
    info.innerText='';
}

Player_1.addEventListener('input',(e)=>remove_error(e));
Player_2.addEventListener('input',(e)=>remove_error(e));

