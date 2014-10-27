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

var gitUrl = 'https://api.github.com/users/Mathdrquinn/repos';

$.ajax({
    url: gitUrl,
    type: 'GET',
    success: function (response) {
        console.log('got in git ajax');
        console.log(response);
        gitData = response;
        setRepos(gitData);
        checkJs(gitData, gitUrl);
        checkCommits(gitData, gitUrl);
    }
});

function setRepos(data) {
    repos = data.length;
    $('#repos').children('p').html(repos);
}

function checkJs (data, url) {
    jsLines = 0;
    cssLines = 0;
    for (var i = 0; i < data.length; i++) {
        nextUrl = data[i].languages_url;

        $.ajax({
            url: nextUrl,
            type: 'GET',
            success: function (response) {
                var lang = response;
                if (lang.JavaScript) {
                    jsLines += Number(lang.JavaScript);
                    $('#js').children('p').html(jsLines.toString());

                }
                if (lang.CSS) {
                    cssLines += Number(lang.CSS);
                    $('#css').children('p').html(cssLines.toString());

                }

            }
        });
    }
}

function checkCommits (data, url) {
    window.commits = 0;
    for (var i = 0; i < data.length; i++) {
        nextUrl = data[i].events_url;

        $.ajax({
            url: nextUrl,
            type: 'GET',
            success: function (response) {
                console.log('got in git events ajax');
                console.log(response);
                var eventsData = response;
                console.log('that was it');
                for (var i = 0; i < eventsData.length; i++) {
                    if (eventsData[i].actor.login === "Mathdrquinn") {
                        console.log('here here here');
                        commits ++;
                        $('#commits').children('p').html(commits);

                    }
                }
            }
        });
    }
}