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
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react -D
```

- `eslint`: Linter for JavaScript files
- `prettier`: Formatter for JavaScript/TypeScript/JSON files
- `@typescript-eslint/eslint-plugin`: TypeScript ESLint plugin
- `@typescript-eslint/parser`: TypeScript ESLint parser
- `eslint-config-prettier`: Config for prettier to make it work with ESLint
- `eslint-plugin-prettier`: Plugin for eslint and prettier with rules already set
- `eslint-plugin-react`: Plugin for React to be compatible

and then copy these files:

- `.eslintrc.js`: Contains all the extensions, plugins and rules for ESLint
- `.eslintignore`: Tells all the files to ignore for ESLint
- `.prettierrc`: Config for prettier

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

and then copy these files/folder:

- `.husky`: folder that defines defines all the hooks and scripts launched by GitHub hooks
- `.commitlintrc"`: defines all the convention that are extended by this project.
