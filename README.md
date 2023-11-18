# To-Do-List-Application | Enneas

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript Version](https://img.shields.io/badge/JavaScript-ES6%2B-blue.svg)](https://www.ecma-international.org/ecma-262/)


 a basic To-Do list application using HTML, CSS, and JavaScript. The application should allow users to add tasks, mark them as completed, and delete them
## Table of Contents

- [Installation](#installation)
- [Code Structure](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

The benefit of the trifecta of CSS, HTML, and Javascript is that it does not require any prerequisites or installation to execute in your browser. Furthermore, the extensions required for smooth operation are imported as CDN Links in the index.html file. Τhat being said, let's look at what was imported into the HTML file and different solutions for running it.

Font Awesome for the button-icons

```bash
https://fontawesome.com/
```



live-server - node way

```bash
npm install -g live-server
```

live-server - Manual way

```bash
git clone https://github.com/tapio/live-server
cd live-server
npm install # Local dependencies if you want to hack
npm install -g # Install globally```
```

>Note: This is a little development server with live reload capability. Use it for hacking your HTML/JavaScript/CSS files, but not for deploying the final site.

Manual - Old Style Way:

Just Drag and drop the index.html in the preferred browser and you can start using its functionalities.



## Code Structure
```
.
├── css                         # Directory for css file
│   └──style.css                # the style of the application, with css.
├── js                          # Directory for app.js file
    └──app.js                   # the business logic of the application, with pure Javasript 
                                # addBtn.onclick..... => Add a new Task on the Unordered Tasks List
                                # clearBtn.onclick....=> How to clear all finished tasks
                                # input.addEventListener => Add Task on Enter Click logic
                                # function allTasks() => Manipulating LocalStorage for task list 
                                # item initialization, as well as localstorage object              # initialization and update(archive).
                                # function archiveItem  => delete button utilization - archive one
                                # item
├── index.html                  # the source html file.
```

## Installation

How can you contribute
1. Fork the repository
2. Create a new branch:
```bash
  git checkout -b feature-name
```
3. Make your changes and commit:
```bash
  git commit -m 'Add new feature'
```
4. Push to the branch:
```bash
  git push origin feature-name
```
5. Submit a pull request

## License
This project is licensed under the MIT License.