let next_round = document.getElementById('next_round');
let end_game = document.getElementById('end_game');
let round_summary = document.getElementById('round_summary');
round_summary.innerText = `Round ${localStorage.getItem('round')} Ends`;
let category_page = function () {
  // ek aur logic hoga... ki agar sara category select ho gaya h... to fir... game ko end kr do
  let round = Number(localStorage.getItem('round')) + 1;
  localStorage.setItem('round', round);
  window.location.href = "../category/category.html";
  return;
}
let to_result_page = function () {
  window.location.href = "../final_result/result.html";
  return;
}
let back_to_player_page = function () {
  let array_length = JSON.parse(localStorage.getItem("remaining_option"))?.length || 0;
  end_game.disabled = false;
  end_game.addEventListener('click', to_result_page);
  if (array_length <= 0) {
    next_round.disabled = true;
    return;
  }
  else {
    next_round.disabled = false;
    next_round.addEventListener('click', category_page);
  }
}

document.addEventListener("DOMContentLoaded", back_to_player_page);

