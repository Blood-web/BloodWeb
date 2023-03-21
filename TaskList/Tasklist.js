function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function DB(x) {
    if (x) return console.log(x);
    console.error('You had one job. Provide an argument..');
}

let Tasks = {
    CurrentProject: ['Tasklist'],
    Projects: ['Tasklist', 'CryptoNFT', 'JackEwers 0.4'],
    ChangeList: '',//'DEL,CLR,INS,ALT,UPDPr,UPDTt',
    toINS: [],
    toCLR: [],
    toALT: [],

    TASKS: [
        //{id:TaskText:Priority:Favourited:Date:Time}
        //+={altered(Boo):lastAlteredDate}
    ],

};
const Task_Settings = {
    Sort: [ /*Defualt*/ 'Priority', ['Priority', 'Latest', 'Oldest', 'Alphabetical']],
    FullScreen: true,
}

//##################################
// Tasklist
let RemoveOverlay = function () {
    let x = document.getElementById('Task-Conf-Overlay') || document.getElementById('Overlay');
    x.innerHTML = ''; return x.remove();
    //x = conf overlay else tasklist overlay
}
function changeTaskProjects(t) {

    AppendTaskList((t = '' ? document.getElementById('ProjectSelector').value : t));
};

function PushProject(x){if(!Tasks.Projects.includes(x)){return Tasks.Projects.push(x)}}

let ReturnAllTaskIDs = function (x = []) { for (el in Tasks.TASKS) { x.push(Tasks.TASKS[el].id); } return x; }

let PushTasks = function (x) {
    if (!Tasks.TASKS.includes(x)) { Tasks.TASKS.push(x); }
    // adds new projects
    if (!Tasks.Projects.includes(x.Project)) { Tasks.Projects.push(x.Project) }
}
let PushAllTasks = function (NewTaskList) {
    Tasks.TASKS = NewTaskList;
}
let replaceTask = function (task) {
    let IDS = ReturnAllTaskIDs();
    for (let i = 0; i < IDS.length; i++) {
        if (task.id == IDS[i]) {
            return Tasks.TASKS[i] = task;
        }
    }
}
let ChangeTask = function (taskTochange, Change) {
    let Newd = taskTochange.Favourited;

    switch (Change) {
        case 'Favourite':
            taskTochange.Favourited = parseInt(Newd == 0 ? 1 : 0);
            break;
        case 'Priority':
            break;
    }
    replaceTask(taskTochange);
    DeclareAltered(taskTochange.id);
}


let DeclareAltered = function (id, status) {
    for (let i = 0; i < Tasks.TASKS.length; i++) {
        const x = Tasks.TASKS[i];
        if (x.id == id) {
            Tasks.TASKS[(i)].Altered = 1;
        }
    }
}

let IncTaskPriority = function () { }

function getTaskID(agr) {
    for (let i = 0; i < Tasks.TASKS.length; i++) {
        let a = Tasks.TASKS[(i)].id;
        if (a.includes(agr)) { return Tasks.TASKS[(i)].TaskText; }
    }
    return false;
}


function checkDupeTasks(agr) {
    if (!agr) { return console.error('CDT requires arguments to test against'); }

    let tasks = document.querySelectorAll('.Task-List-Item');

    for (let i = 0; i < tasks.length; i++) {
        let a = tasks[(i)].innerText;

        if (a.includes(agr)) { return true; }
    }

    return false;
}
function getTaskByVal(val, a) {
    for (let i = 0; i < Tasks.TASKS.length; i++) {
        let x = Tasks.TASKS[i] || 0;
        // console.log('Checking Task \ni+: ' + i + "\nX: " + x + "\n x[0]: " + x.id)
        if (a == "*" && x.id == val || x.TaskText == val) return Tasks.TASKS[i];
        if (a == "pri" && x.id == val || x.TaskText == val) return x.Priority;

        if (parseInt(x.id) === parseInt(val)) return x.TaskText;
        if (x.TaskText == val) return x.id;

    }
}

//select Tasks
let selectAllTasks = function (select) {
    for (let i = 0; i < Tasks.TASKS.length; i++) {
        let x = Tasks.TASKS[i];
        if (select === true) { document.querySelector('input[value="' + x.id + '"]').checked = true; }
        else if (select === false) { document.querySelector('input[value="' + x.id + '"]').checked = false }
    }
}
function findSelecTask() {
    let argo = document.getElementsByName('RemoveTasks[]');
    let xo = [];

    for (el in argo) {
        let x = argo[(el)];
        if (x.checked == true) {
            xo.push(x.value);
        }
    }

    if (!xo.length > 0) { return console.log('No tasks selected for deletion'); }
    return xo;
}


