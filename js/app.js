console.log('coming in hot!')

class Tomagotchi{
        constructor(name='terri'){
            this.age = 4;
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
            if(this.age>5&&this.evolved==false)
            {
                $('.alert').text(`${this.name} is changing!`)
                this.evolved = true;
                const roll = Math.floor(Math.random()*11);
                if(roll>=10)
                {
                    $('.alert').text(`${this.name} is now nerdy!`)
                    $('#sprite').attr("src","project evolved.svg");
                }
                elseg
                {
                    $('.alert').text(`${this.name} is now cool!`)
                    $('#sprite').attr("src","project evolved ver2.svg");
                }
            }
        }
        hungry(){
            $('.alert').text(`${this.name} is hungry!`)
            // console.log($('#alert'));
            // console.log(this.name);
            this.hunger++;
        }
        sleepy(){
            $('.alert').text(`${this.name} is tired!`)
            this.sleepiness++;
        }
        die(){
            if(this.hunger>=10||this.boredom>=10||this.sleepiness>=10)
            {
                this.isAlive= false;
                $('.alert').text(`${this.name} has died!`)
            }
        }
        bored(){
            $('.alert').text(`${this.name} is bored!`)
            this.boredom++;
        }
        aged(){
            this.age++;
        }
        

};


const game ={
    time:1,
    t1: new Tomagotchi(),
    //newName: function(){t1.name = prompt('please enter the name of your pet: ')},
    timer: function () {setInterval(()=>{
        this.time++;
        console.log(this.time);
        console.log(this.t1.hunger,'<====hunger');
        if(this.t1.isAlive===true)
        {
            if(this.time%10 === 0)
            {
                this.t1.hungry();
            }
            if(this.time%15 === 0){
                this.t1.bored();
            }
            if(this.time%25===0)
            {
                this.t1.aged();
                this.t1.sleepy();
            }
            if(this.t1.hunger>=10||this.t1.boredom>=10||this.t1.sleepiness>=10)
            {
                this.t1.die();
            }
            if(this.t1.age>=5)
            {
                this.t1.evolve();
            }
        }

    },1000)
}
}
game.timer();
console.log(game.t1)


