/// Include truYum form validation functions here
function nameValidation(){
	var TitleVal=document.getElementById('name').value;
                var regex=/^[_A-z]*((-|\s)*[_A-z])*$/g;
                var isValid=regex.test(val);
                var msg="";
                if(TitleVal=="" || TitleVal== null){
                   msg="Title is required.";
                }
                else if(TitleVal.length<2 || TitleVal.length>100){
                    msg="Title should have 2 to 100 characters.";
                }
                else{
                    msg="";
                    c=0;
                }
                
                document.getElementById("name-validation").innerHTML=msg;
}
function dateOfLaunch(){
	
}
function grossValidation(){
	
	var val=document.getElementById('Gross').value;
	var regex=/^[0-9]*$/g;
                var isValid=regex.test(val);
                var msg="";
                if(val=="" || val== null){
                    msg="Gross is required.&emsp;&emsp;&emsp;&ensp;&ensp;";
                }
                else if(isValid==false){
                    msg="Gross has to be a number.";
                }
                else{
                    msg="";
                    c=0;
                }
                
                document.getElementById("Gross-validation").innerHTML=msg;
	val=document.getElementById('dateOfLaunch').value;
	msg="";
	if(val=="" || val== null){
	   msg="Date of Launch is required.";
	}
	document.getElementById("date-of-launch-validation").innerHTML=msg;
	var val=document.getElementById('Genre').value;
	var msg="";
	if(val=="" || val== null){
	   msg="Select one genre";
	}
	document.getElementById("genre-validation").innerHTML=msg;
	event.preventDefault();
}