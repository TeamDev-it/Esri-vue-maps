import * as el from "esri-loader";
import Vue, { WatchOptions } from "vue";

export class Loader {
  static isloading: Promise<any>;

  static initialize(url: string = "https://js.arcgis.com/4.5/") {
    if (!this.isloading) {
      this.isloading = new Promise((resolve, reject) => {
        if (!el.isLoaded()) el.bootstrap((err) => {
          if (err)
            throw (err);
          else
            resolve();
        }, { url: url });
      });
    }
  }

  static async get(dep: string): Promise<any> {
    await this.isloading;
    return new Promise<any>((resolve, reject) => {
      el.dojoRequire([dep], (...refs) => {
        resolve(refs[0]);
      });
    });
  }

  static async load(...deps: string[]): Promise<any> {
    await this.isloading;
    return new Promise((resolve, reject) => {
      el.dojoRequire(deps, (...refs) => {
        resolve(refs);
      });
    });
  }

  static async create<T>(dep: string, options?: any): Promise<CreationResult<T>> {

    let ctor: any = await Loader.get(dep);
    if (!ctor) throw "Unable to create :" + dep;

    return new CreationResult<T>(new ctor(options));
  }
}

export class CreationResult<T>{
  public result: T;

  constructor(item: T) {
    this.result = item;
  }
}

export function BindTo(vue: Vue, obj: any, propname: string, twoWay: boolean = false, esriprop?: string, options?: WatchOptions) {
  vue.$watch(propname, (n, o) => {
    if (n !== o)
      obj.set(esriprop || propname, n, options);
  });

  if (twoWay && obj.watch)
    obj.watch(esriprop || propname, (newvalue, old) => {
      if (newvalue !== old)
        vue.$set(vue, propname, newvalue);
    });
}

export function BindArrayToLayer<T>(vue: Vue, from: string, to: __esri.Collection<__esri.Graphic>, map: { (item: T): Promise<__esri.Geometry> }, options?: WatchOptions) {
  vue.$watch(from, (n, o) => {
    console.log(n, o);

  }, options)
}



