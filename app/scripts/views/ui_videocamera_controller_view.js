App.UiVideocameraControllerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-videocamera-controller-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_videocamera_controller_view',
  attributeBindings: ['style'],

  style: function() {
    var isAndroid = this.get('controller.controllers.editor.device.platform') == 'android';
    var parentWidth = this.get("parentView.context.computedWidth");
    var parentHeight = this.get("parentView.context.computedHeight");

    style = '';

    if(isAndroid) {
      style += 'width: ' + (parentWidth - 8) + "px;";
      style += 'height: ' + (parentHeight - 16) + "px;";
      style += 'margin: 8px 4px; ';
    }

    return style;
  }.property(
    'context.computedWidth',
    'context.computedHeight',
    'controller.controllers.editor.device.platform'
  )

});
