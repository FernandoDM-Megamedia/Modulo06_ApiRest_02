export interface CharacterEntityApiRM {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;        
    }
    image: string;
    episode: any; // <---- ¿?¿? duda array
    url: string;
    created: string;
    comment: string;
  }
  
  export interface InfoEntityApiRM {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }