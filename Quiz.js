<script>


      document.getElementById("form1").onsubmit=function() {

        type= parseInt(document.querySelector('input[name = "type"]:checked').value);

        concern = parseInt(document.querySelector('input[name = "concern"]:checked').value);
      
        product = parseInt(document.querySelector('input[name = "product"]:checked').value);

        total= type + concern + product;

    if(total==111) {
          document.getElementById("answer3").innerHTML = "We recommend <a href ="https://www.amazon.com/gp/product/B00IRAWK5S/ref=as_at/?imprToken=DX-MZW9u6rPoA32AJdnFZg&slotNum=2&ie=UTF8&tag=bustle5401-20&camp=1789&creative=9325&linkCode=w61&creativeASIN=B00IRAWK5S&linkId=6da8ce2a7653be434607b68e23cdd638">Ren Evercalm Gentle Cleansing Milk</a>";
      }
    if (total == 121){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.amazon.com/gp/product/B00I5LEC3C/ref=as_at/?imprToken=DX-MZW9u6rPoA32AJdnFZg&slotNum=32&ie=UTF8&tag=bustle5401-20&camp=1789&creative=9325&linkCode=w61&creativeASIN=B00I5LEC3C&linkId=e6e89a2909b81bd7a463bc0c49cc554e ">First Aid Beauty Skin Rescue Deep Cleanser</a>";
      }
    if (total == 131){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.amazon.com/Ten-Six-Deep-Cleanser-Sensitive/dp/B003GE043U">Ten O Six Deep Pore Cleanser Sensitive Skin</a>";
      }
    if (total == 141){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.amazon.com/Facial-Cleanser-Minimizer-Wrinkle-Sensitive/dp/B00XVTL04W">Facial Cleanser for oily, dry or Sensitive Skin</a>";
      }          
    if (total==211) {
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.dermstore.com/product_TriActive+Exfoliant_62984.htm">Tri Active Exfoliant</a>";
     	}
    if (total == 221){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.reneerouleau.com/products/triple-berry-smoothing-peel ">TRIPLE BERRY SMOOTHING PEEL</a>";
      }
    if (total == 131){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.amazon.com/Ten-Six-Deep-Cleanser-Sensitive/dp/B003GE043U">Ten O Six Deep Pore Cleanser Sensitive Skin</a>";
      }
    if (total == 141){
          document.getElementById("answer2").innerHTML = "We recommend <a href ="https://www.amazon.com/Facial-Cleanser-Minimizer-Wrinkle-Sensitive/dp/B00XVTL04W">Facial Cleanser for oily, dry or Sensitive Skin</a>";
      } 
        

    return false;
    	 }
</script>
