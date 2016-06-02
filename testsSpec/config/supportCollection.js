var supportCollection = (function() {

    var activityPicker = require('../tests/element/ST/activityPicker'),
        profileInfo = require('../tests/element/ST/profileInfo'),
        gradebookSummary = require('../tests/element/LS/gradebookSummary'),
        reminderWidget = require('../tests/element/reminderWidget');

    return {
        activityPicker: activityPicker,
        profileInfo: profileInfo,
        gradebookSummary: gradebookSummary,
        reminderWidget: reminderWidget
    };

}());
module.exports = elementCollection;
