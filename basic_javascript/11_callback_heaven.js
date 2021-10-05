
'use strict';

class UserStorage {

	loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'sky' && pw === 'sbd0924') ||
                    (id === 'coder' && pw === 'nomad')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
	}

	getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'sky') {
                    resolve({ name: 'sky', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');

userStorage
    .loginUser(id, pw)
    .then(userStorage.getRoles) // 같으니까 생략
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

userStorage.loginUser(
    id, 
    pw, 
    user => {
        userStorage.getRoles(
            user, 
            userRole => {
                alert(`Hello ${userRole.name}, you have a ${userRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
