/**
 * Created by Administrator on 2017/12/20.
 */
$(function()
{
    $(".item").click(function()
    {
        $(".item").removeClass("hover");
        $(".lecture").removeClass("active");
        console.log($(this).index())
        $(".lecture").eq($(this).index()).addClass("active")
        $(this).addClass("hover")
    })
    $(".item1").click(function()
    {
        $(".item1").removeClass("hover");
        $(".lecture").removeClass("active");
        console.log($(this).index())
        $(".lecture").eq($(this).index()+3).addClass("active")
        $(this).addClass("hover")
    })

    var tag=true
    /*二维码扫描*/
    $("#sidebar").click(function()
    {
        if(tag==true) {
           
          	$(".erweima").animate({"width":1.94+"rem"})
            tag=false
        }
        else{
            $(".erweima").animate({"width":0+"rem"})
            
            tag=true
        }
    })
})