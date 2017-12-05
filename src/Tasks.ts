import { CreationResult, Loader } from "./esriUtils";

export class Tasks {
  public async ClosestFacilityTask(options?: any): Promise<__esri.ClosestFacilityTask> {
    return (await Loader.create<__esri.ClosestFacilityTask>(Loader.packageName + "/tasks/ClosestFacilityTask", options)).result;
  }

  public async FindTask(options?: any): Promise<__esri.FindTask> {
    return (await Loader.create<__esri.FindTask>(Loader.packageName + "/tasks/FindTask", options)).result;
  }

  public async GeometryService(options?: any): Promise<__esri.GeometryService> {
    return (await Loader.create<__esri.GeometryService>(Loader.packageName + "/tasks/GeometryService", options)).result;
  }

  public async Geoprocessor(options?: any): Promise<__esri.Geoprocessor> {
    return (await Loader.create<__esri.Geoprocessor>(Loader.packageName + "/tasks/Geoprocessor", options)).result;
  }

  public async IdentifyTask(options?: any): Promise<__esri.IdentifyTask> {
    return (await Loader.create<__esri.IdentifyTask>(Loader.packageName + "/tasks/IdentifyTask", options)).result;
  }

  public async ImageServiceIdentifyTask(options?: any): Promise<__esri.ImageServiceIdentifyTask> {
    return (await Loader.create<__esri.ImageServiceIdentifyTask>(Loader.packageName + "/tasks/ImageServiceIdentifyTask", options)).result;
  }

  public async Locator(options?: any): Promise<__esri.Locator> {
    return (await Loader.create<__esri.Locator>(Loader.packageName + "/tasks/Locator", options)).result;
  }

  public async PrintTask(options?: any): Promise<__esri.PrintTask> {
    return (await Loader.create<__esri.PrintTask>(Loader.packageName + "/tasks/PrintTask", options)).result;
  }

  public async QueryTask(options?: any): Promise<__esri.QueryTask> {
    return (await Loader.create<__esri.QueryTask>(Loader.packageName + "/tasks/QueryTask", options)).result;
  }

  public async RouteTask(options?: any): Promise<__esri.RouteTask> {
    return (await Loader.create<__esri.RouteTask>(Loader.packageName + "/tasks/RouteTask", options)).result;
  }

  public async ServiceAreaTask(options?: any): Promise<__esri.ServiceAreaTask> {
    return (await Loader.create<__esri.ServiceAreaTask>(Loader.packageName + "/tasks/ServiceAreaTask", options)).result;
  }

}
