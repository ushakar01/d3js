import { Injectable } from '@angular/core';


import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Children, TreeModel } from './components/mtl-d3-tree-map/d3-tree.model';
import { StatusColor } from './models/status-colors.enum';
import { Statuscode } from './models/statuscode.enum';

export enum Direction {
    INCOMING = 'incoming',
    OUTGOING = 'outgoing',
}

// @dynamic
@Injectable()
export class Utilities {
    public static caches: any = {
        isMenuAction: false
    }
    public static generateId() {
        // tslint:disable-next-line: no-bitwise
        const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
        // tslint:disable-next-line: no-bitwise
        const oid = timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, (_) => ((Math.random() * 16) | 0).toString(16)).toLowerCase();
        return oid;
    }

    public static getStatusBadge(statusCode: number) {
        if (statusCode) {
            if (statusCode === Statuscode.CLEAR) {
                return 'badge-success custom-badge-success';
            } else if (statusCode === Statuscode.CRITICAL) {
                return 'badge-danger custom-badge-danger';
            } else if (statusCode === Statuscode.INPROGRESS) {
                return 'badge-info custom-badge-inprogress';
            } else if (statusCode === Statuscode.WARNING) {
                return 'custom-badge-warning';
            } else if (statusCode === Statuscode.DEFINED) {
                return 'custom-badge-defined';
            } else {
                return 'badge-warning';
            }
        }
    }
    public static converStatusCode(statusCode) {
        if (statusCode) {
            statusCode = statusCode.toLowerCase().replace(/\s/g, '');
            if (statusCode === StatusColor.CLEAR
                || statusCode === StatusColor.OK
                || statusCode === StatusColor.ACTIVE
                || statusCode === StatusColor.UP
                || statusCode === StatusColor.SUCCESS) {
                return 2;
            } else if (statusCode === StatusColor.CRITICAL
                || statusCode === StatusColor.DOWN
                || statusCode === StatusColor.INACTIVE
                || statusCode === StatusColor.FAILED) {
                return 5;
            } else if (statusCode === StatusColor.WARNING
                || statusCode === StatusColor.NOTDISCOVERED) {
                return 4;
            } else if (statusCode === StatusColor.INPROGRESS || statusCode === StatusColor.OPEN) {
                return 3;
            } else if (statusCode === StatusColor.DEFINED) {
                return 1;
            } else {
                return null;
            }
        }
    }


    public static filterby(value: any[], key) {
        const hashMap = {};
        const outputArray = [];
        for (const data of value) {
            if (data[key] in hashMap) {
                hashMap[data[key]] = hashMap[data[key]] + 1;
            } else {
                hashMap[data[key]] = 1;
            }
        }
        Object.keys(hashMap).forEach(type => {
            outputArray.push({
                name: type,
                value: hashMap[type],
                itemStyle: {
                    color: Utilities.getStatusColor(type)
                }
            });
        });
        return outputArray;
    }
    public static getStatusColor(statusCode: string) {
        const colors: any[] = [
            '#ec7a08', // default blue
            '#FF4128', // red
            '#CB8D0D', // orange
            '#47987A', // green
            '#39a5dc',
        ];
        if (statusCode) {
            statusCode = statusCode.toLowerCase();
            if (statusCode === StatusColor.CLEAR ||
                statusCode === StatusColor.OK ||
                statusCode === StatusColor.ACTIVE ||
                statusCode === StatusColor.GOOD) {
                return colors[3];
            } else if (statusCode === StatusColor.CRITICAL || statusCode === StatusColor.INACTIVE) {
                return colors[1];
            } else if (statusCode === StatusColor.INPROGRESS) {
                return colors[4];
            } else if (statusCode === StatusColor.WARNING) {
                return colors[2];
            } else if (statusCode === StatusColor.DEFINED) {
                return colors[0];
            } else {
                return colors[2];
            }
        }
    }

    public static _mapData(data) {
        const mapperApplied = (item) => {
            // if no data is sent in, return null, otherwise transform the data
            return !!!item
                ? null
                : item.reduce((list, entry) => {
                    let clone = null;
                    if (entry.hasOwnProperty('children')) {
                        entry.children = mapperApplied(entry.children);
                        clone = new TreeModel().deserialize(entry);
                    } else {
                        clone = new Children().deserialize(entry);
                    }
                    list.push(clone);
                    return list;
                }, []);
        };
        return mapperApplied(data);
    }
    public static getWidth(item) {
        if (item.toLowerCase() === 'state'
            || item.toLowerCase() === 'status'
            || item.toLowerCase() === 'health'
            || item.toLowerCase() === 'severity') {
            return 15;
        } else {
            return 40;
        }
    }

    public static deepClone(source: any): any {
        // return value is input is not an Object or Array.
        if (typeof (source) !== 'object' || source === null) {
            return source;
        }
        let clone: any;
        if (Array.isArray(source)) {
            clone = source.slice();  // unlink Array reference.
        } else {
            clone = Object.assign({}, source); // Unlink Object reference.
        }
        const keys = Object.keys(clone);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < keys.length; i++) {
            clone[keys[i]] = this.deepClone(clone[keys[i]]); // recursively unlink reference to nested objects.
        }
        return clone; // return unlinked clone.
    }
    public static deepExtend(...objects: any[]): any {
        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
            return false;
        }

        if (arguments.length < 2) {
            return arguments[0];
        }

        const target = arguments[0];

        // convert arguments to array and cut off target object
        const args = Array.prototype.slice.call(arguments, 1);

        let val;
        let src;

        args.forEach((obj: any) => {
            // skip argument if it is array or isn't object
            if (typeof obj !== 'object' || Array.isArray(obj)) {
                return;
            }

            Object.keys(obj).forEach(function (key) {
                src = target[key]; // source value
                val = obj[key]; // new value

                // recursion prevention
                if (val === target) {
                    return;

                    /**
                     * if new value isn't object then just overwrite by new value
                     * instead of extending.
                     */
                } else if (typeof val !== 'object' || val === null) {
                    target[key] = val;

                    return;

                    // just clone arrays (and recursive clone objects inside)
                } else if (Array.isArray(val)) {
                    target[key] = this.deepCloneArray(val);

                    return;

                    // custom cloning and overwrite for specific objects
                } else if (this.isSpecificValue(val)) {
                    target[key] = this.cloneSpecificValue(val);

                    return;

                    // overwrite by new value if source isn't object or array
                } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                    target[key] = this.deepExtend({}, val);

                    return;

                    // source value and new value is objects both, extending...
                } else {
                    target[key] = this.deepExtend(src, val);

                    return;
                }
            });
        });

        return target;
    };
    
    public static sortIps(data):any {
        
        return data.sort((a, b) => () => {
            return a.name.split('.')[0] - b.name.split('.')[0]
                || a.name.split('.')[1] - b.name.split('.')[1]
                || a.name.split('.')[2] - b.name.split('.')[2]
                || a.name.split('.')[3] - b.name.split('.')[3]
        })
    }
    public static _filterData(data, predicate, types) {
        const filterapplied = function (item, key, value) {
          // if no data is sent in, return null, otherwise transform the data
          return !!!item
            ? null
            : item.reduce((list, entry) => {
              let clone = null;
              if (entry.children != null) {
                // if the object has childrens, filter the list of children
                const children = filterapplied(entry.children, key, value);
                entry.health = value;
                if (children.length > 0) {
                  // if any of the children matches, clone the parent object, overwrite
                  // the children list with the filtered list
                  clone = Object.assign({}, entry, {
                    health: value,
                    children: filterapplied(entry.children, key, value)
                  });
                }
              } else if (entry[key] === value) {
                // if the object matches the filter, clone it as it is
                clone = Object.assign({}, entry);
              } else if (entry[key] !== value && entry.children && entry.children !== null && entry.children.length > 0) {
                const children = filterapplied(entry.children, key, value);
                clone = Object.assign({}, entry, {
                  health: value,
                  children: children.filter(obj => obj[key] === value)
                });
              }
              // if there's a cloned object, push it to the output list
              if (clone) {
                list.push(clone);
              }
              return list;
            }, []);
        };
        return filterapplied(data, predicate, types);
      }
   public static _mergechildren(item) {
        return item
          .map(o => {
            for (const i in o) {
              if (Array.isArray(o['children']) && o['children'].length !== 0) {
                return this._mergechildren(o['children']);
              } else {
                if (Array.isArray(o[i])) {
                  return this._mergechildren(o[i])
                } else if (o.type !== 'alerts' && o.type !== 'services' ) {
                  return [].concat(o);
                }
              }
            }
          })
          .flat();
      }
}
