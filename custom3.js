$( document ).ready(function() {
	
	var userFeed = new Instafeed({
		get: 'user',
		userId: '9268876548',
		limit :6,
		resolution: 'thumbnail',
		accessToken: '9268876548.1677ed0.ebd323f1f5254d2ca78d92490736ed84',
		sortBy: 'most-recent',
		template: '<div class="col-xs-1 gallary instaimg"><a href="{{image}}" title="{{caption}}"  target="_blank"><img src="{{image}}" alt="{{caption}}"  class="img-fluid" /></a></div>',
	});
	userFeed.run();
	$(window).on("load", function() {
    $('#instafeed > a > img').each(function(){
        var src = $(this).attr('src');
        $(this).attr('src',src.replace('150x150', '640x640'));
    });
});
});
