/**
 * Created by Kira on 7/17/15.
 */

Template.header.events({
    'click .btn': function(e) {
        $('[role=presentation]').removeClass('active');
        $(e.target).parent().addClass('active');
    }
})