// 1
const delay = ms => {
    return new Promise((resolve) =>{
        setTimeout(() =>{resolve(ms)}, ms)
    })
  };

  const loggerOne = time => console.log(`Resolved after ${time}ms`);

  // Виклич функції для перевірки
  delay(2000).then(loggerOne); // Resolved after 2000ms
  delay(1000).then(loggerOne); // Resolved after 1000ms
  delay(1500).then(loggerOne); // Resolved after 1500ms


// 2
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => { 
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
        resolve(updatedUsers)
    })

  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  /*
   * Зараз працює так   
   */
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
  /*
   * Повинно працювати так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);