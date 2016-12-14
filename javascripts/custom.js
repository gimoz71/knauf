$('.dropdown-toggle').dropdown();
$('body').on('hidden.bs.modal', '.modal', function () {
  $(this).removeData('bs.modal');
});
var overflowContainer = function (overflowSelector, parentOverflowSelector, differenceSelector, differenceSelectorLast) {
    return $(overflowSelector).css("max-height", ($(parentOverflowSelector).height() - $(differenceSelector).outerHeight() - $(differenceSelectorLast).outerHeight()));
}

$(document).ready(function() {
    overflowContainer('.overflowContainerSX', '.parentOverflowContainer', '.otherOneOverflowSX');
    overflowContainer('.overflowContainerDX', '.parentOverflowContainer', '.otherOneOverflowDX', '.otherOneOverflowLastDX');
});
$(window).on('resize', function() {
    overflowContainer('.overflowContainerSX', '.parentOverflowContainer', '.otherOneOverflowSX');
    overflowContainer('.overflowContainerDX', '.parentOverflowContainer', '.otherOneOverflowDX', '.otherOneOverflowLastDX');
});
