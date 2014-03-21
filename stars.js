$(function() {
	var star_empty = '&#9734;'; //change me to the default empty object
	var star_filled = '&#9733;'; //change me to the filled object

	$(function() {
		$(".star").html(star_empty);
	});

	$(".star-container").mouseleave(function() {
		var selected = $(this).find(".selected");
		if(selected.length) {
			$(".selected").html(star_filled).css("color","yellow");
			$(".selected").prevAll().html(star_empty).css("color","yellow");
			$(".selected").nextAll().html(star_filled).css("color","yellow");
		}
	});

	$(".star").click(function (e) {
	  $(this).data('clicked', true);
	  if (!e) var e = window.event;
	  e.cancelBubble = true;
	  if (e.stopPropagation) e.stopPropagation();
	  $(this).prevAll().removeClass("selected").html(star_empty).data("clicked", false);
	  $(this).nextAll().removeClass("selected").data("clicked", true);
	  $(this).addClass("selected");
	  var selected = $(".star-container").find(".selected").attr("id");
	  ratings(selected);
	});

	$(".star").mouseenter(function() {
		$(this).html(star_filled).css("color","red");
		$(this).nextAll().html(star_filled).css("color","red");
		ratings($(this).attr("id"));
		if($(this).prev().data("clicked")) {
			$(this).prevAll().html(star_empty).css("color","yellow");
		}
	}).mouseleave(function(){
		if($(this).data("clicked")) {
			$(this).html(star_filled).css("color","yellow");
			$(this).nextAll().html(star_filled).css("color","yellow");
		} else {
			var selected = $(".star-container").find(".selected");
			if(selected.length) {
				$(this).html(star_empty).css("color","yellow");
				$(this).nextUntil("#"+selected.attr("id")).html(star_empty).css("color","yellow");
				$(".selected").html(star_filled).css("color","yellow");
				$(".selected").nextAll().html(star_filled).css("color","yellow");
			} else {
				$(this).html(star_empty).css("color","yellow");
				$(this).nextAll().html(star_empty).css("color","yellow");
				$(".rating").html("");
			}
		}

		var selected = $(".star-container").find(".selected").attr("id");
		ratings(selected);
	});

	function ratings(id) {
	  if (id == "one") $(".rating").html("Hated It");
	  if (id == "two") $(".rating").html("Didn't Like It");
	  if (id == "three") $(".rating").html("Liked It");
	  if (id == "four") $(".rating").html("Really Liked It");
	  if (id == "five") $(".rating").html("Loved It");
	}
});