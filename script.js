class User {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }
  
  const sortUsers = (usersObject, sortParam) => {
    const usersArray = Object.values(usersObject);
  
    usersArray.sort((a, b) => {
      if (sortParam === 'age') {
        return a.age - b.age;
      } else if (sortParam === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });
  
    return usersArray;
  };
  
  const usersObject = {
    "id0": new User("id0", "Іван", 25),
    "id1": new User("id1", "Марія", 30),
  };
  
  const sortedUsersByAge = sortUsers(usersObject, 'age');
  const sortedUsersByName = sortUsers(usersObject, 'name');
  
  console.log(sortedUsersByAge);
  console.log(sortedUsersByName);
  