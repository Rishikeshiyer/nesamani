var interval;
var j = 1;
var from = 1
var to = $(window).width();

function putHammer() {
    $('<div class="hammer" id="'+j+'">')
        .css({
            "left": Math.floor((Math.random() * to) + from) + 'px',
            "top": '0px'
        })
        .append($('<img src="images/hammer.png" alt="myimage" id="stone"/>'))
        .appendTo(document.body)
        .animate({ top: "100vh" },1500)
        .promise().done(function(){
            $(this).remove();
        })
    j++;
}

function moveNesamani(event){
    if(event.keyCode == 37 || event.keyCode == 39){
        event.preventDefault();
        var position = $(".nesamaniJet").position()
        var currentLeft = position.left
        const key = event.key;
        switch (key) {
            case "ArrowLeft":
                $(".nesamaniJet").css('left', currentLeft-60);
                break;
            case "ArrowRight":
                $(".nesamaniJet").css('left', currentLeft+60);
                break;
        }
    }
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timeInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(timeInterval)
            $('#myModal').modal('show');
            $(".nesamaniJet").hide();
        }
    }, 1000);
}

function isNesamniHit(){
    // Your code goes here..
    // ---Tips---
    // Loop through all the on screen hammers.
    // Find if any of them is as close as to hit nesamani's hit.
    // The find function should be called recursively.
	$('.hammer').each((i,v)=>{
		//var htop = hpos.top;
		console.log($(v).offset());
		var hpos = ($(v).offset());
		var htop = hpos.top;
		var npos = $(".nesamaniJet").offset();
	var ntop = npos.top;
	console.log(ntop);
	if(htop+70 == ntop){
		$('#missedModal').modal('show');
	}
	})
/*	var npos = $(".nesamaniJet").offset();
	var ntop = npos.top;
	console.log(ntop);
	if(htop+70 == ntop){
		$('#missedModal').modal('show');
	}		*/
}

window.onload = function () {
    var duration = 60 * 2,
    display = document.querySelector('#time');
    startTimer(duration, display);
};

$(document).ready(function(){
    var i = 1;
    (function myLoop (i) {          
        setTimeout(function () {   
            putHammer();
			isNesamniHit();
            if (i <= 20) myLoop(i);
        }, 300)
        })(10);
})