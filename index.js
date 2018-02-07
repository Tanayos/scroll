var td = (function(){
    var items;
    function scroller() {
        console.log(this);
        var cible, elementCible;
        cible = this.getAttribute("data-target");
        elementCible = document.getElementById(cible);
        window.smoothScroll(elementCible, 500);
    }
    function ecouterClicks() {
        var i;
        for (var i = 0; i < items.length; i+= 1) {
            items[i].onclick = scroller;
        }
    }

    window.onload = function() {
        items = document.querySelectorAll("#nav .item");
        console.log(items);
        ecouterClicks();
    }

}());
