// nav active start
$(document).ready(function() {
  $("#myTab .nav-link").click(function () {
    if(!$(this).hasClass('active'))
    {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });
});
// nav active end

// table start
$(document).ready(function() {
  // var table = $('#example').DataTable( {
  //         "ajax": "js/objects.txt",
  //         "columns": [
  //             { "data": "name" },
  //             { "data": "position" },
  //             { "data": "office" },
  //             { "data": "extn" },
  //             { "data": "start_date" },
  //             { "data": "salary" }
  //         ]
  //     } );
  var table = $('#example, #exampleCommercial, #exampleTechnical, #examplemyevaluateBids').DataTable({
    "order": [],
    'columnDefs': [{
      "targets": [0],
      "orderable": false
    }],
    "pageLength": 8
  });


  $('#searchFilter').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );
} );


// table end




$(document).ready(function(){
    $('.freightExpensesCheck').click(function() {
        $('.freightExpensesCheck').not(this).prop('checked', false);
        if ($(this).prop("checked", true).val() == "Included") {
          $("#freightExpensesAmount").addClass("d-none");
        } else {
        $("#freightExpensesAmount").removeClass("d-none");
        }
    });

    $('.licenseFee').click(function() {
        $('.licenseFee').not(this).prop('checked', false);
        if ($(this).prop("checked", true).val() == "Included") {
          $("#licenseFeeAmount").addClass("d-none");
        } else {
        $("#licenseFeeAmount").removeClass("d-none");
        }

    });
    $('.freightInsurance').click(function() {
        $('.freightInsurance').not(this).prop('checked', false);
        if ($(this).prop("checked", true).val() == "Included") {
          $("#freightInsuranceAmount").addClass("d-none");
        } else {
        $("#freightInsuranceAmount").removeClass("d-none");
        }

    });
});












// ------------step-wizard-------------
$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var target = $(e.target);

    if (target.parent().hasClass('disabled')) {
      return false;
    }
  });

  $(".next-step").click(function (e) {

    var active = $('.wizard .nav-tabs li.active');
    active.next().removeClass('disabled');
    nextTab(active);

  });
  $(".prev-step").click(function (e) {

    var active = $('.wizard .nav-tabs li.active');
    prevTab(active);

  });
  $(".next-step1").click(function (e) {

    var active = $('.wizard1 .nav-tabs li.active');
    active.next().removeClass('disabled');
    nextTab(active);

  });
  $(".prev-step1").click(function (e) {

    var active = $('.wizard1 .nav-tabs li.active');
    prevTab(active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}



$('.nav-tabs.nav-tabs-wizard1').on('click', 'li', function() {
  $('.nav-tabs.nav-tabs-wizard1 li.active').removeClass('active');
  $(this).addClass('active');
});

$('.nav-tabs.nav-tabs-wizard').on('click', 'li', function() {
  $('.nav-tabs.nav-tabs-wizard li.active').removeClass('active');
  $(this).addClass('active');
});


$("#mobileno, #tenderFee, #freightExpensesAmount, #freightInsuranceAmount, #licenseFeeAmount").keypress(function (e) {
  //if the letter is not digit then display error and don't type anything
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
  }
});



$("#Tender-Launch-Date,#Tender-Submission-Last-Date,#Tender-Opening,#Pre-Bid-Meet").datepicker({
  autoclose: true,
}).datepicker();
// $("#datepicker-start").datepicker({
//         autoclose: true,
//   }).datepicker('update', new Date());

$("#sign-doc").click(function(){
  $(".sign-hide").css("display","block");
  $(".next-step-btn").removeClass("disable-btn");
});


$("#file-1").fileinput({
  theme: 'fa',
  uploadUrl: '#',
  allowedFileExtensions: [],
  overwriteInitial: false,
  maxFileSize:2000,
  maxFilesNum: 10,
  slugCallback: function (filename) {
    return filename.replace('(', '_').replace(']', '_');
  }
});


$("#launchSmartContract").click(function() {
  if($('#Metamask').prop('checked')){
    // alert("checked");
    $("#success-message").show();
  }
  else {
    $("#success-message").hide();
  }
});



(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    var formsD = document.getElementsByClassName('needs-validation-documents');
    var formsC = document.getElementsByClassName('needs-validation-tendercreate');
    var formsUploadBid = document.getElementsByClassName('needs-validation-uploadbid');
    var formsmynewBid = document.getElementsByClassName('needs-validation-mynewBid');
    var formsevaluateBids = document.getElementsByClassName('needs-validation-myevaluateBids');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();



          $('input[name="payment[]"]').each(function () {
            if ($('input[name="payment[]"]:checked').length == 0) {
              $(".promt-payment").show();
              $("#promt-payment").attr("required", "required");
            }else {
              $(".promt-payment").hide();
              $("#promt-payment").removeAttr("required");
            }
          });

        }else{
          event.preventDefault();
          var active = $('.wizard .nav-tabs li.active');
          active.next().removeClass('disabled');
          nextTab(active);
        }
        form.classList.add('was-validated');
      }, false);
    });

    var validationD = Array.prototype.filter.call(formsD, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          event.preventDefault();
          var active = $('.wizard .nav-tabs li.active');
          active.next().removeClass('disabled');
          nextTab(active);
        }
        form.classList.add('was-validated');
      }, false);
    });

    var validationUploadBid = Array.prototype.filter.call(formsUploadBid, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          event.preventDefault();
          $("#saveReminder").removeClass("d-none");
          setTimeout(function(){
            $('#Uploadbid').modal('hide')
            return true;
         }, 3000);
        }
        form.classList.add('was-validated');
      }, false);
    });

    var validationC = Array.prototype.filter.call(formsC, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          var active = $('.wizard .nav-tabs li.active');
          active.next().removeClass('disabled');
          nextTab(active);
        }
        form.classList.add('was-validated');
      }, false);
    });
    var validationnewBid = Array.prototype.filter.call(formsmynewBid, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{

        }
        form.classList.add('was-validated');
      }, false);
    });
    var validationevaluateBids = Array.prototype.filter.call(formsevaluateBids, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{

        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


$("#tenderFee").keyup( function(){
  var tenderVal = $(this).val();
  if (tenderVal > 0) {
    $(".Bank").attr("required", "required");
  }else{
    $(".Bank").removeAttr("required", "required");
  }
});

$("#preBidOnlineMeet").click(function(){
  if($("#preBidOnlineMeet").prop("checked") == true){
    $("#preBidOnlineMeet").attr("required", "required");
    $("#preBidLocation").removeAttr("required");
    // console.log("Checkbox is checked.");
  }
  else{
    $("#preBidLocation").attr("required", "required");
    $("#preBidOnlineMeet").removeAttr("required");
  }
});

$("#Metamask").click(function(){
  if($("#Metamask").prop("checked") == true){
    $("#Metamask").attr("required", "required");
    $("#Private-Key").removeAttr("required");
    // console.log("Checkbox is checked.");
  }
  else{
    $("#Private-Key").attr("required", "required");
    $("#Metamask").removeAttr("required");
  }
});


$(".opencollapse").click(function(){
  $('#accordionExample .collapse').removeAttr("data-parent");
  $('#accordionExample .collapse').collapse('show');
});

$(".opencollapsebid").click(function(){
  $('#accordionExamplebid .collapse').removeAttr("data-parent");
  $('#accordionExamplebid .collapse').collapse('show');
});



$('#inputGroupFile02').on('change',function(){
  //get the file name
  var fileName = $(this).val();
  //replace the "Choose a file" label
  $(this).next('.custom-file-label').html(fileName);
});


$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  if(fileName == ""){
    $("#BidFile").val("");
  }
});



