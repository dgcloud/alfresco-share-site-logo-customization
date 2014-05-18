function main()
{
      var logoId = json.get("site-options-logo");
      var siteId = json.get("siteId");
            
      if (logoId != null && (logoId = new String(logoId)).length != 0)
      {
        var p = sitedata.getPage("site/" + siteId + "/dashboard");
        p.properties.siteLogo = logoId != "reset" ? logoId.toString() : "";
        p.save();            
      }
      
      model.success = true;
}

main();