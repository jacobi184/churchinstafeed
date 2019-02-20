$( document ).ready(function() {
	
	var userfeed = new instafeed({
		get: 'user',
		userId: '9268876548',
		limit :12,
		resolution: 'standard_resolution',
		accessToken: '9268876548.1677ed0.ebd323f1f5254d2ca78d92490736ed84',
		sortBy: 'most-recent',
		template: '<div class="gallary"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" /></a></div>',
	});
	userfeed.run();
});
