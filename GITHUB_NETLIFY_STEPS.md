# AM Digital Studio Portfolio - GitHub + Netlify Steps

## 1. Refresh GitHub login

```powershell
gh auth login -h github.com
```

Choose:

- GitHub.com
- HTTPS
- Login with a web browser

## 2. Commit the project

```powershell
git config user.name "Antony Mugo"
git config user.email "antonymugo66@gmail.com"
git add .
git commit -m "Create AM Digital Studio portfolio site"
```

## 3. Create the GitHub repo and push

Repo name:

```text
martha-portfolio
```

Command:

```powershell
gh repo create martha-portfolio --public --source . --remote origin --push
```

## 4. Connect Netlify to GitHub

In Netlify:

1. Add new project.
2. Import from GitHub.
3. Choose `martha-portfolio`.
4. Use these settings:

```text
Base directory: portfolio
Build command: leave empty
Publish directory: .
```

Netlify can also read `netlify.toml`, which is already configured.
