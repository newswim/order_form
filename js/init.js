(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('._todays_date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
    });

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      // $("dba_same").change(function(e) {
      //   console.log(e)
      //   if ($('#dba_same').prop('checked')) {
      //       //Do stuff
      //       console.log('hi')
      //       // theOtherField.text( $(originalField).value )
      //   } else {
      //     console.log('bye')
      //   }
      // });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
