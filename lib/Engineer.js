const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUname) {
            super(name, id, email);
            this.githubUname = githubUname;
        }
    getGithub() {
            return this.githubUname;
        }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;