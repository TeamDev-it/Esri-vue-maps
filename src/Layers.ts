import { CreationResult, Loader } from "./esriUtils";

export class Layers {

  public FeatureLayer(options?: any): Promise<CreationResult<__esri.FeatureLayer>> {
    return Loader.create<__esri.FeatureLayer>(Loader.packageName + "/layers/FeatureLayer", options);
  }

  public BaseDynamicLayer(options?: any): Promise<CreationResult<__esri.BaseDynamicLayer>> {
    return Loader.create<__esri.BaseDynamicLayer>(Loader.packageName + "/layers/BaseDynamicLayer", options);
  }

  public BaseElevationLayer(options?: any): Promise<CreationResult<__esri.BaseElevationLayer>> {
    return Loader.create<__esri.BaseElevationLayer>(Loader.packageName + "/layers/BaseElevationLayer", options);
  }

  public BaseTileLayer(options?: any): Promise<CreationResult<__esri.BaseTileLayer>> {
    return Loader.create<__esri.BaseTileLayer>(Loader.packageName + "/layers/BaseTileLayer", options);
  }

  public CSVLayer(options?: any): Promise<CreationResult<__esri.CSVLayer>> {
    return Loader.create<__esri.CSVLayer>(Loader.packageName + "/layers/CSVLayer", options);
  }

  public ElevationLayer(options?: any): Promise<CreationResult<__esri.ElevationLayer>> {
    return Loader.create<__esri.ElevationLayer>(Loader.packageName + "/layers/ElevationLayer", options);
  }

  public GeoRSSLayer(options?: any): Promise<CreationResult<__esri.GeoRSSLayer>> {
    return Loader.create<__esri.GeoRSSLayer>(Loader.packageName + "/layers/GeoRSSLayer", options);
  }

  public GraphicsLayer(options?: any): Promise<CreationResult<__esri.GraphicsLayer>> {
    return Loader.create<__esri.GraphicsLayer>(Loader.packageName + "/layers/GraphicsLayer", options);
  }

  public GroupLayer(options?: any): Promise<CreationResult<__esri.GroupLayer>> {
    return Loader.create<__esri.GroupLayer>(Loader.packageName + "/layers/GroupLayer", options);
  }

  public ImageryLayer(options?: any): Promise<CreationResult<__esri.ImageryLayer>> {
    return Loader.create<__esri.ImageryLayer>(Loader.packageName + "/layers/ImageryLayer", options);
  }

  public IntegratedMeshLayer(options?: any): Promise<CreationResult<__esri.IntegratedMeshLayer>> {
    return Loader.create<__esri.IntegratedMeshLayer>(Loader.packageName + "/layers/IntegratedMeshLayer", options);
  }

  public KMLLayer(options?: any): Promise<CreationResult<__esri.KMLLayer>> {
    return Loader.create<__esri.KMLLayer>(Loader.packageName + "/layers/KMLLayer", options);
  }

  public MapImageLayer(options?: any): Promise<CreationResult<__esri.MapImageLayer>> {
    return Loader.create<__esri.MapImageLayer>(Loader.packageName + "/layers/MapImageLayer", options);
  }

  public OpenStreetMapLayer(options?: any): Promise<CreationResult<__esri.OpenStreetMapLayer>> {
    return Loader.create<__esri.OpenStreetMapLayer>(Loader.packageName + "/layers/OpenStreetMapLayer", options);
  }

  public PointCloudLayer(options?: any): Promise<CreationResult<__esri.PointCloudLayer>> {
    return Loader.create<__esri.PointCloudLayer>(Loader.packageName + "/layers/PointCloudLayer", options);
  }

  public SceneLayer(options?: any): Promise<CreationResult<__esri.SceneLayer>> {
    return Loader.create<__esri.SceneLayer>(Loader.packageName + "/layers/SceneLayer", options);
  }

  public StreamLayer(options?: any): Promise<CreationResult<__esri.StreamLayer>> {
    return Loader.create<__esri.StreamLayer>(Loader.packageName + "/layers/StreamLayer", options);
  }

  public TileLayer(options?: any): Promise<CreationResult<__esri.TileLayer>> {
    return Loader.create<__esri.TileLayer>(Loader.packageName + "/layers/TileLayer", options);
  }

  public VectorTileLayer(options?: any): Promise<CreationResult<__esri.VectorTileLayer>> {
    return Loader.create<__esri.VectorTileLayer>(Loader.packageName + "/layers/VectorTileLayer", options);
  }

  public WebTileLayer(options?: any): Promise<CreationResult<__esri.WebTileLayer>> {
    return Loader.create<__esri.WebTileLayer>(Loader.packageName + "/layers/WebTileLayer", options);
  }

  public WMSLayer(options?: any): Promise<CreationResult<__esri.WMSLayer>> {
    return Loader.create<__esri.WMSLayer>(Loader.packageName + "/layers/WMSLayer", options);
  }

  public WMTSLayer(options?: any): Promise<CreationResult<__esri.WMTSLayer>> {
    return Loader.create<__esri.WMTSLayer>(Loader.packageName + "/layers/WMTSLayer", options);
  }

  public Support: LayersSupport = new LayersSupport();

}

export class LayersSupport {

  public DimensionalDefinition(options?: any): Promise<CreationResult<__esri.DimensionalDefinition>> {
    return Loader.create<__esri.DimensionalDefinition>(Loader.packageName + "/layers/support/DimensionalDefinition", options);
  }

  public Sublayer(options?: any): Promise<CreationResult<__esri.Sublayer>> {
    return Loader.create<__esri.Sublayer>(Loader.packageName + "/layers/support/Sublayer", options);
  }

}
