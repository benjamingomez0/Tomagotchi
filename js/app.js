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

            this.age = 0;
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
                    $('#sprite').attr("id","dead");

                    
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
    t1: new Tomagotchi(prompt('please enter the name of your pet: ')),
    displayStats:function(){
        if(this.t1.hunger>=0)
        {
            $('#h').text(`hunger:${this.t1.hunger}`);
        }
        else
        {
            $('#h').text('hunger:0')
        }
        if(this.t1.boredom>=0)
        {
            $('#b').text(`boredom:${this.t1.boredom}`);
        }
        else
        {
            $('#b').text('boredom:0')
        }
        if(this.t1.sleepiness>=0)
        {
            $('#s').text(`sleepiness:${this.t1.sleepiness}`);
        }
        else
        {
            $('#b').text('sleepiness:0')
        }
            $('#a').text(`age:${this.t1.age}`);
    },
    timer: function () {setInterval(()=>{
        this.time++;
        this.displayStats();
        console.log(this.time);
        if(this.t1.isAlive===true && this.t1.isAsleep==false)
        {
            if(this.time%17 === 0)
            {
                this.t1.hungry();
                
            }
            else if(this.time%19 === 0){
                this.t1.bored();
                
            }
            else if(this.time%29 === 0)
            {
                this.t1.sleepy();
                this.t1.aged();
               
            }
            else if(this.t1.hunger>=10||this.t1.boredom>=10||this.t1.sleepiness>=10)
            {
                this.t1.die();
            }

            else if(this.t1.age>=5)
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
    if(game.t1.isAlive===true&&game.t1.isAsleep===false){
    game.t1.eat();
    $('#sprite').attr("src","projectFood.svg");
  
    setTimeout( function (){
        if(game.t1.evolved===true)
        {
            if(game.t1.version===1)
            {
                $('#sprite').attr("src","project evolved ver2.svg");
            }
            else
            {
                $('#sprite').attr("src","project evolved.svg");
            }
        }
        else
        {
            $('#sprite').attr("src","project.svg");
        }
    },1000)
    }
  });
$('#play').on('click', () => {
    if(game.t1.isAlive===true&&game.t1.isAsleep===false){
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


  