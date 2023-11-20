<div align="center">

<div style="text-align: center;"><h4>📚 STACKS</h4></div>

<div style="text-align: center;">

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="...">
<img src="https://img.shields.io/badge/Next.js-F7DF1E?style=for-the-badge&logo=Next.js&logoColor=black" alt="...">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" alt="..."/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" alt="..."/>
</div>

<br />
<hr />

<h1 style="text-align: center;">Nicepage.pe.kr Front-End</h1>
</div>

# psmever's Blog Front-End Source.

## huskey error fix

```
➜  blog.frontend [ develop * ] chmod +x .husky/pre-commit

➜  blog.frontend [ develop * ] git config --unset core.hookspath
➜  blog.frontend [ develop * ] git commit  -m 'build: husky, lint-staged 추가'

```

## .vscode/settings.json

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```
