(function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia || 
                            navigator.webskitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
    
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream){
        video.srcObject = stream;
        //video.play()
    }, function(error){
        //an error occured
    });

    window.addEventListener('load', function(){
        draw(video, context, 400, 300);
    }, false);

    function draw(video, context, width, height){
        var image, data;
        context.drawImage(video, 0, 0, width, height);

        setTimeout(draw, 10, video, context, width, height);
    }
})();