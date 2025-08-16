import { useEffect } from 'react';
import * as ROS3D from 'ros3d';
import * as ROSLIB from 'roslib';

const Presenter = () => {
    useEffect(() => {
        const ros = new ROSLIB.Ros({
            url: 'ws://localhost:9090',
        });

        const viewer = new ROS3D.Viewer({
            divID: 'mapArea',
            width: 800,
            height: 600,
            antialias: true,
        });
    }, []);

    return <div id="mapArea" />;
};

export default Presenter;
