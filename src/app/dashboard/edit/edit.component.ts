import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { ClientService } from '../../core/client.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private authenticationService :AuthenticationService,private clientServies :ClientService) { }

  ngOnInit() 
    {
      /* this.router.params.subscribe(params => {
          this.authenticationService.editGame(params['id']).subscribe(res => {
              this.game = res;
          });
      });
    }
  }*/
    }
}
