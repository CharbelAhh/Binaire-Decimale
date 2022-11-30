document.getElementById("convert").addEventListener("click",func=>
{
    let binary_num=document.getElementById("binaire").value
    let decimal_num=0;
    for (var i=String(binary_num).length-1; i>=0;i--) {
        if (binary_num[i]==1) {
            decimal_num+=Number(binary_num[i])*Math.pow(2,i);
        }
        else {
            decimal_num+=0;
        }
    }
    document.getElementById("decimale").value=decimal_num;
})