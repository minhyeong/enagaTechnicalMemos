// src/types/ros3d.d.ts
declare module 'ros3d' {
    import ROSLIB from 'roslib';

    export class Viewer {
        constructor(options: {
            divID: string;
            width?: number;
            height?: number;
            antialias?: boolean;
            background?: string;
            intensity?: number;
        });
    }

    export class TFClient {
        constructor(options: {
            ros: ROSLIB.Ros;
            fixedFrame: string;
            angularThres: number;
            transThres: number;
            rate: number;
        });
    }

    export class URDFClient {
        constructor(options: { ros: ROSLIB.Ros; tfClient: any; path: string; rootObject: any });
    }

    export class OccupancyGridClient {
        constructor(options: { ros: ROSLIB.Ros; rootObject: any });
    }

    // todo: 必要なもの追加していく
}
