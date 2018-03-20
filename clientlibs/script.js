(function ($, window, document)
{

	/* Adapting window object to foundation-registry */
    var registry =  $(window).adaptTo("foundation-registry");

	 /* Registering custom selector to foundation validation selector using registry - starts  */
   	registry.register("foundation.validation.selector", {

        submittable : "[data-validation=rte-validate]",
        candidate : "[data-validation=rte-validate]:not([disabled]):not([readonly])",
        exclusion : "[data-validation=rte-validate] *"
	}); 

	 /* Registering custom selector to foundation validation selector using registry - ends  */


    /*Validator for TextField - Any Custom logic can go inside validate function - starts */
    registry.register("foundation.validation.validator",{

       	selector: "[data-validation=txt-validate]",
        validate: function (el)
        {
			var element = $(el);
            var elementVal = element.val();
            if(elementVal.length == 0)
            {

                return "Please enter text";
            }
            else
            {
				return;  
            }

        }
    });
    /*Validator for TextField - Any Custom logic can go inside validate function - ends */


	/*Validator for CoralUI 3 Multifield - Any Custom logic can go inside validate function - starts */
    /* data attribute to come via granite:data node under multifield node(with properties) */
    registry.register("foundation.validation.validator",{

       	selector: "[data-validation=multi-validate]",
        validate: function (el)
        {

			var element = $(el);
            var fieldLimit = element.data("fieldlimit");
			var multiLength = element.find(".coral-Multifield-item").length;  

            if(multiLength > fieldLimit)
            {
				return "Only "+fieldLimit+" Multifield items are allowed";
            }
            else
            {
                return ;
            }

        } 
	});
	/*Validator for CoralUI 3 Multifield - Any Custom logic can go inside validate function - ends */


	/*Validator for Richtext field - Any Custom logic can go inside validate function - starts */  
	 registry.register("foundation.validation.validator",{

       	selector: "[data-validation=rte-validate]",
        validate: function (el)
        {

            var element = $(el);
            var elementVal = element.val();   

			var div = document.createElement("div");
            div.className="rte-html";
            div.innerHTML = elementVal;
            element.after(div);

            elementVal= $(".rte-html").text().trim();


           	if(elementVal == "")
            {
				return "Please enter richtext content";
            }
            else
            {
				return;  
            }

        } 
	});
    /*Validator for richtext field - Any Custom logic can go inside validate function - ends */

    /* Registering validator against the selector registered previously - ends*/




})
($, window, document);


