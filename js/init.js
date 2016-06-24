(function($){
  $(function(){
    $(document).ready(function() {

      // Initialize Materialize widgets
      $('.button-collapse').sideNav();
      $('#dba_select').material_select();
      $('#rev_range').material_select();
      $('#emp_range').material_select();
      $('._todays_date').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100,   // Creates a dropdown of 15 years to control year
        max: true,
      });
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      // Update commercial range in relation to residential
      var resPerc = $("input[name='label:Residential_Percentage']")
      var comPerc = $("input[name='label:Commercial_Percentage']")
      // set default vals
      resPerc.val(0)
      comPerc.val(100)

      // // relate the two

      // NOTE: i moved all of this to the <input>'s 'oninput' handler
      resPerc.change(function() {
        var setter = resPerc.val()
        if (setter) {
          comPerc.val(100 - setter)
        }
      })

      // Copy company name
      $("#dba_same").change(function() {
        if ($('#dba_same').prop('checked')) {
          var existing = $('#legal_name').val();
          $('#dba').val(existing)
        }
        if ($('#dba').val() == "") {
          $('#company_label').removeClass('active');
        }
        $('#company_label').addClass('active');
      });

      // Copying address fields

      $('#same_address').change(function() {
        if ($('#same_address').prop('checked')) {
          var Shipping_Street      = $('#lane').val();
          var Shipping_City        = $('#city').val();
          var Shipping_State       = $('#state').val();
          var Shipping_Postal_Code = $('#code').val();
          var Shipping_Country     = $('#country').val();

          $('#_street').val(Shipping_Street)
          $('#_city').val(Shipping_City)
          $('#_state').val(Shipping_State)
          $('#_postal').val(Shipping_Postal_Code)
          $('#_country').val(Shipping_Country)
        }
        if ($('#same_address').val() == "") {
          $('#_street_label').removeClass('active');
          $('#_city_label').removeClass('active');
          $('#_state_label').removeClass('active');
          $('#_postal_label').removeClass('active');
          $('#_country_label').removeClass('active');
        }
        $('#_street_label').addClass('active');
        $('#_city_label').addClass('active');
        $('#_state_label').addClass('active');
        $('#_postal_label').addClass('active');
        $('#_country_label').addClass('active');
      })
    }); // end of document ready
  });
})(jQuery); // end of jQuery name space
