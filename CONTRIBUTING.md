# Contributing to QA tool

We'd like for you to contribute to our source code and to make QA tool even better than it is today! Here are the guidelines we'd like you to follow:

## Merging

Once you created a branch and finished your work on it you should create a pull request in order to have your changes merged back on development branch. All pull requests will be reviewed, commented and fixed, if necessary, before be merged back.

## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more [specs][unit-testing].

* use **//** for one line comments and **/\*\*/** for multi line comments

# Tests

### Before commit the code make sure to run all unit tests with the following command

```
php bin/phpunit.phar --stop-on-failure  tests
```

## Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.  But also, we use the git commit messages to **generate the change log**.

### Branching Format
Every branch must be named with its related task identification. For example, we have the feature **TRV-123** to work on, so the branch for this feature must be named as **TRV-123**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **TRV-X** and a **subject**, where TRV-X is the task identification:

```
[TRV-X] <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** and the **feature-identification**  is mandatory.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on Bitbucket as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference open issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
