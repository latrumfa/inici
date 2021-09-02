/*

EXERCICI 3:

Fes una copia de l’exercici anterior però ara modifica’l
de manera que no carregui les dades des de la variable Chart.data,
si no des d’un arxiu JSON independent.

L’arxiu JSON que ha de carregar és el següent:
Manresa 2500, Moià 2450, Navarcles 2220, Santpedor 1120, Artés 1040, Sant Fruitós 998, Calders 720.

*/

am4core.ready(function() {
	
	// Themes begin
	am4core.useTheme(am4themes_dark);
	am4core.useTheme(am4themes_animated);
	
	// Create chart instance
	var chart = am4core.create("chartdiv", am4charts.XYChart);
	
	// Add data: son dades d'un arxiu json local que es diu grafics_03.json
	//chart.dataSource.url = "js/grafics_03.json"; ...però al final l'hem deixat desactivat i comentat...
	
	//... doncs, amb el Roger, hem vist que l'animació no s'activava si les dades no eren internes
	chart.data = [

		{"Població": "Manresa", "Visitants": 2500},

		{"Població": "Moià", "Visitants": 2450},

		{"Població": "Navarcles", "Visitants": 2220},

		{"Població": "Santpedor", "Visitants": 1120},
		
		{"Població": "Artés", "Visitants": 1040},

		{"Població": "Sant Fruitós de Bages", "Visitants": 998},

		{"Població": "Calders", "Visitants": 720},

		{"Població": "Torroella de baix", "Visitants": 590},
	];

	// Create axes
	var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "Població";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;
	
	categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
	  if (target.dataItem && target.dataItem.index & 2 == 2) {
		return dy + 25;
	  }
	  return dy;
	});
	
	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	
	// Create series
	var series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.valueY = "Visitants";
	series.dataFields.categoryX = "Població";
	series.name = "Visitants";
	series.columns.template.tooltipText =  "{categoryX}: [bold]{valueY}[/]";
	series.columns.template.fillOpacity = .8;
	
	var columnTemplate = series.columns.template;
	columnTemplate.strokeWidth = 2;
	columnTemplate.strokeOpacity = 1;
	
}); // end am4core.ready()