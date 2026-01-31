function getList() {

    document.getElementById("show-list").textContent = "Here's the list of the things you need to accomplish:"

    let getList = document.getElementById("task-one").value;

   document.getElementById("show-one").textContent = "1. " + getList;

    getList = document.getElementById("task-two").value;

   document.getElementById("show-two").textContent = "2. " + getList;
   
   getList = document.getElementById("task-three").value;

   document.getElementById("show-three").textContent ="3. " + getList;

   getList = document.getElementById("task-four").value;

   document.getElementById("show-four").textContent ="4. " +  getList;
}