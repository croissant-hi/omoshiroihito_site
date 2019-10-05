<template>
  <div id="app">
    <div v-on:scroll="addBreak" id="fv"><div v-on:click="addBreak" id="fv_segments"></div></div>
    <!-- <div id="fv"><p class="break_left"><img src="./assets/img/fv.jpg" alt=""></p></div> -->
    <router-view/>
  </div>
</template>

<script>
import Fv from './assets/img/fv.jpg'
export default {
  name: 'App',
  data: function () {
    return {
      fvImage: Fv,
      children: [],
      break: true,
      fvBgColor: 238,
      count: 0
    }
  },
  mounted: function () {
    this.segmentationImage()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    segmentationImage: function () {
      var self = this
      var sprite = { width: 50, height: 50 }

      var image = new Image()
      image.crossOrigin = 'Anonymous'
      image.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = sprite.width
        canvas.height = sprite.height

        var context = canvas.getContext('2d')
        for (var i = 0; i * sprite.height < image.height; i++) {
          for (var j = 0; j * sprite.width < image.width; j++) {
            context.drawImage(
              image, j * sprite.width, i * sprite.height,
              sprite.width, sprite.height,
              0, 0,
              sprite.width, sprite.height
            )

            var spriteImage = new Image()
            spriteImage.src = canvas.toDataURL()
            if (j === 0) {
              spriteImage.alt = '合同会社面白い人 Webクリエイション、イラストレーションの会社'
            }

            var selecter = document.querySelector('#fv_segments')
            selecter.appendChild(spriteImage)
          }
        }
        var children = document.querySelector('#fv_segments').children
        for (var k = 0; k < children.length; k++) {
          self.children.push(children[k])
        }
      }
      image.src = this.fvImage
    },
    addBreak: function () {
      var num = 5
      for (var i = 0; i < num; i++) {
        var length = this.children.length
        if (length !== 0) {
          var random = Math.floor(Math.random() * length)
          this.children[random].classList.add('break')
          this.children.splice(random, 1)
        }
      }
      this.toBlack()
    },
    toBlack: function () {
      var fv = document.getElementById('fv')
      for (var i = 0; i < 3; i++) {
        if (this.fvBgColor !== 0) {
          this.fvBgColor--
        }
      }
      fv.style.backgroundColor = 'rgb(' + this.fvBgColor + ',' + this.fvBgColor + ',' + this.fvBgColor + ')'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #000;
}
#fv {
  height: 100vh;
  overflow-y: scroll;
  background: #eee;
}
#fv img {
  width: 5%;
}
#fv_segments {
  margin: 0 auto;
  max-width: 1000px;
  line-height: 0;
  overflow: hidden;
}
.break{
  animation: break ease-in-out .5s forwards;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
}

@keyframes break{
  0% {
    transform:  translatey(0px)  rotate(0deg) ;
  }
  10% {
    transform:  translatey(-50px)  rotate(11deg) ;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
    transform:  translatey(250px)  rotate(110deg) scale(2) ;
  }
}

</style>
