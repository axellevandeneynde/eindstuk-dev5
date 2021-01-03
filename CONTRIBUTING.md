# Contribution guidelines

first of all, thank you for your interest in this project! in this document you will find out everything there is to know about how to contribute: report bugs, suggest a new feature, pull request and the roadmap & vision. 

## Report a bug
- Open a new issue and tag it "bug"
- Describe the problem you found in detail and at least include:
    1. your operating system & docker version
    2. What you where trying to achieve and how to reproduce the bug
    3. Logs or errors (if applicable)
- Keep in mind, how better your bug report how easier it is to fix it :thumbsup:

## Suggest a new feature
- Open a new issue and tag it "enhancement"
- Describe the feature in as much detail as you can
- Explain why you believe it to be a helpfull feature

## Pull request (aka write some code)
Love the enthusiasm! :tada: Make sure to have read the section *Roadmap & vision* before starting anything. If you want to discuss your contribution, please send me an e-mail at axelle.vanden.eynde@student.ehb.be .

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) the repo
2. Create a new branch off of the `main` branch with a descriptive name of your feature or fix.
This project uses [github flow](https://guides.github.com/introduction/flow/) due to it's simple nature.
3. Write your commit message as follow:
    `<type>(<scope>): <subject>`
**types:**
- build: Changes that affect the build system or external dependencies
- ci: Changes to CI configuration files and scripts 
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing - semi-colons, etc)
- test: Adding missing tests or correcting existing tests
**scope:**
If it helps with the meaning of your commit. Mostly the filename when only one was affected.
**subject:**
Be clear and use the imperative (for example: add not added).
4. When you write a create a new feature, don't forget to write the tests for it too.
5. Once you are ready, you can open a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests). Use a clear title and description. Keep in mind only pull request that pass all tests will be accepted. 

## Roadmap & vision

Now the priority lies in creating usefull routes to interact with the database. Then resources should be assembled to fill the database with the needed information, I'm open to suggestions on how to gather efficiently trustworthy data. Furthermore, rss feed should also get a place in the database, and these need to be validated. 

Once everything works smoothly and there is a sufficient amount of data the api should be deployed, so that it is easy to use for anyone in need of it.

Overall the idea is to keep it as simpel as possible to achieve its goal.