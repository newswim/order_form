// May need to use this work-around for required inputs in Safari:
//
// $('#idForm').click(function(e) {
//     e.preventDefault();
//     var sendModalForm = true;
//     $('[required]').each(function() {
//         if ($(this).val() == '') {
//             sendModalForm = false;
//             alert("Required field should not be blank."); // or $('.error-message').show();
//         }
//     });
//
//     if (sendModalForm) {
//         $('#idForm').submit();
//     }
// });


(function($){
  $(function(){
    $(document).ready(function() {

      // handle show/hide of 'States' if country selected != 'United States'
      var country = $('#country')
      var shipCo = $('#_country')

      $('#state').addClass('hide')
      $('#_state').addClass('hide')

      country.change(function() {
        country.val() == "United States" ? $('#state').removeClass('hide') : $('#state').addClass('hide')
      })

      shipCo.change(function() {
        shipCo.val() == "United States" ? $('#_state').removeClass('hide') : $('#_state').addClass('hide')
      })

      // Initialize Materialize widgets
      $('.button-collapse').sideNav();
      $('#dba_select').material_select();
      $('#rev_range').material_select();
      $('#emp_range').material_select();
      $('._todays_date').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100,   // Creates a dropdown of 15 years to control year
        max: true,
        format: 'yyyy-mm-dd'
      });
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal();

      // Update commercial range in relation to residential
      var resPerc = $("input[name='label:Residential_Percentage']")
      var comPerc = $("input[name='label:Commercial_Percentage']")
      // set default vals
      resPerc.val(0)
      comPerc.val(100)

      // NOTE: the element values are handled by <input>'s 'oninput' handler
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
          $('#_postal').val(Shipping_Postal_Code)
          $('#_country').val(Shipping_Country)

          if ($('#country').val() == 'United States') {
            $('#_state').removeClass('hide')
            $('#_state').val(Shipping_State)
          }
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


      /** Adding input masking to some of the fields **/
      $(".fed_ein").mask("99-9999999");
      $('#phone').mask('(999) 999-9999? x99999')
      $('#fax').mask('(999) 999-9999')
      $('.sec_phone').mask('(999) 999-9999? x99999')
      $('.office_phone').mask('(999) 999-9999? x99999')
      $('#mobile').mask('(999) 999-9999')
      $('#code').mask('99999')
      $('#_postal').mask('99999')

    }); // end of document ready
  });
})(jQuery); // end of jQuery name space
