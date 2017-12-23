/**
 * Created by Administrator on 2017/12/18.
 */
function pgScale(){
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
pgScale();
window.onresize=pgScale;