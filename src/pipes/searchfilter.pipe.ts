import { Pipe } from "@angular/core";
import { Products } from "src/models/products";

@Pipe({ name: "searchFilter" })

export class SearchFilter {
    transform(productlist: Products[], varsearch: string): Products[] {
        if (varsearch === 'full' || varsearch === "") return productlist
        let filteredCategories : Products[] = []
        productlist.filter((e) => {
            if (varsearch === e.productName) {
                filteredCategories.push(e)
            }
        });
        return filteredCategories

    }

}


// productlist.filter((e: any) => {
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