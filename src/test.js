function bigzhu () {
  var k = '',show ='' ;
  var x = document.createElement('STYLE');
  var imgs = document.querySelectorAll('.cont_imgs > div');
  var imgs_int = document.querySelectorAll('.cont_imgs > div > img')[0];
  for (var i =0;  i < imgs.length; i++) {
    var show = imgs[i].getAttribute('data-shx-img');

    k += '.'+imgs[i].className+':after  { background-image:url(''+show+''); left:var(--imagen-X);     position: absolute;    display: block;    z-index: -1;    width: 90%;   height: 90%;  content: '';      background-size: 200% 80%;    background-position: 0% 100%;     } '  ;   

  };
  var t = document.createTextNode(k);
  x.appendChild(t);
  document.head.appendChild(x);
}
