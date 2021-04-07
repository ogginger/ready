import * as asyncArrayMethods from "./lib/asyncArrayMethods"
export default class Ready {
    public _ready = false;
    public _waiting = false;
    public _todo: any[] = [];
    public isReady() {
        let self = this;
        self._ready = true;
        self._waiting = false;
        self._doWaiting();
    }
    public async _doWaiting() {
        let self = this;
        await asyncArrayMethods.foreach( self._todo, async function( operator: any ) {
            await operator();
        });
    }
    public ready( callbackObject: any ) {
        let self = this;
        self._todo.push( callbackObject );
        if ( 
            self._waiting == false &&
            self._ready == false
        ) {
            self._waiting = true;
        } else if ( self._ready ) {
            self._doWaiting();
        }
    }
}