//


function appendMainTasklist() {
    let Tasklist_Overlay = createElement('div', { 'id': 'TaskList_Overlay', 'style': 'display:none;' });
    let Tasklist = createElement('div', { 'id': 'TaskList_Wrapper' })
    //
    let TaskTitle = createElement('div', { id: 'Task-Title' });
    let APPname = createElement('p', { id: 'Taskify', innerHTML: 'Taskify' });
    let TimeBlock_Div = createElement('div', { id: 'Tasklist_Timeblock_div' });
    let TimeTab = createElement('btn', { innerHTML: 'TimeBlocks', className: 'Task_Keys', value: 'TimeBlocks' });
    let TimeSwitch = createElement('btn', { innerHTML: '[OFF]', className: 'Task_Keys', value: '[OFF]' });
    TimeBlock_Div.append(TimeTab, TimeSwitch);
    TaskTitle.append(APPname, TimeBlock_Div);
    let form = createElement('div', { 'id': 'Tasklist' });
    let ProjectsDiv = createElement('div', { id: 'Tasklist_Projects_div' });
    let NewProjectButton = createElement('button', { id: 'NewProject_Button', innerHTML: '+', className: 'Task_Keys' });
    let clsButton = createElement('button', { innerHTML: 'x̄', id: "Close-TaskList_Wrapper", className: 'Task_Keys' });
    let rfsButton = createElement('button', { innerHTML: '↻', id: 'Refresh_Task_List', className: 'Task_Keys' });
    let ProjectsSelector = createElement('select', { id: "ProjectSelector", style: 'margin-left:0;' });
    for (e in Tasks.Projects) {
        let option = createElement('option', { value: Tasks.Projects[e], innerHTML: Tasks.Projects[e] })
        ProjectsSelector.append(option);
    }
    let editButton = createElement('button', { innerHTML: '✏️', id: 'Tasklist_EditProjectName_Button', className: 'Task_Keys' })
    ProjectsDiv.append(NewProjectButton, ProjectsSelector, editButton, rfsButton, clsButton);

    let UtilityForm = createElement('div', { id: 'Utility_Form', method: 'post' });
    let addTask = createElement('button', { innerHTML: "Add Task", id: 'add_switch', className: 'Task_Switches', value:"Add Task"});
    let Priorityspan = createElement('span', { id: 'task_Priority_Wrap' });
    let upBtn = createElement('button', { className: 'Tasks_Priority_tog Task_Switches', innerText: '↑' });
    let dnBtn = createElement('button', { className: 'Tasks_Priority_tog Task_Switches', innerText: '↓' });
    Priorityspan.append(upBtn, dnBtn);
    let SortButton = createElement('button', { innerHTML: 'Sort<br>(' + Task_Settings.Sort[0] + ')', id: "SORT_switch", className: 'Task_Switches' });
    let Remove = createElement('button', { innerHTML: 'DELETE', id: "del_switch", className: 'Task_Switches' });
    UtilityForm.append(addTask, Priorityspan, SortButton, Remove);
    let hr = document.createElement('hr'); hr.setAttribute('id', 'h1');

    form.append(ProjectsDiv, UtilityForm, hr);
    //
    Tasklist.append(TaskTitle, document.createElement('hr'), document.createElement('hr'), form);

    Tasklist_Overlay.append(Tasklist);
    document.body.append(Tasklist_Overlay);
    setTimeout(() => {
        AppendTaskList();// Needed for loading
    }, 30);
}
function NewProjectDiv() {
    let a = document.getElementById('Utility_Form');
    let d = createElement('div', { id: 'Tasklist_NewProject_Div' });
    let i = createElement('input', {id:'Tasklist_NewProject_Input', type: 'text', placeholder: 'NewProjectName' });// let c = createElement('select', { innerHTML: 'NewProjectName' })
    let c = createElement('button',{id:'Tasklist_NewProject_Check',type:'button',innerHTML:'☑', className:"Task_Keys"});
    d.append(c,i);
    document.getElementById('Tasklist').insertBefore(d, a);
}

