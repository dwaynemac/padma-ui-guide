$(document).ready(() => {
  // https://uxsolutions.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&maxViewMode=4&todayBtn=false&clearBtn=false&language=en&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox
  $(".input-group.datepicker input").datepicker();
  $(".input-group.datepicker .input-group-btn").on("click",() => {
    $(".input-group.datepicker input").focus();
  });
});
