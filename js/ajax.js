//Script used to populate articles
console.log('ajax is indeed here');

function upBlog(url, $el) {
    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function(data) {
            console.log('in ajax');
            console.log(data.responseData.feed);
            $el.html('');
            var preEntries = data.responseData.feed.entries;
            window.entries = [];
            for (var g = 0; g < 3; g++) {
                entries.push(preEntries[g]);
            }
            console.log(entries);
            //create article template
            var myTmpl = _.template(blogTmpl, data);
            $el.html(myTmpl);

        }
    });
};