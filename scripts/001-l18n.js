/* Context */

var l18nStrings = {
        en:
        {
                user_status: "lead mobile developer",
                about_born: "Born in",
                about_livein: "Live in",
                about_workingat: "Currently working at",
                section_contact: "contact",
                section_skills: "main skills",
                section_experience: "experience",
                section_experience_jobs: "jobs",
                section_experience_studies: "studies",
                section_opensource: "open-source projects",
                section_hobbies: "other hobbies",
                skilllevel4: "referent",
                skilllevel3: "expert",
                skilllevel2: "experienced",
                skilllevel1: "beginner",
                skilllevel0: "none",
                since: "since"
        },
        fr:
        {
                user_status: "architecte développement mobile",
                about_born: "Né en",
                about_livein: "Habite à",
                about_workingat: "Travail actuellement chez",
                section_contact: "contact",
                section_skills: "compétences principales",
                section_experience: "expérience",
                section_experience_jobs: "professionnelle",
                section_experience_studies: "études",
                section_opensource: "projets open-source",
                section_hobbies: "autres hobbies",
                skilllevel4: "référent",
                skilllevel3: "expert",
                skilllevel2: "experimenté",
                skilllevel1: "débutant",
                skilllevel0: "aucune",
                since: "depuis"
        }
}

/* Context */

var L18n = function(initialLang) {
   if(typeof(initialLang) === 'undefined') { initialLang = "en"; }
   this.current = initialLang;
   this.strings = l18nStrings;
}

L18n.prototype.translate = function (key,lang) {   
        if(typeof(lang) === 'undefined')
        {
          lang = this.current;
        }
        
        var translated = null;
        
        if(this.strings[lang] !== null)
        {
          translated = this.strings[lang][key];
        }
        
        if(translated == null)
        {
          translated = this.strings["en"][key];
        }
        
        if(translated == null)
        {
          translated = key;
        }
        
        return translated;
}