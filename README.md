# coding-guidelines

Contains all starting guideline for new JavaScript projects (formatting, linting)

## Plugins

### Visual Studio Code

First step, we need to install three extensions :

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
```

#### _Note that these extensions are already marked as required in the `extensions.json` file, in the `.vscode` folder_

_Note_: You can also find all my vscode extensions in the project.

### ESLint and Prettier

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-jest eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- `eslint`: Linter for JavaScript files
- `prettier`: Formatter for JavaScript/TypeScript/JSON files
- `eslint-config-prettier`: Config for prettier to make it work with ESLint
- `eslint-plugin-prettier`: Plugin for eslint and prettier with rules already set
- `@typescript-eslint/eslint-plugin`: Plugin for TypeScript files
- `@typescript-eslint/parser`: Parser for TypeScript files made for ESLint
- `eslint-plugin-jest`: Plugin for Jest and ESLint

and then copy these files:

- `.eslintrc.js`: Contains all the extensions, plugins and rules for ESLint
- `.eslintignore`: Tells all the files to ignore for ESLint
- `.prettierrc`: Config for prettier

### Stylelint

We install these package:

```bash
npm i -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-scss
```

- `stylelint`: Linter for css files
- `stylelint-config-standard`: Standard config for stylelint
- `stylelint-config-prettier`: Config for stylelint to make it work with Prettier
- `stylelint-scss`: Plugin for Stylelint to recognize scss files

and then copy these files:

- `.stylelintrc`: Contains all the extensions for stylelint.

### GitHub Hooks (husky, pretty-quick, commitlint)

GitHub Hooks are made so that when somebody pushes code, it makes sure that some npm scripts are run, such as testing scripts or linting scripts.

First of all, we install all these dependencies:

```bash
npm i -D husky @commitlint/cli @commitlint/config-conventional pretty-quick
```

- `husky`: GitHub Hooks
- `@commitlint/cli`: Package that checks the message of the commit and sees if it fits the conventions defined by the project.
- `@commitlint/config-conventional`: Commitlint conventions
- `pretty-quick`: Package that runs Prettier on changed files.

and then copy these files:

- `.huskyrc`: defines all the hooks and scripts launched by GitHub hooks
- `.commitlintrc`: defines all the GitHub hooks defined (pre-push, pre-commit, etc...)
