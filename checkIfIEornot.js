<script>
	$(document).ready(function(){
	var userAgent, ieReg, ie;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ie = ieReg.test(userAgent);

	if(ie) {
	  // do thing
	}
	});
</script>
