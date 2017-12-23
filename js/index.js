/**
 * Created by Administrator on 2017/12/19.
 */
window.onload=function()
{
    var oS=document.getElementsByClassName("item");
    var oDiv=document.getElementsByClassName("lecture");
    var oBar=document.getElementsByClassName("sidebar")[0]
    var oMa=document.getElementsByClassName("erweima")[0]
    var oS2=document.getElementById("sidebar")
    console.log(oS[0])
    for(var i=0;i<oS.length;i++)
    {
        oS[i].index=i
        oS[i].onclick=function()
        {
            for(var j=0;j<oDiv.length;j++)
            {
                oDiv[j].classList.remove("active");
                oS[j].classList.remove("hover")
            }
            oDiv[this.index].classList.add("active");
            this.classList.add("hover")
        }
    }
    var tag=true
    oBar.onclick=function()
    {
        if(tag==true)
        {
            oS2.style.width=2.72+"rem"
            oMa.style.width=1.94+"rem"
            tag=false
        }
        else {
            oS2.style.width=0.78+"rem";
            oMa.style.width=0
            tag=true
        }
    }
}

