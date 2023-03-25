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

const resolvers = {
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

export default resolvers;