let AppendAddTask = function (a) {
    let addswitch = document.getElementById('add_switch');
    addswitch.innerHTML == "Add Task" ?(addswitch.innerHTML = "INSERT" , addswitch.value="INSERT"): false;
    AppendTaskADD();
}
function AppendTaskADD() {let t = document.getElementById("Tasklist"); 
    let a = document.getElementById('Utility_Form');
    let table = document.getElementById("AddTask_Table") || createElement('table', { id: "AddTask_Table" });
    
    let ADDROW = createElement('tr', { className: 'Task-Add-Rows' });
    let input = createElement('input', { type: 'text', id: "Task_to_Add", name: "task_to_add", className: 'Task_Inputs', placeholder: 'Task To ADD :' });
    let t1 = createElement('td'); t1.append(input);
    let addPriority = createElement('input', { type: "number", name: "addPriority", className: 'Task_Inputs addPriority', min: "0", max: "3", placeholder: "0-3" });
    let t2 = createElement('td'); t2.append(addPriority);
    ADDROW.append(t1, t2);
    
    if (table.innerHTML == '' && table.innerText == '') {
        let starterTD = createElement('tr');
        let td1 = createElement('td', { innerText: 'Task To ADD:' });
        let td2 = createElement('td', { innerText: 'Priority' }); starterTD.append(td1, td2);
        table.append(starterTD);
    }

    if (!document.getElementById('AddNewTaskTR')) { let tr = createElement('tr',{id: 'AddNewTaskTR'});
        let ee = createElement('button', {className:"Task_Keys", innerHTML: '+' });
        tr.append(ee); table.append(ADDROW, tr);
    }
    else { table.insertBefore(ADDROW, document.getElementById('AddNewTaskTR')); }
    t.insertBefore(table, a);
    SetPriorityLimitDetector();
}


function AppendTaskList(Project) {
    if (Project != '' && Project != undefined) { Tasks.CurrentProject = Project; }

    let a = document.getElementById('Tasks_Container');// check for existing Task
    if (!!a) { a.innerHTML = ""; a.remove(); }
    let t = document.getElementById('Tasklist');
    let TASKS_container = createElement('div', { id: 'Tasks_Container' });

    for (let i = 0; i < Tasks.TASKS.length; i++) {
        let x = Tasks.TASKS[i];

        //No task, id error, TAsk project error - handlers
        if (!x) { console.error('x = ybdefibnd , continuing: ' + x); continue; }
        if (checkDupeTasks(x.id) == true || String(Tasks.CurrentProject).toLowerCase() !== String(x.Project).toLowerCase() && String(x.Project).toLowerCase() !== String(Project).toLowerCase()) { continue; }
        if (x.hasOwnProperty("Altered") && x.Altered == "DELETE") { console.log(x + 'isALtered'); continue; }

        let ind = createElement('input', { 'type': 'checkbox', name: 'RemoveTasks[]', value: x.id, });
        let p = createElement('p', { innerHTML: x.TaskText });
        let f = createElement('button', { className: 'Task_Fav_icon', value: x.Favourited });

        if (x.TaskText == '_test') { ind.setAttribute('checked', true); }

        let Task_Wrapper = createElement('div', { className: 'Task-List-Item ' + ('Priority' + x.Priority), });
        Task_Wrapper.append(ind, p, f);
        TASKS_container.append(Task_Wrapper); //+ "has a date dif of" + DateDif(x.Date))
    }
    t.append(TASKS_container);

}

appendMainTasklist();

function CallTaskList(stat) {
    let x = document.getElementById('TaskList_Overlay');
    if (!stat) {
        if (x.style.display == "none") { stat = 'open'; }
        else { stat = 'close'; }
    }

    switch (stat) {
        case 'open':
            x.style.display = "block"; AppendTaskList();
            break;
        case 'close':
            x.style.display = "none"; RemoveTaskList();
            break;
        default: return console.error('Args (open/close) must be passed to CallTaskList');
    }
}
function RemoveTaskList() {
    let t = document.getElementById('Tasks_Container');
    if (t) { t.innerHTML = ''; t.remove(); }
}


function loadTaskConfV2(action, TS) {
    let overlay = createElement('div', { id: 'Task-Conf-Overlay' });
    let taskMain = createElement('form', { id: 'Task-Conf', method: 'post' });

    if (Tasks.toCLR > 0) {
        let clearDiv = createElement('')
    }
    for (ele in Tasks.toCLR) {
        createTaskUnit(Tasks.toCLR(ele));
    }

}

