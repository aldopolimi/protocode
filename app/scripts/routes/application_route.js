App.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('application');
  },

  actions: {

    deleteApp: function () {

        if (confirm('Are you sure to delete?')) {
            var self = this;

            var models = [
              'application',
              'container',
              'smartphone',
              'smartwatch',
              'menu',
              'menuItem',
              'uiPhoneControlTemplate',
              'uiWatchControlTemplate'
            ];

            models.map(function (model) {
              Ember.run.once(self, function () {
                self.store.findAll(model).then(function (array) {
                  array.forEach(function (data) {
                    Ember.run.once(self, function () {
                      data.deleteRecord();
                      data.save();
                    });
                  });
                });
              });
            });

            this.transitionTo('/');
        }

    },

    createApp: function () {
      var self = this;

      this.store.createRecord('smartphone', {
        name: 'iPhone6Plus',
        label: 'iOS (414x736) iPhone 6 Plus',
        platform: 'ios',
        //Altezza status bar in points
        viewTop: 64,
        //Altezza schermo in points
        viewBottom: 736,
        //Dimensioni in points
        screenWidth: 414,
        screenHeight: 736,
        //Dimensioni in px - padding css
        cssWidth: 414,
        cssHeight: 736
      }).save().then(function (smartphone) {
          self.store.createRecord('smartwatch', {
            name: 'AppleWatch',
            label: 'WatchOS (156x195) Apple Watch 42mm',
            platform: 'watchos',
            viewTop: 22,
            viewBottom: 195,
            screenWidth: 156,
            screenHeight: 195,
            cssWidth: 156,
            cssHeight: 195
          }).save().then(
          function (smartwatch) {
            self.store.createRecord('menu').save().then(
              function (newMenu) {
                self.store.createRecord('application', {id: 'newAppId'}).save().then(
                  function (app) {
                    app.set('smartphone', smartphone);
                    app.set('smartwatch', smartwatch);
                    app.set('menu', newMenu);
                    app.save();
                    newMenu.save();
                    smartwatch.save();
                    smartphone.save();

                    self.store.createRecord('smartwatch', {
                      name: 'AsusZenWatch',
                      label: 'AndroidWear (213x213) Asus Zen Watch',
                      platform: 'androidwear',
                      viewTop: 0,
                      viewBottom: 213,
                      //Dimensioni in dp
                      screenWidth: 213,
                      screenHeight: 213,
                      //Dimensioni in px - padding css
                      cssWidth: 213,
                      cssHeight: 213
                    }).save();

                    self.store.createRecord('smartwatch', {
                      name: 'Moto360',
                      label: 'AndroidWear (241x248) Moto 360',
                      platform: 'androidwear',
                      viewTop: 0,
                      viewBottom: 248,
                      //Dimensioni in dp
                      screenWidth: 241,
                      screenHeight: 248,
                      //Dimensioni in px - padding css
                      cssWidth: 241,
                      cssHeight: 248
                    }).save();

                  }
                );
              }
            );
          }
        );
      });

      this.store.createRecord('smartphone', {
        name: 'iPhone6',
        label: 'iOS (375x667) iPhone 6',
        platform: 'ios',
        //Altezza status bar in points
        viewTop: 65,
        //Altezza schermo in points
        viewBottom: 667,
        //Dimensioni in points
        screenWidth: 375,
        screenHeight: 667,
        //Dimensioni in px - padding css
        cssWidth: 375,
        cssHeight: 667
      }).save();

      this.store.createRecord('smartphone', {
        name: 'iPhone5',
        label: 'iOS (320x568) iPhone 5',
        platform: 'ios',
        //Altezza status bar in points
        viewTop: 65,
        //Altezza schermo in points
        viewBottom: 568,
        //Dimensioni in points
        screenWidth: 320,
        screenHeight: 568,
        //Dimensioni in px - padding css
        cssWidth: 320,
        cssHeight: 568
      }).save();

      this.store.createRecord('smartphone', {
        name: 'Nexus6P',
        label: 'Android (411x731) Nexus 6P ',
        platform: 'android',
        //Altezza status bar(30) + toolbar(64) in dp
        viewTop: 93,
        //Altezza schermo (731) - altezza command bar(55) in dp
        viewBottom: 675,
        //Dimensioni in dp
        screenWidth: 411,
        screenHeight: 731,
        //Dimensioni in px - padding css
        cssWidth: 411,
        cssHeight: 731
      }).save();

      this.store.createRecord('smartphone', {
        name: 'Nexus5',
        label: 'Android (360x640) Nexus 5 ',
        platform: 'android',
        //Altezza status bar(23) + toolbar(56) in dp
        viewTop: 79,
        //Altezza schermo (640) - altezza command bar(47) in dp
        viewBottom: 593,
        //Dimensioni in dp
        screenWidth: 360,
        screenHeight: 640,
        //Dimensioni in px - padding css
        cssWidth: 360,
        cssHeight: 640
      }).save();

      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Button',
        nameImg: 'button.png',
        type: 'button'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Label',
        nameImg: 'label.png',
        type: 'label'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Edit Text',
        nameImg: 'edittext.png',
        type: 'editText'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Spinner',
        nameImg: 'spinner.png',
        type: 'spinner'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Switch',
        nameImg: 'switch.png',
        type: 'switch'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Slider',
        nameImg: 'slider.png',
        type: 'slider'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Web View',
        nameImg: 'webview.png',
        type: 'webView'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Image View',
        nameImg: 'imageview.png',
        type: 'imageView'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Video View',
        nameImg: 'videoview.png',
        type: 'videoView'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Audio Player',
        nameImg: 'audioplayer.png',
        type: 'audioPlayer'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'List View',
        nameImg: 'listview.png',
        type: 'listView'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Grid View',
        nameImg: 'gridview.png',
        type: 'gridView'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Photocamera Controller',
        nameImg: 'photocameracontroller.png',
        type: 'photocameraController'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Videocamera Controller',
        nameImg: 'videocameracontroller.png',
        type: 'videocameraController'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Audio Recorder',
        nameImg: 'audiorecorder.png',
        type: 'audioRecorder'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Map',
        nameImg: 'map.png',
        type: 'map'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Datepicker',
        nameImg: 'datepicker.png',
        type: 'datepicker'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Timepicker',
        nameImg: 'timepicker.png',
        type: 'timepicker'
      }).save();
      this.store.createRecord('uiPhoneControlTemplate', {
        label: 'Card',
        nameImg: 'card.png',
        type: 'card'
      }).save();

      this.store.createRecord('uiWatchControlTemplate', {
        label: 'Watch Button',
        nameImg: 'watch_button.png',
        type: 'watchButton'
      }).save();
      this.store.createRecord('uiWatchControlTemplate', {
        label: 'Watch Label',
        nameImg: 'watch_label.png',
        type: 'watchLabel'
      }).save();
      this.store.createRecord('uiWatchControlTemplate', {
        label: 'Watch Slider',
        nameImg: 'watch_slider.png',
        type: 'watchSlider'
      }).save();
      this.store.createRecord('uiWatchControlTemplate', {
        label: 'Watch Switch',
        nameImg: 'watch_switch.png',
        type: 'watchSwitch'
      }).save();
      this.store.createRecord('uiWatchControlTemplate', {
        label: 'Watch Voice Message',
        nameImg: 'watch_voice_message.png',
        type: 'watchVoiceMessage'
      }).save();


    }
  }
});