$('#BidFile').on('change', function() {
  if ($(this).val() != "") {
    $("#generateBidSignature").removeClass("disable-btn");
  } else {
    $("#generateBidSignature").addClass("disable-btn")
  }
});


$("#generateBidSignature").click(function(){
  $("#bidLoadingSpinner").removeClass("d-none");
  setTimeout(function(){ $("#bidLoadingSpinner").addClass("d-none");
  $(".generateBHide").removeClass("generateBHide");
 }, 5000);
});

$("#threatManagement").click(function(){
  var secretKey =  $("#secretKeyHere").val();
  if (secretKey == "") {
    $("#secretKeyHere").val("private key encryption");
  } else {
    $("#secretKeyHere").val("");
  }
});

$("#copyKey").click(function(){
  var copyText = document.getElementById("secretKeyHere");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  $("#secretSavingAlert").removeClass("d-none");

});


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// $(function () {
//
//     setTimeout(function(){
//         $("#technicalEvaluation").removeClass("disable-btn");
//       return true;
//    }, 1000);
// });

$("#priceBid").click(function(){
  $.ajaxSetup({async: false});
  $.post('http://127.0.0.1:8080/price-bid-evaluate', {count:5}).done(function(response){
    $("#dashboardHome").removeClass("active");
    $("#CommercialBid").removeClass("d-none");
    $("#mainDashboardTable").addClass("d-none");
    $("#TechnicalBid").addClass("d-none");
  });
  

});
$("#technicalEvaluation").click(function(){
  $("#dashboardHome").removeClass("active");
  $("#TechnicalBid").removeClass("d-none");
  $("#CommercialBid").addClass("d-none");
  $("#mainDashboardTable").addClass("d-none");
});
$("#dashboardHome").click(function(){
  $("#mainDashboardTable").removeClass("d-none");
  $("#TechnicalBid").addClass("d-none");
  $("#CommercialBid").addClass("d-none");
});

$("#ealuateTechnicalBids").click(function() {
   $.ajaxSetup({async: false});
  $.post('http://127.0.0.1:8080/tech-evaluate', {count:5}).done(function(response){
    setTimeout(function(){
      $('#ealuateTechnicalBidsAlert').modal('hide');
        $("#priceBid").removeClass("disable-btn");
      return true;
   }, 3000);
  });
  
 

});

/*$("#evaluateBids").click(function() {

  //$.ajaxSetup({async: false});
  $.post('http://127.0.0.1:8080/pricebid-winner', {count:5}).done(function(response){
  });

});*/

$("#myevaluateBidsRequest").click(function(){
    $('#evaluateBids').modal('hide');
    $.post('http://127.0.0.1:8080/pricebid-winner', {count:5}).done(function(response){
    });
});


$(".tableCheck").click(function(){
    var getTime = $(this).closest('tr').children('td.getTime').text();
  setTimeout(function(){
      $("#technicalEvaluation").removeClass("disable-btn");
    return true;
 }, getTime*1000);

  // alert(getTime);
});
