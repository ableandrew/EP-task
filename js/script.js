
define (
    ['jquery'],
    function(){

        var App = App || {};

        App.ParentChangeStyler = function() {
            this.element = document.getElementById("akkordeon");
        };


        App.ParentChangeStyler.prototype.akkordeon = function(){
            this.element.addEventListener("click", function(event){
                var target = event.target;
                while (target != this.element) {
                    if (target.tagName == 'LI') {
                        var number = target.getAttribute("number");
                        var elem = document.getElementById(number);
                        //var sprite = target.getElementsByClassName("spriteOpenOrder");
                        var sprite = target.getElementsByClassName("spriteOpenOrder");
                        if (elem.style.display == "none"){
                            elem.style.display = "";
                            sprite[0].style.background = "url('images/sprite.png') no-repeat -15px 0px";
                        }
                        else {
                            elem.style.display = "none";
                            sprite[0].style.background = "url('images/sprite.png') no-repeat";
                        }
                        return;
                    }
                    target = target.parentNode;
                }
            });
        };


        App.ParentChangeStyler.prototype.filterRedStatus = function(){
            var red = document.getElementById("redStatus");

            red.addEventListener("click", function(){

                var liList = document.getElementsByClassName("topMenuA");
                for(var j = 0; j<liList.length; j++){
                    liList[j].style.color = "rgb(74, 212, 255)";
                    liList[j].style.borderBottom = "1px dashed rgb(74, 212, 255)";
                }

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    list.children[i].style.display = "";
                }

                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "red"){
                        list.children[i].style.display = "none";
                    }
                    red.children[0].style.color = "black";
                    red.children[0].style.border = "0";
                }
            });
        };

        App.ParentChangeStyler.prototype.filterGreenStatus = function(){
            var green = document.getElementById("greenStatus");
            green.addEventListener("click", function(){
                var liList = document.getElementsByClassName("topMenuA");
                for(var j = 0; j<liList.length; j++){
                    liList[j].style.color = "rgb(74, 212, 255)";
                    liList[j].style.borderBottom = "1px dashed rgb(74, 212, 255)";
                }

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    list.children[i].style.display = "";
                }

                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "green"){
                        list.children[i].style.display = "none";
                    }

                    green.children[0].style.color = "black";
                    green.children[0].style.border = "0";
                }
            });
        };


        App.ParentChangeStyler.prototype.filterGreyStatus = function(){
            var grey = document.getElementById("greyStatus");
            grey.addEventListener("click", function(){
                var liList = document.getElementsByClassName("topMenuA");
                for(var j = 0; j<liList.length; j++){
                    liList[j].style.color = "rgb(74, 212, 255)";
                    liList[j].style.borderBottom = "1px dashed rgb(74, 212, 255)";
                }

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    list.children[i].style.display = "";
                }

                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "grey"){
                        list.children[i].style.display = "none";
                    }

                    grey.children[0].style.color = "black";
                    grey.children[0].style.border = "0";
                }
            });
        };


        App.ParentChangeStyler.prototype.filterAllStatus = function(){
            var all = document.getElementById("all");
            all.addEventListener("click", function(){
                var liList = document.getElementsByClassName("topMenuA");
                for(var j = 0; j<liList.length; j++){
                    liList[j].style.color = "rgb(74, 212, 255)";
                    liList[j].style.borderBottom = "1px dashed rgb(74, 212, 255)";
                }
                var list = document.getElementById("akkordeon");

                for(var i = 0; i<list.children.length; i=i+2){
                    list.children[i].style.display = "";
                }

                all.children[0].style.color = "black";
                all.children[0].style.border = "0";
            });
        };




        return App.ParentChangeStyler;

    }
);


