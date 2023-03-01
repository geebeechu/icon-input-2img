function getLangResources(){
    
    // Define arrays how many language you want to translate
    var th = new Array();
    var en = new Array();

    th['hello_world'] = "เทสๆ"; 
    en['hello_world'] = "Hello World";
    
    th['h1'] = "เทสๆ"; 
    en['h1'] = "Hi H1 tag";

    th['h2'] = "เทสๆ"; 
    en['h2'] = "Hi H2 tag";

    th['h3'] = "เทสๆ"; 
    en['h3'] = "Hi H3 tag";
    
    // Added new array defined arrays.
    var resources = new Array();
    resources['th'] = th;
    resources['en'] = en;
    
    return resources;
}

function changeLanguage(lng){
    var resources = getLangResources()[lng];

    $("h1[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
    $("h2[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
    $("h3[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
    $("span[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
    $("p[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
    $("button[name='translate']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });
}


$(function() { 
    // Default Language
    changeLanguage("en");
 
    $("#th_button").click(function(){
        changeLanguage("th");
    });

    $("#eng_button").click(function(){
        changeLanguage("en");
    });
});