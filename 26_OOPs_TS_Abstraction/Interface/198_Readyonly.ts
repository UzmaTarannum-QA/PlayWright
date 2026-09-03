interface Point{
    readonly x:number;
    readonly y:number;
}

const data:Point={
    x: 10,
    y:20
}

// data.x=40; Cannot assign to 'x' because it is a read-only property.