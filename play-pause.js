 <script>
      AFRAME.registerComponent("play-pause", {
        init: function () {
          let myVideo = document.querySelector("#video");
          let videoControls = document.querySelector("#videoControls");
          this.el.addEventListener("click", function () {
            if (myVideo.paused) {
              myVideo.play();
              videoControls.setAttribute("src", "#pause");
            } else {
              myVideo.pause();
              videoControls.setAttribute("src", "#play");
            }
          });
        },
      });
    </script>
