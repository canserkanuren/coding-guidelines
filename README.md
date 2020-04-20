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

Since it is a Javascript or Typescript project, you should install these dependencies :

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier tslint-config-prettier tslint-plugin-prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser husky stylelint stylelint-config-standard @commitlint/cli @commitlint/config-conventional 
```

Then, you copy all the files in this repository into your Javascript or Typescript folder, and all should be ok.

You can also find my vscode extensions in the project.
