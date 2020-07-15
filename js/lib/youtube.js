function getProfilePicUrl(channelId) {
	var data = $.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/channels',
		async: false,
		dataType: 'json',
		data: {
			part: 'snippet',
			key: 'AIzaSyATovUjfXDbXKTQQgn0t63ILZMJZ5AABaU',
			id: channelId
		},
		success: function(data) {
			return data;
		},
		error: function(xhr, type, exception) {

		}
	})
	return data.responseJSON.items[0].snippet.thumbnails.default.url;
}

function getChannelName(channelId) {
	var data = $.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/channels',
		async: false,
		dataType: 'json',
		data: {
			part: 'snippet',
			key: 'AIzaSyATovUjfXDbXKTQQgn0t63ILZMJZ5AABaU',
			id: channelId
		},
		success: function(data) {
			return data;
		},
		error: function(xhr, type, exception) {

		}
	})
	return data.responseJSON.items[0].snippet.title;
}

function getChannelVerification(channelId) {
	// no functionality in api
}

function getChannelSubscribers(channelId) {
	var data = $.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/channels',
		async: false,
		dataType: 'json',
		data: {
			part: 'statistics',
			key: 'AIzaSyATovUjfXDbXKTQQgn0t63ILZMJZ5AABaU',
			id: channelId
		},
		success: function(data) {
			return data;
		},
		error: function(xhr, type, exception) {
			
		}
	})
	return data.responseJSON.items[0].statistics.subscriberCount;

}