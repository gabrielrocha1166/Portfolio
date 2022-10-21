const  btn_whatsapp  =  document.querySelector ( '.whatsapp' ) ;
const  btn_download  =  document.querySelector ( '.download' ) ;
const  btn_github  =  document.querySelector ( '#github' ) ;
const  btn_linkedin  =  document.querySelector ( '#linkedin' ) ;
const  btn_fintech  =  document.querySelector ( '#fintech' ) ;
const  btn_fipa  =  document.querySelector ( '#fipa' ) ;
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor", "Freelancer"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Desenvolvedor", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

btn_whatsapp.onclick = function () {
    open('https://api.whatsapp.com/send?phone=5575988493983&text=Ol%C3%A1!%20Acabei%20de%20ver%20seu%20portf%C3%B3lio.');
  }

btn_download.onclick = function () {
    open('https://drive.google.com/file/d/1OD5yoabTmOOQkUfMSTWTcjLwoJ6a9V2A/view?usp=sharing');
  }

btn_fintech.onclick = function () {
    open('https://dapper-gaufre-e110a9.netlify.app');
  }

btn_fipa.onclick = function () {
    open('https://iridescent-raindrop-067e2a.netlify.app/');
  }

btn_github.onclick = function () {
    open('https://github.com/gabrielrocha1166');
  }
  
btn_linkedin.onclick = function () {
    open('https://www.linkedin.com/in/gabriel-fernandes-rocha-62b43021a');
  }
