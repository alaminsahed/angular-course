// export class PostService {
//   postList: Array<any> = [
//     { id: 1, title: 'Post 1', content: 'Content 1' },
//     { id: 2, title: 'Post 2', content: 'Content 2' },
//     { id: 3, title: 'Post 3', content: 'Content 3' },
//     { id: 4, title: 'Post 4', content: 'Content 4' },
//     { id: 5, title: 'Post 5', content: 'Content 5' },
//   ];
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postList: Array<any> = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' },
    { id: 3, title: 'Post 3', content: 'Content 3' },
    { id: 4, title: 'Post 4', content: 'Content 4' },
    { id: 5, title: 'Post 5', content: 'Content 5' },
  ];

  addPost(post: any) {
    this.postList.push(post);
  }
}
