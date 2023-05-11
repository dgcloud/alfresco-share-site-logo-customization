function main()
{
	var logo = context.getSiteConfiguration().getProperty("logo");
	var siteId = page.url.templateArgs.site || "";
	if (siteId !== "") {
		var p = sitedata.getPage("site/" + siteId + "/dashboard");
	    var siteLogo = p.properties.siteLogo;
	    model.siteLogo = siteLogo;
	    if (siteLogo !== null && typeof siteLogo !== "undefined" && siteLogo.length !== 0) {
	        logo = siteLogo;
	    }
	}
	
	model.logo = logo;

   // Widget instantiation metadata...
   var defaultlogo = msg.get("header.logo");
   if (defaultlogo == "header.logo")
   {
      defaultlogo = "app-logo.png";
   }
   
   var widget = {
      id: "SiteLogo", 
      name: "Alfresco.SiteLogo",
      options: {
         defaultlogo: url.context + "/res/themes/" + theme + "/images/" + defaultlogo,
		 siteId: siteId
      }
   };
   model.widgets = [widget];   

}

main();