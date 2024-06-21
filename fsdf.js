const users = [
    {name: 'Amir', admin: true},
    {name: 'Betty', admin: false},
  ];
  users.filter(user => user.admin);
console.log(users.map(user => user.name))