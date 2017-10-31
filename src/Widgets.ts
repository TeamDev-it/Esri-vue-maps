import { Loader, CreationResult } from "./esriUtils";

export class Widgets{

  public async Attribution(options?: any): Promise<__esri.Attribution> {
    return (await Loader.create<__esri.Attribution>("esri/widgets/Attribution", options)).result;
  }

  public async BasemapGallery(options?: any): Promise<__esri.BasemapGallery> {
    return (await Loader.create<__esri.BasemapGallery>("esri/widgets/BasemapGallery", options)).result;
  }

  public async BasemapToggle(options?: any): Promise<__esri.BasemapToggle> {
    return (await Loader.create<__esri.BasemapToggle>("esri/widgets/BasemapToggle", options)).result;
  }

  public async ColorSlider(options?: any): Promise<__esri.ColorSlider> {
    return (await Loader.create<__esri.ColorSlider>("esri/widgets/ColorSlider", options)).result;
  }

  public async Compass(options?: any): Promise<__esri.Compass> {
    return (await Loader.create<__esri.Compass>("esri/widgets/Compass", options)).result;
  }

  public async Expand(options?: any): Promise<__esri.Expand> {
    return (await Loader.create<__esri.Expand>("esri/widgets/Expand", options)).result;
  }

  public async Home(options?: any): Promise<__esri.Home> {
    return (await Loader.create<__esri.Home>("esri/widgets/Home", options)).result;
  }

  public async LayerList(options?: any): Promise<__esri.LayerList> {
    return (await Loader.create<__esri.LayerList>("esri/widgets/LayerList", options)).result;
  }

  public async Legend(options?: any): Promise<__esri.Legend> {
    return (await Loader.create<__esri.Legend>("esri/widgets/Legend", options)).result;
  }

  public async Locate(options?: any): Promise<__esri.Locate> {
    return (await Loader.create<__esri.Locate>("esri/widgets/Locate", options)).result;
  }

  public async NavigationToggle(options?: any): Promise<__esri.NavigationToggle> {
    return (await Loader.create<__esri.NavigationToggle>("esri/widgets/NavigationToggle", options)).result;
  }

  public async Popup(options?: any): Promise<__esri.Popup> {
    return (await Loader.create<__esri.Popup>("esri/widgets/Popup", options)).result;
  }

  public async Print(options?: any): Promise<__esri.Print> {
    return (await Loader.create<__esri.Print>("esri/widgets/Print", options)).result;
  }

  public async ScaleBar(options?: any): Promise<__esri.ScaleBar> {
    return (await Loader.create<__esri.ScaleBar>("esri/widgets/ScaleBar", options)).result;
  }

  public async Search(options?: any): Promise<__esri.Search> {
    return (await Loader.create<__esri.Search>("esri/widgets/Search", options)).result;
  }

  public async SizeSlider(options?: any): Promise<__esri.SizeSlider> {
    return (await Loader.create<__esri.SizeSlider>("esri/widgets/SizeSlider", options)).result;
  }

  public async Track(options?: any): Promise<__esri.Track> {
    return (await Loader.create<__esri.Track>("esri/widgets/Track", options)).result;
  }

  public async UnivariateColorSizeSlider(options?: any): Promise<__esri.UnivariateColorSizeSlider> {
    return (await Loader.create<__esri.UnivariateColorSizeSlider>("esri/widgets/UnivariateColorSizeSlider", options)).result;
  }

  public async Zoom(options?: any): Promise<__esri.Zoom> {
    return (await Loader.create<__esri.Zoom>("esri/widgets/Zoom", options)).result;
  }
}
