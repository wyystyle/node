(function($){

	function getRandom(min,max){
		return Math.round(min + (max-min)*Math.random())
	};

	var $wall = $('.wall'),
		$wish = $('.wish');
		console.log($wall,$wish)
	$wish.pep({  constrainTo: '.wall' });

	var wallWidth = parseInt($wall.css('width'));
	var wallHeight = parseInt($wall.css('height'));
	var wishWidth = parseInt($wish.css('height'));
	var wishHeight = parseInt($wish.css('height'));
	$wish.each(function(){
		transform:'matrix(1, 0, 0, 1, '+getRandom(0,wallWidth-wishWidth) +','+getRandom(0,wallHeight-wishHeight) +')'
	})
	$wish.hover(function(){
		// console.log(this);
		$(this).css({
			zIndex:999
		})
	},function(){
		$(this).css({
			zIndex:0
		})
	});
	$wall.on('click','.close',function(){
		var $this = $(this);
		$.ajax({
			url:'/del',
			data:'id='+$this.data('id'),
			type:'json'
		})
		.done(function(data){

		})

	});
	$('sub-btn').on('click',function(){
		let val = $('#content').val();
		$.ajax({
			url:'/add',
			data:{content:val},
			type:'post'
		})
		.done(function(data){

		})
	});

})(jQuery)