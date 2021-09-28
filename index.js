const menu = {
    /* the _courses object is mapping between each course and the dishes */
    _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },
    /* getter and setter methods. For easier access, changing things and defining*/
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mainIn) {
      this._courses.mains = mainIn;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },
    // for easier access and mapping
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    // new dish and specified course and price
    addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    /* push into the appropriate array in menu courses */
      this._courses[courseName].push(dish);
    },
  /* gets a random dish from a course on the menu and it will be necessary for generating a random meal */
   getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
    }, 
  // generate a three-course meal 
    generateRandomMeal: function () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
    },
  };
  /* course name , dish name and price of the courses */
  menu.addDishToCourse('appetizers', 'Mushroom soup', 4,50);
  menu.addDishToCourse('appetizers', 'fries', 3,50);
  menu.addDishToCourse('appetizers', 'Spring Roll', 4);
  
  menu.addDishToCourse('mains', 'Schnitzel with mushroom sauce', 13,50);
  menu.addDishToCourse('mains', 'Spaghetti Bolognese', 12);
  menu.addDishToCourse('mains', 'Doener Kebap', 8.50);
  
  menu.addDishToCourse('desserts', 'Baked Banana with honey', 6);
  menu.addDishToCourse('desserts', 'Chocolate Fountain', 7);
  menu.addDishToCourse('desserts', 'Pancake with syrup', 6.20);
  // generates a random meal from the menu
  let meal = menu.generateRandomMeal();
  // log to the console
  console.log(meal);
  