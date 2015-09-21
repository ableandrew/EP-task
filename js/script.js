
define (
    ['jquery'],
    function(){

        var App = App || {};

        App.ParentChangeStyler = function() {
            this.element = document.getElementById("akkordeon");
        };


        App.ParentChangeStyler.prototype.filterRedStatus = function(){
            $("#redStatus").click(function() {

                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });

                $("#akkordeon").children().each(function(index, el) {
                    $(el).css("display","");
                });

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "red"){
                        list.children[i].style.display = "none";
                    }
                }
                $("#redStatus").children().css({color: "black", border: "0"});
            });
        };


        App.ParentChangeStyler.prototype.filterGreenStatus = function(){
            $("#greenStatus").click(function() {

                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });

                $("#akkordeon").children().each(function(index, el) {
                    $(el).css("display","");
                });

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "green"){
                        list.children[i].style.display = "none";
                    }
                }
                $("#greenStatus").children().css({color: "black", border: "0" });
            });
        };


        App.ParentChangeStyler.prototype.filterGreyStatus = function(){
            $("#greyStatus").click(function() {

                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });

                $("#akkordeon").children().each(function(index, el) {
                    $(el).css("display","");
                });

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i++){
                    if (list.children[i].getAttribute("status") != "grey"){
                        list.children[i].style.display = "none";
                    }
                }
                $("#greyStatus").children().css({color: "black",border: "0"} );
            });
        };

        App.ParentChangeStyler.prototype.filterAllStatus = function(){
            $("#all").click(function() {

                $(".topMenuA").each(function(index, el) {
                    $(el).css({color: "rgb(74, 212, 255)", borderBottom: "1px dashed rgb(74, 212, 255)"} );
                });

                var list = document.getElementById("akkordeon");
                for(var i = 0; i<list.children.length; i=i+2){
                    list.children[i].style.display = "";
                }
                $("#all").children().css({color: "black", border: "0"});

            });
        };




        App.ParentChangeStyler.prototype.akkordeon = function(){
            this.element.addEventListener("click", function(event){
                var target = event.target;
                while (target != this.element) {
                    if (target.tagName == 'LI') {
                        var number = target.getAttribute("number");
                        var elem = document.getElementById(number);
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



        return App.ParentChangeStyler;

    }
);


