const teams = [
  {
    _id: 1,
    name: 'Bayer 04 Leverkusen',
  },
  {
    _id: 2,
    name: 'Borussia Dortmund',
  },
];

module.exports = {
  hello: () => {
    return 'Hello World'
  },
  teams: () => {
    return teams
  },
  jonny: () => {
    return 'Hello Jonny'
  }
}
