const User = require("./user");
const Page = require("./forum-pages")

const user = new User('dan', false);
const football = new Page('Football');
const tennis = new Page('Tennis');
const rugby = new Page('Rugby');


let footballPosts = [];
footballPosts.push(football.createTextPost('WHU v MU', '20/09/21', user.username, 'man u beat west ham'));
footballPosts.push(football.createPollPost('who is the GOAT', '20/09/21', 'dan', ['ronaldo', 'messi', 'pele', 'maradona']));

let tennisPosts = [];
tennisPosts.push(tennis.createTextPost('US open', '20/09/21', 'dan', 'emma wins'));

let rugbyPosts = [];
rugbyPosts.push(rugby.createTextPost('Leicester v Exeter', '20/09/21', 'dan', 'Leicester tigers beat Exeter'));

console.log(footballPosts[0])
