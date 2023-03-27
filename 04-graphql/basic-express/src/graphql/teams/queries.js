import { teams } from '../../constants.js';

const queries = {
  hello: () => 'Hello World',
  getTeams: () => teams,
  getTeam: (obj, args, context) => {
    const team = teams.filter(team => team._id == args.id)
    return team.pop();
  },
  jonny: () => 'Hello Jonny'
};

export default queries;
