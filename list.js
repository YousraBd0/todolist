const tasksContainer=document.querySelector(".tasks");
const input=document.getElementById("input-task");
const button=document.getElementById("addBtn");


button.onclick=function(event){
event.preventDefault();
const taskText=input.value.trim();

if(taskText !== "")
{
    const taskDiv=document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    const label=document.createElement("label");
    label.textContent=taskText;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    tasksContainer.appendChild(taskDiv);

    // Réinitialisation de l'input
    input.value = "";
}
else{
    alert("Enter a task !");
}

}





// getelementsbyclassename retourne ensemple des elements ayant class name dans un tableau
// queryselector nmdlhaa css selector tmdli ghir le premier element li talgah 
// n9dre nkhdem b addlisntener event wela haka b onclick