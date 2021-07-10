# Set-up Guide for Contributors

> **NOTICE**  
> This guide has been written for MacOS users.

- [Prerequisites](./README-SETUP.md#prerequisites-for-macos)
- [How to use](./README-SETUP.md#how-to-use)

# How to use

## 1. Check [prerequisites](./README-SETUP.md#prerequisites-for-macos).

## 2. Understand '[Git-Flow](http://danielkummer.github.io/git-flow-cheatsheet/)'

![git-flow-examples](https://camo.githubusercontent.com/402f70bf57b21727e50198fee8a4aea8c3b083b27831de183e7e280510b914cd/68747470733a2f2f776f6f776162726f732e6769746875622e696f2f696d672f323031372d31302d33302f6769742d666c6f775f6f766572616c6c5f67726170682e706e67)

## 3. Git Clone & Git Flow Setting

- Clone Repository to your Mac.

  ```bash
  git clone https://github.com/SPONGE-JL/CrashLab-CleanCode.git
  ```

- Setting Local Config for [Rebase & Fast-Forward](https://backlog.com/git-tutorial/kr/stepup/stepup1_4.html).

  ```bash
  cd CrashLab-CleanCode
  git config --local pull.rebase true
  git config --local pull.ff only

  # Check
  git config --list |egrep "pull|rebase|ff"
    # Like below ... 
    # pull.rebase=true    >> Set pulling strategy into 'rebase' not 'merge'.
    # pull.ff=only        >> Set fast-forward only
  ```

- Setting Git-Flow

  ```bash
  # Check Current Branch
  git status |grep "On branch"
    # Like below ...
    # On branch main

  # Start Git-Flow
  git flow init
    # Like below ..
    # Which branch should be used for bringing forth production releases?
    #    - main
    # Branch name for production releases: [main]                   << ENTER
    # Branch name for "next release" development: [develop] seminar << TYPE 'seminar'
    #
    # How to name your supporting branch prefixes?
    # Feature branches? [feature/] prepare/  << TYPE 'prepare/'
    # Release branches? [release/]           << ENTER
    # Hotfix branches? [hotfix/]             << ENTER
    # Support branches? [support/]           << ENTER
    # Version tag prefix? []                 << ENTER

  # Check Current Branch has been switched
  git status |grep "On branch"
    # Like below : Switched to 'semonar' branch for merging developed feautres (name by 'chapter')
    # On branch seminar

  # Pull
  git pull origin seminar
  ```

  ![git-flow-setting-image](./images/git-flow-setting.png)

## 3. use Git Flow

- Switch to 'seminar' branch with updating.

  ```bash
  # Check branch list
  git branch |cat
    # Maybe like below...
    #   main
    # * seminar
    #   (other prepare branches could exist)

  git checkout seminar
    # If you see like this, the seminar branch is latest state
    # Already on 'seminar'
    # Your branch is up to date with 'origin/seminar'.
    
  # If it isn't up-to-date, pull from remote.
  git pull origin seminar
  ```

- Start to prepare your leading-seminar

  ```bash
  # Start new feautre for preparing your seminar
  git flow feature start Chapter00-Title

    # Add and edit your files. (e.g Java or Typescript codes or README.md)
    # Commit changes with messages.
  ```

- Publish your works when you want to save in remote.

  ```bash
  # Publish
  CURRENT_BRANCH=`git branch |grep "*" |cut -c 3-` && echo "CURRENT_BRANCH: ${CURRENT_BRANCH}"
  git flow feature publish $CURRENT_BRANCH
  ```

  ![git-flow-using-image](./images/git-flow-using.png)

- Push to already published feature branch.

  ```bash
  # After commit
  CURRENT_BRANCH=`git branch |grep "*" |cut -c 3-` && echo "CURRENT_BRANCH: ${CURRENT_BRANCH}"
  git push -u origin $CURRENT_BRANCH
  ```

  ![git-flow-using-after-publish-image](./images/git-flow-using-after-publish.png)

- Pull your works or others.

  ```bash
  # Check our remote branch list
  git fetch -u origin 
  git branch -r |cat
    # Like below ...
    #  origin/HEAD -> origin/main
    #  origin/main
    #  origin/prepare/Chapter00-Tile  << Target feature branch with pulling
    #  ...
    #  origin/seminar

  # Pull what you want
  git flow feature pull origin Chapter00-Title
    # Like below ..
    # Created local branch prepare/Chapter00-Title based on origin's prepare/Chapter00-Title.
  
  # Check your branch has switched
  git branch |cat
    # Like below
    #   main
    # * prepare/Chapter00-Settings
    #   seminar
  ```

- Merge 'your branch (feature)' to 'seminar (develop)' with `finish` command.

  ```bash
  # After finish to prepare your seminar
  CURRENT_BRANCH=`git branch |grep "*" |cut -c 3-`
  echo "CURRENT_BRANCH: ${CURRENT_BRANCH}"
  
  # First, Update seminar (develop) branch
  git checkout seminar
  git pull origin seminar
  
  # Then, finish your prepare (feature) branch
  git checkout $CURRENT_BRANCH
  CURRENT_FEATURE=`git flow feature |grep "*" |awk -F " " '{print $2}'`
  echo "CURRENT_FEATURE: ${CURRENT_FEATURE}"
  git flow feature finish $CURRENT_FEATURE
    # Type Merge Message (maybe auto-completed)
    # Add Merge Commit with this message : Type [esc] key --> Type ":wq" --> Type [enter] key
    # Finally Merged.
  
  # Your workspace has been switch to seminar (develop) branch.
  # Push to remote
  git push -u origin seminar
  ```
  ![git-flow-using-finish-image](./images/git-flow-using-finish.png)
  ![git-flow-using-finish-commit-msg-image](./images/git-flow-using-finish-commit-msg.png)
  ![git-flow-using-push-image](./images/git-flow-using-push.png)

---

> [Go to Top](./README-SETUP.md#set-up-guide-for-contributors)

---

# Prerequisites for MacOS.

1. [Install Homebrew](./README-SETUP.md#install-homebrew)
2. [Install Git](./README-SETUP.md#install-git)
3. [Set Global Git-Config](./README-SETUP.md#set-global-git-configuration)
4. Option. [Set Default Initial Branch Name 'main'](./README-SETUP.md#option-set-default-initial-git-branch-name-the-main-not-the-master)
5. Option. [Set Global Git-Graph-Beautify on CLI](./README-SETUP.md#option-beautify-git-graph-on-cli)
6. [Install Git-Flow](./README-SETUP.md#install-git-flow)
7. [Install Prefer IDE](./README-SETUP.md#install-prefer-ide) 

## Install [Homebrew](https://brew.sh/index_ko). 

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install [Git](https://git-scm.com/download/mac).

```bash
# Check installation
git --version
  # zsh: command not found: git

brew install git

# Check
git --version
  # git version 2.30.1 (Apple Git-130)
```

## Set global git-configuration.

```bash
git config --global core.autocrlf true
git config --global user.name <github-nicknanme>
git config --global user.email <github-email>

# Check
git config --list |grep user
  # Like below ..
  # user.email=dev2sponge@gmail.com
  # user.name=SPONGE-JL

# If you want to edit typo, try this
vi ~/.gitconfig
```

## `[option]` Set default initial git-branch-name the `main` (not the master).

```bash
git config --global init.defaultBranch main

# Check
cat ~/.gitconfig |egrep "init|defaultBranch"
  # Like below ..
  # [init]
  #   defaultBranch = main 
```

## `[option]` Beautify git graph on cli.

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

## Install Git-Flow.

```bash
brew install git-flow

# Check
git flow version
  # Like below ..
  # 0.4.1
```

## Install Prefer IDE.

choose one to pick prefer method

### Visual Studio Code

- [Install with Homebrew](https://formulae.brew.sh/cask/visual-studio-code)

  ```bash
  brew cask install visual-studio-code
  ```

- Download App from [Homepage](https://code.visualstudio.com/download#)

### Intellij IDEA - Community Edition

- [Install with Homebrew](https://formulae.brew.sh/cask/intellij-idea)
  
  ```bash
  brew install --cask intellij-idea
  ```

- Download App from [Homepage](https://www.jetbrains.com/ko-kr/idea/download/#section=mac)

- [Execute in Command Line Interface (CLI)](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) : like `code .`

  ```bash
  # In Bash
  cat << EOF >> ~/.bash_profile
  # Add Visual Studio Code (code)
  export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
  EOF
  ```

  ```zsh
  # In Zsh
  cat << EOF >> ~/.bash_profile
  # Add Visual Studio Code (code)
  export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
  EOF
  ```

---

> [Go to Top](./README-SETUP.md#set-up-guide-for-contributors)
