class UserStorage {
  loginuser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "color" && password === "academy")
        ) {
          resolve(id);
        } else {
          onError(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

UserStorage.loginUser(id, password)
  .then(UserStorage.getRoles)
  .then(UserStorage.getRoles)
  .then((user) => alert(`hello${user.name}, you have a${user.role}role`))
  .catch(console.log);