function loadTaskConf(action, e) {
    if (document.getElementById('Task-Conf')) { return console.error('task-conf already exists'); }

    let overlay = createElement('div', { id: 'Task-Conf-Overlay' });
    let taskMain = createElement('form', { id: 'Task-Conf', method: 'post' });
    let projval = String(Tasks.CurrentProject).toLowerCase();
    let Project = createElement('input', { name: 'Project-Conf', value: projval, type: 'hidden' })

    let act = createElement('div', {
        'id': 'task_input', 'name': 'task_to_' + action, "type": "text"
    });
    let Startertext = createElement('p', { innerHTML: 'Are you sure you want to: ' });
    let U = createElement('input', { name: action + "_task", value: action, type: 'text', className: 'TaskConf_action ' + action });
    Startertext.append(U,tNode('The '+e));
    let task_Y = createElement('input',{ name: action + '_' + e, value: 'YES', type: 'submit' });
    let task_N = createElement('button'); task_N.innerText = 'NO'; task_N.setAttribute('onclick', "RemoveOverlay();");
    let TasksID = []; let TSX = [];

    if (e!="Project" && action == "DELETE" || action == "UPDATE" || action != "INSERT") { TasksID = findSelecTask() ?? 0;
        for (let i = 0; i < TasksID.length; i++) { let e = getTaskByVal(TasksID[i], '*');
            TSX.push({ Priority: e.Priority, id: e.id, TaskText: e.TaskText })
        }
    }
    
    if (action == "INSERT") {
        let x = e!="Project"?document.getElementById('Task_to_Add'):document.getElementById('Tasklist_NewProject_Input');
        x.length === 0 || x == undefined ? TasksID.unshift('_test') : TasksID.unshift(x.value);
        TSX.push({ id: x.value, TaskText: x.value, Priority: e!="Project"?(parseInt(document.querySelectorAll('.addPriority')[0].value)):0 });
    }
 
    for (let i = 0; i < TasksID.length; i++) {
        let Z = TasksID[i]; if (Z == undefined) continue;
        let Pri = parseInt(TSX[i].Priority) ?? 0;

        // Tries to find existing priority
        console.warn('Pri ' + Pri + '\n z' + Z + "TSX" + TSX[i].TaskText)
        let span = createElement('span', { className: action + '_unit' });
        let a = createElement('input', { type: 'checkbox', name: (action+'_'+e+'[]'), value: TSX[i].id, checked: true });
        let taskunit = createElement('p', { innerText: TSX[i].TaskText });
        let Priority = createElement('input', { name: 'Tasks_Priority', value: Pri, type: 'number' });
        let priStack = createElement('span', { id: 'Priority_config' }); priStack.append(Priority);

        span.append(a,taskunit,priStack);
        act.append(span);
    }

    taskMain.append((document.createTextNode("Update "+Tasks.CurrentProject)), Project, Startertext, act, task_Y, task_N);
    overlay.append(taskMain);
    document.body.append(overlay);
}


function SortTaskList(order) {
    order == '' ? Task_Settings.Sort[0] : order;
    let ids = ReturnAllTaskIDs();
    const NewArray = [];
    let priM = [[], [], [], []];
    switch (order) {
        case "Priority":
            for (let i = 0; i < Tasks.TASKS.length; i++) {
                let CP = Tasks.TASKS[i].Priority;
                priM[CP].push({ 'id': Tasks.TASKS[i].id, 'Priority': CP });
            }
            //Loop each priority array, Get Task && Push to newArray 
            for (i = 3; i >= 0; i--) { for (let n = 0; n < priM[i].length; n++) { NewArray.push(getTaskByVal(priM[i][n].id, '*')); } }
            break;
        case "Alphabetical": const alphaBet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            for (let a = 0; a < alphaBet.length; a++) {
                const l = alphaBet[a];
                for (ele in Tasks.TASKS) {
                    const CT = Tasks.TASKS[ele];
                    if (CT.TaskText[0].toLowerCase() == l) {
                        console.warn('Testing: Alphabet::Case Alpha ' + l + ":id:+" + CT.id);
                        NewArray.push(CT); continue;
                    }
                }
            }
            break;
        default:
            if (order == "Oldest" || order == "Latest") {
                if (order == 'Latest') { ids.sort().reverse(); }
                else { ids.sort(); }

                for (let e = 0; e < ids.length; e++) {
                    const CT = getTaskByVal(ids[e], '*');
                    if (CT && CT.id == ids[e] && CT != undefined) { NewArray.push(CT); };
                }
            };
            break;

    }
    PushAllTasks(NewArray);
    return console.log('STL= ' + NewArray);
}



