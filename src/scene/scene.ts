import { Camera } from "utahpot";
import { Subject } from "utahpot";
import { RenderData } from "utahpot";
import {vec3, mat4} from "gl-matrix"


export class Scene {
    subject: Subject;
    player: Camera;
    object_data: Float32Array;

    constructor() {
        this.object_data = new Float32Array(16*1024);

        this.subject = new Subject(
            [0, 0, -2.0]
        );
        this.subject.set_eulers(
            [90, 60, 0]
        );

        this.player = new Camera(
            [-8.0, 0, 3.7], 0, 0
        );
    }

    update() {
        var i: number = 0;
        this.subject.rotateY(-0.75);
        this.subject.update();
        var model = this.subject.get_model();
        for (var j: number = 0; j < 16; j++) {
            this.object_data[16 * i + j] = <number>model.at(j);
        }
        i++;

        this.player.update();
    }

    get_player(): Camera {
        return this.player;
    }

    get_renderables(): RenderData {
        return {
            view_transform: this.player.get_view(),
            model_transforms: this.object_data,
            light_position: vec3.create(),
            object_counts: {0: 0, 1: 0}
        }
    }
}