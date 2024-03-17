export interface Product {
    id: number;
    admin_comment: string;
    name_en: string;
    price: number;
    short_description_en:string
    attributes?: any;
    max_order?:number;
    rateCount:number;
    category: Category;
    photo?:any;
}

interface Category {
    name_en: string;
    id: number;
  }
