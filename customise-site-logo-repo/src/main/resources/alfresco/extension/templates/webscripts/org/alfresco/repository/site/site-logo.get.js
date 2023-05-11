function main()
{
    // Get the filter parameters
    var site = args["site"];
    var siteObj = siteService.getSite(site);
	var siteNode = siteObj.node;

	var site_logo = siteNode.childByNamePath("site_logo");

	model.logo = site_logo ? site_logo.nodeRef.toString() : "";
}

main();