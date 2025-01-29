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

    const check=document.createElement("div");
    check.classList.add("check");

    const removeimg=document.createElement("img");
    removeimg.src="remove.png";
      

    removeimg.onclick=function(){
        taskDiv.remove();
    }

   

    check.appendChild(checkbox);
    check.appendChild(label);
    taskDiv.appendChild(check);
    taskDiv.appendChild(removeimg); // Ajout de l'image
    tasksContainer.appendChild(taskDiv);

    // Réinitialisation de l'input
    input.value = "";

    check.addEventListener("change", function () {
        if (checkbox.checked) {
           removeimg.src="removeRed.png"
        } else {
            removeimg.src="remove.png"
        }
    });


}
else{
    alert("Enter a task !");
}

}





// getelementsbyclassename retourne ensemple des elements ayant class name dans un tableau
// queryselector nmdlhaa css selector tmdli ghir le premier element li talgah 
// n9dre nkhdem b addlisntener event wela haka b onclick