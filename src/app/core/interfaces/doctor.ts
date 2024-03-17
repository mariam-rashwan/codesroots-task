export interface Doctor {
    _id:string;
    email:string;
    password:string
    first_name: string;
    last_name: string;
    mobile: string;
    nationalId: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    price: number;
    biography: string;
    category:Category[];
    createdAt:string;
    updatedAt:string;
    __v:number;
    schedules:Schedules[]
    

}



interface Category {
    _id: string;
    name_ar: string;
    name_en: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  interface Schedules {
    _id: string;
    doctors: string;
    start_time: string;
    end_time: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

 