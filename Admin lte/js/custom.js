
$(".minus").click(function(){
  $(this).toggleClass("fa-plus" ,"fa-minus");
});
$(".dash-arrow").click(function(){
  $('.dash-boards').slideToggle("slow");
})
$(".dash-arrow").click(function(){
  $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
});
$(".layout-arrow").click(function(){
  $('.layout-slide').slideToggle("slow");
})
$(".layout-arrow").click(function(){
  $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
});
$(".charts-arrow").click(function(){
  $('.charts-slide').slideToggle("slow");
})
$(".charts-arrow").click(function(){
  $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
});
$(".UI-arrow").click(function(){
  $('.UI-slide').slideToggle("slow");
})
$(".UI-arrow").click(function(){
  $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
});
$(".forms-arrow").click(function(){
    $('.forms-slide').slideToggle("slow");
})
$(".forms-arrow").click(function(){
    $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
});
$(".tables-arrow").click(function(){
    $('.tables-slide').slideToggle("slow");
  })
  $(".tables-arrow").click(function(){
    $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
  });
  $(".mailbox-arrow").click(function(){
    $('.mailbox-slide').slideToggle("slow");
  })
  $(".mailbox-arrow").click(function(){
    $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
  });
  $(".pages-arrow").click(function(){
    $('.pages-slide').slideToggle("slow");
  })
  $(".pages-arrow").click(function(){
    $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
  });
  $(".extras-arrow").click(function(){
    $('.extras-slide').slideToggle("slow");
  })
  $(".extras-arrow").click(function(){
    $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
  });
  $(".search-arrow").click(function(){
    $('.search-slide').slideToggle("slow");
  })
  // // $(".search-arrow").click(function(){
  // //   $(this).toggleClass("fa-angle-down").toggleClass("fa-chevron-left");
  // });
  $(".minus-1").click(function(){
    $(".direct-chat-con-1").slideToggle('fast');
  });
  $(".cross-mark-1").click(function(){
    $(".direct-chat-1").slideToggle('slow');
  });




  $(".minus-2").click(function(){
    $(".direct-chat-con-2").slideToggle('fast');
  });
  $(".cross-mark-2").click(function(){
    $(".direct-chat-2").slideToggle('slow');
  });





 
  $(".sidebar-hide").click(function(){
    $(".sidebar").slideToggle('slow');
  });
  $(".comment-1").click(function(){
    $(".comment-box-1").slideToggle('slow');
  });
  $(".comment-2").click(function(){
    $(".comment-box-2").slideToggle('slow');
  });
  $(".navbar-brand").click(function(){
    $(".sidebar").slideToggle('slow');
  });
  $(".dark-circle").click(function(){
    $('body').attr('class', 'bg-d');
  });
  $(".white-circle").click(function(){
    $('body').attr('class', 'bg-w');
  });
  
///////////////////////// pop over //////////////////////////////////
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


var range = $('.form-range'),
        value = $('.range-value');
        value.html(range.attr('value'));
        range.on('input', function(){
            value.html(this.value);
        });





