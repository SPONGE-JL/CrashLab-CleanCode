# Set-up Guide for Contributors

(notice) This guide has been written for Mac OS users.

## How to get ready your seminar

### First, check [prerequisites](./#prerequisites).

### Second, Git Clone & Git Flow Setting

```bash
# Clone at your local
git clone https://github.com/SPONGE-JL/CrashLab-CleanCode.git && cd CrashLab-CleanCode

# Setting git flow
# TODO..
```

### Third, use Git Flow

```bash
# TODO..
```

---

## Prerequisites.

1. [Install Homebrew]()
2. [Install Git]()
3. [Set Global Git-Config]()
4. Option. [Set Default Initial Branch Name 'main']()
5. Option. [Set Global Git-Graph-Beautify on CLI]()
6. [Install Git-Flow]()
7. [Install Prefer IDE]() 

### Install [Homebrew](https://brew.sh/index_ko). 

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### install [Git](https://git-scm.com/download/mac).

```bash
# Check installation
git --version
  # zsh: command not found: git

brew install git

# Check
git --version
  # git version 2.30.1 (Apple Git-130)
```

### set global git-configuration for MacOS.

```bash
git config --global core.autocrlf true
git config --global user.name <github-nicknanme>
git config --global user.email <github-email>

# Check
git config --list | grep user
  # Like below ..
  # user.email=dev2sponge@gmail.com
  # user.name=SPONGE-JL

# If you want to edit typo, try this
vi ~/.gitconfig
```

### `[option]` set default initial git-branch-name the `main` (not the `master`).

```bash
git config --global init.defaultBranch main

# Check
cat ~/.gitconfig | egrep "init|defaultBranch"
  # Like below ..
  # [init]
  #   defaultBranch = main 
```

### `[option]` beautify git graph on cli.

```bash
# Backup the origin config
cp ~/.gitconfig ~/.gitconfig_bak

# Add git-graph-beautify aliases
echo "[alias]" >> ~/.gitconfig
echo "  lg  = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit" >> ~/.gitconfig
echo "  lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all" >> ~/.gitconfig
echo "  lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all" >> ~/.gitconfig

# Try git-cli in local git repository
# Want to exit, type [q]
git lg
  # 8b7a1d5 - (HEAD -> seminar, origin/main, origin/HEAD, main) Initial commit (41 minutes ago) <sponge>

git lg1
  # * 8b7a1d5 - (42 minutes ago) Initial commit - sponge (HEAD -> seminar, origin/main, origin/HEAD, main)

git lg2
  # * 8b7a1d5 - Sat, 26 Jun 2021 12:39:01 +0900 (42 minutes ago) (HEAD -> seminar, origin/main, origin/HEAD, main)
  #           Initial commit - sponge
```

### Install Git-Flow for MacOS.

```bash
brew install git-flow

# Check
git flow version
  # Like below ..
  # 0.4.1
```

### Install Prefer IDE.

choose one to pick prefer method

#### Visual Studio Code

- [Install with Homebrew](https://formulae.brew.sh/cask/visual-studio-code)

  ```bash
  brew cask install visual-studio-code
  ```

- Download App from [Homepage](https://code.visualstudio.com/download#)

#### Intellij IDEA - Community Edition

- [Install with Homebrew](https://formulae.brew.sh/cask/intellij-idea)
  
  ```bash
  brew install --cask intellij-idea
  ```

- Download App from [Homepage](https://www.jetbrains.com/ko-kr/idea/download/#section=mac)
