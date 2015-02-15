//Github api : https://api.github.com/repos/aloisdeniel/Faker.Portable/contents/?page=1&per_page=50

var urls = {
    blog: "https://api.github.com/repositories/20356629/contents/data/blog",
    contacts: "/data/contacts/contacts.json"
};

var example_article_content = "# Introduction to MVVM pattern \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum finibus, molestie tellus at, hendrerit turpis. Donec et nisl purus. Curabitur elementum dolor eget tortor posuere gravida. Morbi nec velit tortor. Vivamus at nibh ac diam mollis consequat. Praesent sodales sodales nibh, quis sagittis lacus pulvinar sollicitudin. Sed consectetur placerat luctus. Sed ut dapibus nunc. Suspendisse potenti. Quisque ligula felis, sollicitudin at aliquet condimentum, suscipit a purus. Nam consectetur nisi massa, eget fringilla nibh fringilla sed. Pellentesque sit amet nisi elit. Ut ac vulputate nibh. Duis a laoreet elit, in tempor sapien. Fusce tempor luctus nisl\n\n## Subtitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum finibus, molestie tellus at, hendrerit turpis. Donec et nisl purus. Curabitur elementum dolor eget tortor posuere gravida. Morbi nec velit tortor. Vivamus at nibh ac diam mollis consequat. Praesent sodales\n\n* a list\n* element\n* other\n\nSodales nibh, quis sagittis lacus pulvinar sollicitudin. Sed consectetur placerat luctus. Sed ut dapibus nunc. Suspendisse potenti. Quisque ligula felis, sollicitudin at aliquet condimentum, suscipit a purus. Nam consectetur nisi massa, eget fringilla nibh fringilla sed. Pellentesque sit amet nisi elit. Ut ac vulputate nibh. Duis a [a internal link](http://social.msdn.microsoft.com/Forums/getfile/194987) laoreet elit, in tempor sapien. Fusce tempor luctus nisl\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum finibus, molestie tellus at, hendrerit turpis. Donec et nisl purus. Curabitur elementum dolor eget tortor posuere gravida. Morbi nec ![a internal link](http://social.msdn.microsoft.com/Forums/getfile/194987) velit tortor. Vivamus at nibh ac diam mollis consequat. Praesent sodales sodales nibh, quis sagittis lacus pulvinar sollicitudin. Sed consectetur placerat luctus. Sed ut dapibus nunc. Suspendisse potenti. Quisque ligula felis, sollicitudin at aliquet condimentum, suscipit a purus. Nam consectetur nisi massa, eget fringilla nibh fringilla sed. Pellentesque sit amet nisi elit. Ut ac vulputate nibh. Duis a laoreet elit, in tempor sapien. Fusce tempor luctus nis\n\n### Subsubtitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum finibus, molestie\n\n\tvar x= 55 + 52.0;\n\n\n\n tellus at, hendrerit turpis. Donec et nisl purus. Curabitur elementum dolor eget tortor posuere gravida. Morbi nec velit tortor. Vivamus at nibh ac diam mollis consequat. Praesent sodales sodales nibh, quis sagittis lacus pulvinar sollicitudin. Sed consectetur placerat luctus. Sed ut dapibus nunc. Suspendisse potenti. Quisque ligula felis, sollicitudin at aliquet condimentum, suscipit a purus. Nam consectetur nisi massa, eget fringilla nibh fringilla sed. Pellentesque sit amet nisi elit. Ut ac vulputate nibh. Duis a laoreet elit, in tempor sapien. Fusce tempor luctus nis";

var disqus = function(id,title) { return '<div id="disqus_thread"></div><script type="text/javascript">var disqus_shortname = "aloisdeniel";var disqus_identifier = "'+id+'";var disqus_title = "'+title+'";(function() {var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;dsq.src = "//aloisdeniel.disqus.com/embed.js";(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);})();</script><noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript><a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>'; }

var example_article = {
    "id": "[201502141753](en)Introduction_to_MVVM_Pattern.md",
    "title" : "Introduction to MVVM Pattern",
    "content": example_article_content
};

