(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('._todays_date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
    });

    $(document).ready(function() {
      $('#dba_select').material_select();
      $('#rev_range').material_select();
    });

    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      $("#dba_same").change(function() {
        if ($('#dba_same').prop('checked')) {
            var existing = $('#legal_name').val()
            $('#dba').val(existing)
        }
        if ($('#dba').val() == "") {
          $('#company_label').removeClass('active')
        }
        $('#company_label').addClass('active')
      });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
