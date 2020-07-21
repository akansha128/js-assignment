class User { 
        constructor(name, age,email) { 
          this.name = name; 
      this.age = age; 
      this.email = email; 
          this.luCoins = 0; 
           this.courses = []; 
         } 
     
    
       login(){ 
             console.log(`${this.name} has logged in`); 
             return this; 
         } 
         logout(){ 
        console.log(`${this.name} has logged out`); 
             return this; 
         } 
         
         getDetails(){ 
             console.log(`Name is ${this.name}, email is ${this.email}`); 
             return this; 
         } 
         addCoins(){ 
            this.luCoins++; 
            console.log(`${this.name} has ${this.luCoins} coins`); 
            return this; 
        } 
     } 
     
     
     class Moderator extends User{ 
         constructor(name,age,email,role){ 
             super(name,age,email); 
            this.role = role; 
      } 
    } 
     
     
     class Admin extends Moderator{ 
        addCourse(user,course){ 
            user.courses.push(course); 
            console.log(user); 
        } 
     } 
     
     let user1 = new User('Akanksha',19,'a@gmail.com') 
     let user2 = new User('Chetana',20,'c@gmail.com') 
     let modrt = new Moderator('Ruchika',20,'r@gmail.com','Moderator'); 
     let admin = new Admin('Surabhi',19,'s@gmail.com'); 
     let users = [user1,user2,modrt,admin]; 
     
     
     users.forEach(element => { 
        console.log(element); 
     }); 
    
     
   
     admin.addCourse(user1,'Javascript'); 
     admin.addCourse(user1,'Python'); 
     user1.login().addCoins().addCoins().getDetails().logout(); 
     
     
    
     
    