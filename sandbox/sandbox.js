let selectBox = $(".select-box");

$(".box").bind('hover focus', function () {
	console.log($(this));
	$(this).addChild();
});


console.log("ok");
