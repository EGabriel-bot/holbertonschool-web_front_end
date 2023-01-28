const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastNme: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
}

function logWelcomeUser(welcomeString){
  console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser('Welcome');
logWelcomeUser('Hello');
