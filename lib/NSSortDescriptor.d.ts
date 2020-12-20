export declare type NSSortDescriptorJson = {
    key: string;
    ascending: boolean;
};
export declare class NSSortDescriptor {
    key: string;
    ascending: boolean;
    constructor(json?: Partial<NSSortDescriptorJson>);
    toJS(): NSSortDescriptorJson;
    static build(sortKey?: string, ascending?: boolean): NSSortDescriptor;
}
