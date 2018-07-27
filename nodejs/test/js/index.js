(function($){		
	var $btn = $('.btn');
	var $box = $('.box');
	var $put = $('.put');
	$btn.on('click',function(){
		var val = $put.val();
		console.log(val	)
		$.ajax({
			url:'/add',
			data:val,
			type:'json'
		})
		.done(function(){
		})
	})


})(jQuery)