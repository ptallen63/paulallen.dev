/* eslint-disable no-console */
const theGame = {
  instructions: async () => {
    const res = await fetch(`${process.env.GAME_API}/instructions`, {
      method: 'GET',
    });
    const data = await res.json();
    console.info(data.body.text);
  },
  iDidNotCopyDownMyPlayerId() {
    return 'Too Bad for now!';
  },
  hallOfChampions() {
    // Print the winners
  },
  register: async (username = null) => {
    if (!username) return console.log('to Register, just call this function with you player name as a string');
    if (typeof username !== 'string') return console.log("C'mon... username should be a string");

    // / Generate an id
    const res = await fetch(`${process.env.GAME_API}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
      }),
    });
    const data = await res.json();
    console.log(data.body.message);
    console.log('Write this down, You will not see it again, and it is crucial that you have it');
    // TODO: handle Error
  },
  proveYourWorth(body) {
    console.clear();
    fetch(`${process.env.GAME_API}/champion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data.message);
      });
  },
};


export default {
  init() {
    window.theGame = theGame;
  },
};
