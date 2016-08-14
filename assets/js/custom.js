/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
            /*====================================
            VAGAS SLIDESHOW SCRIPTS
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/kouki.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGE WITH YOUR ORIGINAL IMAGES
                     //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                      
                     
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/14.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

          
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


          
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

//contact form

        $('.contact-form').on('submit', function (e) {
            do_send();           
            return false;
        });

function do_send(e){
    emailjs.send("gmail", "template_708pda4y", 
        {"from_name":$("#cf_name").val(),"from_email":$("#cf_email").val(),"to_name":"Hamza,",
        "message_html":$("#cf_message").val()})
    .then(
        function(e) {
            //alert('Message Envoyé avec success ');
            $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
                $('#messages_content').html('<h5>Message envoyé avec success ! </h5>');
                $('#modal').modal('show');
                e.preventDefault();
        }, 
        function() {
            //alert("Opps 'erreur' ... essayez plus tard ");
             $('#messages').removeClass('hide').addClass('alert alert-danger alert-dismissible').slideDown().show();
                $('#messages_content').html('<h5>Opps erreur... veuillez essayer plus tard " </h5>');
                $('#modal').modal('show');
                e.preventDefault();
        }
    );
}


