<template>
    <div class="cont_imgs">
      <div @mousemove="relMouseCoords($event)" data-shx-img="http://assets.fodors.com/destinations/708037/golden-gate-bridge-san-francisco-california-1_main.jpg" data-shx-size="6" >
        <img src="http://assets.fodors.com/destinations/708037/golden-gate-bridge-san-francisco-california-1_main.jpg" class="imagen_ejemplo" alt="" />
      </div> 
    </div>
</template>

<script>
  export default {
    props: {
    },
    components: {
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // this.init()
        // code that assumes this.$el is in-document
      })
    },
    methods: {
      relMouseCoords: function (event) {
        var totalOffsetX = 0
        var totalOffsetY = 0
        var canvasX = 0
        var canvasY = 0
        var currentElement = this.$el

        do {
          totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft
          totalOffsetY += currentElement.offsetTop - currentElement.scrollTop
        } while (currentElement === currentElement.offsetParent)

        canvasX = event.pageX - totalOffsetX
        canvasY = event.pageY - totalOffsetY
        currentElement.style.transform = ' perspective( 600px ) rotateX(' + ((canvasY * -1) + ((canvasY + 5) / 1.02)) + 'deg )  rotateY(' + (canvasX - (canvasX / 1.02)) + 'deg ) '

        currentElement.style.setProperty('--imagen-X', ((canvasX * -1) + ((canvasX + 10) / 1.02)) + '%')
        currentElement.style.setProperty('--Y-imagen', ((canvasY * -1) + ((canvasY + 20) / 1.04)) + '%')
      }
    }
  }
</script>

<style>
  :root {
    --X-imagen: 5%;
    --Y-imagen:0%;  
  }


  * {
    margin: 0px auto;
    padding: 0px;
    text-align: center;
  }

  .cont_principal {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  h2 {
    font-weight: 200;
    font-family: 'Roboto';
    color: #444;

  }
  p {
    font-family: 'Roboto';
    color: #777;
    margin-bottom: 20px;
    font-weight: 300;
  } 


  .cont_imgs {
    position: relative;
    float: left;
    width: 100%;
    padding-bottom:50px;

  }


  .clear_fix {
    position: relative;
    float: left;
    width: 100% !important;

  }




  div[data-shx-size='1'] { 
    --Y-imagen:10%;  
  }

  div[data-shx-size='1']:after { 
    top: var(--Y-imagen); 
    -webkit-filter: blur(15px);
    filter: blur(15px);

  }

  div[data-shx-size='2'] {
    margin-bottom: 12px !important;
    --Y-imagen:12%;
  }

  div[data-shx-size='2']:after {
    top: var(--Y-imagen); 
    -webkit-filter: blur(15px);
    filter: blur(15px);


  }

  div[data-shx-size='3'] {
    margin-bottom: 17px !important;
    --Y-imagen:13%;
  }
  div[data-shx-size='3']:after {
    top: var(--Y-imagen); 
    -webkit-filter: blur(25px);
    filter: blur(25px);


  }

  div[data-shx-size='4'] {
    margin-bottom: 20px !important;
    --Y-imagen:18px;
  }

  div[data-shx-size='4']:after {
    top: var(--Y-imagen);
    -webkit-filter: blur(20px);
    filter: blur(20px);
  }


  div[data-shx-size='5'] {
    margin-bottom: 28px !important;
    --Y-imagen:26px;
  }

  div[data-shx-size='5']:after {
    top: var(--Y-imagen);
    -webkit-filter: blur(32px);
    filter: blur(30px);


  }


  div[data-shx-size='6'] {
    margin-bottom: 42px !important;
    --Y-imagen:40px;
  }
  div[data-shx-size='6']:after {
    top: var(--Y-imagen);
    -webkit-filter: blur(30px);
    filter: blur(30px);

  }



  .cont_imgs  img{
    width: 100%;
    z-index: 1;
    border-radius:2px;
  }



  .cont_imgs > div {
    position: relative;  
    width: 500px;
    margin: 10% auto;
    margin-top: 0px;
  }

  .btn_link {
    position: relative;
    width: 120px;
    padding: 10px;
    background: #03A9F4;
    box-shadow: 1px 5px 15px -2px rgba(0,0,0,0.2);
    color: #fff;
    text-decoration: none;
    border-radius: 2px;
    display: block;
  }
</sytle>
