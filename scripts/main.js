var myImage =  document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Kiss.jpeg') {
        myImage.setAttribute('src','images/cute.JPG');
    } else {
        myImage.setAttribute('src','images/Kiss.jpeg')
    }

}