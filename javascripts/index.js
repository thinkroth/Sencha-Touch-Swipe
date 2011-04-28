Ext.setup({
	onReady: function () { 
		var headChanger = new Ext.Carousel({ //Creates Carousel for heads
			flex: 6, //Handles size of head panel, feel free to play with this number
			indicator: false, //turns off indicator dots, they get in the way of the heads
			items: [ 
				{cls: "head1 head"}, //We just define css classes here, they are provided background images in main.css
				{cls: "head2 head"},
				{cls: "head3 head"},
				{cls: "donate donate",
				html: 'If you enjoyed this lovely app, please donate here to support future development! Thanks. <form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="JYB9N29JZRKTW"><input type="image" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/scr/pixel.gif" width="1" height="1"></form>'
				}  
			]
		});
		
		
		var figureChanger = new Ext.Carousel({ //Creates Carousel for bodies
			flex: 5, //Handles size of bodies, feel free to play with this number
			indicator: false, //turns off indicator dots, they are on by default
			items: [ 
				{cls: "figure1 figure"}, //more css classes here, also provided backgrounds in main.css
				{cls: "figure2 figure"},
				{cls: "figure3 figure"},
			]	
		});
		
		var credits = new Ext.Panel({
			dock: "bottom", //puts our credits panel at the bottom of the page
			html: "Hand crafted by Tim and Kevin", //nothing fancy here, this panel can be deleted
			cls: "credits"
		})
		
		var instructions = new Ext.Panel({
			dock: "top", //puts instructions at the top of the page
			html: 'Swipe to change body or head',
			cls: "credits",
		})
		
		var rootPanel = new Ext.Panel ({ //Sets up a panel to hold everything
			fullscreen: true, //This provides resolution independence and will resize based on display type and orientation
			layout: { 
				type: "vbox",
				align: "stretch",
				},
			items: [headChanger, figureChanger], //Includes the Carousels we created above
			dockedItems: [credits, instructions] //Includes the docked panels above
		})
		
		
	}
	
})