//Github api : https://api.github.com/repos/aloisdeniel/Faker.Portable/contents/?page=1&per_page=50

var urls = {
    blog: "https://api.github.com/repositories/20356629/contents/data/blog",
    article: "/data/blog/",
    contacts: "/data/contacts/contacts.json"
};

var disqus = function(id,title) { return '<div id="disqus_thread"></div><script type="text/javascript">var disqus_shortname = "aloisdeniel";var disqus_identifier = "'+id+'";var disqus_title = "'+title+'";(function() {var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;dsq.src = "//aloisdeniel.disqus.com/embed.js";(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);})();</script><noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript><a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>'; }

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

/* Navigation */

function navigate()
{
    var section = getParameterByName("section");
    var id = getParameterByName("article");

    onPopState({
        state: {
            section: section,
            name: id
        }
    });
}


window.onpopstate = onPopState;

function onPopState(event) {
    if(event.state.section === "contact")
    {
        renderContact();
    }
    else if(event.state.section === "about")
    {
        renderAbout();
    }
    else if(event.state.section === "projects")
    {
        renderProjects();
    }
    else
    {
        if(typeof event.state.name !== 'undefined' || event.state.name === null)
        {
            renderArticle(event.state.name);
        }
        else
        {
            renderArticles();
        }
        
    }
};

function navigateArticle(name)
{
    history.pushState({ section: "blog", name: name}, name, "?section=blog&article="+name);
    renderSection("blog");
    renderArticle(name);
}

function navigateBlog()
{
    history.pushState({ section: "blog"}, "blog", "?section=blog");
    renderArticles();
}

function navigateAbout()
{
    history.pushState({ section: "about"}, "about", "?section=about");
    renderAbout();
}

function navigateProjects()
{
    history.pushState({ section: "projects"}, "projects", "?section=projects");
    renderProjects();
}

function navigateContact()
{
    history.pushState({ section: "contact"}, "contact", "?section=contact");
    renderContact();
}

/* Main */

$(function(){
        $("#header h2 span").typed({
            strings: headers_messages,
            typeSpeed: 25,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: "_"
        });
        
        navigateBlog();
    
    });

/* Rendering */

function renderContact()
{
    renderSection("contact");
    
    $.get(urls.contacts, function(contacts) {
        //Rendering the list
        $("#content").html(templates["contact-index"]({ contacts : contacts.links}));
    });
}

function renderArticles(lang)
{
    if(!lang)
        lang = "en";
    
    renderSection("blog");
    
    $.get( urls.blog, function(list) {
      
        //Extracting information from file name
        var articles = [];
        list.forEach(function(a) {
        
        var id = a.name.substring(1,13);
        var lang = a.name.substring(15,17);
        var title = a.name.substring(18,a.name.length - 3).replace(/_/g," ");
        
        var result = $.grep(articles, function(e){ return e.id == id; });
        
            if (result.length === 0) {
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

function renderArticle(name)
{
    renderSection("blog");
    
    var article = {
        id: name,
        title: name.substring(18,name.length - 3).replace(/_/g," ")
    };
    
    $.get(urls.article+name, function(content) {
        
        article.content = content;
        console.log(content);
        var content = markdown.toHTML(article.content);
        content += disqus(article.id,article.title);

        $("#content").html(content);   

        $('#content pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
    
    
}

function renderAbout()
{
    renderSection("about");
    
    $("#content").html("<h2>Soon ...</h2>");
}

function renderProjects()
{
    renderSection("projects");
    
    $("#content").html("<h2>Soon ...</h2>");
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

/* Top bar animations */

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