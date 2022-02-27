import { Pipe } from "@angular/core";
import { Products } from "src/models/products";

@Pipe({ name: "searchFilter" })

export class SearchFilter {
    transform(productlist: Products[], varsearch: string,choice : number ): Products[] {
        if (varsearch === 'full' || varsearch === "") return productlist
        let filteredCategories : Products[] = []

        switch (choice) {
            case 1:
                productlist.filter((e) => {//if (e.productName === varsearch) filteredCategories.push
                    if (e.productName.toLowerCase().indexOf(varsearch.toLowerCase()) != -1) {
                        filteredCategories.push(e)
                    }
                });
                break;
            case 2:
                productlist.filter((e) => {
                    //if (e.productName === varsearch) filteredCategories.push
                    if (e.productId.toString().indexOf(varsearch) != -1) {
                        filteredCategories.push(e)
                    }
                });
                break;
            case 3:
                productlist.filter((e) => {
                    //if (e.productName === varsearch) filteredCategories.push
                    if (e.productCode.toString().indexOf(varsearch) != -1) {
                        filteredCategories.push(e)
                    }
                });
                break;
        
            default:
                break;
        }

        
        return filteredCategories

    }

}


// productlist.filter((e: any) => { , searchtype : string
//     e.filter((cat : any , i : any) => {
//         if(i == 1) {
//             if(cat.toString().toLowerCase().indexOf(varsearch.toLowerCase()) != -1) {
//               if(filteredCategories.indexOf(cat) == -1) {
//                 filteredCategories.push(e);
//               }
//             }
//           }
//     })
// })