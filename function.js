var random = '#'+Math.floor(Math.random()*16777215).toString(16);


function filter(){
    $('.category').on('change', function(){
      var category_list = [];
      $('#filters :input:checked').each(function(){
        var category = $(this).val();
        var random = '#'+Math.floor(Math.random()*16777215).toString(16);
        category_list.push(category);
        $('.bottomBar').text(category_list);
        $('.bottomBar').css("background-color", random);
        // $('.bottomBar').css("border-width", "0px");
        console.log(random);
        
      });

      if(category_list.length == 0){
        $('.resultblock').fadeIn();
        $('.bottomBar').text('No Filtered');
      }
      else {
        $('.resultblock').each(function(){
          var item = $(this).attr('data-tag');
          if(jQuery.inArray(item,category_list) > -1){
            $(this).fadeIn('slow');
          }
          else
            $ (this).hide();
        });
      }   
    });
    console.log("DefaultFilter");
  }; 



function scrollUp(){
  $('#top').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
};



function magnify(){
$('.col-xs-3').find('.abImg').one("click",function(){
 var opacity = 0.4;
  $(this).find("img").before("<div style='z-index:10; font-weight:500; font-size:10px; background-color:#bebebe; color:white;'> &nbsp Viewed</div>");
  $(this).find("img").css("opacity", opacity);
  $(this).find(".des1").css("opacity", opacity);
  
})};




function GetAuthorObject(authour,title,link,tag){

  this.authour = authour;
  this.title = title;
  this.link = link; 
  this.tag = tag;
  console.log('author: '+authour+'\n',
    'title: '+title+'\n','link:'+link+'\n','tag :'+tag);

};


function mouseevent(){

$('.abImg').click(function(){
console.log($(this).offset().top);
var offsetValue = $(this).parents().offset();
offsetValue.top = offsetValue.top - 200;
$('html,body').animate({scrollTop: offsetValue.top},3);
});

}

function scrollToTarget(){

var i = Math.floor(Math.random()*140);
$('.col-xs-3:eq('+i+')').find('.abImg').click();

};



