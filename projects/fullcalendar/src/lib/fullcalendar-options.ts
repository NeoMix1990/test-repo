/*
the docs point to this file as an index of options.
when this files is moved, update the docs.
*/

export const INPUT_NAMES = [
  'header',
  'footer',
  'customButtons',
  'buttonIcons',
  'themeSystem',
  'bootstrapFontAwesome',
  'firstDay',
  'dir',
  'weekends',
  'hiddenDays',
  'fixedWeekCount',
  'weekNumbers',
  'weekNumbersWithinDays',
  'weekNumberCalculation',
  'businessHours',
  'showNonCurrentDates',
  'height',
  'contentHeight',
  'aspectRatio',
  'handleWindowResize',
  'windowResizeDelay',
  'eventLimit',
  'eventLimitClick',
  'timeZone',
  'now',
  'defaultView',
  'allDaySlot',
  'allDayText',
  'slotDuration',
  'slotLabelFormat',
  'slotLabelInterval',
  'snapDuration',
  'scrollTime',
  'minTime',
  'maxTime',
  'slotEventOverlap',
  'listDayFormat',
  'listDayAltFormat',
  'noEventsMessage',
  'defaultDate',
  'nowIndicator',
  'visibleRange',
  'validRange',
  'dateIncrement',
  'dateAlignment',
  'duration',
  'dayCount',
  'locales',
  'locale',
  'eventTimeFormat',
  'columnHeader',
  'columnHeaderFormat',
  'columnHeaderText',
  'columnHeaderHtml',
  'titleFormat',
  'weekLabel',
  'displayEventTime',
  'displayEventEnd',
  'eventLimitText',
  'dayPopoverFormat',
  'navLinks',
  'selectable',
  'selectMirror',
  'selectMinDistance',
  'unselectAuto',
  'unselectCancel',
  'defaultAllDayEventDuration',
  'defaultTimedEventDuration',
  'cmdFormatter',
  'defaultRangeSeparator',
  'selectConstraint',
  'selectOverlap',
  'selectAllow',
  'editable',
  'eventStartEditable',
  'eventDurationEditable',
  'eventConstraint',
  'eventOverlap',
  'eventAllow',
  'eventClassName',
  'eventClassNames',
  'eventBackgroundColor',
  'eventBorderColor',
  'eventTextColor',
  'eventColor',
  'events',
  'eventSources',
  'allDayDefault',
  'startParam',
  'endParam',
  'lazyFetching',
  'nextDayThreshold',
  'eventOrder',
  'rerenderDelay',
  'dragRevertDuration',
  'dragScroll',
  'longPressDelay',
  'eventLongPressDelay',
  'droppable',
  'dropAccept',
  'eventDataTransform',
  'allDayMaintainDuration',
  'eventResizableFromStart',
  'timeGridEventMinHeight',
  'allDayHtml',
  'eventDragMinDistance',
  'eventSourceFailure',
  'eventSourceSuccess',
  'forceEventDuration',
  'progressiveEventRendering',
  'selectLongPressDelay',
  'selectMinDistance',
  'timeZoneParam',
  'titleRangeSeparator',
  // compound OptionsInput...
  'buttonText',
  'views',
  'plugins',
  // scheduler...
  'schedulerLicenseKey',
  'resources',
  'resourceLabelText',
  'resourceOrder',
  'filterResourcesWithEvents',
  'resourceText',
  'resourceGroupField',
  'resourceGroupText',
  'resourceAreaWidth',
  'resourceColumns',
  'resourcesInitiallyExpanded',
  'slotWidth',
  'datesAboveResources',
  'googleCalendarApiKey',
  'refetchResourcesOnNavigate',
  'eventResourceEditable'
];

export const INPUT_IS_DEEP = {
  header: true,
  footer: true,
  events: true,
  eventSources: true,
  resources: true
};

export const OUTPUT_NAMES = [
  'windowResize',
  'dateClick',
  'eventClick',
  'navLinkDayClick',
  'navLinkWeekClick',
  'eventMouseEnter',
  'eventMouseLeave',
  'select',
  'unselect',
  'loading',
  'eventPositioned',
  'eventDragStart',
  'eventDragStop',
  'eventDrop',
  'eventResizeStart',
  'eventResizeStop',
  'eventResize',
  'drop',
  'eventReceive',
  'eventLeave',
  '_destroyed',
  // TODO: make these inputs...
  'viewSkeletonRender',
  'viewSkeletonDestroy',
  'datesRender',
  'datesDestroy',
  'dayRender',
  'eventRender',
  'eventDestroy',
  'resourceRender'
];