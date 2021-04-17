(function(){
    let tasks = [];
    const taskStatus = {
        active:'active',
        completed:'completed'
    };

    class Task {
        constructor(id, name, status) {
            this.id = id;
            this.name = name;
            this.status = status;
        }
    }

    /**
     * @param {Task} task 
     * 
     * @returns {Void}
     */
    function addTaskElement(task) {
        let parent = document.getElementById("active-list");
        let container = document.createElement("li");
        let taskElem = document.createTextNode(task.name);

        container.setAttribute("id",task.id);

        container.appendChild(taskElem);

        parent.appendChild(container);
    }

    /**
     * @param {*} event 
     * 
     * @returns {Void}
     */
    function addTask(event) {
        let input = document.getElementById("input-task");
        if (input.value != "") {
            let newTask = new Task("task-"+tasks.length,input.value, taskStatus.active);
            tasks.push(newTask);

            addTaskElement(newTask);

            input.value = "";
        }
    }

    /**
     * @param {*} event 
     * 
     * @returns {Void}
     */
    function completeTask(event) {
        let target = event.target;
        let tgtId = target.id;

        for (let i of tasks) {
            if (i.id == tgtId) {
                i.status = taskStatus.completed;
                break;
            }
        }

        target.remove();
        document.getElementById("completed-list").appendChild(target);
    }

    /**
     * @param {*} event 
     * 
     * @returns {Void}
     */
    function clickButton(event) {
        if (event.keyCode == 13) {
            document.getElementById("add-task").click();
        }
    }

    /**
     * @returns {Void}
     */
    function init() {
        document.getElementById("add-task").onclick = addTask;

        document.getElementById('active-list').onclick = completeTask;

        document.getElementById('input-task').onclick = clickButton;
    }

    init();
}())