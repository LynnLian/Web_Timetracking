$(document).ready(() => {

    setInterval(function () {setCurrentTime()

    },1000);
    
    function setCurrentTime() {
        let time = new Date();

        // alert(time);

        $('#currentTime').text(time);
    }

});

$('#start').click(() => {

    let startTime = $.now();

    $.ajax({
        type: "POST",
        data:{
            startTime: startTime
        }
    })

})