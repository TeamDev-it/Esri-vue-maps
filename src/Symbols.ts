import { Loader, CreationResult } from "./esriUtils"

export class Symbols {

  public async ExtrudeSymbol3DLayer(options?: any): Promise<__esri.ExtrudeSymbol3DLayer> {
    return (await Loader.create<__esri.ExtrudeSymbol3DLayer>(Loader.packageName + "/symbols/ExtrudeSymbol3DLayer", options)).result;
  }

  public async FillSymbol(options?: any): Promise<__esri.FillSymbol> {
    return (await Loader.create<__esri.FillSymbol>(Loader.packageName + "/symbols/FillSymbol", options)).result;
  }

  public async FillSymbol3DLayer(options?: any): Promise<__esri.FillSymbol3DLayer> {
    return (await Loader.create<__esri.FillSymbol3DLayer>(Loader.packageName + "/symbols/FillSymbol3DLayer", options)).result;
  }

  public async Font(options?: any): Promise<__esri.Font> {
    return (await Loader.create<__esri.Font>(Loader.packageName + "/symbols/Font", options)).result;
  }

  public async IconSymbol3DLayer(options?: any): Promise<__esri.IconSymbol3DLayer> {
    return (await Loader.create<__esri.IconSymbol3DLayer>(Loader.packageName + "/symbols/IconSymbol3DLayer", options)).result;
  }

  public async LabelSymbol3D(options?: any): Promise<__esri.LabelSymbol3D> {
    return (await Loader.create<__esri.LabelSymbol3D>(Loader.packageName + "/symbols/LabelSymbol3D", options)).result;
  }

  public async LineSymbol(options?: any): Promise<__esri.LineSymbol> {
    return (await Loader.create<__esri.LineSymbol>(Loader.packageName + "/symbols/LineSymbol", options)).result;
  }

  public async LineSymbol3D(options?: any): Promise<__esri.LineSymbol3D> {
    return (await Loader.create<__esri.LineSymbol3D>(Loader.packageName + "/symbols/LineSymbol3D", options)).result;
  }

  public async LineSymbol3DLayer(options?: any): Promise<__esri.LineSymbol3DLayer> {
    return (await Loader.create<__esri.LineSymbol3DLayer>(Loader.packageName + "/symbols/LineSymbol3DLayer", options)).result;
  }

  public async MarkerSymbol(options?: any): Promise<__esri.MarkerSymbol> {
    return (await Loader.create<__esri.MarkerSymbol>(Loader.packageName + "/symbols/MarkerSymbol", options)).result;
  }

  public async MeshSymbol3D(options?: any): Promise<__esri.MeshSymbol3D> {
    return (await Loader.create<__esri.MeshSymbol3D>(Loader.packageName + "/symbols/MeshSymbol3D", options)).result;
  }

  public async ObjectSymbol3DLayer(options?: any): Promise<__esri.ObjectSymbol3DLayer> {
    return (await Loader.create<__esri.ObjectSymbol3DLayer>(Loader.packageName + "/symbols/ObjectSymbol3DLayer", options)).result;
  }

  public async PathSymbol3DLayer(options?: any): Promise<__esri.PathSymbol3DLayer> {
    return (await Loader.create<__esri.PathSymbol3DLayer>(Loader.packageName + "/symbols/PathSymbol3DLayer", options)).result;
  }

  public async PictureFillSymbol(options?: any): Promise<__esri.PictureFillSymbol> {
    return (await Loader.create<__esri.PictureFillSymbol>(Loader.packageName + "/symbols/PictureFillSymbol", options)).result;
  }

  public async PictureMarkerSymbol(options?: any): Promise<__esri.PictureMarkerSymbol> {
    return (await Loader.create<__esri.PictureMarkerSymbol>(Loader.packageName + "/symbols/PictureMarkerSymbol", options)).result;
  }

  public async PointSymbol3D(options?: any): Promise<__esri.PointSymbol3D> {
    return (await Loader.create<__esri.PointSymbol3D>(Loader.packageName + "/symbols/PointSymbol3D", options)).result;
  }

  public async PolygonSymbol3D(options?: any): Promise<__esri.PolygonSymbol3D> {
    return (await Loader.create<__esri.PolygonSymbol3D>(Loader.packageName + "/symbols/PolygonSymbol3D", options)).result;
  }

  public async SimpleFillSymbol(options?: any): Promise<__esri.SimpleFillSymbol> {
    return (await Loader.create<__esri.SimpleFillSymbol>(Loader.packageName + "/symbols/SimpleFillSymbol", options)).result;
  }

  public async SimpleLineSymbol(options?: any): Promise<__esri.SimpleLineSymbol> {
    return (await Loader.create<__esri.SimpleLineSymbol>(Loader.packageName + "/symbols/SimpleLineSymbol", options)).result;
  }

  public async SimpleMarkerSymbol(options?: any): Promise<__esri.SimpleMarkerSymbol> {
    return (await Loader.create<__esri.SimpleMarkerSymbol>(Loader.packageName + "/symbols/SimpleMarkerSymbol", options)).result;
  }

  public async TextSymbol(options?: any): Promise<__esri.TextSymbol> {
    return (await Loader.create<__esri.TextSymbol>(Loader.packageName + "/symbols/TextSymbol", options)).result;
  }

  public async TextSymbol3DLayer(options?: any): Promise<__esri.TextSymbol3DLayer> {
    return (await Loader.create<__esri.TextSymbol3DLayer>(Loader.packageName + "/symbols/TextSymbol3DLayer", options)).result;
  }

  public async WebStyleSymbol(options?: any): Promise<__esri.WebStyleSymbol> {
    return (await Loader.create<__esri.WebStyleSymbol>(Loader.packageName + "/symbols/WebStyleSymbol", options)).result;
  }
}
