# coding-guidelines

Contains all starting guideline for new JavaScript projects (formatting, linting)

## Plugins

### Visual Studio Code

First step, we need to install three extensions :

```bash
code --install-extension eg2.tslint
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
```

#### _Note that these extensions are already marked as required in the `extensions.json` file, in the `.vscode` folder_

Since it is a Javascript or Typescript project, you should install these dependencies :

``npm i -D prettier eslint-config-prettier eslint-plugin-prettier tslint-config-prettier tslint-plugin-prettier``

Then, you copy all the files in this repository into your Javascript or Typescript folder, and all should be ok.

In the `.prettierrc` file, you can notice at the end of the json, the _parser_ option. This option can take multiple values, such as `babel` or `typescript`.

You can also find my vscode extensions in the project.
