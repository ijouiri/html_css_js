// Storage Controller
const storageCtr = (function(){
  // Private
  let items = [];
  if (localStorage.getItem("items") !== null ){
    items = JSON.parse(localStorage.getItem("items"));
  }
  

  //Public
  return {
    getItemsFromStorage: function(){
      return items;
    },

    addToStorag: function(item){
      items.push(item)
      localStorage.setItem("items", JSON.stringify(items));

    },

    deleteFromStorage: function(){
      const current = itemCtrl.getCurrentItem();
      items.forEach((item, index)=>{
        if (current.id == item.id){
          items.splice(index, 1);
        }
      })
      localStorage.setItem("items", JSON.stringify(items));

    },

    updateItemInStorage: function(){
      const current = itemCtrl.getCurrentItem();
      items.forEach((item)=>{
        if (current.id == item.id){
          item.name = current.name;
          item.calorie = current.calorie;
        }
      })
      localStorage.setItem("items", JSON.stringify(items));
    },

    clearStorage: function(){
      localStorage.clear();
    }
  }

})();
 


// item Controller
const itemCtrl = (function(){
  // item Constructer
  const Item = function(id, name, calorie){
    this.id = id;
    this.name = name;
    this.calorie = calorie;
  };

  // Data Structers (States)
  const data = {
    items: storageCtr.getItemsFromStorage(),
    // items: [
    //   // {id: 0, name: "Eggs", calorie: 400},
    //   // {id: 1, name: "Milk Shake", calorie: 1400},
    //   // {id: 2, name: "Steack Dinner", calorie: 2000},
    //   // {id: 122, name: "test Dinner", calorie: 2000}
    // ],
    currentItem: null,
    totalCalories: 0

  };

  // Public
  return {
    dataLog: function(){
      return data;
    },

    addItem: function(name, calorie){
      let ID;
      // Create an ID
      if (data.items.length > 0){
        // ID = data.items.length;
        ID = data.items[data.items.length - 1]["id"] + 1
        console.log(ID)
      }else{
        ID = 0;
      }
      // Create new Item
      calorie = parseInt(calorie);
      const newItem = new Item(ID, name, calorie);

      
      // Add the item to the items list
      // data.items.push(newItem);

      // Add item to Storage

      storageCtr.addToStorag(newItem);

      
      // Add the Item to UI
      UICtrl.populateItemList();
    },

    updateItem: function(input){
      data.currentItem.name = input.name;
      data.currentItem.calorie = parseInt(input.calorie);
    },

    deleteItem: function(){
      data.items.forEach( (item, index) =>{
        if (data.currentItem.id == item.id){
          data.items.splice(index, 1)
        }
      } )

    },

    getItems: function(){
      return data.items;
    },

    updateCalories: function(){
      let totalCalories= 0;
      data.items.forEach(item =>{
         totalCalories += item.calorie;
      })
      return totalCalories;
    },

    setCurrentItem: function(id){
      let found;
      data.items.forEach(item => {
        if (item.id === id){
          found = item;
        }
      })

      data.currentItem = found;

    },

    getCurrentItem: function(){
      return data.currentItem;
    }

  }
})()


