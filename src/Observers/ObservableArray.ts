export class ArrayObserver<T>{

  private _watchers: Array<ObservableArrayChanged<T>> = []

  constructor(arr: T[]) {

    var obj = arr as any;

    var observer = this;

    // redefine functions
    obj._push = arr.push;
    obj._pop = arr.pop;
    obj._shift = arr.shift;
    obj._unshift = arr.unshift;
    obj._splice = arr.splice;

    arr.push = function (items) {
      obj._push(items);

      observer.notify("push", items instanceof Array ? items : [items], null);
      return arr.length;
    }

    arr.pop = function () {
      let result = obj._pop();
      observer.notify("pop", null, [result]);
      return result;
    }

    arr.shift = function () {
      let result = obj._shift();
      observer.notify("shift", null, [result]);
      return result;
    }

    arr.unshift = function (items) {
      obj._unshift(items);
      observer.notify("unshift", items instanceof Array ? items : [items], null);
      return arr.length;
    }

    arr.splice = function (start: number, deletecount?: number, ...items) {
      let deleted = obj._splice(start, deletecount, items);
      observer.notify("splice", items instanceof Array ? items : [items], deleted);
      return deleted;
    }
  }

  private notify(operation: string, inserted: T[], deleted: T[]) {
    this._watchers.forEach(w => {
      w(operation, inserted, deleted);
    });
  }

  public Subscribe(watcher: ObservableArrayChanged<T>): Function {
    this._watchers.push(watcher);
    return () => this.UnSubscribe(watcher);
  }

  public UnSubscribe(watcher: ObservableArrayChanged<T>) {
    var idx = this._watchers.indexOf(watcher);
    this._watchers.splice(idx, 1);
  }
}

export interface ObservableArrayChanged<T> { (operation: string, inserted: T[], deleted: T[]) }
