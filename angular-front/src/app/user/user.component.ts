import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './shared/user.service';
import { User } from './shared/user.model';

declare var M: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUsersList();
  }

  resetForm(userForm? :  NgForm) {
    if(userForm != null) {
      userForm.reset();
      this.userService.selectedUser = {
        _id : '',
        firstname: '',
        lastname: '',
        login: '',
        password: '',
        email: ''
      }
    }
  }

  onSubmit(userForm :  NgForm) {
    console.log(userForm.value);
    this.userService.postUser(userForm.value).subscribe((response) => {
      this.resetForm(userForm);
      M.toast({html : 'Saved successfully', classes :'rounded'});
      this.refreshUsersList();
    });
  }

  refreshUsersList(){
    this.userService.getAllUsers().subscribe((response) =>  {
      this.userService.users = response as User[] ;
      console.log(this.userService.users);
    });
  }
}
