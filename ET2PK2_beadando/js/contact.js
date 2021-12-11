
function showImg() {
var x = document.getElementById("imgdiv");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
    x.style.display = "block";
  }
}

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);      
var x = document.getElementsByClassName("coloring");      
      for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = randomColor; 
      }

      function checkforText(requiredText) {
        let found = false;

        selector  = `#list :contains('${requiredText}')` 
        selectedList = $(selector);

        if (selectedList.length) {
            found = true;
            alert("Ez már benne van a listában");
        }else{
          var ul = document.getElementById("list");
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(requiredText));
          ul.appendChild(li);
        }
        return found;
    }
    function runChecks() {
      var input = document.getElementById("listinput").value;
        ans1 = checkforText(input);  
    }

      $(document).ready(function(){
        $(window).on('load', function(){ 
            $("#slide").animate({
            right: '100px',  opacity: '0,5',
            height: '150px',
            width: '700px'});
        });
      });

      $(document).ready(function () {
        $('#slide').fadeIn(2200);
    });
    