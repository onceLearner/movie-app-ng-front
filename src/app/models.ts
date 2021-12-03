// we have to create and export interface film

export interface Film {
    id: string;
    background_image: string;
    title: string;
    released: string;
    vote_average: string,
    poster_path: string,
    orginal_title: string,
    overview: string,
    relase_date: string
}

export interface APIResponse<T> {
    results: Array<T>;

}


interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name: string;
    }
}

interface Publishers {
    name: string;

}


interface Rating {
    id: number;
    count: number;
    title: string;

}


export interface User {
    email: string;
    password: string

}



interface Trailer {
    data: {
        max: string;
    }



}


