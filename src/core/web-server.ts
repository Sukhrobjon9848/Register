export default abstract class webServer{
    constructor(protected port:number,protected hostname:string) {
       this.port=port
       this.hostname=hostname 
    }
    abstract runServer():void
    abstract router():void
}