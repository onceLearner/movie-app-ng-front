import { Film, User } from './../models';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})


export class HttpService {


  public result: any;



  constructor(private http: HttpClient,
    private store: AngularFirestore

  ) { }



  get_favorite_films() {

    let dataSource: any;

    this.store.collection('favoris').snapshotChanges().subscribe((response) => {
      dataSource = response.map(item =>
        Object.assign({ id_doc: item.payload.doc.id }, item.payload.doc.data())
      );

      return dataSource


    })

  }




  add_film_to_favorite(film: Film) {

    this.store.collection('favoris').add(film).then(res => {

      console.log(res)
    })
      .catch(err => {
        console.error({ err_adding: err })
      });

  }

  add_user_to_db(user: User) {

    this.store.collection('users').add(user).then(res => {

      console.log(res)
    })
      .catch(err => {
        console.error({ err_adding: err })
      });

  }


  getFilmFromServer() {
    return this.http.get<Array<Film>>(`https://api.themoviedb.org/3/trending/all/week?api_key=0697149ea65326dc3659c54195aace8a&language=en-US`).toPromise()
      .then((res: any) => res).catch(err => console.log(err))

  }


  getImage(name: String) {
    //return 'https://image.tmdb.org/t/p/w300' +name;

    return this.http.get<Array<String>>(`https://image.tmdb.org/t/p/original/` + name).toPromise()
      .then((res: any) => res).catch(err => err)

  }


  getDetailFilm(id: any) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + '0697149ea65326dc3659c54195aace8a' + '&language=fr'
    return this.http.get(url).toPromise()
      .then((res: any) => res).catch(err => err)
  }



  getFilms(text: String, page: number) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + '0697149ea65326dc3659c54195aace8a' + '&language=fr&query=' + text + "&page=" + page
    return this.http.get<Array<Film>>(url)
      .toPromise()
      .then((response: any) => response)
      .catch((err) => console.log(err));
  }

}
