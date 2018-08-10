<script>


      document.getElementById("form1").onsubmit=function() {

        type= parseInt(document.querySelector('input[name = "type"]:checked').value);


        concern = parseInt(document.querySelector('input[name = "concern"]:checked').value);

        total= type + concern;

    if(total==183) {
    		document.getElementById("answer2").innerHTML = "We recommend <a href ='https://www.amazon.com/gp/product/B00IRAWK5S/ref=as_at/?imprToken=DX-MZW9u6rPoA32AJdnFZg&slotNum=2&ie=UTF8&tag=bustle5401-20&camp=1789&creative=9325&linkCode=w61&creativeASIN=B00IRAWK5S&linkId=6da8ce2a7653be434607b68e23cdd638 
'>Ren Evercalm Gentle Cleansing Milk</a>";

    	}

    return false;
    	 }
</script>
