/* eslint-disable no-undef */
/* eslint-disable no-console */
const theGame = {
  instructions: async () => {
    const res = await fetch(`${process.env.GAME_API}/instructions`, {
      method: 'GET',
    });
    const data = await res.json();
    console.info(data.body.text);
  },
  // hallOfChampions() {
  //   // Print the winners
  // },
  register: async (username = null) => {
    if (!username) return console.log('to Register, just call this function with you player name as a string');
    if (typeof username !== 'string') return console.log("C'mon... username should be a string");

    try {
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
      console.clear();
      const data = await res.json();
      if (data.body && data.body.statusCode !== 200) {
        throw Error(data.message);
      }
      return console.log(data.body.message);
    } catch (error) {
      return console.error(error);
    }
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
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  },
};

const choosePill = (color) => {
  console.clear();
  switch (color.toLowerCase()) {
    case 'red':
    case 'red pill':
      console.log('Welcome to the Adventure!\nLook inside the "window" and you willl find "theGame" you seek');
      window.theGame = theGame;
      localStorage.setItem('isPlayingTheGame', true);
      break;
    case 'blue':
    case 'blue pill':
      console.log('Go about your way, they world of that lies beneath is not something you are ready for');
      break;
    default:
      console.log('Choose red, choose blue... or neither. Choices... much more than our abilities makes us who we really are');
      break;
  }
};

export default {
  init() {
    localStorage.setItem('HereIsAKey', 'RGk26qde');
    if (localStorage.getItem('isPlayingTheGame')) window.theGame = theGame;
    window.choosePill = choosePill;
  },
};
