import { Factory, faker } from 'ember-cli-mirage';

const NAMES = ['node-github', 'webhooks.js', 'octokit.rb', 'octokit.objc', 'fixtures', 'octokit.net', 'go-octokit', 'discussions'];
const BRANCH_NAMES = ['master', 'dev', 'branch1', 'branch2', 'branch3'];

export default Factory.extend({
  name(i) {
    return NAMES[i];
  },
  html_url(i) {
    return `https://github.com/${NAMES[i]}`;
  },
  branches_url(i) {
    return `https://api.github.com/repos/octokit/${NAMES[i]}/branches{/branch}`;
  },
  'private': faker.list.random(true, false),
  'language': faker.list.random('Javascript', 'Java', 'Ruby', 'Objective-C', 'Go', 'Python'),
  branches() {
    let branches = [];
    BRANCH_NAMES.forEach((name) => branches.push({ name }));

    return branches.splice(Math.floor(Math.random() * 6));
  }
});
