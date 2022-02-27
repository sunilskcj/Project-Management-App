// export class Products{
//     id : number
//     name : string
//     price : number
//     description : string
//     imagePath : string

// constructor(id : number,name : string, price : number, description : string, img : string){
//     this.id = id
//     this.name = name
//     this.price = price
//     this.description = description
//     this.imagePath = img
// }
// }


export class Products{
    constructor(public productId:number, public productName: string,public productCode :string,public releaseDate: string,public starRating:number , public price: number , public description: string, public imageUrl: string){}
}