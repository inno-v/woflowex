chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from Woflowex");
		// ----------------------------------------------------------

		var Projects = [];

                // make it recursive
                $('.mainTreeRoot').find('.children .project')
                  .each(function(){
                    var project = $(this);
                    var projectData = {};

                    projectData.projectid = project.attr('projectid');
                    projectData.name      = project.find('.name .content').html();
                    projectData.notes     = project.find('.notes .content').html();
 
                    Projects.push( projectData );
                  });

		// save this somewhere
                console.log(Projects);

	}
	}, 10);
});
