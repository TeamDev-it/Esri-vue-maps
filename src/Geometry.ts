import { Loader, CreationResult } from "./esriUtils";

export class Geometry {

  // public async Geometry(): Promise<__esri.Geometry> {
  //   return (await Loader.get(Loader.packageName + "/geometry/Geometry")) as __esri.Geometry;
  // }

  public async Circle(options?: any): Promise<__esri.Circle> {
    return (await Loader.create<__esri.Circle>(Loader.packageName + "/geometry/Circle", options)).result;
  }

  public async Extent(options?: any): Promise<__esri.Extent> {
    return (await Loader.create<__esri.Extent>(Loader.packageName + "/geometry/Extent", options)).result;
  }

  public async HeightModelInfo(options?: any): Promise<__esri.HeightModelInfo> {
    return (await Loader.create<__esri.HeightModelInfo>(Loader.packageName + "/geometry/HeightModelInfo", options)).result;
  }

  public async Multipoint(options?: any): Promise<__esri.Multipoint> {
    return (await Loader.create<__esri.Multipoint>(Loader.packageName + "/geometry/Multipoint", options)).result;
  }

  public async Point(options?: any): Promise<__esri.Point> {
    return (await Loader.create<__esri.Point>(Loader.packageName + "/geometry/Point", options)).result;
  }

  public async Polygon(options?: any): Promise<__esri.Polygon> {
    return (await Loader.create<__esri.Polygon>(Loader.packageName + "/geometry/Polygon", options)).result;
  }

  public async Polyline(options?: any): Promise<__esri.Polyline> {
    return (await Loader.create<__esri.Polyline>(Loader.packageName + "/geometry/Polyline", options)).result;
  }

  public async ScreenPoint(options?: any): Promise<__esri.ScreenPoint> {
    return (await Loader.create<__esri.ScreenPoint>(Loader.packageName + "/geometry/ScreenPoint", options)).result;
  }

  public async SpatialReference(options?: any): Promise<__esri.SpatialReference> {
    return (await Loader.create<__esri.SpatialReference>(Loader.packageName + "/geometry/SpatialReference", options)).result;
  }

  public async geometryEngine(): Promise<__esri.geometryEngine> {
    return (await Loader.get(Loader.packageName + "/geometry/geometryEngine")) as __esri.geometryEngine;
  }

  public async geometryEngineAsync(): Promise<__esri.geometryEngineAsync> {
    return (await Loader.get(Loader.packageName + "/geometry/geometryEngineAsync")) as __esri.geometryEngineAsync;
  }

  public Support = {
    normalizeUtils: async function (): Promise<__esri.normalizeUtils> {
      return (await Loader.get(Loader.packageName + "/geometry/support/normalizeUtils")) as __esri.normalizeUtils;
    },
    jsonUtils: async function (): Promise<__esri.jsonUtils> {
      return (await Loader.get(Loader.packageName + "/geometry/support/jsonUtils")) as __esri.jsonUtils;
    },
    webMercatorUtils: async function (): Promise<__esri.webMercatorUtils> {
      return (await Loader.get(Loader.packageName + "/geometry/support/webMercatorUtils")) as __esri.webMercatorUtils;
    }
  }
}
