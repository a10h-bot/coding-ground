// Round 2: Given a list of player names and their scores – { Carl, 70; Alex, 55; Isla, 40 }
// design a data structure that can support following modules in optimal time -
//   i) updateEntry(string name)
// ii) getEntryFromRank(int rank)

let players = { 'Carl': 70, 'Alex': 55, 'Isla': 40 };
for (var key in players) {
  if (players.hasOwnProperty(key)) {
    console.log(key, players[key]);
  }
}
function updateEntry(name) {
  for (let key in players) {
    if (key === name) {
      players[key] += 1;
    }
  }
  return players;
}

let res = [];
function getEntrtyFromRank(rank) {
  for (let key in players) {
    res.push(players[key]);
  }
}
console.log(res);

console.log(updateEntry('Carl'));
