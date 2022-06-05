import { Deserializable } from "../../models/deserialize.model";


export class Node implements Deserializable<Node>{
    id: string;
    label: string;
    name: string;
    true: boolean;
    group: string;
    type: string;
    usage: number;
    collapsing: number;
    status: string;
    collapsed: boolean;
    properties: {};
    alert?: boolean;
    deserialize(input: Node){
        Object.assign(this, input);
        this.collapsed = input.collapsed;
        this.collapsing = 0
        this.status =  input?.status ? input?.status :'ok';
        this.properties = input?.properties ? input.properties : {};
        return this;
        
    }
}


export class Link implements Deserializable<Link>{
    source: string;
    title: string;
    collapsed: boolean;
    collapsing: number;
    target: string;
    properties: {};
    deserialize(input: Link){
        Object.assign(this, input);
        this.collapsed = input.collapsed ? input.collapsed : false;
        this.properties = input?.properties ? input.properties : {};
        this.collapsing = 0;
        return this;
    }
}

export class ForceDirectedModel implements Deserializable<ForceDirectedModel>{
    nodes: Node[];
    links: Link[];
    deserialize(input: ForceDirectedModel){
        this.nodes = (input.nodes && input.nodes.length>0) ? input.nodes.map((node:Node) => new Node().deserialize(node)) : [];
        this.links = (input.links && input.links.length >0 ) ? input.links.map((link: Link) => new Link().deserialize(link)) : [];
        return this;
    }
}