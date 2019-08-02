function titleValidation(){
	var TitleVal = document.getElementById('title').value;
                var regex = /^[_A-z]*((-|\s)*[_A-z])*$/g;
                var isValid = regex.test(TitleVal);
                var msg = "";
                if(TitleVal == "" || TitleVal == null){
                   msg="Title is required.";
                }
                else if(TitleVal.length < 2 || TitleVal.length > 100){
                    msg = "Title should have 2 to 100 characters.";
                }
                else{
                    msg = "";
                    c = 0;
                }
                
                document.getElementById("title-validation").innerHTML=msg;
}
function dateOfLaunch(){
	
}
function validate(){
	
	var grossVal = document.getElementById('gross').value;
	var regex = /^[0-9]*$/g;
                var isValid = regex.test(grossVal);
                var msg = "";
                if(grossVal == "" || grossVal == null){
                    msg = "Gross is required.";
                }
                else if(isValid == false){
                    msg = "Gross has to be a number.";
                }
                else{
                    msg = "";
                    c = 0;
                }
                
                document.getElementById("gross-validation").innerHTML=msg;
	dolVal = document.getElementById('dateOfLaunch').value;
	msg="";
	if(dolVal == "" || dolVal == null){
	   msg = "Date of Launch is required.";
	}
	document.getElementById("date-of-launch-validation").innerHTML=msg;
	var genreVal = document.getElementById('genre').value;
	var msg = "";
	if(genreVal == "" || genreVal == null){
	   msg="Select one genre";
	}
	document.getElementById("genre-validation").innerHTML=msg;
	event.preventDefault();
}