import { CreationResult, Loader } from "./esriUtils";

export class Tasks {
  public async ClosestFacilityTask(options?: any): Promise<__esri.ClosestFacilityTask> {
    return (await Loader.create<__esri.ClosestFacilityTask>("esri/tasks/ClosestFacilityTask", options)).result;
  }

  public async FindTask(options?: any): Promise<__esri.FindTask> {
    return (await Loader.create<__esri.FindTask>("esri/tasks/FindTask", options)).result;
  }

  public async GeometryService(options?: any): Promise<__esri.GeometryService> {
    return (await Loader.create<__esri.GeometryService>("esri/tasks/GeometryService", options)).result;
  }

  public async Geoprocessor(options?: any): Promise<__esri.Geoprocessor> {
    return (await Loader.create<__esri.Geoprocessor>("esri/tasks/Geoprocessor", options)).result;
  }

  public async IdentifyTask(options?: any): Promise<__esri.IdentifyTask> {
    return (await Loader.create<__esri.IdentifyTask>("esri/tasks/IdentifyTask", options)).result;
  }

  public async ImageServiceIdentifyTask(options?: any): Promise<__esri.ImageServiceIdentifyTask> {
    return (await Loader.create<__esri.ImageServiceIdentifyTask>("esri/tasks/ImageServiceIdentifyTask", options)).result;
  }

  public async Locator(options?: any): Promise<__esri.Locator> {
    return (await Loader.create<__esri.Locator>("esri/tasks/Locator", options)).result;
  }

  public async PrintTask(options?: any): Promise<__esri.PrintTask> {
    return (await Loader.create<__esri.PrintTask>("esri/tasks/PrintTask", options)).result;
  }

  public async QueryTask(options?: any): Promise<__esri.QueryTask> {
    return (await Loader.create<__esri.QueryTask>("esri/tasks/QueryTask", options)).result;
  }

  public async RouteTask(options?: any): Promise<__esri.RouteTask> {
    return (await Loader.create<__esri.RouteTask>("esri/tasks/RouteTask", options)).result;
  }

  public async ServiceAreaTask(options?: any): Promise<__esri.ServiceAreaTask> {
    return (await Loader.create<__esri.ServiceAreaTask>("esri/tasks/ServiceAreaTask", options)).result;
  }

}
