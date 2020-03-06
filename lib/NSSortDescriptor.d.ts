export declare class NSSortDescriptor {
    key: string;
    ascending: boolean;
    constructor(json?: any);
    toJS(): any;
    static build(sortKey?: string, ascending?: boolean): NSSortDescriptor;
}
