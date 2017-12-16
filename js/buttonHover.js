// jQuery(document).ready(function(){
//   $('#social__buttons').on('hover', function(j){
//     $('#social__buttons').addClass('animated')
//     j.preventDefault()
//   });
// })

$(document).ready(function() {
    $("#github").hover(function(j) {
        $('#github').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#github').removeClass('animated jello')
        k.preventDefault()
    }
  );
});

$(document).ready(function() {
    $("#instagram").hover(function(j) {
        $('#instagram').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#instagram').removeClass('animated jello')
        k.preventDefault()
    }
  );
});

$(document).ready(function() {
    $("#codepen").hover(function(j) {
        $('#codepen').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#codepen').removeClass('animated jello')
        k.preventDefault()
    }
  );
});

$(document).ready(function() {
    $("#behance").hover(function(j) {
        $('#behance').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#behance').removeClass('animated jello')
        k.preventDefault()
    }
  );
});

$(document).ready(function() {
    $("#noun-project").hover(function(j) {
        $('#noun-project').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#noun-project').removeClass('animated jello')
        k.preventDefault()
    }
  );
});

$(document).ready(function() {
    $("#linkedin").hover(function(j) {
        $('#linkedin').addClass('animated jello')
        j.preventDefault()
    },
    function(k) {
        $('#linkedin').removeClass('animated jello')
        k.preventDefault()
    }
  );
});
