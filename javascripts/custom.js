$('.dropdown-toggle').dropdown();

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
