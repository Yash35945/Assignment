$(document).ready(function(){

   
      
    $('.validate').on("cut copy paste",function(e) {
        e.preventDefault();
    });
  
    $('#name').keypress(function (e) {
        $('#ername').text('');
        var inputValue=event.charCode;
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) { 
            event.preventDefault(); 
            $('#ername').text('only letters and spaces are allowed');
        }
      });
  
      $('.onlynumber').keypress(function(e) {  
          var arr = [];  
          var kk = e.which;  
       
          for (i = 48; i < 58; i++)  
            arr.push(i);  
       
          if (!(arr.indexOf(kk)>=0)){
              e.preventDefault();  
              $('.eronlynumber').text('only number allowed');  
        }else{
          $('.eronlynumber').text('');  
        }
      }); 
  
  });
  
  
  
  function showDemoEnquiry(title){
     title = title.toString();
     let titlestr=title.replace( /(<([^>]+)>)/ig, '');
  
      console.log(titlestr);
      $('.titleh3').text(titlestr);
      $('#title').val(titlestr);
  }
  
  function submitContactus(){
      
      $('.error-message').removeClass('d-block');
      var formData = new FormData($('#contactus')[0]);
      $.ajax({
          url: $('#contactus').attr('action'),
          method: $('#contactus').attr('method'),
          processData: false,
          dataType: 'json',
          contentType: false,
          data: formData ,
          beforeSend: function () {
              $.blockUI({
              message: '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
              timeout: 1e6,
              css: {backgroundColor: "#061C5C", color: "#fff", border: "0", padding: '8px'},
              overlayCSS: {opacity: 0.5}
          });
          },
          success: function (data) {
              if (data.error ==0) {
                  $('#contactus')[0].reset();
                  $('.sent-message').addClass('d-block');
                  $('.sent-message').html('<h3>Thank you for your inteerest.</h3><p>Our Team will get in touch with you shortly.</p>');
                  setTimeout(function() {$('.sent-message').removeClass('d-block');},3000);
              
              }
          else{
              $('.error-message').addClass('d-block');
              $('.error-message').text(data.err_msg);
          }
          
          },
          complete: function() {
              $.unblockUI();
          }
      });
  }
  
  function getFeeDemoLead(){
      var formData = new FormData($('#freedemo')[0]);
      $.ajax({
          url: $('#freedemo').attr('action'),
          method: $('#freedemo').attr('method'),
          processData: false,
          dataType: 'json',
          contentType: false,
          data: formData ,
          beforeSend: function () {
              $.blockUI({
              message: '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
              timeout: 1e6,
              css: {backgroundColor: "#061C5C", color: "#fff", border: "0", padding: '8px'},
              overlayCSS: {opacity: 0.5}
          });
          },
          success: function (data) {
              if (data.error ==0) {
                  $('#freedemo')[0].reset();
                  
                  window.location.href = "http://eresourceondemand.com/thank-you";
                  // $('#error-message').css({ 'color': 'green' });
                  // $('#error-message').text(data.err_msg);
              }
          else{
              $('#error-message').css({ 'color': 'red' });
              $('#error-message').text(data.err_msg);
          }
          
          },
          complete: function() {
              $.unblockUI();
          }
      });
  }
  
  //
  //Plain poppup
  //
  function showPlanePopup(title,plainId){
      $('#exampleModalLabel').text(title);
      $('#plainId').val(plainId);
      $('#myModal').show();
      $('#myModal').modal({backdrop: 'static', keyboard: false});
  }
  
  function closePopup(){
     $('#myModal').hide();
  }
  
  function choosePlan(){
      var formData = new FormData($('#plain-form')[0]);
      $.ajax({
          url: $('#plain-form').attr('action'),
          method: $('#plain-form').attr('method'),
          processData: false,
          dataType: 'json',
          contentType: false,
          data: formData ,
          beforeSend: function () {
              $.blockUI({
              message: '<div class="d-flex justify-content-center"><p class="mb-0">Please wait...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
              timeout: 1e6,
              css: {backgroundColor: "#061C5C", color: "#fff", border: "0", padding: '8px'},
              overlayCSS: {opacity: 0.5}
          });
          },
          success: function (data) {
              if (data.error ==0) {
                  $('#plain-form')[0].reset();
              }
              
              $('#errorMsg').html(data.err_msg);
          
          },
          complete: function() {
              $.unblockUI();
          }
      });
  }