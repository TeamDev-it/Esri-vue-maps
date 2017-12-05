import { Loader, CreationResult } from "./esriUtils";
import { Views } from "./Views";
import { Layers } from "./Layers";
import { Geometry } from "./Geometry";
import { Tasks } from "./Tasks";
import { Symbols } from "./Symbols";
import { Widgets } from "./Widgets";


export class Core {
  public async urlUtils(): Promise<__esri.urlUtils> {
    return (await Loader.get(Loader.packageName + "/core/urlUtils")) as __esri.urlUtils;
  }

}

export class Esri {

  public static Basemap(options?: any): Promise<CreationResult<__esri.Basemap>> {
    return Loader.create<__esri.Basemap>(Loader.packageName + "/Basemap", options);
  }

  public static async Camera(options?: any): Promise<__esri.Camera> {
    return (await Loader.create<__esri.Camera>(Loader.packageName + "/Camera", options)).result;
  }

  public static async Color(options?: any): Promise<__esri.Color> {
    return (await Loader.create<__esri.Color>(Loader.packageName + "/Color", options)).result;
  }

  public static async config(): Promise<__esri.config> {
    return (await Loader.get(Loader.packageName + "/config")) as __esri.config;
  }

  public static async Graphic(options?: any): Promise<__esri.Graphic> {
    return (await Loader.create<__esri.Graphic>(Loader.packageName + "/Graphic", options)).result;
  }

  public static Ground(options?: any): Promise<CreationResult<__esri.Ground>> {
    return Loader.create<__esri.Ground>(Loader.packageName + "/Ground", options);
  }

  public static async kernel(): Promise<__esri.kernel> {
    return (await Loader.get(Loader.packageName + "/kernel")) as __esri.kernel
  }

  public static async PopupTemplate(options?: any): Promise<__esri.PopupTemplate> {
    return (await Loader.create<__esri.PopupTemplate>(Loader.packageName + "/PopupTemplate", options)).result;
  }

  public static async Map(options?: any): Promise<__esri.Map> {
    return (await Loader.create<__esri.Map>(Loader.packageName + "/Map", options)).result;
  }

  public static async request(): Promise<__esri.request> {
    return (await Loader.get(Loader.packageName + "/request")) as __esri.request;
  }

  public static async Viewpoint(options?: any): Promise<__esri.Viewpoint> {
    return (await Loader.create<__esri.Viewpoint>(Loader.packageName + "/Viewpoint", options)).result;
  }

  public static WebMap(options?: any): Promise<CreationResult<__esri.WebMap>> {
    return Loader.create<__esri.WebMap>(Loader.packageName + "/WebMap", options);
  }

  public static WebScene(options?: any): Promise<CreationResult<__esri.WebScene>> {
    return Loader.create<__esri.WebScene>(Loader.packageName + "/WebScene", options);
  }

  public static Views: Views = new Views();
  public static Layers: Layers = new Layers();
  public static Geometry: Geometry = new Geometry();
  public static Symbols: Symbols = new Symbols();
  public static Tasks: Tasks = new Tasks();
  public static Widgets: Widgets = new Widgets();
  public static Core: Core = new Core();
}


