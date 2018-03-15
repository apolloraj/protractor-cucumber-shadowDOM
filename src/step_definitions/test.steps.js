describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.ignoreSynchronization=true;
      browser.get('https://shop.polymer-project.org/');
      browser.getTitle().then(function(strtitle){
          console.log(strtitle);
      });  
      expect(browser.getTitle()).toEqual('Home - SHOP');
    });

    it('find the shadow DOM element', function() {
      var rootElement = element(by.css('shop-app[page="home"]'));
      // var rootElement = element(by.css('.iron-selected'));
      rootElement.isPresent().then(function(strrootflag){
        console.log(strrootflag);
      })
      // var spans = rootElement.element(by.css_sr('::sr shop-home.iron-selected'));
      var spans = rootElement.element(by.css_sr('::sr shop-home.iron-selected'));
      var secondSR = spans.element(by.css_sr('::sr .item'))
      spans.isPresent().then(function(strflag){
        console.log(strflag);
      })
      spans.getText().then(function(strText){
        console.log(strText);
      })
      secondSR.isPresent().then(function(strsecondflag){
        console.log(strsecondflag);
        // console.log(secondSR.count());
        spans.element(by.css_sr('::sr .item .image-link shop-image::sr img')).isPresent().then(function(strcount){
          console.log(strcount);
          spans.element(by.css_sr('::sr .item .image-link shop-image::sr img')).click();
        })
        // console.log(secondSR.getText());
        // secondSR.click();
        // browser.wait(10000)
      })
      // secondSR.getText().then(function(strText1){
      //   console.log(strText1);
      // })
      // spans.click();
      // expect(spans.count()).toEqual(3);
      });

      it('find the next page dom', function() {
        console.log("Next page dom");
        browser.sleep(10000);
        var rootElement = element(by.css('shop-app[page="home"]'));
      // var rootElement = element(by.css('.iron-selected'));
        rootElement.isPresent().then(function(strrootflag){
        console.log(strrootflag);
      })
        
      });
      

  });