$(document).ready(function() {

  // start get - URI (REPLACE KEY WITH YOUR OWN, callback function)
 
  // see http://coderwall.com/p/duapqq for tutorial on using Google Spreadsheet as JSON
    $('.1').hide();
      $.get("https://spreadsheets.google.com/feeds/list/1FKn0fZlLPEklUc-KgGWwfJ_D1NiB4MHlml7Nqr0rAII/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.bestivalresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
     
       
      }); //end each
    }); // end get
     $('.bestivaltoggle').click(function(){
     $('.1').hide();
         $('.bestivalresults').show(); 
         
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1FuaWzt511haDi1u5u-T1MKdHp81n_YHPMJp8bQR87iU/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.boardmastersresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.boardmasterstoggle').click(function(){
           $('.2').hide();
        
         $('.boardmastersresults').show(); 
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1xTtgtxEW2SXEbBFn2gWGQyxCvYUw_MkI0VcXsSVM8bs/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.boomtownresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.boomtowntoggle').click(function(){
         $('.3').hide();
         $('.boomtownresults').show(); 
        
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1LmFmsoX2NXJbZTKKQRbCZCZyn2RKfNGC2Hq4uAB8-eg/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.bstresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.bsttoggle').click(function(){
          $('.4').hide();
         $('.bstresults').show(); 
         
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1uQ0VVtx_S2w8lwgIHDyFchvfCvRedHS0cJvvTxbhD3Q/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.campbestivalresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.campbestivaltoggle').click(function(){
         $('.5').hide();
         $('.campbestivalresults').show(); 
          
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1tRQvGH3qFRfmBCaZpOfgZZl2r7KsTj5XzDY39JFSXY4/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.creamfieldsresults').append("<div class='col-md-4 col-xs-12' style='float: left;'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.creamfieldstoggle').click(function(){
           $('.6').hide();
         $('.creamfieldsresults').show(); 
        
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1Wp0yaFL2_xT5CY7UIc57_YnB-9xrVNIcnPmHKOP2CdE/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.downloadresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$A.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.downloadtoggle').click(function(){
         $('.downloadresults').show(); 
          $('.7').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1hcvQnICW5sfkLAzLP27rrnM7VJQNDnQS7gdhysKTDgw/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.glastonburyresults').append("<div class='col-md-6' style='height:100%;'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.glastonburytoggle').click(function(){
         $('.glastonburyresults').show(); 
          $('.8').hide();
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1gt0HujCjxJbYoHRIAtkVnSbwetsGGYFM5_UiJ_4_DH8/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.iowresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.iowtoggle').click(function(){
         $('.iowresults').show(); 
          $('.9').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1lE6fqwFPxt5TY0pfri5PLQNwzhbmfftlg3ab1b0fbQ4/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.kendalresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.kendaltoggle').click(function(){
         $('.kendalresults').show(); 
          $('.10').hide();
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1VUEnHCUj0bLKBzhyACl4sQ5_BAlGPu5JTxmwqBZyea4/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.latituderesults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.latitudetoggle').click(function(){
         $('.latituderesults').show(); 
          $('.11').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1VUEnHCUj0bLKBzhyACl4sQ5_BAlGPu5JTxmwqBZyea4/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.leedsresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.leedstoggle').click(function(){
         $('.leedsresults').show(); 
          $('.12').hide();
        
  });
    
    $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.loveboxresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.loveboxtoggle').click(function(){
         $('.loveboxresults').show(); 
          $('.13').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.parkliferesults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.parklifetoggle').click(function(){
         $('.parkliferesults').show(); 
          $('.14').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.readingresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.readingtoggle').click(function(){
         $('.readingresults').show(); 
          $('.15').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.swfresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.swftoggle').click(function(){
         $('.swfresults').show(); 
          $('.16').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.vfestresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.vfesttoggle').click(function(){
         $('.vfestresults').show(); 
          $('.17').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.weareresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.wearetoggle').click(function(){
         $('.weareresults').show(); 
          $('.18').hide();
        
  });
    
     $.get("https://spreadsheets.google.com/feeds/list/1Je9hdL9ZI2GzBDMQUVWXbjVj7m5lMFOx224D_2LzA7o/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry.slice([0],[10])).each(function() {
    $('.wirelessresults').append("<div class='col-md-4 col-xs-12'>" + this.gsx$link.$t + "</div>");
      
      }); //end each
    }); // end get
     $('.wirelesstoggle').click(function(){
         $('.wirelessresults').show(); 
          $('.19').hide();
        
  });
    
 
}); // end document.ready