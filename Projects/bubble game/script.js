function bubbleGame(){
    var timer = 60;
    var score = 0;
    var hitVal;

    function increseScore(){
        score += 10; 
        document.querySelector('#scoreVal').textContent = score;
    }


    function getHitValue(){
        hitVal = Math.floor(Math.random()*10);
        document.querySelector('#hitVal').textContent = hitVal;
    }

    function makeBubble(){
        var clutter = '';

        for(var i=0 ; i<160 ; i++){
            var rn = Math.floor(Math.random()*10);
            clutter += `<div class="bubble">${rn}</div>`;
        }

        document.querySelector('#pbtm').innerHTML = clutter;
    }

    function runTimer(){
        const timerint = setInterval(function(){
            if(timer > 0)
            {
                timer--;
                document.querySelector('#timer').textContent = timer; 
            }
            else{

                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over <h1>`;
                const playButton =  document.createElement('button');
                playButton.innerHTML = 'Play';
                document.querySelector('#pbtm').appendChild(playButton);
                
                playButton.addEventListener('click',function(){
                    bubbleGame();
                })
            }

        },1000)
    }


    document.querySelector('#pbtm').addEventListener('click',function(details){
        var targetBubble = Number(details.target.textContent);
        if(targetBubble === hitVal){
            increseScore();
            makeBubble();
            getHitValue();
        }
    })


    makeBubble();
    runTimer();
    getHitValue();
}

bubbleGame();