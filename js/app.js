console.log('coming in hot!')

class Tomagotchi{
        constructor(name='terri'){
            this.age = 0;
            this.name = name;
            this.hunger = 0;
            this.sleepiness = 0;
            this.boredom = 0;
            this.isAsleep = false;
            this.evolved = false;    
            this.isAlive = true;
        }
        amuse(){
            $('.alert').text(`${this.name} is horsing around!`)
            this.boredom--;
        }
        sleep(){
            $('.alert').text(`${this.name} is asleep!`)
            this.sleepiness--;
            this.isAsleep = true;
        }
        wake(){
            $('.alert').text(`${this.name} is awake!`)
            this.isAsleep = false;
        }
        eat(){
            $('.alert').text(`${this.name} is chowing down!`)
            this.hunger--;
        }
        evolve(){
            if(this.age>5){
            $('.alert').text(`${this.name} is changing!`)
            this.evolved = true;
            }
        }
        hungry(){
            $('.alert').text(`${this.name} is hungry!`)
            console.log($('#alert'));
            console.log(this.name);
            this.hunger++;
        }
        sleepy(){
            $('.alert').text(`${this.name} is tired!`)
            this.sleepiness++;
        }
        die(){
            $('.alert').text(`${this.name} has died!`)
            $('.alert').text(`${this.name} you're so irresponsible!`)
            this.isAlive = false;
        }
        bored(){
            $('.alert').text(`${this.name} is bored!`)
            this.boredom++;
        }
        age(){
            this.age++;
        }
        

};


const game ={
   
    t1: new Tomagotchi(prompt('please enter the name of your pet: ')),
   
    
}

console.log(game.t1)


