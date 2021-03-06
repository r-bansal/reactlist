//https://magic.import.io/

console.log('App started');

// 'Search','Cost','Internet Speed','Temperature','Humidity','Air Quality','Activities',
// 'Region','Safety', 'Other'

var ajaxServerRequest = function(){
	url = "http://localhost:5000/";
	console.log('request data');
	return $.ajax(
			{
				url:url,
				dataType: 'json',
				success: function(cityData)
				{
					cityData.length = 10;
					console.log('data received', cityData);
					return {cityData:cityData,filters:cityData[0].keys};
				}
			});
}

var CityData = [
	{	Name:"Toronto",
		Cost:Math.floor((Math.random() * 2000) + 1000),
		Internet:Math.floor((Math.random() * 1000) + 50),
		Temperature:Math.floor((Math.random() * 100) + 10)
	},
	{	Name:"Boston",
		Cost:Math.floor((Math.random() * 2000) + 1000),
		Internet:Math.floor((Math.random() * 1000) + 50),
		Temperature:Math.floor((Math.random() * 100) + 10)
	},
	{	Name:"New York City",
		Cost:Math.floor((Math.random() * 2000) + 1000),
		Internet:Math.floor((Math.random() * 1000) + 50),
		Temperature:Math.floor((Math.random() * 100) + 10)
	},
	{	Name:"San Francisco",
		Cost:Math.floor((Math.random() * 2000) + 1000),
		Internet:Math.floor((Math.random() * 1000) + 50),
		Temperature:Math.floor((Math.random() * 100) + 10)
	},
] 

// {Name:,Cost:,Internet:,Temperature:,Humidity:,AirQuality:,Activities:,Region:, Safety:,Other: }

//TODO: Generate filter based on the data you have available to you
var Filter = ['Search','Cost','Internet Speed','Temperature','Humidity','Air Quality','Activities',
'Region','Safety', 'Other'];

var Links = ["Cities", "Forum", "Chat", "Guides", "Remote Jobs", "Meetups", "Stories", "Signup"];

var NavBar = React.createClass({displayName: "NavBar",
	render: function(){
		var NavBar = Links.map(function(link){
			return (React.createElement("li", null, link)
				)
		});
		return (
			React.createElement("div", {className: "NavBar"}, 
				React.createElement("h1", null, "Navigation"), 
				React.createElement("ul", null, 
					NavBar
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
		getInitialState: function(){
			return {filters:[]};
		},
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
			var FilteredResults = CityData.map(function(city){
				return (React.createElement("li", null, city.Name, " | $", city.Cost))
			});
			return (
				React.createElement("div", {className: "FilteredResult"}, 
					FilteredResults
				)
				)
		}
	}); 

		//Image|Data Points|Place Name
		var DataCorners;
		var DisplayImage;

var App = React.createClass({displayName: "App",
	render: function(){
		ajaxServerRequest().then(fulfilled);
		function fulfilled(response){
			console.log('here');
		};
		return (
				React.createElement("div", {className: "App"}, 
					React.createElement(NavBar, null), 
					React.createElement(FilterMenu, {filters: true}), 
					React.createElement(SelectedView, null)
				)
			)
	}
});

React.render(React.createElement(App, null),document.getElementById('content'));