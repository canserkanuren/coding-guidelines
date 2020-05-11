# Contributing to XXXX

You want to contribute to XXXX. That's amazing! Please take note of the following guidelines and rules based on config-conventional.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject (The ticket number)>
<BLANK LINE>
<optional body>
<BLANK LINE>
<optional footer>
```

Samples:

```
docs(dsrelease): update ds to beta.5 (#DS-OO1)
```

```
feat(dsconventionalcommits): add conventional commits rules

making it easier for people to contribute to your projects,
by allowing them to explore a more structured commit history.

BREAKING CHANGE: introduces a breaking change

```

## Commit Message Guidelines

### Warning

The following rules are considered problems for `@commitlint/config-conventional` and will yield a non-zero exit code when not met.
Consult [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **value**

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **revert**: Reverting a commit(s)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

  ```
  [
    'build',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test'
  ]
  ```

```
"foo: some message" # fails
"fix: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **value**
  ```
    'lowerCase'
  ```

```
"FIX: some message" # fails
"fix: some message" # passes
```

#### type-empty

- **condition**: `type` is empty
- **rule**: `never`

```
": some message" # fails
"fix: some message" # passes
```

#### scope-case

- **condition**: `scope` is in case `value`
- **rule**: `always`

The scope can be (service name, guard name, module name ...) affected.

```
  'lowerCase'
```

```
"fix(SCOPE): some message" # fails
"fix(scope): some message" # passes
```

#### subject-case

- **condition**: `subject` is in one of the cases `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `never`

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

```
"fix(SCOPE): Some message" # fails
"fix(SCOPE): Some Message" # fails
"fix(SCOPE): SomeMessage" # fails
"fix(SCOPE): SOMEMESSAGE" # fails
"fix(scope): some message" # passes
"fix(scope): some Message" # passes
```

#### subject-empty

- **condition**: `subject` is empty
- **rule**: `never`

```
"fix:" # fails
"fix: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` ends with `value`
- **rule**: `never`
- **value**

```
  '.'
```

```
"fix: some message." # fails
"fix: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **value**

```
  72
```

```
"fix: some message that is way too long and breaks the line max-length by several characters" # fails
"fix: some message" # passes
```

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