function upDateTaskList(e) {

    if (e == 'x̄' || e == '↻' || e == '' || e == '+') {    //Failsafe catches
        if (e == '+') { return NewProjectDiv(); }
        if (e == '↻') return reloadPage();
        if (e == 'x̄') CallTaskList('close');
        return;
    }

    if (e.includes('Sort')) {

        let Sort = Task_Settings.Sort[1];
        let NXT = Sort[(Sort.indexOf(Task_Settings.Sort[0])) + 1];
        let NextSort = Sort[(Sort.indexOf(NXT > Sort.length ? 0 : NXT))];

        Task_Settings.Sort[0] = NextSort;
        NextSort > Sort.length - 1 || NextSort == undefined ? NextSort = Sort[0] : NextSort;
        SortTaskList(NextSort); RemoveTaskList();
        setTimeout(() => {
            Task_Settings.Sort[0] = NextSort;
            setTimeout(() => {
                AppendTaskList();
                document.getElementById('SORT_switch').innerHTML = 'Sort <br>(' + NextSort + ")";
            }, 300);
        }, 300);
        return
    }
    ScrollHome();

    if (e === "INSERT"||e === "Add Task") {if(e === "Add Task"){e.innerHTML="INSERT";return AppendAddTask();};
        let t = document.getElementById("AddTask_Table");
        let NT = document.getElementById('Tasklist_NewProject_Input');
        if(!NT==''||!NT==null){if(NT.value!=''){return loadTaskConf(e,'Project')}}
        (t == '' || t == null) ? AppendTaskADD() : loadTaskConf(e,'Tasks'); return;
    }
    if(e === "DELETE"&&findSelecTask()){loadTaskConf(e,'Tasks');}
}

let SetPriorityLimitDetector = function () {
    let P = document.getElementsByClassName('addPriority');

    for (let i = 0; i < P.length; i++) {
        P[i].addEventListener('keyup', function () {
            P[i].value = 0;
            P[i].value = 3;
        });
    }
}

document.body.addEventListener('keydown', function (event) {
    let tcOvrly = document.getElementById('Task-Conf-Overlay');
    if (tcOvrly != null && event.key == 'Enter') { return document.querySelector('input[value="YES"]').click(); }

    let tlOvrly = document.getElementById('TaskList_Overlay');
    if (tlOvrly.style.display == 'block' && tcOvrly == null) {
        let TaskInputValue = document.getElementById('Task_to_Add');
        if (event.key == 'Enter') { return loadTaskConf('INSERT','Tasks'); }
        if ( !!TaskInputValue) return;
        if (event.key == 'Backspace' || event.key == 'Delete') {
            let FindSelectedTasks = findSelecTask();  //('Trying to delete');
            if (FindSelectedTasks.length > 0) { loadTaskConf('DELETE','Tasks'); }
        }
    }
});

document.getElementById('TaskList_Wrapper').addEventListener('click', function (event) {
    let e = event.target;
    document.getElementById('ProjectSelector').onchange = function () {
        changeTaskProjects(document.getElementById('ProjectSelector').value);
    }

    if (e) {
        if (e.id == "TaskList_Wrapper" || e.id == "Tasklist") { return; }
        let parentClass = e.parentElement.className;
        let parentId=e.parentElement.id;
        let TaskcheckBox = e.parentElement.firstChild;

        console.warn('Task-Click:\nFV:' + e.firstChild
            + '\nid=' + e.id + '\neleClass=' + e.className +
            "\nParentClass=" + parentClass +'\nTaskValue=' + TaskcheckBox.value +
            "\nInnerText" + e.innerText + "\nInnerHTML=" + e.innerHTML);


        if (e.className == "Task_Switches" || e.className == "Task_Keys") {
            // loadconf( update ↑||↑ )
            if (e.innerText.includes("↑") || e.innerText.includes("↑")) { loadTaskConfV2("UPDATE", e.innerText); }
            if([e.id,parentId].includes("AddNewTaskTR")){return AppendAddTask();}
            if(e.id=="Tasklist_NewProject_Check"||e.innerText=="☑"){loadTaskConf('INSERT','Project');}
            return upDateTaskList(e.innerHTML);

        }

        //Favourite
        if (e.className === "Task_Fav_icon") {
            ChangeTask(getTaskByVal(TaskcheckBox.value, '*'), 'Favourite');
            //apply change to parent and target 
            e.value == 0 ? e.parentElement.className += " Favourited" : e.parentElement.className = parentClass.replace(' Favourited', '');
            e.value = parseInt(e.value == 0 ? 1 : 0);
        }
        // Task Check box value == number > Check/Uncheck Box
        else if (!isNaN(TaskcheckBox.value) || parentClass.includes('Task-List-Item')) {
            if (TaskcheckBox.checked == false) {
                TaskcheckBox.checked = true;
                return console.log('Checking Task:' + TaskcheckBox.value);
            }
            else {
                TaskcheckBox.checked = false;
                return console.log('Unchecking Task:' + TaskcheckBox.value)
            }
        }
    }
});
document.getElementById('TaskList_Wrapper').addEventListener('dblclick', function (event) {
    let e = event.target.parentElement.firstChild.value;
    console.log(e); IncTaskPriority();
});