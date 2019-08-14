const skills = [
    {skill: 'Learn HTML', learned: true},
    {skill: 'Learn CSS', learned: true},
    {skill: 'Learn JavaScript', learned: true},
    {skill: 'Feed the hungry squid < % == ', learned: false},
    {skill: 'Add confetti', learned: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  }

