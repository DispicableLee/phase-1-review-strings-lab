// Write your code in this file!

const currentUser = "Grace Hopper"

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser + "!";


function shortGreeting(user){
    const spliT = user.split("")
    console.log(spliT)
    return "Welcome, "+ spliT[0]
}

console.log(shortGreeting(currentUser))