// UI Controller
const UICtrl = (function(){
  const Selectors = {
    itemList: "#item-list",
    addItem: ".add-btn",
    editItem: ".edit-item",
    deleteItem: ".delete-btn",
    updateItem: ".update-btn",
    clearItems: ".clear-btn",
    backItem: ".back-btn",
    mealName: "#item-name",
    calorieValue: "#item-calories",
    totalCalories: ".total-calories"

  }

  // Public
  return {
    populateItemList: function(){
      const items = itemCtrl.getItems();
      let html = '';
      items.forEach(item => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calorie} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      })

      document.querySelector(Selectors.itemList).innerHTML = html;
      this.showCalories()
    },
    getSelectors: function(){
      return Selectors;
    },
    getInput: function(){
      return {
        name: document.querySelector(Selectors.mealName).value,
        calorie: document.querySelector(Selectors.calorieValue).value,
      } 
    },
    cleaInput: function(){
      document.querySelector(Selectors.mealName).value = "";
      document.querySelector(Selectors.calorieValue).value = "";
    },

    clearAll: function(){
      document.querySelector(Selectors.itemList).innerHTML = "";

    },

    showCalories: function(){
      document.querySelector(Selectors.totalCalories).textContent = itemCtrl.updateCalories();
    },

    editStatus: function(hide = true){
      if (hide){
        document.querySelector(Selectors.deleteItem).style.display = "none";
        document.querySelector(Selectors.updateItem).style.display = "none";
        document.querySelector(Selectors.backItem).style.display = "none";
        document.querySelector(Selectors.addItem).style.display = "inline";
      }else{
        document.querySelector(Selectors.deleteItem).style.display = "inline";
        document.querySelector(Selectors.updateItem).style.display = "inline";
        document.querySelector(Selectors.backItem).style.display = "inline";
        document.querySelector(Selectors.addItem).style.display = "none";
      }
    },

    displayCurrentItem: function(){
      const current = itemCtrl.getCurrentItem();
      document.querySelector(Selectors.mealName).value = current.name;
      document.querySelector(Selectors.calorieValue).value = current.calorie;
    }


  }
})();



// app Controller
const app = (function(itemCtrl, UICtrl){
  // Load event Listining
  const loadEventsListining = function(){
    const UISelectors = UICtrl.getSelectors();

    // event for add Item
    document.querySelector(UISelectors.addItem).addEventListener("click", addItemSubmit);



    // prevent the Enter submit
    document.addEventListener("keypress", function(e){
      if (e.keyCode == 13 || e.which == 13)
        e.preventDefault()
    })


    // event to get the Item to edit
    document.querySelector(UISelectors.itemList).addEventListener("click", getEditItem);
    // event to update the Item
    document.querySelector(UISelectors.updateItem).addEventListener("click", updateItemSubmit);
    // event to delete the Item
    document.querySelector(UISelectors.deleteItem).addEventListener("click", deleteItemSubmit);


    // event for Clear all
    document.querySelector(UISelectors.clearItems).addEventListener("click", clearAll);

    // evet for the Back Submit
    document.querySelector(UISelectors.backItem).addEventListener("click", function(e){
      e.preventDefault();
      UICtrl.cleaInput();
      UICtrl.editStatus();
    });

  }


  //Get the item to edit
  function getEditItem(e){
    e.preventDefault();
    if (e.target.className.includes("edit-item")){
      const targetItem = e.target.parentElement.parentElement.id,
            re = /[0-9]{1,}$/;
      
      const itemId = parseInt(re.exec(targetItem)[0]);

      itemCtrl.setCurrentItem(itemId);

      UICtrl.displayCurrentItem();

      UICtrl.editStatus(false);

    }
  }

  //update the current Item
  function updateItemSubmit(e){
    e.preventDefault();
    const newInput = UICtrl.getInput();
    itemCtrl.updateItem(newInput);
    storageCtr.updateItemInStorage();

    // Display the new Item
    UICtrl.populateItemList();
  }

  // Delete the current Item
  function deleteItemSubmit(e){
    e.preventDefault();
    itemCtrl.deleteItem();
    storageCtr.deleteFromStorage();
    UICtrl.cleaInput();
    UICtrl.editStatus();
    UICtrl.populateItemList()
  
  }

  // add an item
  function addItemSubmit(e){
    // Get the input value from UICtrl
    const input = UICtrl.getInput();

    // add the items to the itemCtrl
    if (input.name !== "" && input.calorie !== ""){
      itemCtrl.addItem(input.name, input.calorie)

      UICtrl.cleaInput();
    }
    e.preventDefault();
  }

  function clearAll(e){
    storageCtr.clearStorage();
    UICtrl.clearAll();
  }

  // Public
  return {
    init: () => {
      console.log("App is Initializing...")

      UICtrl.editStatus();

      UICtrl.populateItemList();

      loadEventsListining();
    }
  }
})(itemCtrl, UICtrl);

// initializing the app
app.init();
