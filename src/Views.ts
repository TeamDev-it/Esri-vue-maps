import { Loader, CreationResult } from "./esriUtils";
import { Layers } from "./Layers";

export class Views {
  public MapView(options?: any): Promise<CreationResult<__esri.MapView>> {
    return Loader.create<__esri.MapView>("esri/views/MapView", options);
  }

  public SceneView(options?: any): Promise<CreationResult<__esri.SceneView>> {
    return Loader.create<__esri.SceneView>("esri/views/SceneView", options);
  }

  public ViewAnimation(options?: any): Promise<CreationResult<__esri.ViewAnimation>> {
    return Loader.create<__esri.ViewAnimation>("esri/views/SceneView", options);
  }

  public _2D = {
    Draw: async function (options?: any): Promise<__esri.Draw> {
      return (await Loader.create<__esri.Draw>("esri/views/2d/draw/Draw", options)).result;
    },

    PointDrawAction: async function (options?: any): Promise<__esri.PointDrawAction> {
      return (await Loader.create<__esri.PointDrawAction>("esri/views/2d/draw/PointDrawAction", options)).result;
    },

    PolygonDrawAction: async function (options?: any): Promise<__esri.PolygonDrawAction> {
      return (await Loader.create<__esri.PolygonDrawAction>("esri/views/2d/draw/PolygonDrawAction", options)).result;
    },

    PolylineDrawAction: async function (options?: any): Promise<__esri.PolylineDrawAction> {
      return (await Loader.create<__esri.PolylineDrawAction>("esri/views/2d/draw/PolylineDrawAction", options)).result;
    },
  }
}


