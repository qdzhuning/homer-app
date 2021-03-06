import angular from 'angular';
import widget from './widget/clock-widget.component';
import settings from './settings/clock-widget-settings.component';

export default angular.module('hepicApp.clockWidget', [])
  .config(['DashboardWidgetStateProvider', function(DashboardWidgetStateProvider) {
    DashboardWidgetStateProvider.set('visualize', 'clock-widget', {
      title: 'World Clock',
      group: 'Tools',
      name: 'clock',
      description: 'Display date and time',
      sizeX: 1,
      sizeY: 1,
      refresh: false,
      config: {
        title: 'World Clock',
        timePattern: 'HH:mm:ss',
        datePattern: 'YYYY-MM-DD',
        location: {
          value: -60,
          offset: '+1',
          name: 'GMT+1 CET',
          desc: 'Central European Time',
        },
        showseconds: false,
      },
    });
  }])
  .component('clockWidgetSettings', settings)
  .component('clockWidget', widget);
