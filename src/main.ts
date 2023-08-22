import {App} from "./control/app";

// const canvas1 : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("gfx-main1");

// const canvas2 : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("gfx-main2");


// new App(canvas1).run();

// new App(canvas2).run();

for (let id = 1; id <= 20; id++) {
    const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById(id.toString());

    new App(canvas).run();
}