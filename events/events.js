const EventEmitter = require('events');
console.clear();

const event = new EventEmitter();

event.on('join', ({ name, mail }) => {
    console.log(
        `
        -----------------------------
        ${name} has joined
        send email to ${mail}
        ------------------------------
        `
    );
})

event.on('left', ({ name }) => {
    console.log(`${name} has left.`);
})

// emit an event
const users = [
    {
        name: 'fahim faisal',
        mail: 'fahimfaisal@gamil.com',
        status: 'left'
    },
    {
        name: 'shakil',
        mail: 'shakil@gamil.com',
        status: 'join'
    },
    {
        name: 'abdullah',
        mail: 'abdullah@gamil.com',
        status: 'left'
    },
    {
        name: 'nayem',
        mail: 'nayem@gamil.com',
        status: 'join'
    },
    {
        name: 'sourov',
        mail: 'sourov@gamil.com',
        status: 'join'
    },
    {
        name: 'al amin',
        mail: 'alamin@gamil.com',
        status: 'left'
    }
]

function eventEmitter(users) {
    users.forEach(({name, mail, status}) => {
        event.emit(status, { name, mail });
    })
}

eventEmitter(users);

console.log(event.eventNames()) // return an array with all events name
event.removeAllListeners(); // remove all listener
