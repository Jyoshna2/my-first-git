jQuery(document).ready(function(){
    
    /*----------------------------------------------------*/
    /* Custom Functions
    /*----------------------------------------------------*/
    
    // Logo
    var $logo  =$('#logo');
    
    if(location.href.index0f("#")!= -1){
        $logo.show();
    }
    //show logo
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');
    });
    //Hide logo
    $('.tab-profile').click(function(){
        $logo.fadeOut('slow');
    });
    
    
    
    $('#yellow-color').click(function(e){
      $(".main-wrapper-resume").attr("id","yellow");
      });
    
    $('#red-color').click(function(e){
      $(".main-wrapper-resume").attr("id","red");
      });
    
     

    
    /*-----------------------------------------------------*/
    /*Menu
    /*----------------------------------------------------*/
    
    //Needed variables
    var $content            =$("#content");
    
    //Run easytabs
    $content.easytabs({
        animate             :    true,
        updateHash          :    false,
        transitionIn        :    'slideDown',
        transitionOut       :    'slideUp',
        animationSpeed      :    600,
        tabs                :    ".tmenu",
        tabActiveClass      :    'active',
    });
    
    
    //Hover menu effect
    $content.find('.tabs li a').hover(
      function() {
          $(this).stop().animate({marginTop: "-7px"}, 200);
      },function(){
          $(this).stop().animate({marginTop: "0px"}, 300);
      }
    );
    
    
});