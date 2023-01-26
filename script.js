window.addEventListener('scroll',
function() {
	
	let pageY = window.pageYOffset;
	let main =
document.querySelector('main');
main.style.backgroundPosition = `-${pageY
* 10}px -100px`
let main2 =
document.querySelector('main2');
main2.style.backgroundPosition =
`-${pageY * 5}px -100px`

});
window.onscroll = function() {
        var theta = document.documentElement.scrollTop / 50 % Math.PI;
        var poxy = document.documentElement.scrollTop/20;


		document.getElementById('garrafa').style.transform ='rotate(' + theta + 'rad)';

		document.getElementById('garrafa').style.top =poxy+'px';
}

