(function() {
    const data = [
        {
            name: "CSS Peek",
            img: "https://github.com/pranaygp/vscode-css-peek/raw/master/readme/working.gif",
            description: "Allows you to see the CSS settings for an HTML element.",
            url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
            author: "Pranay Prakash",
            downloads: 1702185,
            stars: "4/5",
            selector: "p1"
        },
        {
            name: "TODO Highlight",
            img: "https://github.com/wayou/vscode-todo-highlight/raw/master/assets/material-night-eighties.png",
            description: "Makes seeing the comments for what to do next much easier.",
            url: "https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",
            author: "Wayou Liu",
            downloads: 1661599,
            stars: "5/5",
            selector: "p2"
        },
        {
            name: "Auto Rename Tag",
            img: "https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/usage.gif",
            description: "Makes editing HTML elements easier by edition both ends of the tag at once.",
            url: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
            author: "Jun Han",
            downloads: 4949531,
            stars: "3.5/5",
            selector: "p3"
        },
        {
            name: "Better Comments",
            img: "https://github.com/aaron-bond/better-comments/raw/master/images/better-comments.PNG",
            description: "Makes comments easier to read.",
            url: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
            author: "Aaron Bond",
            downloads: 1553783,
            stars: "5/5",
            selector: "p4"
        }
    ];

    class Package {
        constructor(data) {
            this.name = data.name;
            this.img = data.img;
            this.description = data.description;
            this.url = data.url;
            this.author = data.author;
            this.downloads = data.downloads;
            this.stars = data.stars;
            this.selector = data.selector;
        }

        getFormatedDownloads() {
            return this.downloads.toLocaleString();
        }

        getFormatedStars() {
            return this.stars.toLocaleString();
        }
    }

    function getDate() {
        let date = new Date();
        return date.toDateString();
    }

    /**
     * @param {String | Number} id 
     * 
     * @throws {InvalidArgumentException}
     * 
     * @returns {DOM}
     */
    function getElement(id) {
        if (typeof id != 'string' && typeof id != 'number') throw new Error("InvalidArgumentException - Not a valid id!");
        return document.getElementById(id);
    }

    /**
     * @param {Package} package 
     * 
     * @throws {InvalidArgumentException}
     * 
     * @returns {void}
     */
    function writePackageInfo(package) {
        let is_package = package instanceof Package;
        if (!is_package) throw new Error("InvalidArgumentException - Argument is not a Package!");
        
        let selector = package.selector;
        let name = getElement(selector + "-name");
        let img = getElement(selector+"-img");
        let description = getElement(selector + "-description");
        let url = getElement(selector+"-url");
        let author = getElement(selector + "-author");
        let downloads = getElement(selector + "-downloads");
        let stars = getElement(selector + "-stars");

        name.textContent = package.name;
        img.src = package.img;
        description.textContent = package.description;
        url.href = package.url;
        author.textContent = package.author;
        downloads.textContent = package.getFormatedDownloads();
        stars.textContent = package.getFormatedStars();
    }

    let date = getElement("date");
    date.textContent = getDate();

    for (let pack of data) {
        let package = new Package(pack);
        writePackageInfo(package);
    }

}());