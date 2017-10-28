import { Loader, CreationResult } from "./esriUtils";

export class Geometry {

  public async Circle(options?: any): Promise<__esri.Circle> {
    return (await Loader.create<__esri.Circle>("esri/geometry/Circle", options)).result;
  }

  public async Extent(options?: any): Promise<__esri.Extent> {
    return (await Loader.create<__esri.Extent>("esri/geometry/Extent", options)).result;
  }

  public async HeightModelInfo(options?: any): Promise<__esri.HeightModelInfo> {
    return (await Loader.create<__esri.HeightModelInfo>("esri/geometry/HeightModelInfo", options)).result;
  }

  public async Multipoint(options?: any): Promise<__esri.Multipoint> {
    return (await Loader.create<__esri.Multipoint>("esri/geometry/Multipoint", options)).result;
  }

  public async Point(options?: any): Promise<__esri.Point> {
    return (await Loader.create<__esri.Point>("esri/geometry/Point", options)).result;
  }

  public async Polygon(options?: any): Promise<__esri.Polygon> {
    return (await Loader.create<__esri.Polygon>("esri/geometry/Polygon", options)).result;
  }

  public async Polyline(options?: any): Promise<__esri.Polyline> {
    return (await Loader.create<__esri.Polyline>("esri/geometry/Polyline", options)).result;
  }

  public async ScreenPoint(options?: any): Promise<__esri.ScreenPoint> {
    return (await Loader.create<__esri.ScreenPoint>("esri/geometry/ScreenPoint", options)).result;
  }

  public async SpatialReference(options?: any): Promise<__esri.SpatialReference> {
    return (await Loader.create<__esri.SpatialReference>("esri/geometry/SpatialReference", options)).result;
  }

  public async geometryEngine(): Promise<__esri.geometryEngine> {
    return (await Loader.get("esri/geometry/geometryEngine")) as __esri.geometryEngine;
  }

  public async geometryEngineAsync(): Promise<__esri.geometryEngineAsync> {
    return (await Loader.get("esri/geometry/geometryEngineAsync")) as __esri.geometryEngineAsync;
  }

  public Support = {
    normalizeUtils : async function(): Promise<__esri.normalizeUtils> {
      return (await Loader.get("esri/geometry/support/normalizeUtils")) as __esri.normalizeUtils;
    },
    jsonUtils : async function(): Promise<__esri.jsonUtils> {
      return (await Loader.get("esri/geometry/support/jsonUtils")) as __esri.jsonUtils;
    },
    webMercatorUtils : async function(): Promise<__esri.webMercatorUtils> {
      return (await Loader.get("esri/geometry/support/webMercatorUtils")) as __esri.webMercatorUtils;
    }
  }
}
