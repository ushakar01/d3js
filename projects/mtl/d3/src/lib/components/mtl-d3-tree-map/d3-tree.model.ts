import { Deserializable } from "../../models/deserialize.model";


export class Children implements Deserializable<Children> {
    id: string;
    itemId: string;
    name: string;
    // icon: string;
    type?: string;
    state?: string;
    properties: {};
    discoveryStatus: string;
    health?: string;
    children?:[]
    deserialize(input: Children): Children {
        Object.assign(this, input)
        this.id = input.id ? input.id : Math.random().toString(36).substr(2, 9);
        this.itemId = input.id ? input.id : '_' + Math.random().toString(36).substr(2, 9);
        this.health = input.health ? input.health.toLowerCase() : 'ok';
        this.type = input.type ? input.type.toLowerCase() : '';
        this.name = input.name ? input.name.replace(/-/gi, '.') : 'Not defined';
        this.state = input.state ? input.state : '';

        this.properties = input.properties ? input.properties : {};
        this.discoveryStatus = input.discoveryStatus ? input.discoveryStatus : 'Not Discovered';
        if(input.children && input.children.length > 0) {this.children = input.children} else delete input.children
        return this;
    }
}
export class TreeModel implements Deserializable<TreeModel> {
    id: string;
    itemId: string;
    name: string;
    // icon: string;
    type?: string;
    state?: string;
    health?: string;
    discoveryStatus: string;
    children: Children[];
    kids: Children[];
    properties: {};
    deserialize(input: TreeModel): TreeModel {
        Object.assign(this, input)
        this.id = input.id ? input.id : Math.random().toString(36).substr(2, 9);
        this.itemId = input.id ? input.id :'_' + Math.random().toString(36).substr(2, 9);
        this.health = input.health ? input.health.toLowerCase() : 'ok';
        this.type = input.type ? (!input.type.toLowerCase().endsWith('s') ? input.type.toLowerCase() + 's' : input.type.toLowerCase()) : input.type || '';
        this.name = input.name ? input.name.replace(/-/gi, '.') : 'Not defined';
        this.state = input.state ? input.state : '';
        this.properties = input.properties ? input.properties : {};
        this.discoveryStatus = input.discoveryStatus ? input.discoveryStatus : 'Not Discovered'
        this.children = (input.children && input.children.length) > 0 ? input.children.map((item: Children) => new Children().deserialize(item))
            : []
        // this.kids = (input.children && input.children.length) > 0 ? input.children.map((item: Children) => new Children().deserialize(item)) : input.children.map((item: TreeModel) => new TreeModel().deserialize(item))
        return this;
    }
}

