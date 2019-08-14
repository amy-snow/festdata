$(document).ready(function(){
    
     $.get("https://spreadsheets.google.com/feeds/list/16e8y-JpAXtMmatBGA3oYYtZLZIfHmDv2zCpNN1lV-OA/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[0]).each(function() {
    $('.glastonbury').append("<div style='margin-top: 20px;'>" + "<h7>" + this.gsx$festival.$t + "</h7>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$first.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$firsttimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$second.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$secondtimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$third.$t +"</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$thirdtimes.$t + "</h4>" + "</div>" + "</div>");
      
      
      }); //end each
    }); // end get
    
    $.get("https://spreadsheets.google.com/feeds/list/16e8y-JpAXtMmatBGA3oYYtZLZIfHmDv2zCpNN1lV-OA/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[1]).each(function() {
    $('.download').append("<div style='margin-top: 20px;'>" + "<h7>" + this.gsx$festival.$t + "</h7>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$first.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$firsttimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$second.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$secondtimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$third.$t +"</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$thirdtimes.$t + "</h4>" + "</div>" + "</div>");
      
      
      }); //end each
    }); // end get
    
    $.get("https://spreadsheets.google.com/feeds/list/16e8y-JpAXtMmatBGA3oYYtZLZIfHmDv2zCpNN1lV-OA/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[2]).each(function() {
    $('.vfest').append("<div style='margin-top: 20px;'>" + "<h7>" + this.gsx$festival.$t + "</h7>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$first.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$firsttimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$second.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$secondtimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$third.$t +"</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$thirdtimes.$t + "</h4>" + "</div>" + "</div>");
      
      
      }); //end each
    }); // end get
    
    $.get("https://spreadsheets.google.com/feeds/list/16e8y-JpAXtMmatBGA3oYYtZLZIfHmDv2zCpNN1lV-OA/od6/public/values?alt=json", function(data) { 
  //start each
    $(data.feed.entry[3]).each(function() {
    $('.reading').append("<div style='margin-top: 20px;'>" + "<h7>" + this.gsx$festival.$t + "</h7>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$first.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$firsttimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$second.$t + "</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$secondtimes.$t + "</h4>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-4 col-md-12'>" + "<div>" + "<h2>" + this.gsx$third.$t +"</h2>" + "</div>" + "<div style='margin-bottom: 40px;'>" + "<h4>Appearances: " + this.gsx$thirdtimes.$t + "</h4>" + "</div>" + "</div>");
      
      
      }); //end each
    }); // end get
    
});