const { test, expect } = require("@jest/globals");

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


test('the forum pages properties are getting set correctly', () => {
    expect(football.title).toBe('Football');
    expect(tennis.title).toBe('Tennis');
    expect(rugby.title).toBe('Rugby');
});

test('create post function creates new post', () => {
    expect(footballPosts[0])
    .toEqual({title: 'WHU v MU', date: '20/09/21', author: 'dan', text: 'man u beat west ham'});
    expect(footballPosts[1])
    .toEqual({title: 'who is the GOAT', date: '20/09/21', author: 'dan', options: ['ronaldo', 'messi', 'pele', 'maradona']})

    expect(tennisPosts[0])
    .toEqual({title: 'US open', date: '20/09/21', author: 'dan', text: 'emma wins'});

    expect(rugbyPosts[0])
    .toEqual({title: 'Leicester v Exeter', date: '20/09/21', author: 'dan', text: 'Leicester tigers beat Exeter'});
});

test('create comment function creates new comment', () => {
    expect(footballPosts[0].createComment('20/09/21', 'dan', 'nice stuff'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'nice stuff'});

    expect(tennisPosts[0].createComment('20/09/21', 'dan', 'yayyyy'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'yayyyy'});

    expect(rugbyPosts[0].createComment('20/09/21', 'dan', 'cool post'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'cool post'});
});

test.skip('create post function pushes new post into posts array', () => {
    
});

test.skip('create post function pushes new post into posts array', () => {
    
});

test('User username property is getting set correctly', () => {
    expect(user.username).toBe('dan');
});