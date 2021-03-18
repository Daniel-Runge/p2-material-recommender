# p2-material-recommender
Second semester project (P2) for handling of personalized learning material recommendation based on learning preferences.

- [For Developers](#for-developers)
    + [Development stack](#development-stack)
  * [AAU VPN](#aau-vpn)
    + [connect with ssh](#connect-with-ssh)
  * [Visual Studio Code](#visual-studio-code)
    + [Practical VSCode commands](#practical-vscode-commands)
  * [WSL](#wsl)
    + [Practical Ubuntu commands to know](#practical-ubuntu-commands-to-know)
  * [Git](#git)
    + [Connecting to Git with SSH](#connecting-to-git-with-ssh)
    + [Using Git in the terminal](#using-git-in-the-terminal)
  * [Development Operations (DevOps)](#development-operations--devops-)

# For Developers

Below you will find a guide to set up for developing the P2 project on a windows system.

### Development stack

For this guide it is expected that you use Linux (**WSL**), Visual Studio Code (**VSCode**) and **Git**.

WSL is a linux distrbution running within windows. This makes it a great candidate for the basis of a development environment.

VSCode is a powerful and practical text editor.

Git is a version control system, making it easier for the team to collaborate.

To connect to AAU's servers you will need Cisco AnyConnect to connect through VPN. Currently an issue exists where WSL does not work while connected with VPN. A fix is being researched.

## AAU VPN

Install Cisco AnyConnect from https://ssl-vpn1.aau.dk/ - Log in using your AAU credentials and 2F-authenticantion. Then login to the application at ssl-vpn1.aau.dk also with your AAU credentials.

### connect with ssh

While on AAUs VPN, open windows cmd and connect externally to AAUs system with ssh. Then cd to the part of the server where we are supposed to work.

```shell
ssh AAUusername@dat2c2-20.p2datsw.cs.aau.dk
cd /srv/www/dat2c2-20.p2datsw.cs.aau.dk
```

## Visual Studio Code

Install VSCode downloaded from [here](https://code.visualstudio.com/ "Visual Studio Code - Code Editing. Redefined").

Open VSCode in windows and install the "Remote - WSL" extension. If you already have WSL setup, VS Code should register your WSL installation and suggest the extension.

Now open VSCode from your WSL terminal. Install the extensions "ESLint" and "Prettier - Code formatter", as well as any other extensions you might want. I suggest "JavaScript (ES6) code snippets", "Bracket Pair Colorizer 2" and "Live Server".

### Practical VSCode commands

Ctrl + k + c -> Add a HTML file style comment.

Alt + shift + f -> Pretty auto formatting of the code.

Ctrl + shift + p -> Open the VSCode command line.

## WSL

> :warning: You might not be able to use WSL while connected to AAUs VPN with Cisco AnyConnect. 
> A solution is being researched. See: https://gist.github.com/pyther/b7c03579a5ea55fe431561b502ec1ba8

Enable and install WSL by following the guide [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10 "Install Windows Subsystem for Linux (WSL) on Windows 10"). I suggest Ubuntu as the distribution of choice.

Then run the below commands in the WSL terminal.

```shell
sudo apt update && sudo apt upgrade
sudo apt install build-essential
```

These commands update the freshly installed linux subsystem, and then installs a collection of basic development tools.

Install Node.js using the NVM installation option described in [here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/ "How to Install Node.js and npm on Ubuntu 20.04").

### Practical Ubuntu commands to know

| Command                  | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| mkdir \<directory>       | Creates a folder called \<directory>.                        |
| touch \<filename>        | Creates and empty file called \<filename>. Also used to update the timestamp of \<filename>. |
| cd \<directory>          | Change directory to \<directory>. Sends you home if no directory is chosen. |
| ls -al                   | Show you all the files (hidden files too) in the working directory line-by-line. |
| code .                   | Opens a **VSCode** editor inside the current directory.      |
| explorer.exe .           | Opens the current directory in Windows explorer at the linux folder. |
| explorer.exe \<filename> | Opens \<filename> in windows.                                |

## Git

Update git in the WSL terminal to the latest release

Write about SSH connection and Git commands

### Connecting to Git with SSH

To give ourselves an easier time, we're going to use SSH with git. To set it up, follow the guide [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### Using Git in the terminal

Here is a list of important Git commands in the Ubuntu terminal, as well as a short description.

| Command                                  | Description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| git clone \<repo>                        | Clones \<repo> onto your local machine. \<repo> is a SSH link from GitHub. |
| git status                               | Displays the current working tree status.                    |
| git pull                                 | Update your local data to match online repository. Depends on current branch. |
| git add .                                | After making a change or adding a file locally, this prepares all changes to be committed. |
| git commit -m "\<message>"               | Write a telling \<message> about your change, and records the changes to be pushed. |
| git push                                 | Pushes your committed changes to the branch you are working in. |
| git checkout \<branch>                   | Changes to the specified \<branch>.                          |
| git checkout -b \<branch>                | Creates a new local branch with \<branch> name.              |
| git push --set-upstream origin \<branch> | Creates your local branch in the online repo, and pushes to it. |
| git branch                               | Displays the branch you are working in, as well as other available branches in the project. |

## Development Operations (DevOps)

TBA soon. How we handle the database and server.
How do we upload the git repo properly to the AAU server.