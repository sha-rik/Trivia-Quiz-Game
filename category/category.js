let category_drop_down = document.getElementById("category_drop_down");
let match_round = document.getElementById('match_round');
let categories = [];
let run_dom =  function () {
    try {

        categories = JSON.parse(localStorage.getItem('remaining_option'));
        let round = Number(localStorage.getItem('round'));
        match_round.innerText=`Round No. : ${round}`;
        categories.forEach(cat => {
            console.log(cat);
            let opt = document.createElement("option");
            opt.value = cat;
            opt.innerText = cat;
            category_drop_down.appendChild(opt);
        });

    } catch (err) {
        alert(`Error in category page function run_dom : ${err}`);
    }
}
document.addEventListener("DOMContentLoaded", run_dom)

let form = document.getElementById('form');
let handleSubmit = async function (e) {
    e.preventDefault();
    try {
        let selected = category_drop_down.value;
        let category = encodeURIComponent(selected);

        categories = categories.filter(cat => cat !== selected);
        localStorage.setItem("remaining_option", JSON.stringify(categories));
        let easyURL = `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=easy&limit=2`;
        let mediumURL = `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=medium&limit=2`;
        let hardURL = `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=hard&limit=2`;
        let [easyRes, mediumRes, hardRes] = await Promise.all([
            fetch(easyURL),
            fetch(mediumURL),
            fetch(hardURL)
        ]);
        if (!easyRes.ok) {
            throw new Error("Server error: " + easyRes.status);
        }
        if (!mediumRes.ok) {
            throw new Error("Server error: " + mediumRes.status);
        }
        if (!hardRes.ok) {
            throw new Error("Server error: " + hardRes.status);
        }

        let [easyResult, mediumResult, hardResult] = await Promise.all([
            easyRes.json(),
            mediumRes.json(),
            hardRes.json()
        ]);
        if(Object.keys(easyResult).length<2)
        {
            throw new Error(`Error in fetching easy questions`)
        }
        else if(Object.keys(mediumResult).length<2)
        {
            throw new Error(`Error in fetching medium questions`)
        }
        else if(Object.keys(hardResult).length<2)
        {
            throw new Error(`Error in fetching hard questions`)
        }
        let questions = [...easyResult, ...mediumResult, ...hardResult];
        console.log(questions);
        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.href = "../game/game.html";
    }
    catch (err) {
        alert(`Error in category page function handleSubmit : ${err}`);
    }

}
form.addEventListener('submit', handleSubmit);
