$(document).ready(function(){
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[0]).each(function() {
    $('.bestival').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
      
      }); //end each
    }); // end get
    
 $('.bestivaltoggle').click(function(){
        
    $('.bestivaltoggle').toggleClass('september');
        
        $('.bestival').toggleClass('hidden');
              
             
        });
    
    
       $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[1]).each(function() {
    $('.boardmasters').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
      
      }); //end each
    }); // end get
    
     $('.boardmasterstoggle').click(function(){
        
    $('.boardmasterstoggle').toggleClass('august');
        
        $('.boardmasters').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[2]).each(function() {
    $('.boomtown').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
        
     $('.boomtowntoggle').click(function(){
        
    $('.boomtowntoggle').toggleClass('august');
        
        $('.boomtown').toggleClass('hidden');
              
             
        });
        
         $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[3]).each(function() {
    $('.bst').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.bsttoggle').click(function(){
        
    $('.bsttoggle').toggleClass('july');
        
        $('.bst').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[4]).each(function() {
    $('.campbestival').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.campbestivaltoggle').click(function(){
        
    $('.campbestivaltoggle').toggleClass('july');
        
        $('.campbestival').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[5]).each(function() {
    $('.creamfields').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.creamfieldstoggle').click(function(){
        
    $('.creamfieldstoggle').toggleClass('august');
        
        $('.creamfields').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[6]).each(function() {
    $('.download').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.downloadtoggle').click(function(){
        
    $('.downloadtoggle').toggleClass('june');
        
        $('.download').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[7]).each(function() {
    $('.glastonbury').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.glastonburytoggle').click(function(){
        
    $('.glastonburytoggle').toggleClass('june');
        
        $('.glastonbury').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[8]).each(function() {
    $('.iow').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.iowtoggle').click(function(){
        
    $('.iowtoggle').toggleClass('june');
        
        $('.iow').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[9]).each(function() {
    $('.kendal').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.kendaltoggle').click(function(){
        
    $('.kendaltoggle').toggleClass('july');
        
        $('.kendal').toggleClass('hidden');
              
             
        });
    
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[10]).each(function() {
    $('.latitude').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.latitudetoggle').click(function(){
        
    $('.latitudetoggle').toggleClass('july');
        
        $('.latitude').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[11]).each(function() {
    $('.leeds').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.leedstoggle').click(function(){
        
    $('.leedstoggle').toggleClass('august');
        
        $('.leeds').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[12]).each(function() {
    $('.lovebox').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.loveboxtoggle').click(function(){
        
    $('.loveboxtoggle').toggleClass('july');
        
        $('.lovebox').toggleClass('hidden');
              
             
        });
    
   $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[13]).each(function() {
    $('.parklife').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.parklifetoggle').click(function(){
        
    $('.parklifetoggle').toggleClass('june');
        
        $('.parklife').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[14]).each(function() {
    $('.reading').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.readingtoggle').click(function(){
        
    $('.readingtoggle').toggleClass('august');
        
        $('.reading').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[15]).each(function() {
    $('.swf').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.swftoggle').click(function(){
        
    $('.swftoggle').toggleClass('august');
        
        $('.swf').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[16]).each(function() {
    $('.vfest').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.vfesttoggle').click(function(){
        
    $('.vfesttoggle').toggleClass('august');
        
        $('.vfest').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[17]).each(function() {
    $('.weare').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.wearetoggle').click(function(){
        
    $('.wearetoggle').toggleClass('may');
        
        $('.weare').toggleClass('hidden');
              
             
        });
    
    $.get("https://spreadsheets.google.com/feeds/list/1XyaozKHwML8H5IW49d1uxAIFj9NWIMI7KHwSqBmlB-Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[18]).each(function() {
    $('.wireless').append("<h1>" + this.gsx$festival.$t + "</h1>" + "<h2> Average condition: " + this.gsx$a.$t + "</h2>" + "<h3> Average temperature: " + this.gsx$b.$t + "</h3>");
    
       }); //end each
    }); // end get
    
     $('.wirelesstoggle').click(function(){
        
    $('.wirelesstoggle').toggleClass('july');
        
        $('.wireless').toggleClass('hidden');
              
             
        });

    
    
    
});