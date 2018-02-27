// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var solution = new Object;
  console.log (solution);
  if (currency == 0 || currency < 0) {
    return solution
  }
  if (currency > 10000) {
    solution.error = "You are rich, my friend! We don't have so much coins for exchange";
    return solution
    }

    var H = Math.floor (currency / 50);
    var remH = currency % 50;
    solution.H = H;
    var Q = Math.floor (remH / 25);
    var remQ = remH % 25;
    solution.Q = Q;
    var D = Math.floor (remQ / 10);
    var remD = remQ % 10;
    solution.D = D;
    var N = Math.floor (remD / 5);
    var remN = remD % 5;
    solution.N = N;
    var P = Math.floor (remN / 1);
    solution.P = P;
    if (H == 0) {
      delete solution.H;
    }
    if (Q == 0) {
      delete solution.Q;
    }
    if (D == 0) {
      delete solution.D;
    }
    if (N == 0) {
      delete solution.N;
    }
    if (P == 0) {
      delete solution.P;
    }

    return (solution);
    }
