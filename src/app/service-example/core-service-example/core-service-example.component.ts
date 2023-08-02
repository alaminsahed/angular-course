import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/core-service.service';

@Component({
  selector: 'app-core-service-example',
  templateUrl: './core-service-example.component.html',
  styleUrls: ['./core-service-example.component.scss'],
  //dependency injection
  //providers: [PostService],
})
export class CoreServiceExampleComponent implements OnInit {
  postList: Array<any> = [];
  // constructor() {
  //   //  when we use service in component, we need to create instance of service. it will depended on service. that why dependency injection is used.
  //   // let postService = new PostService();
  //   // this.postList = postService.postList;
  // }

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {}
}

//when we use providers in dependency injection, it will create new instance of service. if we want to use same instance of service in all component, we need to use providers in app.module.ts

// or we can use @Injectable() in service file. it will create single instance of service.
