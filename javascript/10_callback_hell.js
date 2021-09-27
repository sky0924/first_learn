class UserStorage {

	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(
                (id === 'sky' && pw === 'sbd0924') ||
                (id === 'coder' && pw === 'nomad')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
            if (user === 'sky') {
                onSuccess({ name: 'sky', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
	}

}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');
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
