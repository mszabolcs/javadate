console.log('\'Allo \'Allo!');

function tester(){
	//Count input fields
	var count = $( ".date_type" ).length;
	//Initialize arrays
	var dates  = [];
	var date_ranges = [];
	var froms  = [];
	var tos  = [];
	//Iterate through input fields
	for (i = 0; i < (count/2); i++) { 
		var from = moment($("#from_"+i).val(),"MM/DD/YYYY").format("YYYY/MM");
		var to = moment($("#to_"+i).val(),"MM/DD/YYYY").format("YYYY/MM");
		//Populate arrays
			froms[i] = from;
			tos[i] = to;
			dates[i] = [ from, to];
		//Populate ranges array
			//var range = moment().range(moment(from,"YYYY/MM"),moment(to,"YYYY/MM"));
			//date_ranges[i]["from"] = from;
			//date_ranges[i]["to"] = to;
	}
	console.log("dates:");
	console.log(dates);
	//Sort arrays
		froms.sort();
		tos.sort();
	//Arrange  and sort values (min-max)
		var min_from = froms[0];
		var max_from = froms[froms.length-1];
		var min_to = tos[0];
		var max_to = tos[tos.length-1];
		var minmax_dates = [min_from,max_from,min_to,max_to];
		minmax_dates.sort();
		//Min and Max values
		var minDate = minmax_dates[0];
		var maxDate = minmax_dates[minmax_dates.length-1];
		var minmaxDate = moment().range(moment(minDate,"YYYY/MM"), moment(maxDate,"YYYY/MM"));
		console.log("MinMaxDate: ");
		console.log(minmaxDate['start']['_i']+" - "+minmaxDate['end']['_i']);
		console.log("----------------------------------------------------------------------"); 
		
	//Get 5yrs date range
		var now = moment();
		var fiveyrs = moment().subtract(5,'years');
		var fiveyrs_range = moment().range(fiveyrs,now);
		var five_years = [];
		var counter_yrs = 0;
		fiveyrs_range.by('M', function(moment) {
			five_years[counter_yrs] = moment.format("YYYY/MM");
			counter_yrs = counter_yrs+1;
		});
		//Debug console 5 yrs
		console.log("5yrs range: ");
		console.log(fiveyrs_range);
		console.log(five_years);
		console.log("----------------------------------------------------------------------");
	
	//Get the missing dates from the 5 year range and the given range
		console.log("Difference between -5yrs and given dates: ");
		console.log(fiveyrs_range.subtract(minmaxDate));
		console.log("----------------------------------------------------------------------");
	
		for(j = 0; j < dates.length; j++){
			console.log('j: '+j);
			var date_tarolo = [];
			var range = moment().range(moment(dates[j][0],"YYYY/MM"),moment(dates[j][1],"YYYY/MM"));
			var counter = 0;
			range.by('M', function(moment) {
				date_tarolo[counter] = moment.format("YYYY/MM");
				++counter;
			});
			five_years = $(five_years).not(date_tarolo).get();
		}
		
		console.log("tessst: ");
		console.log(five_years);
		$('.footer').html('');
		for(i=0; i < five_years.length; i++){
			$('.footer').append(five_years[i]+' | ');
		}
	//Put minmax dates into an array
		/*var minmaxdates = [];
		var counter_i = 0;
		minmaxDate.by('M', function(moment) {
			minmaxdates[counter_i] = moment.format("YYYY/MM");
			counter_i = counter_i+1;
		});
			
		console.log(minmaxdates);
		var testarray = ['2012/01','2012/02']; 
		var diff = $(minmaxdates).not(testarray).get();
		console.log(diff);*/

	/*ittvolt*/
}