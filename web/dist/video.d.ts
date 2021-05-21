/// <reference types="node" />
import { VapConfig } from "./type";
export default class VapVideo {
    constructor(options: any);
    options: VapConfig;
    private fps;
    requestAnim: Function;
    container: HTMLElement;
    video: HTMLVideoElement;
    private events;
    private _drawFrame;
    private animId;
    private firstPlaying;
    private setBegin;
    precacheSource(source: any): Promise<string>;
    initVideo(): void;
    drawFrame(): void;
    play(): void;
    pause(): void;
    setTime(t: any): void;
    requestAnimFunc(): ((cb: any) => number) | ((cb: any) => NodeJS.Timeout);
    cancelRequestAnimation(): void;
    destroy(): void;
    clear(): void;
    on(event: any, callback: EventListenerObject): this;
    onplaying(): void;
    onpause(): void;
    onended(): void;
    oncanplay(): void;
    onerror(err: any): void;
}
