export  const qHeight = (wrap,bg) =>  {
        var wrap = document.querySelector(wrap)
        
          var height = document.documentElement.clientHeight
        
          wrap.style.height = height + 'px'
          
          wrap.style.backgroundImage = `url('${bg}')`
    }

