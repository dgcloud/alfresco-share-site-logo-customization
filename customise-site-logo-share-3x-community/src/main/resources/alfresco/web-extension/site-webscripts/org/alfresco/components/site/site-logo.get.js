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
}

main();