$(function(){
    
    // $('header .gnb li').click(function(){
    //     $('header .gnb li').removeClass('on')
    //     $(this).addClass('on')

    // })
    // $('#works .inner .gnb li').click(function(){
    //     $('#works .inner .gnb li').removeClass('on')
    //     $(this).addClass('on')

    // })
    


    $('#works .inner .grid div a').lightBox({
        overlayBgColor:'#111',
        overlayOpacity:0.8,
        containerResizeSpeed:500,
         imageLoading:'./images/lightbox-ico-loading.gif',//이미지 로딩시
        imageBtnClose:'./images/lightbox-btn-close.gif',//이미지 닫기 버튼
        imageBtnPrev:'./images/lightbox-btn-prev.gif',//이미지 이전 버튼
        imageBtnNext:'./images/lightbox-btn-next.gif',//이미지 다음 버튼
        txtImage:'작업물',

    })


   $('#works .inner .gnb li').click(function(){
    let num = $(this).index()
        $('#works .inner .gnb li').removeClass('on')
        $(this).addClass('on')
        $('.grid').hide()
        $('.grid').eq(num).show()



   })
   $('#works .inner .grid .grid-item').mouseenter(function(){
        $(this).find('.img').stop().fadeIn()
   })
   $('#works .inner .grid .grid-item').mouseleave(function(){
    $(this).find('.img').stop().fadeOut()
})

    // $('.grid').isotope({
    //     // options
    //     itemSelector: '.grid-item',
    //     layoutMode: 'fitRows'
    //   });
    //   $('#all').click(function(){
    //     $('.grid').isotope({ filter:'.grid-item' })
    //  })
    //   $('#mo').click(function(){
    //      $('.grid1').show().isotope({ filter:'.mo' })
    //   })
      
    //  $('#ty').click(function(){
    //     $('.grid').isotope({ filter:'.ty' })
    //  })
    //  $('#ev').click(function(){
    //     $('.grid').isotope({ filter:'.ev' })
    //  })
     

    // $('#contact .inner .box1 .phone').click(function(){
    //     $('#contact .inner .box1 .hide').hide()
    //     $('#contact .inner .box1 .phone').hide().css({'left':'325px'}).fadeIn()
       

    // })
    
    // $('#contact .inner .box2 .email').click(function(){
    //     $('#contact .inner .box2 .hide').hide()
    //     $('#contact .inner .box2 .email').hide().css({'right':'325px'}).fadeIn()

    // })
    $('header .inner .gnb li').click(function(){
        let num =  $(this).index()
        console.log(num)

        if(num == 0){
            $('body,html').animate({'scrollTop':0},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }else if(num == 1){
            $('body,html').animate({'scrollTop':1080},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
          else if(num == 2){
            $('body,html').animate({'scrollTop':2160},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
          else if(num == 3){
            $('body,html').animate({'scrollTop':3250},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
          else if(num == 4){
            $('body,html').animate({'scrollTop':4320},800)
            $('header .gnb li').removeClass('on')
            $(this).addClass('on')
          }
         
    
        


    })
    $(window).scroll(function(){
        let num = $(document).scrollTop()
  
        if(num > 0 && num < 1080){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(0).addClass('on')
        }else if(num > 1079 && num < 2160){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(1).addClass('on') 
        }
        else if(num > 2159 && num < 3250){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(2).addClass('on') 
        }
        else if(num > 3249 && num < 4320){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(3).addClass('on') 
        }
        else if(num > 4319){
          $('header .inner .gnb li').removeClass('on')
          $('header .inner .gnb li').eq(4).addClass('on') 
        }
       
  
      })















})