console.log('coming in hot!')

class Tomagotchi{
        constructor(name){
            if(name===null||name==='')
            {
            this.name = "terri";
            }
            else
            {
                this.name = name;
            }

            this.age = 4;
            this.hunger = 0;
            this.sleepiness = 1;
            this.boredom = 0;
            this.isAsleep = false;
            this.evolved = false;    
            this.isAlive = true;
            this.version=1;
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
                if(roll<=9)
                {
                    $('.alert').text(`${this.name} is now nerdy!`);
                    $('#sprite').attr("src","project evolved ver2.svg");
                    this.version=1;
                }
                else
                {
                    
                    $('.alert').text(`${this.name} is now cool!`);
                    $('#sprite').attr("src","project evolved.svg");
                    this.version=2;
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
                if(this.isAlive===true)
                {
                    this.isAlive= false;
                    $('.alert').text(`${this.name} has died!`)
                    $('#sprite').attr("src","project dead.svg");
                }
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
    //newName: function(){return prompt('please enter the name of your pet: ')},
    t1: new Tomagotchi(prompt('please enter the name of your pet: ')),
    displayStats:function(){
            $('#h').text(`hunger:${this.t1.hunger}`);
            $('#b').text(`boredom:${this.t1.boredom}`);
            $('#s').text(`sleepiness:${this.t1.sleepiness}`);
            $('#a').text(`age:${this.t1.age}`);
    },
    timer: function () {setInterval(()=>{
        this.time++;
        this.displayStats();
        console.log(this.time);
        if(this.t1.isAlive===true && this.t1.isAsleep==false)
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
game.t1.sleep();
$('#sprite').attr("src","project sleep.svg");
$('#sleep').text("lights on!")
$('body').css('backgroundColor', '#456DA3' );

$('#feed').on('click', () => {
    if(game.t1.isAlive===true){
    game.t1.eat();
    }
  });
$('#play').on('click', () => {
    if(game.t1.isAlive===true){
    game.t1.amuse();
    }
  });
  $('#sleep').on('click', () => {
    if(game.t1.isAlive===true)
    {
        if(game.t1.isAsleep===false)
        {
            $('#sprite').attr("src","project sleep.svg");
            $('#sleep').text("lights on!")
            game.t1.sleep();
            $('body').css('backgroundColor', '#456DA3' );
            
        }
        else if(game.t1.isAsleep===true)
        { 
            if(game.t1.evolved===true)
            {
                if(game.t1.version===1)
                {
                    $('#sprite').attr("src","project evolved ver2.svg");
                }
                else if(game.t1.version===2)
                {
                    $('#sprite').attr("src","project evolved.svg");
                }
                
            }
            else
                {
                    $('#sprite').attr("src","project.svg");
                }
            
            $('#sleep').text("lights out!")
            game.t1.wake();
            $('body').css('backgroundColor', '#F5EC76' );
            
        }
    }
  });


  