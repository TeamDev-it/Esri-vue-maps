import { Loader, CreationResult } from "./esriUtils"

export class Symbols {

  public async ExtrudeSymbol3DLayer(options?: any): Promise<__esri.ExtrudeSymbol3DLayer> {
    return (await Loader.create<__esri.ExtrudeSymbol3DLayer>("esri/symbols/ExtrudeSymbol3DLayer", options)).result;
  }

  public async FillSymbol(options?: any): Promise<__esri.FillSymbol> {
    return (await Loader.create<__esri.FillSymbol>("esri/symbols/FillSymbol", options)).result;
  }

  public async FillSymbol3DLayer(options?: any): Promise<__esri.FillSymbol3DLayer> {
    return (await Loader.create<__esri.FillSymbol3DLayer>("esri/symbols/FillSymbol3DLayer", options)).result;
  }

  public async Font(options?: any): Promise<__esri.Font> {
    return (await Loader.create<__esri.Font>("esri/symbols/Font", options)).result;
  }

  public async IconSymbol3DLayer(options?: any): Promise<__esri.IconSymbol3DLayer> {
    return (await Loader.create<__esri.IconSymbol3DLayer>("esri/symbols/IconSymbol3DLayer", options)).result;
  }

  public async LabelSymbol3D(options?: any): Promise<__esri.LabelSymbol3D> {
    return (await Loader.create<__esri.LabelSymbol3D>("esri/symbols/LabelSymbol3D", options)).result;
  }

  public async LineSymbol(options?: any): Promise<__esri.LineSymbol> {
    return (await Loader.create<__esri.LineSymbol>("esri/symbols/LineSymbol", options)).result;
  }

  public async LineSymbol3D(options?: any): Promise<__esri.LineSymbol3D> {
    return (await Loader.create<__esri.LineSymbol3D>("esri/symbols/LineSymbol3D", options)).result;
  }

  public async LineSymbol3DLayer(options?: any): Promise<__esri.LineSymbol3DLayer> {
    return (await Loader.create<__esri.LineSymbol3DLayer>("esri/symbols/LineSymbol3DLayer", options)).result;
  }

  public async MarkerSymbol(options?: any): Promise<__esri.MarkerSymbol> {
    return (await Loader.create<__esri.MarkerSymbol>("esri/symbols/MarkerSymbol", options)).result;
  }

  public async MeshSymbol3D(options?: any): Promise<__esri.MeshSymbol3D> {
    return (await Loader.create<__esri.MeshSymbol3D>("esri/symbols/MeshSymbol3D", options)).result;
  }

  public async ObjectSymbol3DLayer(options?: any): Promise<__esri.ObjectSymbol3DLayer> {
    return (await Loader.create<__esri.ObjectSymbol3DLayer>("esri/symbols/ObjectSymbol3DLayer", options)).result;
  }

  public async PathSymbol3DLayer(options?: any): Promise<__esri.PathSymbol3DLayer> {
    return (await Loader.create<__esri.PathSymbol3DLayer>("esri/symbols/PathSymbol3DLayer", options)).result;
  }

  public async PictureFillSymbol(options?: any): Promise<__esri.PictureFillSymbol> {
    return (await Loader.create<__esri.PictureFillSymbol>("esri/symbols/PictureFillSymbol", options)).result;
  }

  public async PictureMarkerSymbol(options?: any): Promise<__esri.PictureMarkerSymbol> {
    return (await Loader.create<__esri.PictureMarkerSymbol>("esri/symbols/PictureMarkerSymbol", options)).result;
  }

  public async PointSymbol3D(options?: any): Promise<__esri.PointSymbol3D> {
    return (await Loader.create<__esri.PointSymbol3D>("esri/symbols/PointSymbol3D", options)).result;
  }

  public async PolygonSymbol3D(options?: any): Promise<__esri.PolygonSymbol3D> {
    return (await Loader.create<__esri.PolygonSymbol3D>("esri/symbols/PolygonSymbol3D", options)).result;
  }

  public async SimpleFillSymbol(options?: any): Promise<__esri.SimpleFillSymbol> {
    return (await Loader.create<__esri.SimpleFillSymbol>("esri/symbols/SimpleFillSymbol", options)).result;
  }

  public async SimpleLineSymbol(options?: any): Promise<__esri.SimpleLineSymbol> {
    return (await Loader.create<__esri.SimpleLineSymbol>("esri/symbols/SimpleLineSymbol", options)).result;
  }

  public async SimpleMarkerSymbol(options?: any): Promise<__esri.SimpleMarkerSymbol> {
    return (await Loader.create<__esri.SimpleMarkerSymbol>("esri/symbols/SimpleMarkerSymbol", options)).result;
  }

  public async TextSymbol(options?: any): Promise<__esri.TextSymbol> {
    return (await Loader.create<__esri.TextSymbol>("esri/symbols/TextSymbol", options)).result;
  }

  public async TextSymbol3DLayer(options?: any): Promise<__esri.TextSymbol3DLayer> {
    return (await Loader.create<__esri.TextSymbol3DLayer>("esri/symbols/TextSymbol3DLayer", options)).result;
  }

  public async WebStyleSymbol(options?: any): Promise<__esri.WebStyleSymbol> {
    return (await Loader.create<__esri.WebStyleSymbol>("esri/symbols/WebStyleSymbol", options)).result;
  }
}