var headers_messages = [
                "I'm a developer", 
                "I'm a mobile application developer",
                "I love coding",
                "I love design", 
                "I think C# is the best programming language",
                "I like Xamarin",
                "I'm French"];

headers_messages.sort(function() { return 0.5 - Math.random() });

var templates = {
    "blog-index" : Handlebars.compile($('#blog-index-template').html()),
    "contact-index" : Handlebars.compile($('#contact-index-template').html())
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(function(){
        $("#header h2 span").typed({
            strings: headers_messages,
            typeSpeed: 25,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: "_"
        });
    
        var section = getParameterByName("section");
        var id = getParameterByName("id");
    
        renderSection(section);
    
        console.log("id:"+id)
        if(section === "blog")
        {
            if(id !== null)
            {
                renderArticle(example_article);
            }
            else
            {
                renderArticles();
            }
        }
        else
        {
            renderContact();
        }
    
    });

function renderContact()
{
      $.get( urls.contacts, function(contacts) {
        //Rendering the list
        $("#content").html(templates["contact-index"]({ contacts : contacts.links}));
      });
}

function renderArticles(lang)
{
    if(!lang)
        lang = "en";
    
    $.get( urls.blog, function(list) {
      
        //Extracting information from file name
        var articles = [];
        list.forEach(function(a) {
        
        var id = a.name.substring(1,13);
        var lang = a.name.substring(15,17);
        var title = a.name.substring(18,a.name.length - 3).replace(/_/g," ");
        
        var result = $.grep(articles, function(e){ return e.id == id; });
        
            if (result.length == 0) {
                var links = {};
                links[lang] = {
                    title: title,
                    link: a.name,
                    content: a.download_url
                };

                articles.push({
                   id: id,
                   date: a.name.substring(1,13),
                   links: links
                });
            }
            else
            {
                result[0].links[lang] =  {
                    title: title,
                    link: a.name,
                    content: a.download_url
                }; 
            }

        });

        //Getting articles for current lang
        var articles_vm = [];
        articles.forEach(function(a) {
            if(a.links.hasOwnProperty(lang))
            {
                var link = a.links[lang];

                articles_vm.push({
                    id: a.id,
                    date: moment(a.date, "YYYYMMDDHHmm").calendar(),
                    langs: Object.keys(a.links).join(", "),
                    link: link.link,
                    title: link.title,
                    content: link.download_url
                });
            }
        });

        //Rendering the list
        $("#content").html(templates["blog-index"]({ articles: articles_vm, lang: lang }));
    });
}

function renderArticle(article)
{
    var content = markdown.toHTML(article.content);
    content += disqus(article.id,article.title);
    
    $("#content").html(content);   
    
    $('#content pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}

function renderSection(section)
{
    var name, icon;
    
    if(section === "blog")
    {
        name = "BLOG";
        icon = "ion-ios-book-outline";
    }
    else if(section === "about")
    {
        name = "ABOUT";
        icon = "ion-ios-help-outline";
    }
    else if(section === "projects")
    {
        name = "PROJECTS";
        icon = "ion-ios-albums-outline";
    }
    else if(section === "contact")
    {
        name = "CONTACT";
        icon = "ion-ios-email-outline";
    }
    
    $("#menu-section").text(name);   
    $("#header-section").html('<span>'+name+'&nbsp;&nbsp;<i class="icon '+icon+'"></i></span>');   
}

function showAnimation(ids,on)
{
    ids.forEach(function(id) {
        var added = on ? "show" : "hide";
        var removed = on ? "hide" : "show";
        added+="-"+id;
        removed+="-"+id;
        $('#'+id).addClass(added);
        $('#'+id).removeClass(removed);
    });
}

var waypoint = new Waypoint({
  element: document.getElementById('content'),
  handler: function(direction) {
      showAnimation(["menu","header","menu-avatar","menu-name","menu-section"],(direction === "up"));
  }
})