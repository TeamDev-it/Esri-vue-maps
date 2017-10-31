import { Esri } from "../Esri";

export class Measure {

  private _graphics: __esri.Collection<__esri.Graphic>;
  private _graphic: __esri.Graphic;

  private _defaultGeometrySymbol: {};
  private _defaultLabelSymbol: {};

  constructor(public parameters: MeasureParameters) {
    if (!parameters.domButtonNode) throw "Unable to create a Measure tool without a dom button reference";
    if (!parameters.view) throw "Unable to create a Measure Tool without a View";

    // Get the graphic layer to draw the measures
    if (parameters.graphicLayer)
      this._graphics = parameters.graphicLayer.graphics;
    else
      this._graphics = parameters.view.graphics;

    this.initWidget();
  }

  private async initWidget() {

    var draw = await Esri.Views._2D.Draw({ view: this.parameters.view } as __esri.DrawProperties) as __esri.Draw;

    this.parameters.domButtonNode.addEventListener("click", () => {
      this._graphics.removeAll();
      var action: any = draw.create(this.parameters.measureTool);
      this.parameters.view.focus();

      switch (this.parameters.measureTool) {
        case "polygon":
          action.on("vertex-add", e => this.drawPolygon(e, this.parameters.view));
          action.on("cursor-update", e => this.drawPolygon(e, this.parameters.view));
          action.on("vertex-remove", e => this.drawPolygon(e, this.parameters.view));
          action.on("draw-complete", e => this.drawPolygon(e, this.parameters.view));
          break;
        case "polyline":
          action.on("vertex-add", e => this.drawPolyline(e, this.parameters.view));
          action.on("cursor-update", e => this.drawPolyline(e, this.parameters.view));
          action.on("vertex-remove", e => this.drawPolyline(e, this.parameters.view));
          action.on("draw-complete", e => this.drawPolyline(e, this.parameters.view));
          break;
      }
    });
  }

  private async drawPolygon(evt, mapView: __esri.MapView) {
    var vertices = evt.vertices;

    //remove existing graphic
    this._graphics.removeAll();

    // create a new polygon
    var polygon = await await Esri.Geometry.Polygon({
      rings: vertices,
      spatialReference: mapView.spatialReference
    });;

    // create a new graphic representing the polygon, add it to the view
    var graphic = await Esri.Graphic({
      geometry: polygon,
      symbol: this.parameters.geometrySymbol
    });
    this._graphics.add(graphic);

    var geoengine = (await Esri.Geometry.geometryEngine());

    // calculate the area of the polygon
    var area = geoengine.geodesicArea(polygon, this.parameters.areaUnitOfMeasure);
    if (area < 0) {
      // simplify the polygon if needed and calculate the area again
      var simplifiedPolygon = geoengine.simplify(polygon) as __esri.Polygon;
      if (simplifiedPolygon) {
        area = geoengine.geodesicArea(simplifiedPolygon, this.parameters.areaUnitOfMeasure);
      }
    }
    // start displaying the area of the polygon
    this.labelAreas(polygon, area, mapView);
  }

  private async drawPolyline(evt, view: __esri.MapView) {
    var vertices = evt.vertices;

    //remove existing graphic
    this._graphics.removeAll();

    // create a new polygon
    var polygon = await Esri.Geometry.Polyline({
      paths: vertices,
      spatialReference: view.spatialReference
    });

    // create a new graphic representing the polygon, add it to the view
    var graphic = await await Esri.Graphic({
      geometry: polygon,
      symbol: this.parameters.geometrySymbol
    });
    this._graphics.add(graphic);

    var geoengine = (await Esri.Geometry.geometryEngine());

    // calculate the area of the polygon
    var area = geoengine.geodesicLength(polygon, this.parameters.distanceUnitOfMeasure);
    if (area < 0) {
      // simplify the polygon if needed and calculate the area again
      var simplifiedPolygon = geoengine.simplify(polygon) as __esri.Polygon;
      if (simplifiedPolygon) {
        area = geoengine.geodesicLength(simplifiedPolygon, this.parameters.distanceUnitOfMeasure);
      }
    }
    // start displaying the area of the polygon
    this.labelDistance(polygon, area, view);
  }

  private async labelDistance(geom, area, mapView: __esri.MapView) {

    var s = this.parameters.labelSymbol;
    s.text = area.toFixed(2) + " " + this.parameters.distanceLabel;
    var graphic = await Esri.Graphic({
      geometry: geom.extent.center,
      symbol: s
    });
    this._graphics.add(graphic);
  }

  private async labelAreas(geom, area, mapView: __esri.MapView) {

    var s = this.parameters.labelSymbol;
    s.text = area.toFixed(2) + " " + this.parameters.areaLabel;
    var graphic = await Esri.Graphic({
      geometry: geom.centroid,
      symbol: s
    });
    this._graphics.add(graphic);
  }
}

export class MeasureParameters {

  public graphicLayer: __esri.GraphicsLayer = null;
  public measureTool: string = "polygon"; // polygon - line
  public areaUnitOfMeasure: string = "square-kilometers";
  public distanceUnitOfMeasure: string = "kilometers";
  public areaLabel: string = "km2";
  public distanceLabel: string = "km";
  public labelSymbol: any = {
    type: "text",
    color: "#fff",
    haloColor: "black",
    haloSize: "1px",
    xoffset: 3,
    yoffset: 3,
    font: { // autocast as Font
      size: 12,
      family: "sans-serif"
    }
  };
  public geometrySymbol: any = {
    type: "simple-fill", // autocasts as SimpleFillSymbol
    color: [30, 30, 30, 0.5],
    style: "solid",
    outline: { // autocasts as SimpleLineSymbol
      color: [255, 255, 255],
      width: 1
    }
  };

  constructor(
    public view: __esri.MapView,
    public domButtonNode: any
  ) {
  }
}
