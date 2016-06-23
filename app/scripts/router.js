App.Router.map(function () {

  this.resource('editor', function() {
  	this.resource('viewControllers', function() {
      this.resource('viewController', {path: '/viewController/:viewController_id'}, function() {
        this.resource('dispatchUiControl', {path: '/uiControl/:ui_control_id'});
        this.resource('controlAudioPlayer', {path: '/audioPlayer/:audioPlayer_id'}, function () {
        });
        this.resource('controlAudioRecorder', {path: '/audioRecorder/:audioRecorder_id'}, function () {
        });
        this.resource('controlButton', {path: '/button/:button_id'}, function () {
        });
        this.resource('controlCard', {path: '/card/:card_id'}, function () {
        });
        this.resource('controlContainer', {path: '/container/:container_id'}, function () {
        });
        this.resource('controlEditText', {path: '/editText/:editText_id'}, function () {
        });
        this.resource('controlGridView', {path: '/gridView/:gridView_id'}, function () {
        });
        this.resource('controlGridViewCell', {path: '/gridViewCell/:gridViewCell_id'}, function () {
        });
        this.resource('controlImageView', {path: '/imageView/:imageView_id'}, function () {
        });
        this.resource('controlLabel', {path: '/label/:label_id'}, function () {
        });
        this.resource('controlListView', {path: '/listView/:listView_id'}, function () {
        });
        this.resource('controlListViewCell', {path: '/listViewCell/:listViewCell_id'}, function () {
        });
        this.resource('controlMap', {path: '/map/:map_id'}, function () {
        });
        this.resource('controlDatepicker', {path: '/datepicker/:datepicker_id'}, function () {
        });
        this.resource('controlTimepicker', {path: '/timepicker/:timepicker_id'}, function () {
        });
        this.resource('controlSwitch', {path: '/switch/:switch_id'}, function () {
        });
        this.resource('controlSlider', {path: '/slider/:slider_id'}, function () {
        });
        this.resource('controlPhotocameraController', {path: '/photocameraController/:photocameraController_id'}, function () {
        });
        this.resource('controlVideocameraController', {path: '/videocameraController/:videocameraController_id'}, function () {
        });
        this.resource('controlVideoView', {path: '/videoView/:videoView_id'}, function () {
        });
        this.resource('controlWebView', {path: '/webView/:webView_id'}, function () {
        });
        this.resource('appMenu', {path: '/menu/:menu_id'}, function () {
        });
        this.resource('appMenuItem', {path: '/menuItem/:menu_item_id'}, function () {
        });
        this.resource('asyncTask', {path: '/asyncTask/:async_task_id'}, function () {
        });
        this.resource('alertDialog', {path: '/alertDialog/:alert_dialog_id'}, function () {
        });
        this.resource('progressDialog', {path: '/progressDialog/:progress_dialog_id'}, function () {
        });
      });

      this.resource('smartwatch', {}, function() {});

    });

    this.resource('model', function () {

    });

    this.resource('uiControls', function() {

    });

  });

  this.resource('about');
});
