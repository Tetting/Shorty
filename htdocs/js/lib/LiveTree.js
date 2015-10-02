jQuery('.LiveTree li').live('click.LiveTree',function(event,data) {
	//console.info('LiveTree',event.target.tagName,jQuery(this));
	jQuery(event.target).closest("li").toggleClass('closed').children('ul').toggle();
});