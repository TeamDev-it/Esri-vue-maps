import { Loader, CreationResult } from "./esriUtils";
import { Layers } from "./Layers";

export class Views {
  public MapView(options?: any): Promise<CreationResult<__esri.MapView>> {
    return Loader.create<__esri.MapView>(Loader.packageName + "/views/MapView", options);
  }

  public SceneView(options?: any): Promise<CreationResult<__esri.SceneView>> {
    return Loader.create<__esri.SceneView>(Loader.packageName + "/views/SceneView", options);
  }

  public ViewAnimation(options?: any): Promise<CreationResult<__esri.ViewAnimation>> {
    return Loader.create<__esri.ViewAnimation>(Loader.packageName + "/views/SceneView", options);
  }

  public _2D = {
    Draw: async function (options?: any): Promise<__esri.Draw> {
      return (await Loader.create<__esri.Draw>(Loader.packageName + "/views/2d/draw/Draw", options)).result;
    },

    PointDrawAction: async function (options?: any): Promise<__esri.PointDrawAction> {
      return (await Loader.create<__esri.PointDrawAction>(Loader.packageName + "/views/2d/draw/PointDrawAction", options)).result;
    },

    PolygonDrawAction: async function (options?: any): Promise<__esri.PolygonDrawAction> {
      return (await Loader.create<__esri.PolygonDrawAction>(Loader.packageName + "/views/2d/draw/PolygonDrawAction", options)).result;
    },

    PolylineDrawAction: async function (options?: any): Promise<__esri.PolylineDrawAction> {
      return (await Loader.create<__esri.PolylineDrawAction>(Loader.packageName + "/views/2d/draw/PolylineDrawAction", options)).result;
    },
  }
}


