var blogTmpl = [
    '<h3 class=\'ribbon\'><strong class=\'ribbon-content\'>Blog</strong></h3>',
    '<% _.each(entries, function(el, index, list) { %>',
    '<div class=\'blogPost panel\'>',
    '<h5><a href=\'\'> <%= el.title  %> </a></h5>',
    '<h6 class=\'subheader\'> <%= el.contentSnippet %> </h6>',
    '<h6><a href=\'<%= el.link %>\' target=\'_blank\'>Read More »</a></h6>',
    '</div>',
    '<%}) %>',
    '<a href=\'https://mathdrquinn.wordpress.com/\' target=\'_blank\' class=\'wide block cl-white text-center med-padding bg-blue bg-blue-hover med\'>GO TO BLOG »</a><br>'
].join('');

//var blogTmpl = [
//    '<h4 class=\'blogTitle\'>Blog</h4><hr>',
//    '<% _.each(entries, function(el, index, list) { %>',
//    '<div class=\'blogPost panel\'>',
//        '<h5><a href=\'\'> <%= el.title  %> </a></h5>',
//        '<h6 class=\'subheader\'> <%= el.contentSnippet %> </h6>',
//        '<h6><a href=\'<%= el.link %>\' target=\'_blank\'>Read More »</a></h6>',
//    '</div>',
//    '<%}) %>',
//    '<a href=\'https://mathdrquinn.wordpress.com/\' target=\'_blank\' class=\'right\'>Go To Blog »</a>'
//].join('');

//<h3 class=\'ribbon\'><strong class=\'ribbon-content\'>Everybody loves ribbons</strong></h3>