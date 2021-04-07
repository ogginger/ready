export async function foreach( array: any[], operator: ( current?: any, index?: number, array?: any[] ) => Promise<any> ): Promise<void> {
    for ( let index = 0; index < array.length; index++ ) {
        await operator( array[index], index, array );
    }
}