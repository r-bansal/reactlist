//https://magic.import.io/

console.log('hello world');

var Data = [
]

var Filter = ['Search','Cost','Internet Speed','Temperature','Humidity','Air Quality','Activities',
'Region','Safety', 'Other'];

var Links = ["Cities", "Forum", "Chat", "Guides", "Remote Jobs", "Meetups", "Stories", Signup,]

var NavBar = React.createClass({displayName: "NavBar",
	render: function(){
		return (
			React.createElement("div", {className: "NavBar"}, 
				React.createElement("h1", null, "Navigation"), 
				React.createElement("ul", null
					
				)
			)
			) 
	}
});

var FilterMenu = React.createClass({displayName: "FilterMenu",
	render: function(){
		return (
			React.createElement("div", {className: "FilterMenu"}, 
				React.createElement(FilterViews, null), 
				React.createElement(FilterItems, null)
			)
			)
	}
});
	var FilterViews = React.createClass({displayName: "FilterViews",
		render: function(){
			return (
				React.createElement("div", {className: "FilterViews"}, 
					React.createElement("h3", null, "Filter Views"), 
					React.createElement("ul", null, 
						React.createElement("li", null, "Grid View"), 
						React.createElement("li", null, "List View"), 
						React.createElement("li", null, "Map View"), 
						React.createElement("li", null, "Settings View")
					)
				)
				)
		}
	})
		
	var FilterItems = React.createClass({displayName: "FilterItems",
		render: function(){
			var FilterItems = Filter.map(function(filter){
			return (React.createElement("li", null, filter)
				)
			});
			return (
				React.createElement("div", {className: "FilterItems"}, 
					React.createElement("h3", null, "Filter Items"), 
						React.createElement("ul", null, 
							FilterItems
						)

				)
				)
		}
	})

var SelectedView = React.createClass({displayName: "SelectedView",
	render: function(){
		return (
			React.createElement("div", {className: "SelectedView"}, 
				React.createElement(FilteredResults, null)
			)
			)
	}
})
	var FilteredResults = React.createClass({displayName: "FilteredResults",
		render: function(){
			return (
				React.createElement("div", {className: "FilteredResult"}, 
					React.createElement("h4", null, "Filtered Results"), 
					React.createElement("h5", null, "Toronto"), 
					React.createElement("h5", null, "Boston"), 
					React.createElement("h5", null, "SF"), 
					React.createElement("h5", null, "NYC")
				)
				)
		}
	}); 

		//Image|Data Points|Place Name
		var DataCorners;
		var DisplayImage;

var App = React.createClass({displayName: "App",
	render: function(){
		return (
				React.createElement("div", {className: "App"}, 
					React.createElement(NavBar, null), 
					React.createElement(FilterMenu, null), 
					React.createElement(SelectedView, null)
				)
			)
	}
});

React.render(React.createElement(App, null),document.getElementById('content'));