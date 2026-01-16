let dificulty = document.getElementById('dificulty');
let match_round = document.getElementById('match_round');
let category = document.getElementById('category');
let question = document.getElementById('question');
let option = document.getElementById('option');
let info = document.getElementById('info');
let player_1 = document.getElementById('player_1');
let player_2 = document.getElementById('player_2');
let next_question = document.getElementById('next_question');
let game_container = document.getElementById('game_container');
let question_container = document.getElementById('question_container');
let Score_arr = JSON.parse(localStorage.getItem('score_arr'));
let turn = 0;

let player_1_name = localStorage.getItem('p1');
let player_2_name = localStorage.getItem('p2');
let player_name = [player_1_name, player_2_name];

let data = JSON.parse(localStorage.getItem("questions"));



let total_question = -1;
let fun = function (selected_option) {
  
  
  if (selected_option === data[total_question].correctAnswer) {
    if (data[total_question].difficulty === "easy") {
      Score_arr[turn] += 10;
    }
    else if (data[total_question].difficulty === 'medium') {
      Score_arr[turn] += 15;
    }
    else if (data[total_question].difficulty === 'hard') {
      Score_arr[turn] += 20;
    }
    info.innerHTML = `
            <div style=" color : green">
              ✔ Correct Answer!
              Press Next question button
            </div>
        `;
    player_1.innerHTML = `
        <div style="
          text-align:center;
          color: black
        ">
          <h3>
            ${player_1_name}
          </h3>
          <p">
            Score: ${Score_arr[0]}
          </p>
        </div>
    `;
    player_2.innerHTML = `
        <div style="
          text-align:center;
          color: black
        ">
          <h3>
            ${player_2_name}
          </h3>
          <p">
            Score: ${Score_arr[1]}
          </p>
        </div>
    `;
  }
  else {
    info.innerHTML = `
      <div style=" color : red">
        ❌ Wrong Answer!
        Press Next question button
      </div>
    `;
  }

  document.querySelectorAll('input[name="option"]').forEach(r => {
    r.disabled = true;
  });

  next_question.disabled = false;
  turn = 1 - turn;
}

// random option create karega
let option_set = function (object_aray) {
  option.innerHTML = "";
  let field = document.createElement('fieldset');
  let i = 0;
  while (i < 4) {
    // lable start
    let label = document.createElement('label');
    label.setAttribute("for", i);
    label.innerText = object_aray[i];

    // lable ends

    // radio start
    let radio = document.createElement('input');
    radio.id = i;
    radio.type = "radio";
    radio.value = i;
    radio.name = 'option';
    let selected_option=object_aray[i];
    radio.addEventListener('click',()=>fun(selected_option));
    // radio ends

    // appending
    field.appendChild(radio);
    field.appendChild(label);
    i += 1;
  }
  option.appendChild(field);



}

let quest = function () {
  total_question += 1;
  if (total_question >= 6) {
    // ek kar banao
    localStorage.setItem("score_arr", JSON.stringify(Score_arr));
    window.location.href = "../Round_Summary_and_Decision/round_summary_and_decision.html";
    return;
  }
  next_question.disabled = true;
  dificulty.innerText = data[total_question].difficulty;
  match_round.innerText = `Round No. ${localStorage.getItem('round')}`;
  category.innerText = data[total_question].category;
  question.innerText = data[total_question].question.text;
  info.innerHTML = `
        <div style="
          color:black;
        ">
          🎮 ${player_name[turn]}'s Turn
        </div>
    `;
  player_1.innerHTML = `
        <div style="
          text-align:center;
          color: black
        ">
          <h3>
            ${player_1_name}
          </h3>
          <p">
            Score: ${Score_arr[0]}
          </p>
        </div>
    `;
  player_2.innerHTML = `
        <div style="
          text-align:center;
          color: black
        ">
          <h3>
            ${player_2_name}
          </h3>
          <p">
            Score: ${Score_arr[1]}
          </p>
        </div>
    `;
  let option_array = [data[total_question].correctAnswer, ...data[total_question].incorrectAnswers].sort(() => Math.random() - 0.5);
  option_set(option_array);




}

next_question.addEventListener('click', quest);
document.addEventListener('DOMContentLoaded', quest);
