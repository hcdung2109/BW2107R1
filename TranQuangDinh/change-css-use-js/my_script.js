    let item = document.getElementById('shape');
    item.style.display = 'block';
    function changeColor() {
        $('#shape').css('background-color','#f5f57a');
    }
    function getToTop() {
        $('html,body').animate({scrollTop: 0},'fast');
    } 
    function HiddenOrDisplay() {
        if (item.style.display === 'block') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    }
    function reSizeWidth() {
        $('#shape').css('width','400px');
    }
    function reSzeHeight() {
        $('#shape').css('height','600px');
    }