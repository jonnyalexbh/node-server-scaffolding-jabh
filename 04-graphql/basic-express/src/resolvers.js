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
  Query: {
    hello: () => {
      return 'Hello World'
    },
    getTeams: () => teams,
    getTeam: (obj, args, context) => {
      const team = teams.filter(team => team._id == args.id)
      return team.pop();
    },
    jonny: () => {
      return 'Hello Jonny'
    }
  }
}

export default resolvers;
