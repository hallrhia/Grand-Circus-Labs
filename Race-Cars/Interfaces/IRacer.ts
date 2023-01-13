//interfaces are abstract
interface IRacer {
    team:string;
    speed:number;
    accelerate(): void;
    isFuelEmpty(): boolean;
}

//interface does not know the implementation

export { IRacer }