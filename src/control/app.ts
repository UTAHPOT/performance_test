import {Renderer} from "../view/renderer";
import {Scene} from "../scene/scene";
import $ from "jquery";

export class App {
    canvas : HTMLCanvasElement;
    renderer : Renderer;
    scene : Scene;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.renderer = new Renderer(canvas);
        this.renderer.Initialize();
        
        this.scene = new Scene();
        // this.canvas.addEventListener(
        //     "mousemove",
        //     (event: MouseEvent) => {this.handle_mouse_move(event);}
        // );
    }

    run = () => {
        var running: boolean = true;

        this.scene.update();

        this.renderer.render(
            this.scene.get_renderables()
        );

        if (running) {
            requestAnimationFrame(this.run);
        }
    }

    handle_mouse_move(event: MouseEvent) {
        this.scene.subject.rotateY(event.movementX / 3);
    }
}