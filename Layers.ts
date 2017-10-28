import { CreationResult, Loader } from "./esriUtils";

export class Layers {

  public FeatureLayer(options?: any): Promise<CreationResult<__esri.FeatureLayer>> {
    return Loader.create<__esri.FeatureLayer>("esri/layers/FeatureLayer", options);
  }

  public BaseDynamicLayer(options?: any): Promise<CreationResult<__esri.BaseDynamicLayer>> {
    return Loader.create<__esri.BaseDynamicLayer>("esri/layers/BaseDynamicLayer", options);
  }

  public BaseElevationLayer(options?: any): Promise<CreationResult<__esri.BaseElevationLayer>> {
    return Loader.create<__esri.BaseElevationLayer>("esri/layers/BaseElevationLayer", options);
  }

  public BaseTileLayer(options?: any): Promise<CreationResult<__esri.BaseTileLayer>> {
    return Loader.create<__esri.BaseTileLayer>("esri/layers/BaseTileLayer", options);
  }

  public CSVLayer(options?: any): Promise<CreationResult<__esri.CSVLayer>> {
    return Loader.create<__esri.CSVLayer>("esri/layers/CSVLayer", options);
  }

  public ElevationLayer(options?: any): Promise<CreationResult<__esri.ElevationLayer>> {
    return Loader.create<__esri.ElevationLayer>("esri/layers/ElevationLayer", options);
  }

  public GeoRSSLayer(options?: any): Promise<CreationResult<__esri.GeoRSSLayer>> {
    return Loader.create<__esri.GeoRSSLayer>("esri/layers/GeoRSSLayer", options);
  }

  public GraphicsLayer(options?: any): Promise<CreationResult<__esri.GraphicsLayer>> {
    return Loader.create<__esri.GraphicsLayer>("esri/layers/GraphicsLayer", options);
  }

  public GroupLayer(options?: any): Promise<CreationResult<__esri.GroupLayer>> {
    return Loader.create<__esri.GroupLayer>("esri/layers/GroupLayer", options);
  }

  public ImageryLayer(options?: any): Promise<CreationResult<__esri.ImageryLayer>> {
    return Loader.create<__esri.ImageryLayer>("esri/layers/ImageryLayer", options);
  }

  public IntegratedMeshLayer(options?: any): Promise<CreationResult<__esri.IntegratedMeshLayer>> {
    return Loader.create<__esri.IntegratedMeshLayer>("esri/layers/IntegratedMeshLayer", options);
  }

  public KMLLayer(options?: any): Promise<CreationResult<__esri.KMLLayer>> {
    return Loader.create<__esri.KMLLayer>("esri/layers/KMLLayer", options);
  }

  public MapImageLayer(options?: any): Promise<CreationResult<__esri.MapImageLayer>> {
    return Loader.create<__esri.MapImageLayer>("esri/layers/MapImageLayer", options);
  }

  public OpenStreetMapLayer(options?: any): Promise<CreationResult<__esri.OpenStreetMapLayer>> {
    return Loader.create<__esri.OpenStreetMapLayer>("esri/layers/OpenStreetMapLayer", options);
  }

  public PointCloudLayer(options?: any): Promise<CreationResult<__esri.PointCloudLayer>> {
    return Loader.create<__esri.PointCloudLayer>("esri/layers/PointCloudLayer", options);
  }

  public SceneLayer(options?: any): Promise<CreationResult<__esri.SceneLayer>> {
    return Loader.create<__esri.SceneLayer>("esri/layers/SceneLayer", options);
  }

  public StreamLayer(options?: any): Promise<CreationResult<__esri.StreamLayer>> {
    return Loader.create<__esri.StreamLayer>("esri/layers/StreamLayer", options);
  }

  public TileLayer(options?: any): Promise<CreationResult<__esri.TileLayer>> {
    return Loader.create<__esri.TileLayer>("esri/layers/TileLayer", options);
  }

  public VectorTileLayer(options?: any): Promise<CreationResult<__esri.VectorTileLayer>> {
    return Loader.create<__esri.VectorTileLayer>("esri/layers/VectorTileLayer", options);
  }

  public WebTileLayer(options?: any): Promise<CreationResult<__esri.WebTileLayer>> {
    return Loader.create<__esri.WebTileLayer>("esri/layers/WebTileLayer", options);
  }

  public WMSLayer(options?: any): Promise<CreationResult<__esri.WMSLayer>> {
    return Loader.create<__esri.WMSLayer>("esri/layers/WMSLayer", options);
  }

  public WMTSLayer(options?: any): Promise<CreationResult<__esri.WMTSLayer>> {
    return Loader.create<__esri.WMTSLayer>("esri/layers/WMTSLayer", options);
  }

}

