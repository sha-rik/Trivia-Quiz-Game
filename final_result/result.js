
let pl1 = document.getElementById('pl1');
let pl2 = document.getElementById('pl2');
let result_container = document.getElementById('result_container');
p_1_name = localStorage.getItem('p1');
p_2_name = localStorage.getItem('p2');
let result = JSON.parse(localStorage.getItem("score_arr"));
let back_to_player_page = function () {
  window.location.href = "../player.html";
  return;
}


let final_result = function () {
  const p1Score = result[0] ?? 0;
  const p2Score = result[1] ?? 0;

  let winnerMessage = "";

  if (p1Score > p2Score) {
    winnerMessage = `${p_1_name} wins!`;
  } else if (p2Score > p1Score) {
    winnerMessage = `${p_2_name} wins!`;
  } else {
    winnerMessage = `It's a draw!`;
  }

  result_container.innerHTML = `
    <section >
      <h2>
        Final Results
      </h2>
      <p>
        Here are the final scores for this game:
      </p>

      <div style="
        display: flex;
        justify-content: space-between;
        gap: 12px;
      ">
        <div>
          <h3>
            ${p_1_name}
          </h3>
          <p>
            Score: ${p1Score}
          </p>
        </div>

        <div>
          <h3>
            ${p_2_name}
          </h3>
          <p>
            Score: ${p2Score}
          </p>
        </div>
      </div>

      <div>
        ${winnerMessage}
      </div>
    </section>
  `;

  setTimeout(back_to_player_page, 5000);
};

document.addEventListener("DOMContentLoaded", final_result);

